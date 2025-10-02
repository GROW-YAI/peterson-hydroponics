import React from 'react';
import Button from './Button';
import SlideDots from './SlideDots';

const Hero = ({
  title = "Empowering Innovation Through Technology",
  subtitle = "Welcome to Our Platform",
  description = "Join us in shaping the future with cutting-edge solutions and collaborative learning.",
  primaryButton = { text: "Get Started", url: "/get-started" },
  secondaryButton = { text: "Learn More", url: "/about" },
  activeSlide = 0,
  totalSlides = 4,
  onSlideChange,
  backgroundImage,
  backgroundColor = "bg-gradient-to-r from-green-50 to-emerald-50"
}) => {
  return (
    <section 
      className={`relative min-h-screen flex items-center ${backgroundColor} overflow-hidden`}
      style={backgroundImage ? { 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      {/* Background Overlay (if image is used) */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      )}

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Subtitle */}
          <p className="text-green-600 font-semibold text-lg mb-4 animate-fade-in">
            {subtitle}
          </p>

          {/* Main Title - Two Lines */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
            {title.split(' ').slice(0, 3).join(' ')}
            <br />
            {title.split(' ').slice(3).join(' ')}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed animate-fade-in-delay">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-delay-2">
            <Button 
              text={primaryButton.text}
              url={primaryButton.url}
              variant="primary"
            />
            <Button 
              text={secondaryButton.text}
              url={secondaryButton.url}
              variant="secondary"
            />
          </div>
        </div>
      </div>

      {/* Slide Dots - Centered at Bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <SlideDots 
          activeSlide={activeSlide}
          totalSlides={totalSlides}
          onDotClick={onSlideChange}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-green-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
