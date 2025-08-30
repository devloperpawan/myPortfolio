// import { createContext, useContext, useState } from "react";

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setThemes] = useState("light");

//   const toogleTheme = () => {
//     setThemes((prev) => (prev === "light" ? "dark" : "light"));
//   };
//   return <ThemeContext.Provider value={{theme, toogleTheme}}>{children}</ThemeContext.Provider>;
// };

// export const useTheme = () => useContext(ThemeContext);
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Load theme from localStorage or default to "light"
  const [theme, setThemes] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toogleTheme = () => {
    setThemes((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
