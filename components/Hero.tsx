import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full h-[80vh] relative">
      {/* Image and overlay */}
      <div className="absolute inset-0">
        <div className="w-full h-full relative">
          {/* overlay */}
          <div className="h-full w-full bg-black bg-opacity-80 z-20 absolute inset-0"></div>
          <Image
            src={"/hero.jpg"}
            alt="Rock and Roll Hall of Fame by Lance Anderson"
            fill
            className="object-cover grayscale z-10"
          />
        </div>
      </div>
      <div className="w-full h-full z-30 flex flex-col gap-6 relative responsive max-lg:gap-12 justify-center ">
        <h2 className="title-white ">
          We crush <br /> Minimal <br /> design.
        </h2>
        <p className="text-white max-w-[40ch] max-md:max-w-[25ch] text-left font-medium">
          <strong>MONOCHROME</strong> is a creative agency based in Chicago. We
          developed the genesis framework and build mobile-optimized themes for
          WordPress
        </p>
      </div>
    </section>
  );
};
export default Hero;
