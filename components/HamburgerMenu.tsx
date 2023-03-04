import { navitems } from "@/constants/NavigationItems";

const HamburgerMenu = () => {
  return (
    <div className="fixed h-screen w-screen bg-black flex flex-col z-[99]">
      <ul className="flex gap-12 h-full w-full text-white flex-col items-center justify-center">
        {navitems.map((item) => {
          return (
            <li key={item}>
              <button className="px-2 py-2 hover:bg-gray-500 font-semibold text-2xl uppercase">
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default HamburgerMenu;
