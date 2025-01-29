import React from 'react';
import '../styles/home.css';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = (): JSX.Element => {
  return (
    <div className="home-container">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
