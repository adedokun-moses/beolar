import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const exhibitionsData = [
  {
    type: "Solo Exhibition",
    name: "ORCHESTRA",
    gallery: "Mission Art Gallery",
    location: "Beirut, Lebabnon",
    year: 2023,
  },
  {
    type: "Group Exhibition",
    name: "ARTOVE EXPO",
    gallery: "Lifemate Nigeria Showroom",
    location: "Lagos, Nigeria",
    year: 2019,
  },
  {
    type: "Group Exhibition",
    name: "REIMAGINING ",
    gallery: "Tripplea Gallery",
    location: "Lagos, Nigeria",
    year: 2021,
  },
  {
    type: "Group Exhibition",
    name: "BECOMING BY ",
    gallery: "Thought Pyramid Gallery",
    location: "Abuja, Nigeria",
    year: 2021,
  },
];

export default function Exhibitions() {
  const controls = useAnimation();
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (visible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [visible, controls]);

  return (
    <section
      ref={ref}
      className="min-h-screen px-4 py-16 bg-black text-white relative z-30"  id="exhibitions"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Exhibitions</h2>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { x: "-100vw", opacity: 0 },
          visible: { x: 0, opacity: 1, transition: { duration: 1 } },
        }}
        className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto"
      >
        {exhibitionsData.map((exhibition, index) => (
          <div
            key={index}
            className="border-l-4 border-white pl-4 py-2 hover:bg-white hover:text-black transition-colors duration-300 rounded-md"
          >
            <h3 className="text-xl font-semibold">{exhibition.name}</h3>
            <p className="text-sm italic">{exhibition.type}</p>
            <p>{exhibition.gallery}</p>
            <p>{exhibition.location}</p>
            <p className="text-gray-400">{exhibition.year}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
