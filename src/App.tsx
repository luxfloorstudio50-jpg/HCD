/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-neutral-950 min-h-screen text-white font-sans antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
      <QuoteForm />
      <Contact />
      <Footer />
    </div>
  );
}

