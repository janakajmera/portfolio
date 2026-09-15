import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card px-4 py-8">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Copyright */}
        <div className="font-mono text-sm text-muted-foreground text-center sm:text-left">
          <span className="text-terminal-blue">
            janakajmera@portfolio
          </span>
          <span>:~$ </span>
          <span>
            echo "© {new Date().getFullYear()} Janak Ajmera"
          </span>
        </div>

        {/* Back to top */}
        <a
          href="#hero"
          aria-label="Back to top"
          className="group flex items-center gap-2 font-mono text-sm text-terminal-blue hover:text-primary transition-colors duration-300"
        >
          <span>cd ~</span>

          <ArrowUp
            size={17}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
        </a>

      </div>
    </footer>
  );
};