import React from 'react';

const SlideDots = ({ activeSlide, totalSlides, onDotClick }) => {
  return (
    <div className="flex justify-center items-center gap-3">
      {Array.from({ length: totalSlides }, (_, index) => (
        <button
          key={index}
          onClick={() => onDotClick && onDotClick(index)}
          className={`
            transition-all duration-300 rounded-full cursor-pointer
            ${activeSlide === index 
              ? 'w-10 h-3 bg-white shadow-lg' 
              : 'w-3 h-3 bg-white bg-opacity-50 hover:bg-opacity-75'
            }
          `}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={activeSlide === index ? 'true' : 'false'}
        />
      ))}
    </div>
  );
};

export default SlideDots;
