import { Reveal } from './Reveal';

export function Offer() {
  return (
    <section className="py-24 px-6 bg-coffee relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#C9A227" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,85.8,-7.1C81.5,6.2,70.2,18.5,59.6,29.3C49,40.1,39,49.4,27.8,56.5C16.6,63.6,4.2,68.5,-9.5,71.1C-23.2,73.7,-38.2,74,-50.2,66.3C-62.2,58.6,-71.2,42.9,-76.8,26.9C-82.4,10.9,-84.6,-5.4,-78.9,-19.9C-73.2,-34.4,-59.6,-47.1,-45.8,-54.5C-32,-61.9,-18,-64, -2.9,-60.1L12.2,-56.2Z" transform="translate(100 100)"></path>
        </svg>
      </div>
      <Reveal className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-gold text-xs font-semibold tracking-widest uppercase mb-4 block">Limited Time Offer</span>
        <h2 className="font-playfair text-4xl md:text-6xl text-white mb-6 tracking-tight">Happy Hours</h2>
        <p className="text-white/80 text-xl font-light mb-2">4:00 PM – 7:00 PM Daily</p>
        <p className="text-gold text-2xl md:text-3xl font-playfair italic mb-10">Flat 20% OFF on all Hot Coffees</p>
        <button className="bg-gold text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-coffee transition-all duration-300">
          Claim Offer
        </button>
      </Reveal>
    </section>
  );
}
