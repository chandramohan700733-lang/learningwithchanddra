# Japanese N5 Course Website

Premium Japanese N5 course platform with video lessons, PDF materials, and Paytm payment integration.

## Features

✅ User Authentication (Register/Login)
✅ Premium Course Access (₹1300 per course)
✅ Video Upload & Streaming
✅ PDF Materials Upload
✅ Paytm Payment Integration
✅ User Dashboard
✅ Admin Panel for Content Management

## Project Structure

```
japanese/
├── server/                 # Node.js/Express Backend
│   ├── models/            # MongoDB Models
│   ├── controllers/       # API Controllers
│   ├── routes/            # API Routes
│   ├── middleware/        # Authentication, File Upload
│   ├── uploads/           # Video & PDF Storage
│   └── server.js          # Main Server File
│
└── client/                # React Frontend
    ├── src/
    │   ├── pages/         # Page Components
    │   ├── components/    # Reusable Components
    │   ├── App.js         # Main App
    │   └── App.css        # Styling
    └── public/            # Static Files
```

## Setup Instructions

### Backend Setup

1. Navigate to server folder:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create MongoDB database:
   - Install MongoDB locally or use MongoDB Atlas
   - Update `MONGODB_URI` in `.env` file

4. Configure Paytm (Optional):
   - Get credentials from Paytm Business
   - Update `PAYTM_MERCHANT_ID` and `PAYTM_MERCHANT_KEY` in `.env`

5. Start server:
```bash
npm start
```

Server runs on `http://localhost:5000`

### Frontend Setup

1. Navigate to client folder:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start React app:
```bash
npm start
```

App runs on `http://localhost:3000`

## API Endpoints

### User Routes
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Get user profile (Protected)

### Course Routes
- `GET /api/courses/all` - Get all courses
- `GET /api/courses/:id` - Get course by ID
- `POST /api/courses/create` - Create course (Protected)
- `POST /api/courses/upload-video` - Upload video (Protected)
- `POST /api/courses/upload-pdf` - Upload PDF (Protected)

### Payment Routes
- `POST /api/payments/initiate` - Initiate payment (Protected)
- `POST /api/payments/verify` - Verify payment
- `GET /api/payments/check-access/:courseId` - Check course access (Protected)

## Features Explained

### 1. User Authentication
- Secure password hashing with bcryptjs
- JWT-based authentication
- Login/Register functionality

### 2. Course Management
- Create multiple courses
- Upload videos (stored in uploads/videos)
- Upload PDF materials (stored in uploads/pdfs)
- Track video and PDF count

### 3. Payment Integration
- Paytm UPI: 7007337763@paytm
- Course Price: ₹1300
- Payment verification and course access unlock

### 4. Premium Access
- Only purchased courses accessible
- Automatic access grant after payment
- User dashboard showing purchased courses

## File Uploads

- Videos: `server/uploads/videos/`
- PDFs: `server/uploads/pdfs/`

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/japanese-course
JWT_SECRET=your_jwt_secret_key
PAYTM_MERCHANT_ID=your_paytm_merchant_id
PAYTM_MERCHANT_KEY=your_paytm_merchant_key
PAYTM_UPI_NUMBER=7007337763@paytm
```

### Frontend (.env.local)
```
REACT_APP_API_BASE_URL=http://localhost:5000/api
```

## Technologies Used

- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Frontend:** React, React Router, Axios
- **Authentication:** JWT, bcryptjs
- **File Upload:** Multer, express-fileupload
- **Payment:** Paytm API

## Usage Steps

1. **Register/Login** - Create account or login
2. **Browse Courses** - View available courses on homepage
3. **Purchase Course** - Click "Buy Now" to purchase via Paytm
4. **Access Content** - After payment, access videos and PDFs
5. **Admin Panel** - Create courses and upload content

## Important Notes

⚠️ **Paytm Integration:**
- This setup has basic Paytm integration structure
- For production, get live credentials from Paytm Business
- Currently in STAGING mode (change PAYTM_WEBSITE to WEBPROD for live)

⚠️ **MongoDB:**
- Install MongoDB locally or use MongoDB Atlas
- Update connection string in .env

⚠️ **Security:**
- Change JWT_SECRET to random string
- Never commit .env files to git
- Use HTTPS in production

## Support

For payment issues, contact: Paytm UPI - 7007337763@paytm

---

Happy Learning! 🎓📚
