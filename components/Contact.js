"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your form submission logic (e.g. Formspree, EmailJS)
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Get In Touch</h2>
          <p className="text-gray-500 text-center mb-10 text-lg">
            Open to opportunities, collaborations, or just a chat. Drop me a
            message!
          </p>

          {submitted ? (
            <div className="text-center border rounded-2xl p-10">
              <p className="text-2xl font-semibold mb-2">Thanks! 🎉</p>
              <p className="text-gray-500">
                I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black transition"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black transition"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  className="border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          )}

          <div className="flex justify-center gap-6 mt-10 text-sm text-gray-500">
            <a
              href="https://github.com/Rumas0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/itti-samur-tunib-183064244/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:ittisamurtunib20@gmail.com"
              className="hover:text-black transition-colors"
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
