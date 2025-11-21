import { Palette, Upload, Image } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: 'gallery' | 'upload') => void;
}

// 👇 IMPORTANT: This must say "export function", NOT "export default function"
export function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Palette className="w-16 h-16" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Artistry Hub
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-blue-50 leading-relaxed">
            Showcase Your Art to the World
          </p>

          <p className="text-lg text-blue-100 mb-10 leading-relaxed">
            A beautiful online space where artists display their artworks and buyers discover unique pieces
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('upload')}
              className="flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Upload className="w-5 h-5" />
              Upload Artwork
            </button>
            <button
              onClick={() => onNavigate('gallery')}
              className="flex items-center justify-center gap-2 bg-blue-800 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Image className="w-5 h-5" />
              Browse Gallery
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
}
