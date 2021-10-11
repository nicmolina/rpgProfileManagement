import React from "react";

interface ThemeProviderProps {
  children?: React.ReactNode;
}

interface ThemeContext {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const INITIAL_VALUE: ThemeContext = {
  color: "",
  setColor: () => {},
};

export const ThemeContext = React.createContext<ThemeContext>(INITIAL_VALUE);

function ThemeProvider({ ...props }: ThemeProviderProps) {
  const { children } = props;
  const [color, setColor] = React.useState<string>(INITIAL_VALUE.color);

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;