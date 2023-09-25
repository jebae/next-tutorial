import Link from "next/link";
import { useContext } from "react";
import ThemeContext from "~/contexts/theme";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const newThemeName = theme === "dark" ? "light" : "dark";

  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 25,
      }}
    >
      <div>Cats & Dogs</div>
      <div>
        <Link href="/">Dogs </Link>
        <Link href="/cats">Cats </Link>
        <button onClick={toggleTheme}>{newThemeName}</button>
      </div>
    </nav>
  );
};

export default NavBar;
