import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function PastProjectsSection() {
  const projects = [
    {
      title: "SWEET MELODY",
      medium: "Acrylic on canvas",
      dimension: "60 inches x 55 inches",
      year: "2025",
      image: "../src/assets/sweetmelody.jpeg",
    },
    {
      title: "ECHOES OF SILENCE",
      medium: "Acrylic on canvas",
      dimension: "48 inches x 36 inches",
      year: "2025",
      image: "../src/assets/loveissweet.jpeg",
    },
    {
      title: "On Her Scale of Thought",
      medium: "Acrylic on canvas",
      dimension: " 4ft x 4ft",
      year: "2025",
      image: "../src/assets/scale.jpeg",
    },
    {
      title: "Strike a pose",
      medium: "Acrylic on canvas",
      dimension: " 4ft x 4ft",
      year: "2025",
      image: "../src/assets/strike.jpeg",
    },

    {
      title: "Unity in diversity",
      medium: "Acrylic on canvas",
      dimension: " 4ft x 4ft",
      year: "2025",
      image: "../src/assets/unity.jpeg",
    },
    {
      title: "Unity in diversity",
      medium: "Acrylic on canvas",
      dimension: " 4ft x 4ft",
      year: "2025",
      image: "../src/assets/unity.jpeg",
    },
  ];
  useEffect(() => {
     AOS.init({
    duration: 1000,
    once: false, 
    mirror: true, 
  });
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-8 lg:px-16"  id="projects">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"  data-aos="fade-up">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="transform transition duration-500 hover:scale-105 bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl cursor-pointer"
          >
            <img src={project.image} alt={project.title} className="w-full" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {project.medium}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {project.dimension}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {project.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
