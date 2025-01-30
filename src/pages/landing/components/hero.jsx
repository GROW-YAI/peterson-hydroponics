import React from 'react';
import heroVideo from '../../../assets/Herovideo.mp4'; // Ensure this path is correct

const Hero = () => {
  return (
    <div className="relative flex h-screen overflow-hidden">
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative z-10 mx-auto w-fit flex flex-col items-start gap-y-4 p-20 bg-black bg-opacity-50">
        <div className="flex flex-col text-5xl text-white">
          <span className="font-bold">Tilopsy</span>
          <span className="font-thin">Your Best Bet For Events<br /></span>
        </div>
        <p className="w-80 text-white">
          What’s that, you say? He inhaled a painting?? The man must be enormous! Not quite. Wigan’s works are ‘micro-sculptures’, so tiny they must be viewed through a microscope.
        </p>
        <button className="#E90074 px-6 py-2 rounded-full drop-shadow-lg text-cyan-800">
          DISCOVER
        </button>
      </div>
    </div>
  );
}

export default Hero;
