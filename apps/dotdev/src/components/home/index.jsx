import React from 'react';
import HeroSection from './HeroSection';
import Features from './Features';
import Workflow from './Workflow';
import Pricing from './Pricing';

const index = () => {
  return (
    <div className="home">
      <div className="container">
        <HeroSection />
        <Features />
        <Workflow />
        <Pricing />
      </div>
    </div>
  );
};

export default index;
