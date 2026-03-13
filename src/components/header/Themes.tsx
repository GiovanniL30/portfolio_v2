import { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const themes = [
  { id: "light", name: "Light (Default)" },
  { id: "dark", name: "Dark (Default)" },
  { id: "dracula", name: "Dracula" },
  { id: "light-blue", name: "Light Blue" },
  { id: "dark-orange", name: "Dark Orange" },
  { id: "solarized-light", name: "Solarized Light" },
  { id: "solarized-dark", name: "Solarized Dark" },
  { id: "nord-cyan", name: "Nord Cyan" },
  { id: "monokai-pink", name: "Monokai Pink" },
  { id: "gruvbox-light", name: "Gruvbox Light" },
  { id: "gruvbox-dark", name: "Gruvbox Dark" },
];
const Themes = () => {
  const [currentTheme, setTheme] = useLocalStorage("theme", "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return (
    <div className="flex flex-col items-start -mt-1">
      {themes.map((theme) => (
        <button
          className={`p-1 px-2 rounded-sm w-full text-left cursor-pointer ${theme.id == currentTheme ? "bg-primary " : "hover:bg-text-muted/50"} `}
          onClick={() => setTheme(theme.id)}
          key={theme.id}
        >
          {theme.name}
        </button>
      ))}
    </div>
  );
};

export default Themes;
