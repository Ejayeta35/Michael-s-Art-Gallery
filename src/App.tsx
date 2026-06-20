import { useState } from 'react';
import Navbar from './components/Navbar';
import GalleryView from './components/GalleryView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import Footer from './components/Footer';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('gallery');
  const [inquiryPrefill, setInquiryPrefill] = useState<string>('');

  // Handle inquiry routing from gallery or bio page
  const handleInquireArtwork = (artworkTitle: string) => {
    setInquiryPrefill(`Inquiry: ${artworkTitle}`);
    setCurrentTab('contact');
  };

  const handleNavToInquiry = () => {
    setInquiryPrefill('Acquisitions Request');
    setCurrentTab('contact');
  };

  const clearPrefill = () => {
    setInquiryPrefill('');
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans selection:bg-black selection:text-white" id="aurelian-app">
      {/* Top Navigation Row */}
      <Navbar currentTab={currentTab} onTabChange={setCurrentTab} />

      {/* Main Viewport Content canvas */}
      <main className="flex-grow pt-32 pb-16 px-6 md:px-20 max-w-[1440px] w-full mx-auto" id="app-main-content">
        {currentTab === 'gallery' && (
          <GalleryView onInquireArtwork={handleInquireArtwork} />
        )}
        {currentTab === 'about' && (
          <AboutView onNavToInquiry={handleNavToInquiry} />
        )}
        {currentTab === 'contact' && (
          <ContactView 
            prefilledSubject={inquiryPrefill} 
            clearPrefilledSubject={clearPrefill} 
          />
        )}
      </main>

      {/* App brand Footer */}
      <Footer onTabChange={setCurrentTab} />
    </div>
  );
}
