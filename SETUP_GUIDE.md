# Japanese N5 Course Website - Setup Guide

## 🎓 Complete Premium Japanese Course Platform

### What You Get:
- ✅ Full-stack MERN application
- ✅ User authentication system
- ✅ Premium course management
- ✅ Video & PDF upload system
- ✅ Paytm payment integration
- ✅ Admin panel for content management
- ✅ Modern responsive UI

---

## 📋 Prerequisites

1. **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
2. **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
3. **Git** (optional)

---

## 🚀 Installation Steps

### Step 1: Backend Setup

```bash
cd server
npm install
```

### Step 2: Configure Backend

Create/Update `.env` file in `server` folder:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/japanese-course
JWT_SECRET=your_very_secret_key_change_this_to_random_string
PAYTM_MERCHANT_ID=your_paytm_merchant_id
PAYTM_MERCHANT_KEY=your_paytm_merchant_key
PAYTM_WEBSITE=WEBSTAGING
PAYTM_CHANNEL_ID=WEB
PAYTM_INDUSTRY_TYPE_ID=Retail
PAYTM_UPI_NUMBER=7007337763@paytm
BACKEND_URL=http://localhost:5000
NODE_ENV=development
```

### Step 3: Start MongoDB

**Windows:**
```bash
# If installed locally
mongod
```

**Or use MongoDB Atlas:**
- Create account at mongodb.com/cloud/atlas
- Get connection string and update MONGODB_URI in .env

### Step 4: Start Backend Server

```bash
npm start
```

You should see: `Server running on http://localhost:5000`

### Step 5: Frontend Setup (New Terminal)

```bash
cd client
npm install
```

### Step 6: Start Frontend

```bash
npm start
```

App will open at `http://localhost:3000`

---

## 📝 First Time Usage

### 1. Register User
- Go to Register page
- Create account with email and password

### 2. Create Course (Admin)
- Login with your account
- Go to Admin Panel
- Click "Create New Course"
- Fill details and submit

### 3. Upload Course Content
- Select course
- Upload videos (MP4, AVI, etc.)
- Upload PDF materials
- See content appear in course

### 4. Purchase Course
- Logout and view courses
- Click "Buy Now - ₹1300"
- Complete Paytm payment
- Access course content

---

## 🎯 Key Features Explained

### User System
- **Register:** Create new account
- **Login:** Secure authentication with JWT
- **Profile:** View purchased courses
- **Dashboard:** Track learning progress

### Course Management (Admin)
- **Create Courses:** Set title, description, instructor
- **Upload Videos:** Add video lectures
- **Upload PDFs:** Add study materials
- **Course Stats:** Track videos and PDFs count

### Payment System
- **Paytm Integration:** ₹1300 per course
- **Payment Verification:** Automatic access after payment
- **UPI Number:** 7007337763@paytm

---

## 📂 File Uploads Location

- Videos: `server/uploads/videos/`
- PDFs: `server/uploads/pdfs/`

Files are stored locally. For production, consider AWS S3 or similar.

---

## 🔐 Paytm Payment Setup

### For Testing (Staging):
- Already configured in .env (WEBSTAGING)
- Test with Paytm test credentials

### For Live Payments:
1. Get merchant account from Paytm Business
2. Update `PAYTM_MERCHANT_ID` and `PAYTM_MERCHANT_KEY`
3. Change `PAYTM_WEBSITE` to `WEBPROD`
4. Update UPI number if different

---

## 🌐 API Endpoints

### Authentication
```
POST   /api/users/register       - Register user
POST   /api/users/login          - Login user
GET    /api/users/profile        - Get user info (Auth required)
```

### Courses
```
GET    /api/courses/all          - Get all courses
GET    /api/courses/:id          - Get course details
POST   /api/courses/create       - Create course (Auth required)
POST   /api/courses/upload-video - Upload video (Auth required)
POST   /api/courses/upload-pdf   - Upload PDF (Auth required)
```

### Payments
```
POST   /api/payments/initiate       - Start payment (Auth required)
POST   /api/payments/verify         - Verify payment
GET    /api/payments/check-access   - Check course access (Auth required)
```

---

## 🐛 Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution:** Start MongoDB or update MONGODB_URI to MongoDB Atlas connection string

### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::5000
```
**Solution:** 
```bash
# Kill process on port 5000
# Windows: taskkill /PID <PID> /F
# Mac/Linux: lsof -ti:5000 | xargs kill -9
```

### CORS Error
**Solution:** Already configured in server. Check `http://localhost:3000` is correct in requests

### File Upload Not Working
**Solution:** Check `server/uploads/` folder exists and has write permissions

---

## 📦 Project Structure

```
japanese/
├── server/
│   ├── models/               # Database schemas
│   │   ├── User.js
│   │   ├── Course.js
│   │   └── Payment.js
│   ├── controllers/          # API logic
│   │   ├── userController.js
│   │   ├── courseController.js
│   │   └── paymentController.js
│   ├── routes/               # API routes
│   │   ├── userRoutes.js
│   │   ├── courseRoutes.js
│   │   └── paymentRoutes.js
│   ├── middleware/           # Authentication
│   │   └── auth.js
│   ├── uploads/              # File storage
│   │   ├── videos/
│   │   └── pdfs/
│   ├── server.js             # Main server
│   ├── package.json
│   ├── .env
│   └── .gitignore
│
└── client/
    ├── src/
    │   ├── pages/            # Page components
    │   │   ├── Register.js
    │   │   ├── Login.js
    │   │   ├── CoursesList.js
    │   │   ├── CourseDetail.js
    │   │   ├── Dashboard.js
    │   │   └── AdminPanel.js
    │   ├── App.js            # Main app
    │   ├── App.css           # Styles
    │   └── index.js          # Entry point
    ├── public/
    │   └── index.html
    ├── package.json
    ├── .env.local
    └── .gitignore
```

---

## 🚢 Deployment

### Backend Deployment (Heroku/Render)
1. Create account on Render.com
2. Connect GitHub repo
3. Set environment variables
4. Deploy

### Frontend Deployment (Vercel/Netlify)
1. Build: `npm run build`
2. Deploy `build/` folder to Vercel/Netlify
3. Update API URL in .env

---

## 💡 Next Steps

1. ✅ Setup complete - you're ready to go!
2. Create your first course
3. Upload videos and PDFs
4. Test payment flow
5. Customize branding
6. Deploy to production

---

## 📞 Support

For Paytm payment issues:
- Email: support@paytm.com
- UPI: 7007337763@paytm

---

**Happy Teaching! 🎉**
