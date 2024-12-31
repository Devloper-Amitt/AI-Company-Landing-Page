import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/sections/Features';
import Solutions from '../components/sections/Solutions';
import About from '../components/sections/About';
import Api from '../components/sections/Api';
import Teams from '../components/sections/Teams';
import Contact from '../components/sections/Contact';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';

const Home = () => {
  return (
    <main className="overflow-hidden">
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="solutions">
        <Solutions />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="api">
        <Api />
      </section>
      <section id="teams">
        <Teams />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="cta">
        <CTA />
      </section>
    </main>
  );
};

export default Home;