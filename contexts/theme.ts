import { createContext } from "react";

interface ThemeContext {
  theme: "light" | "dark";
  toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContext>({
  theme: "light",
  toggleTheme: () => null,
});

export default ThemeContext;
