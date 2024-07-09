import React from 'react';
import Testimonials from './Testimonials';
import Skills from './Skills';
import Services from './Services';
import Hero from './Hero';

function HeroI() {
  return (
    <div className="min-sec current" id="tab-1">
      <Hero />

      <Services />

      <Skills />
    </div>
  );
}

export default HeroI;
