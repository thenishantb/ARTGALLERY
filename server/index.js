import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 5000;

// 1. Middleware
app.use(cors()); // Allows your React app to talk to this server
app.use(express.json()); // Allows the server to understand JSON data

// 2. MongoDB Connection (Local)
// "artistry_hub" is the name of the database. MongoDB creates it automatically.
mongoose.connect('mongodb://127.0.0.1:27017/artistry_hub')
  .then(() => console.log('✅ Connected to Local MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// 3. Database Schema & Model
const artworkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  price: { type: Number, required: true },
  image_url: { type: String, required: true },
  description: { type: String },
  email: { type: String, required: true },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt

const Artwork = mongoose.model('Artwork', artworkSchema);

// 4. API Routes

// GET: Fetch all artworks
app.get('/api/artworks', async (req, res) => {
  try {
    const artworks = await Artwork.find().sort({ createdAt: -1 });
    res.json(artworks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST: Upload a new artwork
app.post('/api/artworks', async (req, res) => {
  try {
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

// 5. Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});