'use client'
import React, { useState } from 'react';
import QuoteBox from './QuoteBox';
import Navbar from '../navbar';
import { englishVachana } from './englishVachana';
import { kannadaVachana } from './vachana'; // Assuming you have Kannada quotes defined here

const Vachana = () => {
  const [language, setLanguage] = useState('english'); // Default language is English

  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'kannada' : 'english');
  };

  const vachanaData = language === 'english' ? englishVachana : kannadaVachana;
  const headingText = language === 'english' ? "Basavanna Vachana's" : "ಬಸವಣ್ಣ ವಚನಗಳು";

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center py-1 px-4 bg-white">
        <div className="flex justify-end mb-4 w-full">
          {/* Language Dropdown */}
          <select
            className="px-3 py-1  bg-gray-200 hover:bg-gray-500 rounded-md text-sm text-black focus:outline-none focus:ring-2 focus:ring-black"
            onChange={toggleLanguage}
            value={language}
            style={{ minWidth: '6rem' }} // Added minWidth for dropdown size control
          >
            <option value="english">English</option>
            <option value="kannada">ಕನ್ನಡ</option>
          </select>
        </div>
        <h1 className="text-4xl font-bold mb-8 text-black">{headingText}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vachanaData.map((quote, index) => (
            <QuoteBox key={index} quote={quote} /> // Removed style prop
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vachana;
