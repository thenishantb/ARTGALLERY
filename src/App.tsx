import { useRef, useState } from 'react';
import { Mail } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArtworkGallery } from './components/ArtworkGallery';
import { UploadForm } from './components/UploadForm';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);
  const galleryRef = useRef<HTMLElement>(null);
  const uploadRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const handleNavigate = (section: 'gallery' | 'upload' | 'contact') => {
    const refs = {
      gallery: galleryRef,
      upload: uploadRef,
      contact: contactRef,
    };

    refs[section].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleUploadSuccess = () => {
    setRefreshKey((prev) => prev + 1);
    galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNavigate={handleNavigate} />
      <Hero onNavigate={handleNavigate} />

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        <section ref={galleryRef} id="gallery">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Art Gallery</h2>
            <p className="text-gray-600">Explore artworks from talented independent artists</p>
          </div>
          <ArtworkGallery key={refreshKey} />
        </section>

        <section ref={uploadRef} id="upload">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Upload Your Artwork</h2>
            <p className="text-gray-600">Share your creations with art enthusiasts worldwide</p>
          </div>
          <div className="max-w-2xl">
            <UploadForm onUploadSuccess={handleUploadSuccess} />
          </div>
        </section>

        <section ref={contactRef} id="contact" className="bg-white rounded-xl shadow-lg p-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-600 mb-6">
              Have questions or need assistance? We're here to help artists and buyers connect.
            </p>
            <div className="flex items-center gap-3 text-lg">
              <Mail className="w-6 h-6 text-blue-600" />
              <a
                href="mailto:gallery@artistryhub.com"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                gallery@artistryhub.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Artistry Hub. Empowering artists worldwide.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;