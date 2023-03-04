import React, { createContext, useState, useContext, ReactNode } from "react";

interface HamburgerMenuContextType {
  isOpen: boolean;
  toggleMenu: () => void;
}

interface Props {
  children: ReactNode;
}

const HamburgerMenuContext = createContext<HamburgerMenuContextType>({
  isOpen: false,
  toggleMenu: () => {},
});

const HamburgerMenuProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HamburgerMenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </HamburgerMenuContext.Provider>
  );
};

const useHamburgerMenu = () => useContext(HamburgerMenuContext);

export { HamburgerMenuProvider, useHamburgerMenu };
