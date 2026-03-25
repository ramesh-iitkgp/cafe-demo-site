import { Reveal } from './Reveal';
import { MessageCircle } from 'lucide-react';
import { FormEvent, useState } from 'react';

export function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, phone, date, time, guests, message } = formData;
    if (!name || !phone || !date || !time || !guests) {
      alert('Please fill in all required fields');
      return;
    }
    const text = `*New Table Reservation Request*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Date:* ${date}%0A*Time:* ${time}%0A*Guests:* ${guests}%0A*Message:* ${message}`;
    window.open(`https://wa.me/9109609601818?text=${text}`, '_blank');
  };

  return (
    <section id="book" className="py-24 px-6 bg-white">
      <Reveal className="max-w-4xl mx-auto bg-cream p-8 md:p-16 rounded-[40px] shadow-soft">
        <div className="text-center mb-12">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase mb-2 block">Reservations</span>
          <h2 className="font-playfair text-3xl md:text-4xl text-coffee tracking-tight mb-2">Book a Table</h2>
          <p className="text-coffee/60 font-light text-sm">Fill out the form below to send your reservation request via WhatsApp.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <input type="text" id="name" required className="w-full bg-transparent border-b border-coffee/20 py-3 text-coffee placeholder-transparent focus:outline-none focus:border-gold transition-colors peer" placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              <label htmlFor="name" className="absolute left-0 top-3 text-coffee/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-coffee/40 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-gold peer-focus:text-xs peer-valid:-top-4 peer-valid:text-xs">Name</label>
            </div>

            <div className="relative group">
              <input type="tel" id="phone" required className="w-full bg-transparent border-b border-coffee/20 py-3 text-coffee placeholder-transparent focus:outline-none focus:border-gold transition-colors peer" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              <label htmlFor="phone" className="absolute left-0 top-3 text-coffee/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-coffee/40 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-gold peer-focus:text-xs peer-valid:-top-4 peer-valid:text-xs">Phone Number</label>
            </div>

            <div className="relative group">
              <input type="date" id="date" required className="w-full bg-transparent border-b border-coffee/20 py-3 text-coffee focus:outline-none focus:border-gold transition-colors" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
            </div>

            <div className="relative group">
              <input type="time" id="time" required className="w-full bg-transparent border-b border-coffee/20 py-3 text-coffee focus:outline-none focus:border-gold transition-colors" value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} />
            </div>

            <div className="relative group">
              <select id="guests" required className="w-full bg-transparent border-b border-coffee/20 py-3 text-coffee focus:outline-none focus:border-gold transition-colors appearance-none" value={formData.guests} onChange={e => setFormData({...formData, guests: e.target.value})}>
                <option value="" disabled>Number of Guests</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5+">5+ People</option>
              </select>
            </div>
          </div>

          <div className="relative group">
            <textarea id="message" rows={2} className="w-full bg-transparent border-b border-coffee/20 py-3 text-coffee placeholder-transparent focus:outline-none focus:border-gold transition-colors peer" placeholder="Special Request" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
            <label htmlFor="message" className="absolute left-0 top-3 text-coffee/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-coffee/40 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-gold peer-focus:text-xs peer-valid:-top-4 peer-valid:text-xs">Special Request (Optional)</label>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 pt-6">
            <button type="submit" className="w-full md:w-auto bg-coffee text-white px-12 py-3 text-sm tracking-widest uppercase hover:bg-gold transition-all duration-300">
              Book Now
            </button>
            <a href="https://wa.me/9109609601818" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-coffee text-sm hover:text-green-600 transition-colors">
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </form>
      </Reveal>
    </section>
  );
}
