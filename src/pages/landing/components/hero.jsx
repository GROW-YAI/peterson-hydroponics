import React from 'react';
import heroVideo from '../../../assets/Herovideo.mp4'; // Ensure this path is correct

const Hero = () => {
  return (
    <div className="relative flex h-screen items-center justify-center">
      {/* Background Video */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      
      {/* Hero Content */}
      <div className="relative z-10 w-full flex flex-col items-center gap-y-4 px-4 sm:px-6 py-12 bg-black bg-opacity-35 text-center">
        <div className="text-white text-3xl sm:text-4xl md:text-5xl max-w-full px-4">
          <span className="font-bold">Peterson Hydroponics</span>
          <br />
          <span className="font-thin">Your Organic Food Solutions</span>
        </div>
        <p className="max-w-xs sm:max-w-md px-4 text-white text-sm sm:text-base">
          Let food be thy medicine and medicine be thy food!
        </p>
        
        {/* Welcome Button */}
        <button className="py-2 px-6 rounded-full drop-shadow-lg text-green-400 font-bold text-3xl sm:text-4xl">
          WELCOME
        </button>
      </div>
    </div>
  );
};

export default Hero;
