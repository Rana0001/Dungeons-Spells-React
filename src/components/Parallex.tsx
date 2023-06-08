import React from 'react';
import bgImage from '../static/image/Adventurers.png';

const ParallaxPage = () => {
  return (
    <div className="relative">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >

        <div className="flex flex-col items-center justify-center h-[500px] text-white">
          <h1 className="text-4xl font-bold text-center mb-6">Welcome to Dungeons & Dragon World</h1>
          <button onClick={()=>{console.log("Hello")}} className="px-6 py-3 bg-[#f02424] text-white rounded-lg font-semibold shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParallaxPage;
