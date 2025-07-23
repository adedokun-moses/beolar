const Footer = () => {
  const topImages = [
    "../src/assets/biola.jpg",
    "../src/assets/biolarpen.jpeg",
    "../src/assets/biolarpen1.jpeg",
    "../src/assets/biolarpen2.jpeg",
    "../src/assets/biolarpen3.jpeg",
  ];

  const middleImages = [
    "../src/assets/biolarpen4.jpeg",
    "../src/assets/biolarpen5.jpeg",
    "../src/assets/biolarr.jpeg",
    "../src/assets/loveissweet.jpeg",
    "../src/assets/sweetmelody.jpeg",
  ];

  const bottomImages = [
    "../src/assets/strike.jpeg",
    "../src/assets/unity.jpeg",
    "../src/assets/biolarpen.jpeg",
    "../src/assets/loveissweet.jpeg",
    "../src/assets/biola.jpg",
  ];

  return (
    <footer className="relative bg-black py-16 px-4 overflow-hidden"  >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="grid grid-cols-5 gap-4 md:gap-6">
          {topImages.map((src, index) => (
            <div
              key={`top-${index}`}
              className="w-full aspect-[3/4] transform rotate-[-3deg] hover:rotate-0 hover:scale-105 transition-all duration-300 hover:z-50 cursor-pointer"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
            </div>
          ))}
        </div>

        {/* Middle Row - Overlapping */}
        <div className="absolute left-0 right-0 top-[35%] z-20 px-4 md:px-0">
          <div className="grid grid-cols-5 gap-4 md:gap-6">
            {middleImages.map((src, index) => (
              <div
                key={`mid-${index}`}
                className="w-full aspect-[3/4] transform rotate-[3deg] hover:rotate-0 hover:scale-105 transition-all duration-300 hover:z-100 cursor-pointer"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover rounded-xl shadow-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-[300px] grid grid-cols-5 gap-4 md:gap-6">
          {bottomImages.map((src, index) => (
            <div
              key={`bottom-${index}`}
              className="w-full aspect-[3/4] transform rotate-[-2deg] hover:rotate-0 hover:scale-105 transition-all duration-300 hover:z-50 cursor-pointer"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />
      {/* Contact Section Above Footer */}
      <div className="w-full bg-black text-white py-10 px-4 md:px-10 text-center space-y-6" id="contact">
        <h2 className="text-3xl md:text-4xl font-bold opacity-90">
          Get in Touch
        </h2>

        <p className="text-3xl md:text-2xl font-bold text-blue-400 underline underline-offset-4 hover:text-blue-300 transition duration-300">
          abdulsalamabiola@example.com
        </p>

        <div className="flex justify-center items-center gap-6 mt-4">
          {/* Instagram */}
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transform transition duration-300 hover:scale-110 hover:text-pink-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.5.2.9.5 1.3 1 .4.4.8.9 1 1.3.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.5-.5.9-1 1.3-.4.4-.9.8-1.3 1-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4a3.3 3.3 0 0 1-1.3-1c-.4-.4-.8-.9-1-1.3-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.5.5-.9 1-1.3.4-.4.9-.8 1.3-1 .4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.4 0-4.6.1-1.1.1-1.7.2-2 .3-.5.2-.9.4-1.2.7-.3.3-.5.7-.7 1.2-.1.3-.2.9-.3 2-.1 1.2-.1 1.5-.1 4.6s0 3.4.1 4.6c.1 1.1.2 1.7.3 2 .2.5.4.9.7 1.2.3.3.7.5 1.2.7.3.1.9.2 2 .3 1.2.1 1.5.1 4.6.1s3.4 0 4.6-.1c1.1-.1 1.7-.2 2-.3.5-.2.9-.4 1.2-.7.3-.3.5-.7.7-1.2.1-.3.2-.9.3-2 .1-1.2.1-1.5.1-4.6s0-3.4-.1-4.6c-.1-1.1-.2-1.7-.3-2-.2-.5-.4-.9-.7-1.2-.3-.3-.7-.5-1.2-.7-.3-.1-.9-.2-2-.3-1.2-.1-1.5-.1-4.6-.1zM12 6.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5zm0 9.1A3.6 3.6 0 1 0 8.4 12 3.6 3.6 0 0 0 12 15.6zm4.3-9.7a1.3 1.3 0 1 1-1.3-1.3 1.3 1.3 0 0 1 1.3 1.3z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transform transition duration-300 hover:scale-110 hover:text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5v-2.3c0-2.5 1.5-3.8 3.7-3.8 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.8l-.4 3h-2.4v7A10 10 0 0 0 22 12z" />
            </svg>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="transform transition duration-300 hover:scale-110 hover:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.88 3H21l-7.44 8.36L22.8 21h-6.38l-5.06-6.26L5.8 21H3l7.88-8.86L1.2 3h6.52l4.57 5.66L18.88 3z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="relative z-30 text-white text-center mt-20 text-sm opacity-80 flex flex-col md:flex-row justify-center items-center gap-2">
        <span>
          © {new Date().getFullYear()} Abdulsalam Abiola. All rights reserved.
        </span>
        <span className="hidden md:inline-block">|</span>
        <span>Designed by Adedokun Moses Omoniyi</span>
        <div className="flex items-center gap-3 mt-2 md:mt-0 md:ml-3">
          <a
            href="https://x.com/yourhandle" // replace with your actual X handle
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white hover:text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.88 3H21l-7.44 8.36L22.8 21h-6.38l-5.06-6.26L5.8 21H3l7.88-8.86L1.2 3h6.52l4.57 5.66L18.88 3z" />
            </svg>
          </a>
          <a
            href="www.linkedin.com/in/
adedokun-moses"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white hover:text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM7.5 8h3.7v2.4h.1c.5-.9 1.8-1.9 3.8-1.9 4 0 4.7 2.6 4.7 5.9V24h-4v-7.4c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4v7.5h-4V8z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
