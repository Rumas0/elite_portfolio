"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description:
      "A full-stack web application built with React and Node.js. Features user authentication, real-time updates, and a clean responsive UI.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "#",
  },
  {
    title: "Project Two",
    description:
      "A data analysis pipeline that processes large datasets using Python and Pandas, with visualizations powered by Matplotlib.",
    tags: ["Python", "Pandas", "Matplotlib"],
    github: "https://github.com",
    live: "#",
  },
  {
    title: "Project Three",
    description:
      "A machine learning model that classifies data with high accuracy, trained using Scikit-learn and deployed via a Flask API.",
    tags: ["Python", "Scikit-learn", "Flask"],
    github: "https://github.com",
    live: "#",
  },
  {
    title: "Project Four",
    description:
      "A responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and optimized performance.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Projects</h2>
          <p className="text-gray-500 text-center mb-12 text-lg max-w-2xl mx-auto">
            A selection of things I&apos;ve built — from web apps to data tools.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border rounded-2xl p-6 flex flex-col justify-between gap-4 hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium underline underline-offset-4 text-gray-700 hover:text-black transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium underline underline-offset-4 text-gray-700 hover:text-black transition-colors"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
