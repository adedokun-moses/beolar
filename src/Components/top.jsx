import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {visible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-black cursor-pointer text-white rounded-full animate-bounce shadow-md hover:bg-gray-800 transition-all duration-300"
          aria-label="Back to Top"
        >
          <i className="fas fa-arrow-up text-lg"></i>
        </button>
      )}
    </div>
  );
}
