import { Reveal } from './Reveal';
import { Star } from 'lucide-react';

export function Reviews() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase mb-2 block">Testimonials</span>
          <h2 className="font-playfair text-4xl text-coffee tracking-tight">Loved by Customers</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal delay={0.1} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex text-gold mb-4 gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
            </div>
            <p className="text-coffee/80 font-light italic mb-6 leading-relaxed">"Best cafe vibe in Siliguri. The coffee is authentically brewed and the ambience is just perfect for my remote work days."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-coffee/10 rounded-full flex items-center justify-center text-coffee font-playfair font-semibold">S</div>
              <div>
                <p className="text-coffee text-sm font-medium">Sarah Jenkins</p>
                <p className="text-coffee/40 text-xs">Food Critic</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex text-gold mb-4 gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
            </div>
            <p className="text-coffee/80 font-light italic mb-6 leading-relaxed">"Food is fresh and staff is incredibly friendly. The pasta alfredo is a must-try. Highly recommended!"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-coffee/10 rounded-full flex items-center justify-center text-coffee font-playfair font-semibold">R</div>
              <div>
                <p className="text-coffee text-sm font-medium">Rahul Mehta</p>
                <p className="text-coffee/40 text-xs">Local Guide</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex text-gold mb-4 gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
            </div>
            <p className="text-coffee/80 font-light italic mb-6 leading-relaxed">"Perfect place for meetings and hangouts. The attention to detail in the decor is stunning. Will visit again."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-coffee/10 rounded-full flex items-center justify-center text-coffee font-playfair font-semibold">A</div>
              <div>
                <p className="text-coffee text-sm font-medium">Anita Roy</p>
                <p className="text-coffee/40 text-xs">Regular Customer</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
