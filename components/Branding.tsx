import Image from "next/image";
import SmallDivider from "./SmallDivider";

const Branding = () => {
  return (
    <section className="w-full h-[60vh] relative flex flex-col gap-12 justify-center responsive max-lg:gap-12">
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
      <div className="flex flex-col gap-3 w-full justify-center z-50">
        <h2 className="title-white">We build brands.</h2>
        <p className="text-lg text-white">
          A Simple look is all you need to crush your competition.
        </p>
      </div>
      <SmallDivider color="white"/>
    </section>
  );
};
export default Branding;
