import { ReactElement } from "react";

const Cta = ({ children }: { children: string | ReactElement }) => {
  return (
    <button className="px-4 py-3 uppercase hover:bg-gray-700 transition-colors bg-black text-white text-xs text-center font-medium max-w-[7rem]">
      {children}
    </button>
  );
};
export default Cta;
