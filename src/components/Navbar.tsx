import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-cream/90 border-b border-coffee/5 ${isScrolled ? 'py-3 shadow-sm' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-coffee flex items-center gap-2 text-2xl tracking-tight font-playfair">
          Open House Cafe
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-light tracking-wide">
          <a href="#home" className="hover:text-gold transition-colors">Home</a>
          <a href="#about" className="hover:text-gold transition-colors">Story</a>
          <a href="#menu" className="hover:text-gold transition-colors">Menu</a>
          <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
          <a href="#book" className="hover:text-gold transition-colors">Reservations</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#book" className="hidden md:inline-block px-6 py-2 border border-coffee text-coffee text-xs uppercase tracking-widest hover:bg-coffee hover:text-white transition-all duration-300">
            Book Table
          </a>
          <button className="md:hidden text-2xl text-coffee" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cream border-b border-coffee/10 py-4 px-6 flex flex-col gap-4 shadow-lg">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-coffee hover:text-gold transition-colors">Home</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-coffee hover:text-gold transition-colors">Story</a>
          <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="text-coffee hover:text-gold transition-colors">Menu</a>
          <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-coffee hover:text-gold transition-colors">Gallery</a>
          <a href="#book" onClick={() => setIsMobileMenuOpen(false)} className="text-coffee hover:text-gold transition-colors">Reservations</a>
        </div>
      )}
    </nav>
  );
}
