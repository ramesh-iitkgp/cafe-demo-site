import { Reveal } from './Reveal';
import { Download } from 'lucide-react';

const menuItems = [
  { name: 'Cappuccino', price: '₹120', desc: 'Rich espresso with steamed milk foam.', img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=2000&auto=format&fit=crop' },
  { name: 'Hazelnut Latte', price: '₹150', desc: 'Smooth espresso with nutty syrup.', img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2537&auto=format&fit=crop' },
  { name: 'Classic Cold Coffee', price: '₹180', desc: 'Blended with ice cream and cocoa.', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop' },
  { name: 'Garden Sandwich', price: '₹140', desc: 'Fresh veggies, pesto, and grilled bread.', img: 'https://images.unsplash.com/photo-1554433607-66b5efe9d304?q=80&w=2064&auto=format&fit=crop' },
  { name: 'Cheese Burst Pizza', price: '₹250', desc: 'Mozzarella, basil, and tomato sauce.', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Pasta Alfredo', price: '₹220', desc: 'Creamy white sauce with mushrooms.', img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2080&auto=format&fit=crop' },
  { name: 'Chocolate Shake', price: '₹190', desc: 'Thick belgian chocolate blend.', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1974&auto=format&fit=crop' },
  { name: 'French Fries', price: '₹120', desc: 'Crispy salted fries with dip.', img: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=2525&auto=format&fit=crop' },
];

export function Menu() {
  return (
    <section id="menu" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase mb-2 block">Our Specialties</span>
          <h2 className="font-playfair text-4xl text-coffee tracking-tight">Popular Menu</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div key={index}>
              <Reveal delay={0.1 * (index % 4)} className="group">
                <div className="relative overflow-hidden rounded-2xl h-64 mb-4">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-coffee">{item.price}</div>
                </div>
                <h3 className="font-playfair text-xl text-coffee mb-1">{item.name}</h3>
                <p className="text-xs text-coffee/60 font-light mb-3">{item.desc}</p>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-3 border border-coffee text-coffee text-xs uppercase tracking-widest hover:bg-coffee hover:text-white transition-all duration-300">
            <Download size={16} />
            Download Full Menu
          </button>
        </Reveal>
      </div>
    </section>
  );
}
