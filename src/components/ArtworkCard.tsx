import { Mail } from 'lucide-react';
import type { Artwork } from '../types';

interface ArtworkCardProps {
  artwork: Artwork;
}

export function ArtworkCard({ artwork }: ArtworkCardProps) {
  const handleContact = () => {
    const subject = encodeURIComponent(`Interested in ${artwork.title}`);
    const body = encodeURIComponent(
      `Hi ${artwork.artist},\n\nI'm interested in purchasing your artwork "${artwork.title}".\n\nPlease let me know if it's still available.\n\nThank you!`
    );
    window.location.href = `mailto:${artwork.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={artwork.image_url}
          alt={artwork.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800';
          }}
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{artwork.title}</h3>
        <p className="text-sm text-gray-600 mb-3">by {artwork.artist}</p>

        {artwork.description && (
          <p className="text-sm text-gray-700 mb-4 line-clamp-2">{artwork.description}</p>
        )}

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">₹{artwork.price.toLocaleString('en-IN')}</span>
          <button
            onClick={handleContact}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
          >
            <Mail className="w-4 h-4" />
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}