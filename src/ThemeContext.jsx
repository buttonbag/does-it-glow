import { createContext, useContext, useState } from "react";

// create Context
const ThemeContext = createContext();

// specify info to provide 
export function ThemeProvider({children}) {
  
  // isDark is a boolean state variable with an initial value of false
  const [isDark, setIsDark] = useState(false);
  
  // theme is "dark" if it isDark; otherwise it is "light"
  const theme = isDark ? "dark" : "light";
  
  // toggleTheme is a function that sets isDark to the opposite value when called
  function toggleTheme() {
    setIsDark(!isDark);
  }
  const value = {isDark, theme, toggleTheme};
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// a custom hook named useTheme 
export function useTheme() {
  // subscribe to ThemeContext if possible. 
  const context = useContext(ThemeContext);
  // throws an Error if called outside ThemeProvider (i.e. useContext returns null).
  if (!context) {
    throw Error("useTheme must be used withint a ThemeProvider");
  }
  return context;
} 