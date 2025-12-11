# Deployment Guide - Japanese N5 Course Website

## 🚀 Deploy Your Website in 3 Easy Steps

---

## Step 1: Deploy Backend (Render.com)

### Register & Create Project
1. Go to [render.com](https://render.com)
2. Click "New +"
3. Select "Web Service"
4. Connect GitHub account
5. Select your `server` repository

### Configure
1. **Name:** `japanese-course-api`
2. **Runtime:** Node
3. **Build Command:** `npm install`
4. **Start Command:** `node server.js`
5. **Instance Type:** Free

### Add Environment Variables
Click "Add Environment Variable" and add:

```
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/japanese-course
JWT_SECRET=your_random_secret_key_here
PAYTM_MERCHANT_ID=your_merchant_id
PAYTM_MERCHANT_KEY=your_merchant_key
PAYTM_WEBSITE=WEBPROD
PAYTM_CHANNEL_ID=WEB
PAYTM_INDUSTRY_TYPE_ID=Retail
PAYTM_UPI_NUMBER=7007337763@paytm
BACKEND_URL=https://your-backend-url.onrender.com
NODE_ENV=production
```

### Deploy
- Click "Create Web Service"
- Wait for deployment (2-5 minutes)
- Copy your backend URL: `https://your-backend-url.onrender.com`

---

## Step 2: Setup MongoDB (MongoDB Atlas)

### Create Free Cluster
1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Create account
3. Create new project
4. Create cluster (M0 free tier)
5. Create database user
6. Get connection string

### Connection String Format
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/japanese-course
```

### Add to Backend .env
Use this connection string in `MONGODB_URI`

---

## Step 3: Deploy Frontend (Vercel)

### Build Frontend
```bash
cd client
npm run build
```

### Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import GitHub project
3. Select `client` folder as root
4. Add Environment Variable:

```
REACT_APP_API_BASE_URL=https://your-backend-url.onrender.com/api
```

5. Deploy
6. Get frontend URL: `https://your-app.vercel.app`

---

## Custom Domain Setup

### Point Domain to Vercel
1. Buy domain (Godaddy, Namecheap, etc.)
2. Go to Vercel dashboard
3. Project Settings → Domains
4. Add your domain
5. Follow DNS setup instructions

---

## After Deployment

### Test Your Live Website
1. Visit: `https://your-app.vercel.app`
2. Register account
3. Create course
4. Upload video/PDF
5. Test payment (use Paytm test account)

### Update Paytm for Production
1. Contact Paytm Business
2. Get production credentials
3. Update in deployed backend
4. Change `PAYTM_WEBSITE=WEBPROD`

---

## Monitoring & Maintenance

### Check Backend Status
- Visit Render dashboard
- View logs for errors
- Check uptime

### Monitor Database
- MongoDB Atlas dashboard
- View storage usage
- Setup backups

### Verify Payments
- Login to Paytm Business
- View transactions
- Check payment history

---

## Cost Breakdown

| Service | Cost | Notes |
|---------|------|-------|
| Render (Backend) | Free | $0/month on free tier |
| MongoDB Atlas | Free | $0/month on free tier (512MB) |
| Vercel (Frontend) | Free | $0/month on free tier |
| Domain | Paid | ~$10-15/year |
| **Total** | **Free** | Without custom domain |

---

## Troubleshooting Deployment

### Backend won't start
- Check environment variables
- Verify MongoDB connection string
- Check logs in Render dashboard
- Ensure JWT_SECRET is set

### Frontend won't load
- Check REACT_APP_API_BASE_URL
- Clear browser cache
- Verify Vercel environment variables
- Check console for errors

### Payments not working
- Verify Paytm credentials are production ones
- Check PAYTM_WEBSITE=WEBPROD
- Verify UPI number matches
- Test with Paytm test account first

### File uploads not working
- Check upload permissions
- Use cloud storage (AWS S3, Cloudinary) for production
- Increase file size limits

---

## Scaling Up

### For Large Scale:
1. Use AWS S3 for video/PDF storage
2. Add CDN for faster delivery
3. Scale database (paid MongoDB tier)
4. Use Redis for caching
5. Add email notifications
6. Implement analytics

---

## Security Checklist

- [ ] Change all default credentials
- [ ] Use strong JWT_SECRET
- [ ] Enable HTTPS (automatic on Vercel/Render)
- [ ] Setup backups (MongoDB Atlas)
- [ ] Monitor error logs
- [ ] Update dependencies regularly
- [ ] Setup SSL certificate (auto on Vercel)
- [ ] Implement rate limiting
- [ ] Add security headers

---

## Production Best Practices

1. **Database Backups:** Enable automated backups in MongoDB Atlas
2. **Error Logging:** Setup error tracking (Sentry, LogRocket)
3. **Monitoring:** Setup uptime monitoring (Uptime Robot)
4. **Analytics:** Add Google Analytics to frontend
5. **Email:** Setup email notifications for payments
6. **Security:** Regular security audits

---

## Support

For deployment issues:
- Render support: support@render.com
- Vercel support: support@vercel.com
- MongoDB support: support.mongodb.com

---

**Your website is now LIVE! 🎉**

Visit: `https://your-app.vercel.app`
