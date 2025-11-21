import { Palette } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: 'gallery' | 'upload' | 'contact') => void;
}

export function Navbar({ onNavigate }: NavbarProps) {
  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Palette className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold">Artistry Hub</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('gallery')}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => onNavigate('upload')}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Upload Art
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}