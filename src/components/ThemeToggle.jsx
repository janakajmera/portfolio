import { SquareTerminal } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to Ubuntu theme" : "Switch to hacker theme"}
      className={cn(
        "fixed max-sm:hidden top-3.5 right-5 z-500 p-2",
        "transition-all duration-300",
        "focus:outline-none"
      )}
    >
      <SquareTerminal
        className={cn(
          "h-6 w-6 transition-all duration-300",
          isDarkMode
            ? "text-terminal-green fill-none"
            : "text-terminal-blue fill-none"
        )}
      />
    </button>
  );
};