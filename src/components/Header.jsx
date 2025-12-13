import React from 'react';

const Header = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1">
         Quote Generator
      </h1>
      <p className="text-gray-600 text-sm md:text-base">
        Generate inspiring quotes... 
      </p>
    </div>
  );
};

export default Header;
