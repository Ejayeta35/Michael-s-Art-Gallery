import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navbar({ currentTab, onTabChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-20 h-20 bg-white/90 backdrop-blur-md border-b border-neutral-100 transition-all duration-300">
      {/* Brand logo */}
      <div 
        onClick={() => onTabChange('gallery')}
        className="font-serif text-xl md:text-2xl font-bold text-black tracking-tight cursor-pointer select-none"
        id="navbar-logo"
      >
        AURELIAN ART
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-12" id="navbar-desktop-menu">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`font-sans text-xs uppercase tracking-[0.2em] transition-all duration-300 pb-1 cursor-pointer select-none ${
                isActive 
                  ? 'text-black border-b border-black font-semibold' 
                  : 'text-neutral-500 hover:text-black hover:border-b hover:border-neutral-300'
              }`}
              id={`nav-item-${tab.id}`}
            >
              {tab.label}
            </button>
          );
        })}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-black p-2 focus:outline-none cursor-pointer"
          id="navbar-mobile-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown menu */}
      {mobileMenuOpen && (
        <div 
          className="absolute top-20 left-0 w-full bg-white border-b border-neutral-200 py-6 px-8 flex flex-col gap-6 md:hidden shadow-lg animate-fade-in"
          id="navbar-mobile-dropdown"
        >
          {tabs.map((tab) => {
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  onTabChange(tab.id);
                  setMobileMenuOpen(false);
                }}
                className={`font-sans text-sm uppercase tracking-[0.2em] text-left py-2 ${
                  isActive ? 'text-black font-semibold border-l-2 border-black pl-3' : 'text-neutral-500 pl-3'
                }`}
                id={`mobile-nav-item-${tab.id}`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
