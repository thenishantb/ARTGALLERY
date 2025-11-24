import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { Readable } from 'stream';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }
  
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    throw err;
  }
};

// Database Schema & Model
const artworkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  price: { type: Number, required: true },
  image_url: { type: String, required: true },
  description: { type: String },
  email: { type: String, required: true },
}, { timestamps: true });

const Artwork = mongoose.model('Artwork', artworkSchema);

// Routes

// GET: Fetch all artworks
app.get('/api/artworks', async (req, res) => {
  try {
    await connectDB();
    const artworks = await Artwork.find().sort({ createdAt: -1 });
    res.json(artworks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST: Upload a new artwork
app.post('/api/artworks', async (req, res) => {
  try {
    await connectDB();
    const { title, artist, price, image_url, description, email } = req.body;
    
    const newArtwork = new Artwork({
      title,
      artist,
      price,
      image_url,
      description,
      email
    });

    const savedArtwork = await newArtwork.save();
    res.status(201).json(savedArtwork);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default app;
