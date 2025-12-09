# 🎉 Website Go Live - Step-by-Step Instructions

## Current Status ✅

- [x] MongoDB installed
- [x] Backend dependencies installed
- [x] Backend server starting on port 5000
- [ ] Frontend dependencies installing...
- [ ] Frontend starting on port 3000

---

## 📋 Next Steps

### Step 1: Wait for Frontend Installation
The frontend dependencies are being installed. This may take 2-5 minutes.

Look for this output:
```
added XXX packages
```

### Step 2: Start Frontend (New Terminal Window)

Once frontend dependencies are done, open a **new terminal** and run:

```powershell
cd c:\Users\H.C\Desktop\japanese\client
npm start
```

You should see:
```
Compiled successfully!
You can now view japanese-course-client in the browser.

On Your Network: http://192.168.x.x:3000
Local:           http://localhost:3000
```

---

## 🌐 Access Your Website

Once both backend and frontend are running:

**Main Website:** http://localhost:3000

### Quick Actions:

1. **Register** - Create your account
   - Go to: http://localhost:3000/register
   - Email: your@email.com
   - Password: any password

2. **Login** - Sign in
   - Go to: http://localhost:3000/login
   - Use your credentials

3. **View Courses** - See all courses
   - Go to: http://localhost:3000/courses
   - Or click "Courses" in navbar

4. **Admin Panel** - Create courses
   - After login, click "Admin"
   - Create a new course
   - Upload videos and PDFs

5. **About Us** - View your profile
   - Go to: http://localhost:3000/about
   - See your instructor profile

6. **Instagram** - Find in footer or About page
   - https://instagram.com/chanddramohansinghsisodiya

---

## 🖥️ Terminal Windows Status

### Window 1: Backend Server
```
Status: RUNNING ✅
Port: 5000
Command: npm start (in server folder)
```

### Window 2: Frontend App
```
Status: INSTALLING... ⏳ (Wait for completion)
Port: 3000
Command: npm start (in client folder)
```

---

## 📊 Architecture

```
Frontend (Port 3000)
    ↓
    ↓ API Calls
    ↓
Backend (Port 5000)
    ↓
MongoDB (Local or Atlas)
```

---

## ✨ Features Available

### 🎓 For Students:
- Register & Login
- Browse Japanese N5 Course
- View course details
- Purchase course (Paytm payment)
- Access videos and PDFs after purchase
- View dashboard with purchased courses

### 👨‍🏫 For Instructors (Admin):
- Create courses
- Upload videos
- Upload study materials (PDFs)
- Manage course content
- View student payments

### 💰 Payment:
- Paytm Integration
- Course Price: ₹1300
- UPI: 7007337763@paytm

---

## 🐛 Troubleshooting

### Issue: Frontend npm install hangs
**Solution:**
```powershell
# Press Ctrl+C to stop
# Then run:
npm install --legacy-peer-deps --no-optional
```

### Issue: "Port 3000 already in use"
**Solution:**
```powershell
# Find process on port 3000
netstat -ano | findstr :3000

# Kill it
taskkill /PID <PID_NUMBER> /F

# Or change port in package.json
```

### Issue: Backend not responding
**Solution:**
- Check MongoDB is running: `mongod` in another terminal
- Check .env file has correct MONGODB_URI
- Check port 5000 is not in use

### Issue: "Cannot GET /api/..."
**Solution:**
- Make sure backend is running
- Check REACT_APP_API_BASE_URL in client/.env.local
- Verify it points to http://localhost:5000/api

---

## 📱 Mobile Testing

To test on mobile/other devices:

1. Find your computer's IP:
   ```powershell
   ipconfig
   ```
   Look for "IPv4 Address: 192.168.x.x"

2. From mobile, visit:
   ```
   http://192.168.x.x:3000
   ```

---

## 🔐 Important Security Notes

⚠️ **Development Mode**
- Not secure for production
- All data is in development database
- JWT_SECRET is not secure

🔒 **For Production:**
- Change JWT_SECRET in .env
- Use MongoDB Atlas for database
- Add HTTPS
- Setup environment properly

---

## 📚 File Structure Reminder

```
japanese/
├── server/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── uploads/
│   ├── server.js
│   ├── .env
│   └── node_modules/ ✅ (installed)
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── App.css
│   ├── public/
│   ├── .env.local
│   └── node_modules/ ⏳ (installing)
│
└── README.md
```

---

## 🎯 Complete Checklist

- [x] Node.js installed
- [x] MongoDB installed
- [x] Backend dependencies installed
- [x] Backend running on port 5000
- [ ] Frontend dependencies installed (in progress)
- [ ] Frontend running on port 3000
- [ ] Website accessible at http://localhost:3000
- [ ] Can register user
- [ ] Can create course (admin)
- [ ] Can upload video
- [ ] Can upload PDF

---

## 💡 Tips

1. **Keep terminals open** - Both backend and frontend must stay running
2. **No file recompilation needed** - Changes automatically reload
3. **Check console** - Browser console shows API errors
4. **Network tab** - Check API calls in browser DevTools

---

## 🚀 Next Steps After Website is Live

1. Test all features
2. Create sample course with video/PDF
3. Test user registration and login
4. Test payment flow (Paytm integration)
5. Customize with your photo in About page
6. Deploy to production (see DEPLOYMENT.md)

---

## 📞 Quick Reference

| Component | Status | Port | Start Command |
|-----------|--------|------|----------------|
| MongoDB | ✅ Installed | 27017 | mongod |
| Backend | ✅ Running | 5000 | npm start (server) |
| Frontend | ⏳ Installing | 3000 | npm start (client) |
| Website | Soon | 3000 | http://localhost:3000 |

---

## 🎓 Great! You're almost there!

Just wait for frontend installation to complete, then start it in a new terminal.

Your Japanese N5 Course Website will be LIVE! 🎉

---

**Questions?** Check QUICKSTART.md, SETUP_GUIDE.md, or LIVE_GUIDE.md
