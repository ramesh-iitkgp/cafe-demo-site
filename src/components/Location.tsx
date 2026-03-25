import { Reveal } from './Reveal';
import { MapPin, Phone, Clock } from 'lucide-react';

export function Location() {
  return (
    <section className="py-0 relative h-[500px] w-full bg-white">
      <div className="absolute inset-0 z-0">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.812678125462!2d88.42878411504068!3d26.71842898321151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4416a22b79a51%3A0x6a0a0928e4e9b9c0!2sInfinity%20Square!5e0!3m2!1sen!2sin!4v1629876543210!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%) invert(0%) sepia(10%) saturate(50%)' }} 
          allowFullScreen 
          loading="lazy"
        ></iframe>
      </div>
      <Reveal className="md:left-20 bg-white/95 max-w-sm z-10 rounded-xl p-8 absolute top-10 left-6 shadow-lg backdrop-blur-md">
        <h3 className="font-playfair text-2xl text-coffee mb-6">Visit Us</h3>
        
        <div className="space-y-4">
          <div className="flex gap-4">
            <MapPin className="text-gold mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="text-xs text-coffee/50 uppercase tracking-widest mb-1">Address</p>
              <p className="text-coffee leading-relaxed text-sm">Third Floor, Infinity Square, Sevoke Rd, Ward 43, Siliguri, West Bengal 734001</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Phone className="text-gold mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="text-coffee/50 uppercase text-xs tracking-widest mb-1">Contact</p>
              <p className="text-coffee text-sm">+91 09609601818</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="text-gold mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="text-xs text-coffee/50 uppercase tracking-widest mb-1">Opening Hours</p>
              <p className="text-coffee text-sm">Mon - Sun: 11:00 AM – 11:00 PM</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
