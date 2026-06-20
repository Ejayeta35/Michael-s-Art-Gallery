import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { artworks, Artwork } from '../data';
import { Search, SlidersHorizontal, Info, Check, Download, ArrowRight, X } from 'lucide-react';

interface GalleryViewProps {
  onInquireArtwork: (artworkTitle: string) => void;
}

export default function GalleryView({ onInquireArtwork }: GalleryViewProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [pdfRequesting, setPdfRequesting] = useState<boolean>(false);
  const [pdfSuccess, setPdfSuccess] = useState<boolean>(false);

  // Filter Categories
  const categories = ['All', 'Oil', 'Mixed Media', 'Available', 'Sold'];

  // Filter and search logic
  const filteredArtworks = useMemo(() => {
    return artworks.filter((art) => {
      // Matches query
      const matchesSearch = 
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.medium.toLowerCase().includes(searchQuery.toLowerCase()) || 
        art.year.includes(searchQuery);

      if (!matchesSearch) return false;

      // Matches filter category
      if (activeFilter === 'All') return true;
      if (activeFilter === 'Available') return art.status === 'Available';
      if (activeFilter === 'Sold') return art.status === 'Sold';
      if (activeFilter === 'Oil') return art.medium.toLowerCase().includes('oil');
      if (activeFilter === 'Mixed Media') return art.medium.toLowerCase().includes('mixed media');

      return true;
    });
  }, [activeFilter, searchQuery]);

  // Handler for Requesting Portfolio PDF
  const handleRequestPdf = (artworkTitle: string) => {
    setPdfRequesting(true);
    setTimeout(() => {
      setPdfRequesting(false);
      setPdfSuccess(true);
      
      // Reset success state after some time
      setTimeout(() => {
        setPdfSuccess(false);
      }, 4000);

      // Create a virtual file download for the collector to feel the premium touch!
      const content = `AURELIAN ART - FINE ART PORTFOLIO\n\nFeatured Artwork: ${artworkTitle}\nDimensions: ${selectedArtwork?.dimensions}\nMedium: ${selectedArtwork?.medium}\nStatus: ${selectedArtwork?.status}\n\nThank you for requesting this certificate sheet. Our curators will follow up with official pricing guide and high-resolution slides.`;
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Aurelian_Art_${artworkTitle.replace(/\s+/g, '_')}_Portfolio.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 1200);
  };

  return (
    <div className="w-full" id="gallery-view">
      {/* Hero Header Section */}
      <section className="mb-16 md:mb-24 animate-fade-in" id="gallery-hero">
        <div className="max-w-4xl">
          <h1 
            className="font-serif text-4xl md:text-6xl text-black font-semibold mb-6 tracking-tight leading-none"
            id="gallery-title"
          >
            The Permanent Collection
          </h1>
          <p 
            className="font-sans text-neutral-500 text-base md:text-lg max-w-2xl leading-relaxed"
            id="gallery-description"
          >
            A curated assembly of oil paintings and mixed media explorations that interrogate the intersections of light, permanence, and human artifact.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar controls */}
      <section className="mb-12 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center border-b border-neutral-100 pb-8" id="gallery-controls">
        {/* Flat Category Filter Chips */}
        <div className="flex flex-wrap gap-2 md:gap-3" id="gallery-filter-chips">
          {categories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-sans transition-all duration-300 border cursor-pointer select-none ${
                  isActive 
                    ? 'bg-black text-white border-black font-medium' 
                    : 'bg-transparent text-neutral-500 border-neutral-200 hover:text-black hover:border-neutral-400'
                }`}
                id={`filter-chip-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Minimal Search input */}
        <div className="relative w-full md:w-80 group" id="gallery-search-container">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-black transition-colors">
            <Search size={16} />
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search catalog, medium, year..."
            className="w-full pl-10 pr-4 py-2 font-sans text-sm border-b border-neutral-300 focus:border-black bg-transparent outline-none transition-colors"
            id="gallery-search-input"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </section>

      {/* Gallery Staggered Card Grid */}
      <section id="gallery-grid" className="mb-16">
        {filteredArtworks.length === 0 ? (
          <div className="py-24 text-center border border-dashed border-neutral-200 rounded" id="gallery-empty-state">
            <p className="font-serif text-lg text-neutral-500 mb-2">No artworks match your criteria</p>
            <p className="font-sans text-sm text-neutral-400">Try adjusting your search query or selecting another filter category.</p>
            <button 
              onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
              className="mt-6 px-5 py-2.5 bg-black text-white text-xs uppercase tracking-widest"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {filteredArtworks.map((art, idx) => (
              <motion.div
                key={art.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                onClick={() => setSelectedArtwork(art)}
                className="artwork-card group cursor-pointer flex flex-col"
                id={`artwork-card-${art.id}`}
              >
                {/* Image Container with precise aspect ration and White Cube overlay */}
                <div className={`relative overflow-hidden ${art.aspectRatio} bg-neutral-100 border border-neutral-100 select-none`}>
                  <img
                    src={art.url}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      // fallback representation if error
                      e.currentTarget.src = "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=600";
                    }}
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Museum Overlay on Hover */}
                  <div className="absolute inset-0 bg-white/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center select-none">
                    <h3 className="font-serif text-xl text-black mb-2 px-4">{art.title}</h3>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-neutral-500 mb-1">{art.medium}</p>
                    <p className="font-sans text-[11px] uppercase tracking-widest font-semibold text-black mt-4 border-b border-black pb-0.5">
                      View Details
                    </p>
                  </div>
                </div>

                {/* Sub-text labels describing the art title and year */}
                <div className="mt-4 flex justify-between items-baseline select-none">
                  <h2 className="font-serif text-lg text-black font-semibold group-hover:text-neutral-600 transition-colors">
                    {art.title}
                  </h2>
                  <span className="font-sans text-xs text-neutral-400 font-medium">
                    {art.year}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className="font-sans text-[11px] text-neutral-500 uppercase tracking-wider">
                    {art.medium}
                  </p>
                  <span className={`text-[10px] uppercase tracking-wider font-semibold ${
                    art.status === 'Available' ? 'text-neutral-700' : 'text-neutral-400'
                  }`}>
                    {art.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox Modal Details Overlay */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-white overflow-y-auto lg:overflow-hidden select-none"
            id="lightbox-container"
          >
            <div className="flex flex-col lg:flex-row min-h-screen relative">
              {/* Close Button top-right */}
              <button
                onClick={() => {
                  setSelectedArtwork(null);
                  setPdfSuccess(false);
                }}
                className="absolute top-6 right-6 md:top-8 md:right-8 z-[110] p-3 text-black hover:opacity-50 transition-all cursor-pointer bg-white/80 rounded-full"
                id="lightbox-close"
              >
                <X size={28} />
              </button>

              {/* Left Side: Heavy Cinematic Image Viewer */}
              <div 
                className="lg:flex-[2.5] bg-neutral-50 flex items-center justify-center p-8 md:p-12 lg:p-16 h-[400px] lg:h-screen lg:max-h-screen overflow-hidden"
                id="lightbox-viewer"
              >
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="max-h-full max-w-full flex items-center justify-center"
                >
                  <img
                    src={selectedArtwork.url}
                    alt={selectedArtwork.title}
                    className="max-h-[300px] md:max-h-[550px] lg:max-h-[85vh] w-auto object-contain shadow-2xl border border-neutral-100"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>

              {/* Right Side: Museum Metadata Sidebar */}
              <aside 
                className="lg:flex-grow lg:flex-shrink-0 lg:w-[450px] p-6 md:p-12 lg:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-neutral-100 bg-white min-h-fit"
                id="lightbox-sidebar"
              >
                <div className="space-y-8 md:space-y-12 max-w-md mx-auto w-full">
                  {/* Heading header */}
                  <header>
                    <h2 
                      className="font-serif text-3xl md:text-4xl text-black font-bold mb-2 leading-tight"
                      id="meta-title"
                    >
                      {selectedArtwork.title}
                    </h2>
                    <p className="font-sans text-sm md:text-base text-neutral-400 font-medium" id="meta-year">
                      {selectedArtwork.year}
                    </p>
                  </header>

                  {/* Curatorial description paragraph */}
                  <p className="font-sans text-neutral-500 text-sm leading-relaxed" id="meta-description">
                    {selectedArtwork.description}
                  </p>

                  {/* Specification Table */}
                  <div className="space-y-5" id="meta-specs">
                    <div className="border-b border-neutral-100 pb-3 flex justify-between">
                      <span className="font-sans text-[11px] uppercase tracking-widest text-neutral-400 self-end">Medium</span>
                      <p className="font-sans text-xs md:text-sm text-black font-medium text-right self-end max-w-[220px]" id="meta-medium">
                        {selectedArtwork.medium}
                      </p>
                    </div>

                    <div className="border-b border-neutral-100 pb-3 flex justify-between">
                      <span className="font-sans text-[11px] uppercase tracking-widest text-neutral-400">Dimensions</span>
                      <p className="font-sans text-xs md:text-sm text-black font-medium text-right" id="meta-dimensions">
                        {selectedArtwork.dimensions}
                      </p>
                    </div>

                    <div className="border-b border-neutral-100 pb-3 flex justify-between">
                      <span className="font-sans text-[11px] uppercase tracking-widest text-neutral-400">Status</span>
                      <span 
                        className={`font-sans text-xs md:text-sm font-bold uppercase tracking-wider ${
                          selectedArtwork.status === 'Available' ? 'text-black' : 'text-neutral-400'
                        }`} 
                        id="meta-status"
                      >
                        {selectedArtwork.status}
                      </span>
                    </div>
                  </div>

                  {/* Interactive Call to Action buttons */}
                  <div className="pt-4 space-y-4" id="meta-actions">
                    {selectedArtwork.status === 'Available' ? (
                      <button
                        onClick={() => {
                          onInquireArtwork(selectedArtwork.title);
                          setSelectedArtwork(null);
                        }}
                        className="w-full bg-black text-white text-xs uppercase tracking-widest font-semibold py-4 px-6 hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 select-none cursor-pointer"
                        id="btn-inquire"
                      >
                        Inquire About This Piece
                        <ArrowRight size={14} />
                      </button>
                    ) : (
                      <div className="py-2.5 px-4 bg-neutral-50 border border-neutral-100 text-center font-sans text-xs text-neutral-500 uppercase tracking-wider">
                        Archived in {selectedArtwork.status === 'Sold' ? 'Sold Acquisitions' : 'Private Collection'}
                      </div>
                    )}

                    <button
                      onClick={() => handleRequestPdf(selectedArtwork.title)}
                      disabled={pdfRequesting}
                      className={`w-full py-4 px-6 border text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-2 select-none cursor-pointer ${
                        pdfSuccess 
                          ? 'border-neutral-500 text-neutral-700 bg-neutral-50' 
                          : 'border-black text-black hover:bg-black hover:text-white'
                      }`}
                      id="btn-portfolio-pdf"
                    >
                      {pdfRequesting ? (
                        <>
                          <div className="w-3 h-3 border-2 border-neutral-400 border-t-black rounded-full animate-spin"></div>
                          Processing Sheet...
                        </>
                      ) : pdfSuccess ? (
                        <>
                          <Check size={14} className="text-neutral-500" />
                          Museum Catalog Transmitted
                        </>
                      ) : (
                        <>
                          <Download size={14} />
                          Request Portfolio PDF
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
