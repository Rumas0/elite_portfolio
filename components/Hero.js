"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={160}
          height={160}
          className="w-40 h-40 rounded-full mx-auto mb-6 object-cover"
        />

        <h1 className="text-5xl font-bold mb-4">Itti Samur Tunib</h1>

        <p className="text-xl text-gray-500 mb-6">
          Computer Science Graduate | Python | Web | Data
        </p>

        <div className="space-x-4">
          <a
            href="#projects"
            className="bg-black text-white px-6 py-3 rounded-xl"
          >
            View Projects
          </a>

          <a href="/resume.pdf" className="border px-6 py-3 rounded-xl">
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
