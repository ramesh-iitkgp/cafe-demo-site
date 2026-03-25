import { Reveal } from './Reveal';
import { Leaf, ShieldCheck, Armchair, HeartHandshake } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Reveal className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full border border-gold rounded-full opacity-30 transform -rotate-2"></div>
          <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop" alt="Cafe Interior" className="relative rounded-t-full rounded-b-[1000px] shadow-soft object-cover w-full h-[600px]" />
          <div className="absolute bottom-10 -right-6 bg-white p-6 shadow-xl max-w-xs hidden md:block">
            <p className="font-playfair text-xl italic text-coffee">"Where every cup tells a story."</p>
          </div>
        </Reveal>
        
        <Reveal delay={0.1}>
          <span className="text-gold text-xs font-semibold tracking-widest uppercase mb-2 block">Our Story</span>
          <h2 className="font-playfair text-4xl md:text-5xl text-coffee mb-6 tracking-tight">Crafting Memories <br /> <span className="italic text-coffee/70">One Sip at a Time</span></h2>
          <p className="text-coffee/70 font-light mb-8 leading-relaxed">
            Located at Infinity Square, Sevoke Rd, Open House Cafe is more than just a coffee shop. It's a sanctuary where modern luxury meets comfort. Our kitchen prioritizes hygiene and freshness, sourcing ingredients daily to ensure every plate is a masterpiece.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="flex items-start gap-3">
              <Leaf className="text-gold flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-medium text-coffee text-sm mb-1">Fresh Ingredients</h4>
                <p className="text-xs text-coffee/60 font-light">Farm-to-table approach daily.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-gold flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-medium text-coffee text-sm mb-1">Hygienic Kitchen</h4>
                <p className="text-xs text-coffee/60 font-light">Top-tier safety standards.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Armchair className="text-gold flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-medium text-coffee text-sm mb-1">Cozy Seating</h4>
                <p className="text-xs text-coffee/60 font-light">Designed for your comfort.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <HeartHandshake className="text-gold flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-medium text-coffee text-sm mb-1">Friendly Staff</h4>
                <p className="text-xs text-coffee/60 font-light">Service with a warm smile.</p>
              </div>
            </div>
          </div>

          <a href="#menu" className="text-coffee border-b border-gold pb-1 hover:text-gold transition-colors text-sm uppercase tracking-wider">Discover Our Menu</a>
        </Reveal>
      </div>
    </section>
  );
}
