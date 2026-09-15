import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home/", href: "#hero" },
  { name: "About/", href: "#about" },
  { name: "Experience/", href: "#experience" },
  { name: "Skills/", href: "#skills" },
  { name: "Projects/", href: "#projects" },
  { name: "Contact/", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-[100] transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-5"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4">

          {/* Logo */}
          <a
            href="#hero"
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-bold text-primary"
          >
            <span className="text-glow text-foreground">
              janakajmera@
            </span>

            <span className="text-primary">
              portfolio
            </span>

            <span className="text-foreground">
              :~$
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6 font-mono">

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "cursor-pointer select-none",
                "transition-colors duration-300",
                "focus:outline-none",
                isMenuOpen
                  ? "text-primary"
                  : "text-terminal-blue hover:text-primary"
              )}
            >
              $ ls
            </button>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-terminal-blue hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile navigation trigger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "md:hidden font-mono text-lg",
              "cursor-pointer select-none",
              "focus:outline-none",
              isMenuOpen
                ? "text-primary"
                : "text-terminal-blue hover:text-primary"
            )}
          >
            $ ls
          </button>
        </div>
      </nav>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-background flex items-center justify-center">

          <div className="flex flex-col items-center font-mono">

            {/* Command */}
            <div className="text-terminal-blue text-sm md:text-base mb-8">
              $ ls
            </div>

            {/* Links */}
            <div className="flex flex-col items-center gap-8 text-xl">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-terminal-blue hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Close */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="mt-12 text-terminal-blue hover:text-primary font-mono cursor-pointer transition-colors duration-300"
            >
              [x] close
            </button>

          </div>
        </div>
      )}
    </>
  );
};