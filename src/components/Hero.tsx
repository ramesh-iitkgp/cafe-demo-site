import { Reveal } from './Reveal';
import { Star, Coffee } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" alt="Cafe Ambience" className="w-full h-full object-cover" />
        <div className="bg-gradient-to-b from-black/60 via-black/40 to-black/70 absolute inset-0"></div>
      </div>

      <Reveal className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto mt-16">
        <span className="block text-gold text-sm tracking-[0.2em] uppercase mb-4">Welcome to Siliguri's Finest</span>
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6">
          Open House.<br /> <span className="text-cream/90 italic">Great Coffee.</span><br /> Good Times.
        </h1>
        <p className="font-light text-base md:text-lg text-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience the perfect blend of artisanal coffee and culinary excellence in the heart of Siliguri. The best place for breakfast, coffee & snacks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#book" className="bg-gold text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-coffee transition-all duration-300 min-w-[180px]">
            Book a Table
          </a>
          <a href="#menu" className="border border-white/30 backdrop-blur-sm text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-coffee transition-all duration-300 min-w-[180px]">
            View Menu
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.2} className="absolute bottom-10 md:bottom-20 left-6 md:left-20 z-10 hidden md:block">
        <div className="flex gap-3 border-white/10 border rounded-2xl mb-4 p-4 backdrop-blur-md items-center">
          <div className="bg-gold text-white p-2 rounded-full flex items-center justify-center">
            <Star size={20} className="fill-current" />
          </div>
          <div className="text-left">
            <p className="text-white text-sm font-medium">4.9 Rating</p>
            <p className="text-white/60 text-xs">From 1000+ Reviews</p>
          </div>
        </div>
        <div className="bg-cream/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-3">
          <div className="bg-gold text-white p-2 rounded-full flex items-center justify-center">
            <Coffee size={20} />
          </div>
          <div className="text-left">
            <p className="text-white text-sm font-medium">Fresh Coffee</p>
            <p className="text-white/60 text-xs">Premium Beans</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
