
import backgroundVideo from "../assets/ab.mp4"

const Biography = () => {
  return (
    <section className="w-full py-16 bg-white"  id="bio">
      <h1 className="text-center py-5 text-3xl md:text-4xl font-bold mb-4">
        Contemporary Artist in Nigeria{" "}
      </h1>
      <div className="max-w-6xl mx-auto px-10 py-10 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Artist Image */}
        <div className="w-full md:w-1/2">
          <img
            src="../biola.jpg"
            alt="Artist"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Bio Text */}
        <div className="w-full md:w-1/2 text-gray-800">
          <ul>
            <li>Biography</li>
          </ul>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            I'm Abiola Abdulsalam
          </h2>

          <p className="text-lg leading-relaxed">
            Abdulsalam Abiola is contemporary Nigerian artist. Born in 1996, he
            studied Fine Arts and Applied Arts at Tai Solarin University in Ogun
            State, Nigeria. He has been practicing art professionally since
            2017.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            His paintings are an expression of figures using geometric shapes to
            carry out reality of activities and irony of life in our day to day
            lives. He is a colorist: he plays around with vibrant colors and
            brings out the originality of common objects around us.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            He has sold his paintings in his homeland and internationally. He is
            represented by numerous galleries Thought Pyramid, Top art gallery,
            Tripple A gallery, Moeshen art gallery and recently Mission Art
            Beirut.
          </p>
        </div>
      </div>

      <section className="w-full px-4 py-10 bg-gray-100 flex flex-col items-center">
        {/* Video Embed */}
        <div className="w-full max-w-4xl relative  h-screen overflow-hidden rounded-xl">
          {/* <iframe
            src="../src/assets/ab.mp4" // Replace with your own video link
            title="Social Media Promo"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          /> */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>

      
      </section>
    </section>
  );
};

export default Biography;
