import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Self Supervised Learning for Remote Sensing Image Classification",
    description:
      "Research project exploring self-supervised learning techniques for classifying remote sensing images.",
    image: "/projects/project1.png",
    tags: ["Python", "PyTorch", "Remote Sensing"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl">

        {/* Terminal Command */}
        <div className="text-terminal-blue font-mono text-sm md:text-base mb-4 text-center">
          $ ls projects/
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured{" "}
          <span className="text-primary">
            Projects
          </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects I've built while exploring
          software development, web technologies, and backend systems.
        </p>

        {/* Project List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group bg-card border border-border rounded-lg overflow-hidden shadow-xs card-hover"
            >
              

              {/* Project Content */}
              <div className="p-6">

                {/* Project Number */}
                <div className="mb-4">
                  <span className="px-2 py-1 rounded bg-background/90 border border-border font-mono text-xs text-terminal-blue">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Terminal Path */}
                <div className="font-mono text-xs mb-3 text-terminal-blue">
                  ~/projects/{project.title.toLowerCase().replaceAll(" ", "-")}
                </div>

                {/* Title */}
                <h3 className="text-xl text-primary font-semibold mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono border border-border rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-5">

                  {/* Demo */}
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={17} />
                    <span>Live Demo</span>
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <FaGithub size={17} />
                    <span>Source</span>
                  </a>

                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub Terminal Command */}
        <div className="flex justify-center mt-14">
          <a
            href="https://github.com/janakajmera"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 font-mono text-terminal-blue hover:text-primary transition-colors duration-300"
          >
            <span>$</span>
            <span>cd github/</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

      </div>
    </section>
  );
};