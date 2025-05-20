import React from 'react';
import HeroSection from './HeroSection';
import Features from './Features';
import Workflow from './Workflow';

const index = () => {
  return (
    <div className="home">
      <div className="container">
        <HeroSection />
        <Features />
        <Workflow />
      </div>
    </div>
  );
};

export default index;
