// HomePage.tsx
import React from 'react';
import Navbar from './Navbar';
import HeroSection from './Herosection';
import { Project } from './Project';
import { Team } from './Team';
// import { About } from './About';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Project/>
      <Team/>

    </div>
  );
};

export default HomePage;
