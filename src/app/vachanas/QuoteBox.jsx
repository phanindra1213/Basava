// components/QuoteBox.js
import React from 'react';
import Image from 'next/image';

const QuoteBox = ({ quote }) => {
  // Define the background image URL (replace 'url-to-your-image.jpg' with your actual image URL)
  const backgroundImageUrl = '';

  return (
    <div className="relative bg-gray-100 shadow-lg rounded-lg p-6 m-4 hover:shadow-xl transition-shadow duration-300 ease-in-out break-inside"
         style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <p className="text-black text-lg mb-4">{quote}</p>
      <p className="text-gray-500 text-right">- Vishwaguru Basavana</p>
    </div>
  );
};

export default QuoteBox;

