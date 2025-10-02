import React, { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import SlideDots from '../../../components/SlideDots';
import OptimizedImage from '../../../components/OptimizedImage';
import { heroImages, preloadHeroImage } from '../../../utils/imageOptimization';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Preload first image for better LCP
  useEffect(() => {
    if (heroImages[0]) {
      preloadHeroImage(heroImages[0].src);
    }
  }, []);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = heroImages[activeSlide];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Content */}
          <div className="max-w-2xl">
            {/* Main Title - Two Lines */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up drop-shadow-lg">
              Empowering Innovation Through
              <br />
              Sustainable Agriculture
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed animate-fade-in-delay drop-shadow-md">
              Join us in shaping the future with cutting-edge hydroponic solutions and organic food production. Let food be thy medicine and medicine be thy food!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-delay-2">
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

          {/* Right Side - Image Preview (Optional - shows current slide info) */}
          <div className="hidden lg:block">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 animate-fade-in-delay-2">
              <h3 className="text-white text-2xl font-semibold mb-2">
                {currentImage.name}
              </h3>
              <p className="text-gray-200 text-sm">
                Slide {activeSlide + 1} of {heroImages.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Dots - Centered at Bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <SlideDots 
          activeSlide={activeSlide}
          totalSlides={heroImages.length}
          onDotClick={setActiveSlide}
        />
      </div>
    </section>
  );
};

export default Hero;
