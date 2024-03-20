import Hero from '@/components/Hero';
import React from 'react';
import HomeImage from '/public/home.jpg';

const HomePage = () => {
  return (
    <div>
      <Hero
        image={HomeImage}
        imageAlt="Home image"
        title="Transforming Possibilities into Realities"
      />
    </div>
  );
};

export default HomePage;
