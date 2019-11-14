import React from "react";

const ThemeContext = React.createContext({
  theme: "light",
  setTheme: () => undefined
});

export default ThemeContext;
