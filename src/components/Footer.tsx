import { Instagram, Facebook, ArrowUp, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-coffee text-cream pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 text-2xl text-white tracking-tight font-playfair mb-6">Open House Cafe</a>
            <p className="text-cream/60 text-sm font-light leading-relaxed">
              A premium culinary destination for coffee lovers and food enthusiasts. Experience luxury in every sip.
            </p>
          </div>
          
          <div>
            <h4 className="text-gold text-xs uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-cream/70 font-light">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Our Menu</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#book" className="hover:text-white transition-colors">Reservations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-xs uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-cream/70 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-xs uppercase tracking-widest mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300">
                <Instagram size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300">
                <Facebook size={18} className="text-white" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-cream/40 font-light">
          <p>© {new Date().getFullYear()} Open House Cafe. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with precision.</p>
        </div>
      </footer>

      <a href="https://wa.me/9109609601818?text=Hi%20Open%20House%20Cafe,%20I%20would%20like%20to%20know%20more." target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center">
        <MessageCircle size={24} />
      </a>

      <button 
        onClick={scrollToTop} 
        className={`fixed bottom-6 right-24 z-40 bg-coffee text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gold transition-all duration-300 ${showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ArrowUp size={24} />
      </button>
    </>
  );
}
