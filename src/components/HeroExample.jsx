import React, { useState } from 'react';
import Hero from './Hero';

// Example usage component
const HeroExample = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Hero
      title="Empowering Innovation Through Technology"
      subtitle="Welcome to Our Platform"
      description="Join us in shaping the future with cutting-edge solutions and collaborative learning."
      primaryButton={{ text: "Get Started", url: "/get-started" }}
      secondaryButton={{ text: "Learn More", url: "/about" }}
      activeSlide={activeSlide}
      totalSlides={4}
      onSlideChange={setActiveSlide}
    />
  );
};

export default HeroExample;
