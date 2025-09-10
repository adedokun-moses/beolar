import { useEffect, useState } from "react";
import backgroundVideo from "../assets/abart.mp4";

const HeroVideo = () => {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const bioSection = document.getElementById("bio");
      const contactSection = document.getElementById("contact");
      const scrollY = window.scrollY;

      if (!bioSection || !contactSection) return;

      const bioTop = bioSection.offsetTop;
      const contactTop = contactSection.offsetTop;

      // Switch to dark background when scrolled to Bio or Contact
      if (scrollY >= bioTop - 100 || scrollY >= contactTop - 100) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // return (
  //   <div className="relative w-full h-screen overflow-hidden">
  //     <header
  //       className={`fixed w-full z-50 transition-colors duration-500 ${
  //         isDark ? "bg-black bg-opacity-90" : "bg-transparent"
  //       }`}
  //     >
  //       <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
  //         <div className="flex items-center space-x-2">
  //           <img
  //             src="../biola.jpg"
  //             alt="Logo"
  //             className="w-8 h-8 object-contain rounded-xl"
  //           />
  //           <span className="text-xl font-bold">Abdulsalam</span>
  //         </div>

  //         <ul className="flex gap-6 text-sm uppercase font-semibold tracking-wide">
  //           <li>
  //             <a href="#bio" className="hover:text-gray-300">
  //               Bio
  //             </a>
  //           </li>
  //           <li>
  //             <a href="#projects" className="hover:text-gray-300">
  //               Projects
  //             </a>
  //           </li>
  //           <li>
  //             <a href="#exhibitions" className="hover:text-gray-300">
  //               Exhibitions
  //             </a>
  //           </li>
  //           <li>
  //             <a href="#contact" className="hover:text-gray-300">
  //               Contact
  //             </a>
  //           </li>
  //         </ul>
  //       </nav>
  //     </header>

  //     <video
  //       autoPlay
  //       loop
  //       muted
  //       playsInline
  //       className="absolute top-0 left-0 w-full h-full object-cover z-0"
  //     >
  //       <source src={backgroundVideo} type="video/mp4" />
  //     </video>

  //     {/* Overlay */}
  //     <div className="absolute inset-0 bg-black/50 z-10" />

  //     {/* Hero Content */}
  //     <div className="relative z-20 w-full h-full">
  //       <div className="absolute inset-0 flex">
  //         {/* Left: Name at bottom */}
  //         <div className="w-1/2 flex items-end justify-start p-8">
  //           <h1 className="text-white text-5xl md:text-7xl font-extrabold text-black">
  //             Abiola Abdulsalam
  //           </h1>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <header
        className={`fixed w-full z-50 transition-colors duration-500 ${
          isDark ? "bg-black bg-opacity-90" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
          <div className="flex items-center space-x-2">
            <img
              src="../biola.jpg"
              alt="Logo"
              className="w-8 h-8 object-contain rounded-xl"
            />
            <span className="text-xl font-bold">Abdulsalam</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-sm uppercase font-semibold tracking-wide">
            <li>
              <a href="#bio" className="hover:text-gray-300">
                Bio
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#exhibitions" className="hover:text-gray-300">
                Exhibitions
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-black bg-opacity-90 text-white px-6 py-4">
            <ul className="space-y-4 uppercase text-sm font-semibold">
              <li>
                <a href="#bio" onClick={() => setMenuOpen(false)}>
                  Bio
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setMenuOpen(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#exhibitions" onClick={() => setMenuOpen(false)}>
                  Exhibitions
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 w-full h-full">
        <div className="absolute inset-0 flex flex-col md:flex-row">
          {/* Left: Name (Centered on mobile, bottom-left on desktop) */}
          <div className="w-full md:w-1/2 flex items-center justify-center md:items-end md:justify-start p-8">
            <h1 className="text-white text-4xl mt-100 md:text-7xl font-extrabold text-center md:text-left">
              Abiola Abdulsalam
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
