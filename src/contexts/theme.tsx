import React from "react";

interface ThemeProviderProps {
  children?: React.ReactNode;
}

interface ThemeContext {
  color: string;
  secondaryColor: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const INITIAL_VALUE: ThemeContext = {
  color: "red",
  secondaryColor: "yellow",
  setColor: () => {},
};

export const ThemeContext = React.createContext<ThemeContext>(INITIAL_VALUE);

function ThemeProvider({ ...props }: ThemeProviderProps) {
  const { children } = props;
  const [color, setColor] = React.useState<string>(INITIAL_VALUE.color);
  const [secondaryColor, setSecondaryColor] = React.useState<string>(INITIAL_VALUE.secondaryColor);
  return (
    <ThemeContext.Provider value={{ color, secondaryColor, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;