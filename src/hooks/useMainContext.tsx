import { createContext, useContext, FC, ReactNode, useState } from "react";

export const Context = createContext<{
  currentTheme: string;
  setCurrentTheme: React.Dispatch<React.SetStateAction<string>>;
}>({ currentTheme: "", setCurrentTheme: () => "" });

export const useMainContext = () => {
  return useContext(Context);
};

export const MainProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("#009b00");

  const value = {
    currentTheme,
    setCurrentTheme,
  };

  return (
    <>
      <Context.Provider value={value}>{children}</Context.Provider>
    </>
  );
};
