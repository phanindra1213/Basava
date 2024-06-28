'use client'
import { useState } from 'react';
import Navbar from '../navbar';
import Image from 'next/image';
import { basavaEnglishIntro, basavaKannadaIntro } from './Pages/content';

// English and Kannada versions of stats
const statsEnglish = [
  { label: 'Born', value: '1131 CE' },
  { label: 'Died', value: '1196 CE' },
  { label: 'Literature', value: 'Vachanas' },
  { label: 'Country', value: 'India' },
];

const statsKannada = [
  { label: 'ಹುಟ್ಟು', value: '1131 CE' },
  { label: 'ನಿಧನ', value: '1196 CE' },
  { label: 'ಸಾಹಿತ್ಯ', value: 'ವಚನ' },
  { label: 'ದೇಶ', value: 'ಭಾರತ್' },
];

export default function Introduction() {
  const [isEnglish, setIsEnglish] = useState(true);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIsEnglish(event.target.value === 'English');
  };

  const introContent = isEnglish ? basavaEnglishIntro : basavaKannadaIntro;
  const statsToDisplay = isEnglish ? statsEnglish : statsKannada;

  return (
    <div>
      <Navbar />
      <div className="py-7 sm:py-3">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-end mb-4 w-full">
            {/* Language Dropdown */}
            <select
              className="bg-gray-200 text-black py-0 px-2 rounded-md"
              onChange={handleLanguageChange}
              value={isEnglish ? 'English' : 'Kannada'}
            >
              <option value="English">English</option>
              <option value="Kannada">ಕನ್ನಡ</option>
            </select>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="relative lg:pr-4 mt-12">
              {/* Image section */}
              <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-96 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                <Image
                  className="absolute inset-0 object-cover brightness-125 saturate-0"
                  height={700}
                  width={700}
                  src="/images/about.jpg"
                  alt=""
                />
                <div className="absolute inset-0 bg-gray-700 mix-blend-multiply" />
                <div
                  className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                  aria-hidden="true"
                >
                  <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40"
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                  />
                </div>
                <figure className="relative isolate">
                  <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                    <p>“Work is Worship”</p>
                  </blockquote>
                  <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                    <strong className="font-semibold text-white">
                      Basava
                    </strong>{" "}
                    Reformer
                  </figcaption>
                </figure>
              </div>
              {/* Stats section */}
              <dl className="mt-10 grid grid-cols-2 gap-4">
                {statsToDisplay.map((stat, statIdx) => (
                  <div key={statIdx} className="bg-gray-200 p-4 rounded-sm">
                    <dt className="text-sm font-semibold text-gray-900">{stat.label}</dt>
                    <dd className="mt-2 text-lg font-bold text-gray-800">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <div className="text-base leading-7 text-gray-700 lg:max-w-lg text-balance">
                <h1 className="mt-8 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  {isEnglish ? 'WORK IS WORSHIP' : 'ಕಾಯಕವೇ ಕೈಲಾಸ'}
                </h1>
                <div className="max-w-xl text-gray-900">
                  {introContent.map((element, index) => (
                    <p key={index} className="mt-6 text-justify text-black">
                      {element}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

