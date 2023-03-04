import { navitems } from "@/constants/NavigationItems";
import { MagnifyingGlassIcon, MoonIcon } from "@heroicons/react/20/solid";
import { useHamburgerMenu } from '@/context/HamburgerContext'

const Header = () => {
  const { isOpen, toggleMenu } = useHamburgerMenu();

  return (
    <header className="flex justify-between items-center bg-white w-full px-6 py-4 fixed top-0 z-[98] shadow-sm">
      <span className="w-6 h-6">
        <MoonIcon className="w-6 h-6" />
      </span>
      <nav className="flex items-center gap-4 max-md:hidden">
        <ul className="flex gap-2">
          {navitems.map((item) => {
            return (
              <li key={item}>
                <button className="px-2 py-2 hover:bg-gray-500 font-medium">
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
        <MagnifyingGlassIcon className="w-5 h-5" />
      </nav>
      {/* Hamburger */}
      <button
        className="hidden max-md:block text-gray-500 w-10 h-10 relative focus:outline-none bg-white z-[100]"
        onClick={() => toggleMenu()}
      >
        <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
              isOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
              isOpen ? "-rotate-45" : ""
            }`}
          ></span>
        </div>
      </button>
    </header>
  );
};
export default Header;
