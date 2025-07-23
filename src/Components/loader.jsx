import React, { useEffect, useState } from 'react';
import loaderVideo from '../assets/abart.mp4'; // Update the path if needed

const Loader = ({ onFinish }) => {
  const name = 'Abiola-Abdulsalam';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < name.length) {
        setDisplayedText((prev) => prev + name[index]);
        setIndex((prev) => prev + 1);
      }
    }, 3000 / name.length);

    const startFade = setTimeout(() => {
      setFadeOut(true);
    }, 9000); // Start fade at 9s

    const hideLoader = setTimeout(() => {
      onFinish();
    }, 3000); // Finish at 10s

    return () => {
      clearInterval(typingInterval);
      clearTimeout(startFade);
      clearTimeout(hideLoader);
    };
  }, [index, name, onFinish]);

  return (
    <div
      className={`fixed inset-0 w-full h-full flex items-center justify-center z-50 overflow-hidden transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={loaderVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Name animation */}
      <h1 className="relative z-10 text-white text-4xl md:text-6xl font-bold tracking-widest animate-pulse">
        {displayedText}
      </h1>
    </div>
  );
};

export default Loader;
