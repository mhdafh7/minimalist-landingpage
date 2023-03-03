import { navitems } from "@/constants/NavigationItems";
import { MagnifyingGlassIcon, MoonIcon } from "@heroicons/react/20/solid";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white w-full px-6 py-4">
      <span className="w-6 h-6">
        <MoonIcon className="w-6 h-6" />
      </span>
      <nav className="flex items-center gap-4">
        <ul className="flex gap-2">
          {navitems.map((item) => {
            return (
              <li key={item}>
                <button className="px-2 py-2 hover:bg-gray-500 font-medium">{item}</button>
              </li>
            );
          })}
        </ul>
        <MagnifyingGlassIcon className="w-5 h-5" />
      </nav>
    </header>
  );
};
export default Header;
