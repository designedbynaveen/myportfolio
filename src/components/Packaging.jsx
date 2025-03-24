import React from 'react';
import PACKAGE from '../package';
function Packaging() {
  return (
    <div className="w-full p-4">
         <h1 className="text-5xl font-bold text-center text-gray-800 m-12">
        Packaging Design
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full">
        {/* Row 1 - Two wide rectangles */}
        <div className="bg-blue-500 rounded-xl sm:col-span-2 aspect-[2/1] flex items-center justify-center">
        <img 
            src={PACKAGE['five']} 
            alt="Package design"
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
          />
        
        </div>
        
        <div className="bg-green-500 rounded-xl sm:col-span-2 aspect-[2/1]  flex items-center justify-center">
        <img 
            src={PACKAGE['four']} 
            alt="Package design"
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
          />
        </div>
        
        {/* Row 2 - Mixed squares and rectangles */}
        <div className="bg-purple-500 rounded-xl sm:col-span-1 aspect-square flex items-center justify-center">
        <img 
            src={PACKAGE['two']} 
            alt="Package design"
            className="absolute inset-0 "
          />
        </div>
        
        <div className="bg-yellow-500 rounded-xl sm:col-span-2 aspect-[3/1.5]  p-3 flex items-center justify-center">
        <img 
            src={PACKAGE['six']} 
            alt="Package design"
            className="absolute inset-0 "
          />
        </div>
        
        <div className="bg-red-500 rounded-xl sm:col-span-1 aspect-square  flex items-center justify-center">
        <img 
            src={PACKAGE['three']} 
            alt="Package design"
            className="absolute inset-0 "
          />
        </div>
        
        {/* Row 3 - Tall rectangle */}
        
      </div>
    </div>
  );
}

export default Packaging;