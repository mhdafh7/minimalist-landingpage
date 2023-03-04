import Cta from "./Cta";

const Banner = () => {
  return (
    <div className="w-full min-h-[20vh] bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center flex gap-4 items-center justify-center max-md:flex-col">
      <p className="text-lg font-semibold">
        Hit the ground running with a minimalistic look.
      </p>
      <button className="px-4 py-3 uppercase hover:bg-gray-300 transition-colors bg-white text-black text-xs text-center font-medium max-w-[7rem]">
        Learn More
      </button>
    </div>
  );
};
export default Banner;
