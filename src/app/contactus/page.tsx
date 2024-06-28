'use client'
import { useState } from 'react';
import Navbar from "../navbar";
import Head from 'next/head';

export default function ContactUs() {
    const [language, setLanguage] = useState('english'); // Default language is English

    const toggleLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(event.target.value);
    };

    // English content
    const englishContent = (
        <div className="max-w-md w-full bg-white bg-opacity-80 shadow-md rounded-lg p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">Contact Us</h2>
            <p className="mb-6 text-black text-center">
                Join and spread the thoughts of Basava by giving new ideas for this site through BASAVA.ORG
            </p>
            <h2 className="text-xl md:text-2xl text-black text-center mb-2">Mail Us</h2>
            <p className="mb-6 text-black text-center">
                <a href="mailto:basavabhakt@gmail.com" className="underline">basavabhakt@gmail.com</a>
            </p>
        </div>
    );

    // Kannada content
    const kannadaContent = (
        <div className="max-w-md w-full bg-white bg-opacity-80 shadow-md rounded-lg p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">ನಮ್ಮಗೆ ಸಂಪರ್ಕಿಸಿ</h2>
            <p className="mb-6 text-black text-center">
                ಬಸವಣ್ಣನ ಹೊಸ ವಿಚಾರಗಳಿಂದ ಈ ಜಾಲತಾಣಕ್ಕೆ ಹೊಸ ಕಲ್ಪನೆಗಳನ್ನು ನೀಡಿ ಹಂಚಿರಿ
            </p>
            <h2 className="text-xl md:text-2xl text-black text-center mb-2">ನಮ್ಮನ್ನು ಇಮೇಲ್ ಮಾಡಿ</h2>
            <p className="mb-6 text-black text-center">
                <a href="mailto:basavabhakt@gmail.com" className="underline">basavabhakt@gmail.com</a>
            </p>
        </div>
    );

    return (
        <div>
            <Navbar />
            <div className="bg-black min-h-screen p-4 flex flex-col justify-center items-center hover:bg-opacity-100 transition duration-300">
                <Head>
                    <title>Contact Us</title>
                </Head>
                <div className="min-h-screen flex flex-col items-center justify-center py-1 px-4">
                    <div className="flex justify-end mb-4 w-full absolute top-12 right-0 pt-9 pr-3">
                        {/* Language Dropdown */}
                        <select
                            className="px-3 py-1 bg-gray-200 hover:bg-gray-500 rounded-md text-sm text-black focus:outline-none focus:ring-2 focus:ring-black"
                            onChange={toggleLanguage}
                            value={language}
                            style={{ minWidth: '6rem' }}
                        >
                            <option value="english">English</option>
                            <option value="kannada">ಕನ್ನಡ</option>
                        </select>
                    </div>
                    
                    {/* Conditional rendering based on selected language */}
                    {language === 'english' ? englishContent : kannadaContent}
                </div>
            </div>
        </div>
    );
}
