import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../static/image/Adventurers.png';

const ParallaxPage = () => {
  return (
    <div className="relative">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >

        <div className="flex flex-col items-center justify-center h-[800px] text-white">
          <h1 className="text-4xl font-bold text-center mb-6">Welcome to Dungeons & Dragon<br/> Spells World</h1>
          
         <Link to="/all"> <button onClick={()=>{console.log("Hello")}} className="hover:transform hover:scale-110 hover:-rotate- px-6 py-3 bg-[#f02424] text-white rounded-lg font-semibold shadow-md">
            View All Spells
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default ParallaxPage;
