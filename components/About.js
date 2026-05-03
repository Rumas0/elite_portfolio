"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "C++", "SQL"] },
  { category: "Web", items: ["React", "Next.js", "Tailwind CSS", "Node.js"] },
  {
    category: "Data",
    items: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
  },
  { category: "Tools", items: ["Git", "VS Code", "Linux", "Figma"] },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
          <p className="text-gray-500 text-center mb-12 text-lg max-w-2xl mx-auto">
            A passionate Computer Science graduate who loves building clean,
            efficient solutions — from full-stack web apps to data pipelines and
            beyond.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border rounded-2xl p-6"
              >
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
