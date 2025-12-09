import Payment from '../models/Payment.js';
import User from '../models/User.js';
import Course from '../models/Course.js';
import crypto from 'crypto';

const PAYTM_MERCHANT_ID = process.env.PAYTM_MERCHANT_ID;
const PAYTM_MERCHANT_KEY = process.env.PAYTM_MERCHANT_KEY;
const PAYTM_WEBSITE = process.env.PAYTM_WEBSITE;
const PAYTM_CHANNEL_ID = process.env.PAYTM_CHANNEL_ID;
const PAYTM_INDUSTRY_TYPE_ID = process.env.PAYTM_INDUSTRY_TYPE_ID;

export const initiatePayment = async (req, res) => {
  try {
    const { courseId } = req.body;
    const userId = req.userId;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Check if user already purchased
    if (user.purchasedCourses.includes(courseId)) {
      return res.status(400).json({ success: false, message: 'You already have access to this course' });
    }

    const payment = await Payment.create({
      userId,
      courseId,
      amount: course.price,
      status: 'PENDING'
    });

    const orderId = 'ORDER_' + payment._id;
    const amount = course.price;
    const phoneNumber = '7007337763';
    const email = user.email;

    // Paytm Parameters
    const paytmParams = {
      MID: PAYTM_MERCHANT_ID,
      WEBSITE: PAYTM_WEBSITE,
      CHANNEL_ID: PAYTM_CHANNEL_ID,
      INDUSTRY_TYPE_ID: PAYTM_INDUSTRY_TYPE_ID,
      ORDER_ID: orderId,
      CUST_ID: user._id.toString(),
      TXN_AMOUNT: amount.toString(),
      EMAIL: email,
      MOBILE_NO: phoneNumber,
      CALLBACK_URL: `${process.env.BACKEND_URL}/api/payments/verify`,
      CHECKSUMHASH: ''
    };

    const checksum = generateChecksum(paytmParams);
    paytmParams.CHECKSUMHASH = checksum;

    res.status(200).json({
      success: true,
      message: 'Payment initiated',
      paytmParams,
      orderId
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const paytmParams = req.body;
    const checksumHash = paytmParams.CHECKSUMHASH;
    delete paytmParams.CHECKSUMHASH;

    const isValidChecksum = verifyChecksum(paytmParams, checksumHash);

    if (!isValidChecksum) {
      return res.status(400).json({ success: false, message: 'Invalid checksum' });
    }

    const orderId = paytmParams.ORDERID;
    const paymentId = orderId.replace('ORDER_', '');

    const payment = await Payment.findById(paymentId);
    if (!payment) {
      return res.status(404).json({ success: false, message: 'Payment not found' });
    }

    if (paytmParams.STATUS === 'TXN_SUCCESS') {
      payment.status = 'SUCCESS';
      payment.paytmTransactionId = paytmParams.TXNID;
      payment.paytmData = paytmParams;
      await payment.save();

      const user = await User.findById(payment.userId);
      if (!user.purchasedCourses.includes(payment.courseId)) {
        user.purchasedCourses.push(payment.courseId);
        await user.save();
      }

      return res.status(200).json({
        success: true,
        message: 'Payment verified successfully',
        payment
      });
    } else {
      payment.status = 'FAILED';
      payment.paytmData = paytmParams;
      await payment.save();

      return res.status(400).json({ success: false, message: 'Payment failed' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const checkCourseAccess = async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.userId;

    const user = await User.findById(userId);
    const hasAccess = user.purchasedCourses.includes(courseId);

    res.status(200).json({
      success: true,
      hasAccess,
      message: hasAccess ? 'You have access to this course' : 'You need to purchase this course'
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Checksum Generation
function generateChecksum(params) {
  const keys = Object.keys(params).sort();
  let string = '';
  
  for (let i = 0; i < keys.length; i++) {
    string += params[keys[i]] + '|';
  }
  
  string += PAYTM_MERCHANT_KEY;
  return crypto.createHash('sha256').update(string).digest('hex');
}

function verifyChecksum(params, checksum) {
  const keys = Object.keys(params).sort();
  let string = '';
  
  for (let i = 0; i < keys.length; i++) {
    string += params[keys[i]] + '|';
  }
  
  string += PAYTM_MERCHANT_KEY;
  const hash = crypto.createHash('sha256').update(string).digest('hex');
  
  return hash === checksum;
}
