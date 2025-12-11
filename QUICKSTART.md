# 🎓 Japanese N5 Course Website - Ready to Use!

## ✅ What's Included

Your complete premium Japanese course platform is ready with:

### Backend (Node.js + Express + MongoDB)
- ✅ User authentication system (JWT)
- ✅ Secure password hashing (bcryptjs)
- ✅ Course management
- ✅ Video upload system
- ✅ PDF materials upload
- ✅ Paytm payment integration
- ✅ Payment verification

### Frontend (React)
- ✅ User registration & login
- ✅ Courses listing page
- ✅ Course detail page
- ✅ User dashboard (my courses)
- ✅ Admin panel (create courses, upload videos/PDFs)
- ✅ Payment integration UI
- ✅ Responsive design

### Payment System
- ✅ Paytm UPI Integration
- ✅ Course Price: ₹1300
- ✅ Your UPI: 7007337763@paytm
- ✅ Automatic course access after payment

---

## 🚀 Quick Start (Copy-Paste)

### Terminal 1 - Backend
```bash
cd server
npm install
npm start
```

### Terminal 2 - Frontend
```bash
cd client
npm install
npm start
```

**Done!** Website opens at `http://localhost:3000`

---

## 📋 Setup Checklist

- [ ] Install Node.js from nodejs.org
- [ ] Install MongoDB (or use MongoDB Atlas)
- [ ] Run `npm install` in both server & client folders
- [ ] Create `.env` file in server folder with credentials
- [ ] Start MongoDB service
- [ ] Run `npm start` in server folder
- [ ] Run `npm start` in client folder
- [ ] Visit http://localhost:3000
- [ ] Register an account
- [ ] Create first course in Admin Panel
- [ ] Upload videos and PDFs
- [ ] Test payment system

---

## 📝 Key Files

### Backend
- `server/server.js` - Main server file
- `server/.env` - Configuration (IMPORTANT!)
- `server/models/` - Database models
- `server/routes/` - API endpoints
- `server/controllers/` - Business logic

### Frontend  
- `client/src/App.js` - Main app
- `client/src/pages/` - All pages
- `client/.env.local` - Frontend config

---

## 🎯 How to Use

### For Users
1. Register/Login
2. Browse courses
3. Click "Buy Now"
4. Pay ₹1300 via Paytm
5. Access videos & PDFs

### For Admin (You)
1. Login
2. Go to Admin Panel
3. Create new course
4. Upload videos
5. Upload PDFs
6. Course appears to users

---

## 💰 Payment Details

**Paytm UPI:** 7007337763@paytm
**Course Price:** ₹1300
**Payment Status:** Ready for testing/production

---

## 🔧 .env Configuration

Copy this to `server/.env`:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/japanese-course
JWT_SECRET=change_this_to_random_string_12345
PAYTM_MERCHANT_ID=your_merchant_id
PAYTM_MERCHANT_KEY=your_merchant_key
PAYTM_WEBSITE=WEBSTAGING
PAYTM_CHANNEL_ID=WEB
PAYTM_INDUSTRY_TYPE_ID=Retail
PAYTM_UPI_NUMBER=7007337763@paytm
BACKEND_URL=http://localhost:5000
NODE_ENV=development
```

---

## 📂 Folder Structure

```
japanese/
├── server/              # Backend (Node.js)
│   ├── models/         
│   ├── controllers/    
│   ├── routes/        
│   ├── uploads/        # Videos & PDFs stored here
│   └── server.js       
│
├── client/              # Frontend (React)
│   ├── src/pages/      
│   ├── src/components/ 
│   └── public/         
│
├── README.md           # Full documentation
├── SETUP_GUIDE.md      # Detailed setup instructions
└── DEPLOYMENT.md       # Deployment guide
```

---

## 🌟 Features Breakdown

### Authentication
- JWT token-based
- Secure password hashing
- Session management
- Profile viewing

### Courses
- Create unlimited courses
- Add course description
- Track instructor info
- View course stats

### Content Management
- Upload multiple videos per course
- Upload multiple PDFs per course
- Video storage system
- PDF storage system

### Payments
- Paytm integration
- Payment verification
- Automatic access unlock
- Transaction history (can be added)

### Admin Panel
- Course creation
- Video upload interface
- PDF upload interface
- Content management dashboard

---

## 🔐 Security Features

✅ Password hashing (bcryptjs)
✅ JWT authentication
✅ Protected API routes
✅ Environment variables
✅ Secure payment verification
✅ CORS enabled

---

## 📞 Common Issues & Solutions

**MongoDB won't connect?**
- Start MongoDB: `mongod`
- Or use MongoDB Atlas cloud

**Port already in use?**
- Change PORT in `.env`
- Or kill process: `lsof -ti:5000 | xargs kill -9`

**File uploads not working?**
- Check `uploads/` folder exists
- Check folder permissions

**Payment not working?**
- Update Paytm credentials
- Check .env values
- Review Paytm API docs

---

## 🚢 Production Deployment

### Backend (Render/Heroku)
1. Push code to GitHub
2. Connect to Render
3. Set environment variables
4. Deploy

### Frontend (Vercel/Netlify)
1. Run `npm run build`
2. Deploy `build` folder
3. Update API URL in .env

### Database (MongoDB Atlas)
1. Create cluster
2. Get connection string
3. Update MONGODB_URI

---

## 📚 Additional Customization

You can easily customize:
- Course price (change from ₹1300)
- Website colors & fonts
- Course categories
- Video quality/format
- Payment methods
- UI/UX design

---

## ✨ You're All Set!

Your Japanese N5 course website is ready to go. 

**Start by:**
1. Installing dependencies
2. Configuring `.env`
3. Running backend & frontend
4. Creating your first course
5. Uploading content
6. Testing payments

**Questions?** Check SETUP_GUIDE.md for detailed instructions.

---

**Happy Teaching! 🎓📚**
