import React from 'react';
import heroVideo from '../../../assets/Herovideo.mp4'; // Ensure this path is correct


const Hero = () => {
  return (
    <div className="relative flex h-screen ">
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative z-10 mx-auto w-fit flex flex-col items-start gap-y-4 p-20 bg-black bg-opacity-35">
        <div className="flex flex-col text-5xl text-white">
          <span className="font-bold">Peterson Hydroponics</span>
          <span className="font-thin">Your Food Solutions<br /></span>
        </div>
        <p className="w-80 text-white ">
        Let food be thy medicine and medicine be thy food!
        </p>
        <button className="#E90074 py-2 rounded-full drop-shadow-lg text-green-400 font-bold">
          WELCOME
        </button>
      </div>
    </div>
  );
}


export default Hero;


