import { useState } from "react";
import { cn } from "@/lib/utils";

import C from "@/assets/skills/C.png";
import Cpp from "@/assets/skills/C++.svg";
import sql from "@/assets/skills/sql.png";
import bash from "@/assets/skills/bash.png";
import python from "@/assets/skills/python.svg";
import pytorch from "@/assets/skills/pytorch.png";
import tensorflow from "@/assets/skills/tensorflow.png";
import docker from "@/assets/skills/docker.png";
import git from "@/assets/skills/git.png";
import github from "@/assets/skills/github.png";
import vscode from "@/assets/skills/vscode.png";
import linux from "@/assets/skills/linux.webp";
import aws from "@/assets/skills/aws.png";
import llama from "@/assets/skills/llama-cpp.png";


// Add the rest of your skill images here
// import html from "@/assets/skills/html.png";
// import javascript from "@/assets/skills/javascript.png";
// import react from "@/assets/skills/react.png";
// import python from "@/assets/skills/python.png";

const skills = [
  {
    name: "C",
    category: "languages",
    icon: C,
  },
  {
    name: "C++",
    category: "languages",
    icon: Cpp,
  },
  {
    name: "Python",
    category: "languages",
    icon: python,
  },
  {
    name: "SQL",
    category: "languages",
    icon: sql,
  },
  {
    name: "Bash/Shell Scripting",
    category: "languages",
    icon: bash,
  },
  {
    name: "PyTorch",
    category: "AI",
    icon: pytorch,
  },
  {
    name: "TensorFlow",
    category: "AI",
    icon: tensorflow,
  },
  {
    name: "Transformers",
    category: "AI",
    icon: C,
  },
  {
    name: "LLMs",
    category: "AI",
    icon: C,
  },
  {
    name: "Generative AI",
    category: "AI",
    icon: C,
  },
  {
    name: "RAG",
    category: "AI",
    icon: C,
  },
  {
    name: "Computer Vision",
    category: "AI",
    icon: C,
  },
  {
    name: "Model Optimization",
    category: "AI",
    icon: C,
  },
  {
    name: "Quantization",
    category: "AI",
    icon: C,
  },
  {
    name: "Llama.cpp",
    category: "Systems",
    icon: llama,
  },
  {
    name: "Git",
    category: "tools",
    icon: git,
  },
  {
    name: "GitHub",
    category: "tools",
    icon: github,
  },
  {
    name: "Docker",
    category: "tools",
    icon: docker,
  },
  {
    name: "VS Code",
    category: "tools",
    icon: vscode,
  },
  {
    name: "Linux",
    category: "tools",
    icon: linux,
  },
  {
    name: "AWS",
    category: "tools",
    icon: aws,
  },
];

const categories = ["all", "languages", "AI", "Systems", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">

        {/* Terminal Command */}
        <div className="text-terminal-blue font-mono text-sm md:text-base mb-4 text-center">
          $ ls skills/
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Terminal Output */}
        <p className="text-center text-muted-foreground font-mono text-sm mb-12">
          Technologies and tools I use to build things.
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-md font-mono text-sm",
                "border transition-all duration-300",
                "capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-secondary/70 text-foreground border-border hover:border-terminal-blue hover:text-terminal-blue"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className={cn(
                "group relative",
                "bg-card border border-border",
                "rounded-md p-5",
                "transition-all duration-300",
                "hover:border-terminal-blue hover:bg-secondary/80",
                "hover:-translate-y-1",
                "card-hover"
              )}
            >
              <div className="flex items-center gap-4">

                {/* Skill Logo */}
                <div
                  className={cn(
                    "w-12 h-12 shrink-0",
                    "flex items-center justify-center",
                    "rounded-md bg-secondary/60",
                    "border border-border",
                    "transition-all duration-300",
                    "group-hover:border-terminal-blue group-hover:bg-secondary/80"
                  )}
                >
                  <img
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Skill Information */}
                <div className="min-w-0 text-left">
                  <h3 className="font-semibold text-base truncate">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-terminal-blue font-mono mt-1">
                    ./{skill.category}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Terminal Prompt */}
        <div className="mt-10 text-center font-mono text-sm">
          <span className="text-terminal-blue">
            $
          </span>
          <span className="text-muted-foreground ml-2">
            {activeCategory === "all"
              ? "all skills loaded"
              : `${activeCategory} loaded`}
          </span>
          <span className="text-primary ml-1 animate-pulse">
            _
          </span>
        </div>

      </div>
    </section>
  );
};