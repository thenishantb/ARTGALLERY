# Vercel Deployment Guide for Art Gallery

## Prerequisites
- GitHub account (for pushing code)
- Vercel account (free at https://vercel.com)
- MongoDB Atlas account (free tier at https://www.mongodb.com/cloud/atlas)

## Step-by-Step Deployment

### 1. Set Up MongoDB Atlas (Cloud Database)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account and log in
3. Create a new cluster (select M0 free tier)
4. Click "Connect" and choose "Connect your application"
5. Copy the connection string (it will look like: `mongodb+srv://username:password@cluster.mongodb.net/artistry_hub?retryWrites=true&w=majority`)
6. Keep this connection string safe - you'll need it for Vercel environment variables

### 2. Push Code to GitHub

1. Initialize git (if not already done):
   ```
   cd c:\ART GALLERY\ARTGALLERY
   git init
   git add .
   git commit -m "Initial commit - art gallery app"
   ```

2. Create a new repository on GitHub and push your code:
   ```
   git remote add origin https://github.com/YOUR_USERNAME/ARTGALLERY.git
   git branch -M main
   git push -u origin main
   ```

### 3. Deploy to Vercel

1. Go to https://vercel.com and sign in with GitHub
2. Click "New Project"
3. Select your ARTGALLERY repository
4. Configure project settings:
   - Framework: **Vite**
   - Root Directory: `.` (current directory)
   - Build Command: `npm run build`
   - Output Directory: `dist`

5. Under "Environment Variables", add:
   - **Name:** `MONGODB_URI`
   - **Value:** Your MongoDB connection string from Atlas
   - Click "Add"

6. Click "Deploy"
7. Wait for deployment to complete (usually 1-2 minutes)
8. Your app will be live at: `https://YOUR_PROJECT_NAME.vercel.app`

### 4. Test Your Deployment

- Visit your Vercel URL
- Try uploading an artwork (it will be saved to MongoDB Atlas)
- Refresh the page to verify artworks persist

## Important Notes

- ✅ API routes are automatically handled by the serverless functions in `/api`
- ✅ Frontend is automatically built and served statically
- ✅ Environment variables are securely stored in Vercel
- ✅ MongoDB Atlas free tier is perfect for development/testing

## Updating Your App

After making changes:
```
git add .
git commit -m "Your changes"
git push origin main
```

Vercel will automatically redeploy your app!

## Troubleshooting

**"Failed to connect to the server"?**
- Check that MONGODB_URI is set in Vercel project settings
- Verify MongoDB Atlas connection string is correct
- Make sure your IP is whitelisted in MongoDB Atlas (add 0.0.0.0/0)

**API calls timing out?**
- Check MongoDB connection in Vercel function logs
- Go to Vercel dashboard → Your Project → Deployments → Click latest → Function Logs

**Need to add more environment variables?**
- Go to Vercel dashboard → Settings → Environment Variables
