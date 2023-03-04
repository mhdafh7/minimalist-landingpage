import { HeartIcon, MoonIcon } from "@heroicons/react/20/solid";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center text-center min-h-[20vh] bg-black text-white flex-col w-full gap-6">
      <span className="h-6 w-6">
        <MoonIcon />
      </span>
      <p className="w-full">
        Handcrafted with <HeartIcon className="w-3 h-3 inline-block"/> in Chicago · Powered by StudioPress
      </p>
      <p className="uppercase text-sm font-semibold">
        facebook <span className="text-gray-600">-</span> twitter{" "}
        <span className="text-gray-600">-</span> instagram
      </p>
    </footer>
  );
};
export default Footer;
