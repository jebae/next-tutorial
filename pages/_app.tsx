import "~/styles/globals.css";
import { type AppProps } from "next/app";
import NavBar from "~/components/NavBar";
import { useState } from "react";
import ThemeContext from "~/contexts/theme";

const themes = {
  dark: {
    background: "black",
    color: "white",
  },
  light: {
    background: "white",
    color: "black",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const [ theme, setTheme ] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          ...themes[theme],
        }}
      >
        <NavBar />
        <Component {...pageProps} />
      </div>
    </ThemeContext.Provider>
  );
}

export default MyApp;
