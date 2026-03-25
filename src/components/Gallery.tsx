import { Reveal } from './Reveal';

const galleryImages = [
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2129&auto=format&fit=crop"
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex justify-between items-end mb-12">
          <div>
            <span className="text-gold text-xs font-semibold tracking-widest uppercase mb-2 block">Visual Experience</span>
            <h2 className="font-playfair text-4xl text-coffee tracking-tight">Our Gallery</h2>
          </div>
        </Reveal>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, idx) => (
            <div key={idx}>
              <Reveal delay={0.1 * (idx % 3)} className="break-inside-avoid">
                <img src={img} className="w-full rounded-2xl hover:opacity-90 transition-opacity duration-300 cursor-zoom-in" alt="Gallery" />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
