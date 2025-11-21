import { useEffect, useState } from 'react';
import { Palette, Loader2, AlertCircle } from 'lucide-react';
import { ArtworkCard } from './ArtworkCard';
import type { Artwork } from '../types';

export function ArtworkGallery() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArtworks = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetching from your local backend
      const response = await fetch('http://localhost:5000/api/artworks');
      
      if (!response.ok) {
        throw new Error('Failed to connect to the server');
      }

      const data = await response.json();
      setArtworks(data);
    } catch (err) {
      setError('Failed to load artworks. Is the backend server running?');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtworks();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center max-w-lg mx-auto">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
        <p className="text-red-800 mb-4">{error}</p>
        <button
          onClick={fetchArtworks}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Retry Connection
        </button>
      </div>
    );
  }

  if (artworks.length === 0) {
    return (
      <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
        <Palette className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No Artworks Yet</h3>
        <p className="text-gray-600">Be the first to upload your artwork to the gallery!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {artworks.map((artwork) => (
        <ArtworkCard key={artwork._id} artwork={artwork} />
      ))}
    </div>
  );
}