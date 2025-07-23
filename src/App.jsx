import "./App.css";
import { useState, useEffect } from "react";
import FooterBar from "./Components/footerBar";
import HeroVideo from "./Components/heroHeader";
import Loader from "./Components/loader";
import Biography from "./Components/biography";
import PastProjectsSection from "./Components/myProjects";
import PartnerBrandsSection from "./Components/partnerBrands";
import Exhibitions from "./Components/Exhibitions";
import AOS from "aos";
import "aos/dist/aos.css";
import BackToTop from "./Components/top";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <HeroVideo></HeroVideo>
          <img src="../assets/react.svg" alt="" />
          <Biography></Biography>
          <PastProjectsSection data-aos="fade-up"></PastProjectsSection>
          <Exhibitions></Exhibitions>
          <PartnerBrandsSection></PartnerBrandsSection>
          <FooterBar></FooterBar>
          <BackToTop></BackToTop>
          <a
            href="https://wa.me/2349161291312"
            className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 group"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="animate-bounce group-hover:animate-none"
            >
              <path d="M20.52 3.48A11.999 11.999 0 0 0 3.48 20.52l-1.48 5.18 5.18-1.48A12 12 0 0 0 20.52 3.48zm-6.57 13.94c-2.3 0-4.45-.89-6.07-2.51a8.54 8.54 0 0 1-2.3-4.92c-.08-.6.34-1.14.95-1.22l2.28-.3a1.02 1.02 0 0 1 1.18.87l.28 1.83a1.01 1.01 0 0 1-.35.94l-.97.78a7.03 7.03 0 0 0 3.61 3.6l.78-.97a1.01 1.01 0 0 1 .94-.35l1.83.28a1.02 1.02 0 0 1 .87 1.18l-.3 2.28a1.01 1.01 0 0 1-1.22.95z" />
            </svg>
            <span className="font-semibold hidden sm:block">Let’s Talk</span>
          </a>
        </>
      )}
    </>
  );
}

export default App;
