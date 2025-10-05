import React, { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import SlideDots from '../../../components/SlideDots';
import OptimizedImage from '../../../components/OptimizedImage';
import { heroImages, preloadHeroImage } from '../../../utils/imageOptimization';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  // Preload first image for better LCP
  useEffect(() => {
    if (heroImages[0]) {
      preloadHeroImage(heroImages[0].src);
    }
  }, []);

  // Auto-advance slides every 5 seconds with perfectly synchronized transitions
  useEffect(() => {
    const interval = setInterval(() => {
      // Start text fade out and slide change simultaneously
      setTextVisible(false);
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
      
      // Fade text back in at the perfect moment (when new image starts appearing)
      setTimeout(() => {
        setTextVisible(true);
      }, 100);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle manual slide change with instant synchronized transition
  const handleSlideChange = (slideIndex) => {
    if (slideIndex !== activeSlide) {
      setTextVisible(false);
      setActiveSlide(slideIndex);
      
      // Instant text fade in for manual clicks
      setTimeout(() => {
        setTextVisible(true);
      }, 100);
    }
  };

  const currentImage = heroImages[activeSlide];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              placeholder={image.placeholder}
              priority={index === 0}
              className="w-full h-full"
              objectFit="cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-2xl transition-opacity duration-150 ease-in-out ${textVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Main Title - Two Lines (Dynamic based on slide) */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {currentImage.title}
            <br />
            {currentImage.subtitle}
          </h1>

          {/* Description (Dynamic based on slide) */}
          <p className="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-md">
            {currentImage.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              text="Get Started"
              url="/collection"
              variant="primary"
            />
            <Button 
              text="Learn More"
              url="/about-us"
              variant="secondary"
            />
          </div>
        </div>
      </div>

      {/* Slide Dots - Centered at Bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <SlideDots 
          activeSlide={activeSlide}
          totalSlides={heroImages.length}
          onDotClick={handleSlideChange}
        />
      </div>
    </section>
  );
};

export default Hero;
