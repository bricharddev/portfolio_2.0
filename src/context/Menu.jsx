import { createContext, useState } from "react";

export const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(!isOpen);
  };

  const value = {
    isOpen,
    setIsOpen,
    open,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export default MenuContextProvider;
