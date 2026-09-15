import { Briefcase, CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Software Engineering Intern",
    company: "Samsung R&D Institute India - Delhi",
    location: "Delhi, India",
    period: "Jan'26 — July'26",
    description:
      "Contributed to software development and optimization, working on NPU compiler development and LLM optimization while focusing on performance improvement, debugging, and efficient AI model execution.",
    technologies: ["C++", "Python", "Computer Vision", "LLMs", "Edge AI", "Optimization"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-terminal-blue font-mono text-sm md:text-base mb-4 text-center">
          $ cat experience.log
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          A timeline of my professional experience and systems I've
          worked on.
        </p>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2" />

                <div className="absolute left-5 top-6 -translate-x-1/2 md:left-1/2">
                  <div className="w-5 h-5 rounded-full bg-primary border-4 border-background" />
                </div>

                <div className="md:w-1/2 pl-12 md:pl-0">
                  <div
                    className={`bg-card border border-border rounded-lg p-6 card-hover ${
                      index % 2 === 0
                        ? "md:mr-10"
                        : "md:ml-10"
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <div className="p-3 rounded-md bg-primary/10 shrink-0">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>

                      <div className="text-left">
                        <h3 className="text-xl font-semibold">
                          {experience.role}
                        </h3>

                        <p className="text-terminal-blue font-mono text-sm mt-1">
                          {experience.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mb-5 text-sm font-mono text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <CalendarDays size={15} />
                        <span>{experience.period}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin size={15} />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm text-left mb-5">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="px-2 py-1 text-xs font-mono border border-border rounded-md bg-secondary text-secondary-foreground"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 font-mono text-xs text-terminal-blue text-left">
                      $ status: completed
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center font-mono text-sm">
          <span className="text-terminal-blue">$</span>
          <span className="text-muted-foreground ml-2">
            cat experience.log
          </span>
          <span className="text-primary ml-1 animate-pulse">_</span>
        </div>
      </div>
    </section>
  );
};