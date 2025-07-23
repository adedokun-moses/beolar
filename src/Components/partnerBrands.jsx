export default function PartnerBrandsSection() {
  const brands = [
    {
      name: "First Khan",
      role: "CEO",
      review:
        "This designer is amazing!. </br> They have an incredible eye for design and were able to create a stunning logo for my business that perfectly captured the essence of what we do. They were also a pleasure to work with",
    },
    {
      name: "Amir Khan",
      role: "CEO",
      review:
        "This designer is amazing! They have an incredible eye for design and were able to create a stunning logo for my business that perfectly captured the essence of what we do. They were also a pleasure to work with",
    },
    {
      name: "Amir Khan",
      role: "CEO",
      review:
        "This designer is amazing! They have an incredible eye for design and were able to create a stunning logo for my business that perfectly captured the essence of what we do. They were also a pleasure to work with",
    },
    {
      name: "Amir Khan",
      role: "CEO",
      review:
        "This designer is amazing! They have an incredible eye for design and were able to create a stunning logo for my business that perfectly captured the essence of what we do. They were also a pleasure to work with",
    },
    {
      name: "Amir Khan",
      role: "CEO",
      review:
        "This designer is amazing! They have an incredible eye for design and were able to create a stunning logo for my business that perfectly captured the essence of what we do. They were also a pleasure to work with",
    },
    {
      name: "Amir Khan",
      role: "CEO",
      review:
        "This designer is amazing! They have an incredible eye for design and were able to create a stunning logo for my business that perfectly captured the essence of what we do. They were also a pleasure to work with",
    },
    {
      name: "Last Khan",
      role: "CEO",
      review:
        "This designer is amazing! They have an incredible eye for design and were able to create a stunning logo for my business that perfectly captured the essence of what we do. They were also a pleasure to work with",
    },

    // Add more brand objects
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 px-4  ">
      {/* Scrolling Header Text */}
      <div className="overflow-hidden whitespace-nowrap mb-8">
        <div className="animate-marquee inline-block text-2xl font-semibold text-gray-800 dark:text-white">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="mx-4 opacity-70 text-9xl font-bold">
              Clients <span className="text-black">Review</span>
            </span>
          ))}
        </div>
      </div>

  
      <div className="overflow-hidden whitespace-nowrap w-full">
        <div className="flex gap-6 animate-testimonial  w-max">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="w-[30%] min-w-[300px] max-w-[350px] h-[280px] bg-white dark:bg-gray-800 p-4 rounded-xl border shadow-md flex-shrink-0"
            >
              <div className="flex justify-between items-center py-5">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {brand.name}
                </h2>
                <span className="text-sm text-right text-gray-500 dark:text-gray-300">
                  {brand.role}
                </span>
              </div>
              <div className="flex-1 overflow-y-auto">
                <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-normal break-words">
                  {brand.review}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden whitespace-nowrap w-full mt-10">
        <div className="flex gap-6 animate-testimonial  w-max">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="w-[30%] min-w-[300px] max-w-[350px] h-[280px] bg-white dark:bg-gray-800 p-4 rounded-xl border shadow-md flex-shrink-0"
            >
              <div className="flex justify-between items-center py-5">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {brand.name}
                </h2>
                <span className="text-sm text-right text-gray-500 dark:text-gray-300">
                  {brand.role}
                </span>
              </div>
              <div className="flex-1 overflow-y-auto">
                <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-normal break-words">
                  {brand.review}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 
      <div className="overflow-hidden whitespace-nowrap w-full">
        <div className="flex gap-6 animate-marquee w-max">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="w-[30%] min-w-[300px] max-w-[350px] h-[280px] bg-white dark:bg-gray-800 p-4 rounded-xl border shadow-md flex-shrink-0 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center pb-2">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  {brand.name}
                </h2>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  {brand.role}
                </span>
              </div>

              <div className="flex-1 overflow-y-auto">
                <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-normal break-words">
                  {brand.review}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
