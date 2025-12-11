# MongoDB Installation Guide for Windows

## Quick Setup

### Option 1: MongoDB Atlas (Cloud - Easiest)
1. Go to: https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create new project & cluster (M0 free tier)
4. Get connection string
5. Update MONGODB_URI in `.env` file

### Option 2: Local MongoDB Installation (Recommended)

#### Step 1: Download MongoDB
1. Visit: https://www.mongodb.com/try/download/community
2. Select Windows as OS
3. Download the MSI Installer
4. Run installer (.msi file)

#### Step 2: Install MongoDB
1. Click "Next" through setup wizard
2. Accept license agreement
3. Choose "Complete" installation
4. Check "Install MongoDB as a Service"
5. Finish installation

#### Step 3: Start MongoDB Service
```powershell
# Check if MongoDB service is running
Get-Service MongoDB

# If not running, start it:
Start-Service MongoDB

# To start automatically on boot:
Set-Service -Name MongoDB -StartupType Automatic
```

#### Step 4: Verify Installation
```powershell
mongosh --version
```

#### Step 5: Start MongoDB Daemon
```powershell
# Open new PowerShell window and run:
mongod

# You should see: "Waiting for connections on port 27017"
```

---

## Using Local MongoDB

Update `.env` file:
```
MONGODB_URI=mongodb://localhost:27017/japanese-course
```

Then start your server normally.

---

## Quick Start Commands

### Terminal 1 - Start MongoDB
```powershell
mongod
```

### Terminal 2 - Start Backend
```bash
cd c:\Users\H.C\Desktop\japanese\server
npm install
npm start
```

### Terminal 3 - Start Frontend
```bash
cd c:\Users\H.C\Desktop\japanese\client
npm install
npm start
```

Website will open at: http://localhost:3000
