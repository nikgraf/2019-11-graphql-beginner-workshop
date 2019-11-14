import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <button onClick={() => setTheme("light")} type="button">
        light {theme === "light" && "(active)"}
      </button>
      <button onClick={() => setTheme("dark")} type="button">
        dark {theme === "dark" && "(active)"}
      </button>
    </>
  );
}

export default ThemeSwitcher;
