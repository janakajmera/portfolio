import { Code, Server, Terminal } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        {/* Terminal Command */}
        <div className="text-terminal-blue font-mono text-sm md:text-base mb-4 text-center">
          $ cat about.txt
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* About Text */}
          <div className="space-y-6">

            <div>
              <p className="font-mono text-terminal-blue text-sm mb-2">
                NAME
              </p>

              <h3 className="text-2xl font-semibold">
                Janak Ajmera
              </h3>
            </div>

            <div>
              <p className="font-mono text-terminal-blue text-sm mb-2">
                ROLE
              </p>

              <h3 className="text-xl font-semibold">
                Software Engineer
              </h3>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I'm a software engineer focused on AI and systems, with an interest in
              building scalable and reliable software. I enjoy exploring machine learning,
              backend architecture, and the underlying systems that power modern
              intelligent applications.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I'm particularly interested in understanding how AI and software systems
              work beneath the surface, strengthening my fundamentals, and exploring
              the technologies that power modern intelligent applications.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">

              <a
                href="#contact"
                className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 text-center"
              >
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/181xnvStrQzn-2Dw1MjeBV1NUoFTZMHDD/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
              View CV
              </a>

            </div>
          </div>

          {/* Skills / Focus Areas */}
          <div className="grid grid-cols-1 gap-5">

            {/* Software Development */}
            <div className="bg-card border border-border rounded-md p-6 card-hover">
              <div className="flex items-start gap-4">

                <div className="p-3 rounded-md bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2">
                    Software Development
                  </h4>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Building applications with a focus on clean code,
                    maintainability, performance, and good software
                    engineering practices.
                  </p>
                </div>

              </div>
            </div>

            {/* Backend & Systems */}
            <div className="bg-card border border-border rounded-md p-6 card-hover">
              <div className="flex items-start gap-4">

                <div className="p-3 rounded-md bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2">
                    AI and Systems
                  </h4>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Exploring artificial intelligence and system design, with a focus on
                    understanding how intelligent applications work, scale, and interact
                    with the underlying software and infrastructure.
                  </p>
                </div>

              </div>
            </div>

            {/* Problem Solving */}
            <div className="bg-card border border-border rounded-md p-6 card-hover">
              <div className="flex items-start gap-4">

                <div className="p-3 rounded-md bg-primary/10">
                  <Terminal className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2">
                    Problem Solving
                  </h4>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Enjoying programming challenges, understanding problems
                    at their core, and developing practical and efficient
                    solutions.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Terminal Prompt */}
        <div className="mt-12 font-mono text-sm text-center">
          <span className="text-terminal-blue">
            $
          </span>

          <span className="text-muted-foreground ml-2">
            cat about.txt
          </span>

          <span className="text-primary ml-1 animate-pulse">
            _
          </span>
        </div>

      </div>
    </section>
  );
};