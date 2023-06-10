import React from 'react';
import image from "../static/image/dragon.png"

const SpellDetails: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-4">
                  <h2 className="text-2xl font-bold mb-4">Product Name</h2>
                  <p className="text-gray-600 mb-4">Product description goes here...</p>
                  <p className="text-green-600 font-bold mb-4">Price: $19.99</p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                  </button>
                </div>
                <div className="p-4">
                  <img
                    className="w-full h-auto object-cover"
                    src="product-image.jpg"
                    alt="Product"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default SpellDetails;

  


