/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Offer } from './components/Offer';
import { Gallery } from './components/Gallery';
import { Reservation } from './components/Reservation';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Offer />
      <Gallery />
      <Reservation />
      <Reviews />
      <Location />
      <Footer />
    </div>
  );
}
