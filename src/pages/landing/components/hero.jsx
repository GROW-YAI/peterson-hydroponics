import React from 'react';
import heroVideo from '../../../assets/Herovideo.mp4'; // Ensure this path is correct

const Hero = () => {
  return (
    <div className="relative flex h-screen">
      {/* Background Video */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      
      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-fit flex flex-col items-center gap-y-4 p-20 bg-black bg-opacity-35 text-center">
        <div className="text-white text-5xl">
          <span className="font-bold">Peterson Hydroponics</span>
          <br />
          <span className="font-thin">Your Food Solutions</span>
        </div>
        <p className="w-80 text-white">
          Let food be thy medicine and medicine be thy food!
        </p>
        
        {/* Welcome Button */}
        <button className="#E90074 py-2 rounded-full drop-shadow-lg text-green-400 font-bold text-4xl">
          WELCOME
        </button>
        {/* <button className=" hover:bg-green-600 text-green-400 text-2xl font-bold py-3 px-8 rounded-full drop-shadow-lg">
          WELCOME
        </button> */}
      </div>
    </div>
  );
};

export default Hero;
