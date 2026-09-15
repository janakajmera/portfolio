import { ArrowDown, Terminal } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">

        <div className="space-y-6">

          {/* Terminal Command */}
          <div className="text-terminal-blue font-mono text-sm md:text-base opacity-0 animate-fade-in">
            $ whoami
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">

            <span className="opacity-0 animate-fade-in">
              Hi, I'm{" "}
            </span>

            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Janak{" "}  
            </span>
             
            <span className="text-foreground ml-2 opacity-0 animate-fade-in-delay-2">
              Ajmera
            </span>

          </h1>

          {/* Role */}
          <div className="font-mono text-lg md:text-xl opacity-0 animate-fade-in-delay-2">
            <span className="text-terminal-blue">
              &gt;
            </span>{" "}
            <span className="text-muted-foreground">
              Software Engineer
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-delay-3">
            I build AI-driven systems with a focus on machine learning,
            backend engineering, and scalable software architecture. I enjoy
            exploring the fundamentals behind intelligent systems and how they
            can be designed, optimized, and deployed in the real world.
          </p>

          {/* CTA */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-primary text-primary font-mono hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Terminal size={17} />
              <span>./view-projects</span>
            </a>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-terminal-blue hover:text-primary transition-colors duration-300 animate-bounce"
      >
        <span className="font-mono text-xs">
          scroll_down
        </span>

        <ArrowDown className="h-5 w-5" />
      </a>

    </section>
  );
};