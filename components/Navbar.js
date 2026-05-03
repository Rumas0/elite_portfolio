"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Projects", "Contact"];

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.25rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease;
        }
        .navbar.scrolled {
          background: rgba(8, 8, 12, 0.85);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 1px 0 rgba(255,255,255,0.06);
        }
        .logo {
          font-family: 'Georgia', serif;
          font-size: 1.25rem;
          letter-spacing: 0.04em;
          color: #f0ece4;
          text-decoration: none;
          font-style: italic;
        }
        .logo span {
          color: #c9a96e;
          font-style: normal;
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links a {
          font-family: 'Courier New', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #a09a90;
          text-decoration: none;
          transition: color 0.2s;
          position: relative;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1px;
          background: #c9a96e;
          transition: width 0.25s ease;
        }
        .nav-links a:hover {
          color: #f0ece4;
        }
        .nav-links a:hover::after {
          width: 100%;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: #a09a90;
          transition: transform 0.3s, opacity 0.3s, width 0.3s;
          transform-origin: center;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; width: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        .mobile-menu {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(8, 8, 12, 0.97);
          z-index: 99;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
        }
        .mobile-menu.open {
          display: flex;
        }
        .mobile-menu a {
          font-family: 'Georgia', serif;
          font-size: 2rem;
          font-style: italic;
          color: #f0ece4;
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 0.2s;
        }
        .mobile-menu a:hover { color: #c9a96e; }

        @media (max-width: 640px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .navbar { padding: 1.25rem 1.5rem; }
        }
      `}</style>

      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <a href="#" className="logo">
          port<span>.</span>folio
        </a>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
}
