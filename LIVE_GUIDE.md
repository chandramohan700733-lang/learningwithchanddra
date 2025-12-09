# 🚀 Website Live Karne Ka Complete Guide

## Step-by-Step Process

### Step 1️⃣: MongoDB Install Karo

**Option A: MongoDB Locally Install (Recommended)**
1. Download: https://www.mongodb.com/try/download/community
2. Windows MSI Installer select karo
3. Download करके installer चलाओ
4. "Install MongoDB as a Service" check करो
5. Finish करो

**Option B: MongoDB Atlas Use Karo (Cloud)**
1. https://www.mongodb.com/cloud/atlas पर जाओ
2. Account बनाओ
3. Free cluster create करो
4. Connection string copy करो
5. `.env` में paste करो

---

### Step 2️⃣: PowerShell میں Setup Script Run करो

```powershell
cd c:\Users\H.C\Desktop\japanese
powershell -ExecutionPolicy Bypass -File "START_WEBSITE.ps1"
```

यह script:
- Node.js check करेगा
- Backend dependencies install करेगा
- Frontend dependencies install करेगा

---

### Step 3️⃣: Backend Start करो (नई PowerShell Window)

```powershell
cd c:\Users\H.C\Desktop\japanese\server
npm start
```

**Expected Output:**
```
Server running on http://localhost:5000
MongoDB connected
```

---

### Step 4️⃣: Frontend Start करो (नई PowerShell Window)

```powershell
cd c:\Users\H.C\Desktop\japanese\client
npm start
```

**Expected Output:**
```
On Your Network: http://localhost:3000
Compiled successfully!
```

Website automatically खुल जाएगी! 🎉

---

## ✅ Complete Startup Checklist

- [ ] Node.js installed (v14+)
- [ ] MongoDB installed या Atlas setup
- [ ] `.env` file configured
- [ ] `npm install` दोनों folders में
- [ ] Backend running on port 5000
- [ ] Frontend running on port 3000
- [ ] Browser में http://localhost:3000 खुल गया

---

## 🔧 Configuration

### Backend `.env` File
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/japanese-course
JWT_SECRET=japanese_course_secret_key_2024_very_secure_key
PAYTM_MERCHANT_ID=your_paytm_merchant_id
PAYTM_MERCHANT_KEY=your_paytm_merchant_key
```

### Frontend `.env.local` File
```
REACT_APP_API_BASE_URL=http://localhost:5000/api
```

---

## 🐛 Common Issues & Solutions

### ❌ "MongoDB connection failed"
**Solution:**
- Start MongoDB: `mongod` command
- या MongoDB Atlas use करो

### ❌ "Port 5000 already in use"
**Solution:**
```powershell
# Check who's using port 5000
netstat -ano | findstr :5000

# Kill the process
taskkill /PID <PID_NUMBER> /F

# Change PORT in .env to 5001
```

### ❌ "npm command not found"
**Solution:**
- Node.js reinstall करो
- https://nodejs.org/ से download करो

### ❌ "Module not found errors"
**Solution:**
```powershell
rm -r node_modules
npm install --legacy-peer-deps
```

---

## 🎯 Website Features Test करो

1. **Register करो:**
   - Go to: http://localhost:3000/register
   - Email और password enter करो
   - Submit करो

2. **Courses देखो:**
   - Home page या Courses section check करो

3. **Admin Panel:**
   - Login करो
   - Admin panel जाओ
   - Course create करो

4. **Upload Content:**
   - Video और PDF upload करो

---

## 📱 Mobile Testing

Frontend को mobile पर test करने के लिए:

```powershell
# Frontend start करते समय, network IP check करो
# Output में "On Your Network: http://192.168.x.x:3000" दिखेगा
```

Phir mobile से उस URL पर जाओ।

---

## 🌐 Production Deploy करने के लिए

**DEPLOYMENT.md file पढ़ो:**
- Backend को Render पर deploy करो
- Frontend को Vercel पर deploy करो
- Database को MongoDB Atlas पर setup करो

---

## 💡 Important Notes

⚠️ **MongoDB जरूरी है!**
- बिना MongoDB के website काम नहीं करेगी
- Local install करो या Atlas use करो

⚠️ **Port 3000 और 5000 खाली होने चाहिए**
- कोई दूसरा app इन ports को use नहीं करना चाहिए

⚠️ **Security**
- Production में JWT_SECRET change करो
- Environment variables safely store करो

---

## 📞 Help

अगर कोई issue आए:
1. Error message को carefully पढ़ो
2. "Common Issues" section check करो
3. SETUP_GUIDE.md पढ़ो
4. MONGODB_SETUP.md पढ़ो

---

## 🎓 Ready! Your Website is Live!

Happy Teaching! 📚✨

Website: http://localhost:3000
Admin Panel: http://localhost:3000/admin (after login)
About Us: http://localhost:3000/about
Instagram: https://instagram.com/chanddramohansinghsisodiya
