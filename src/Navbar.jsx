import {useTheme} from "./ThemeContext";

export default function Navbar() {
  const {toggleTheme, isDark} = useTheme();
  return (
    <header>
      <h1>Does it glow?</h1>
      <button
        id="toggle"
        onClick={toggleTheme}
        className="material-symbols-outlined"
        aria-label="Toggle light/dark mode"
      >
      {isDark ? "light_mode" : "dark_mode"}
      </button>
    </header>
  );
}
