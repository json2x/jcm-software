"use client";

import { useState, useEffect } from "react";
import JCMLogo from "@/components/JCMLogo";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-shadow duration-300 glass-nav ${
        scrolled ? "shadow-[0_4px_24px_rgba(25,28,29,0.06)]" : ""
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-5 max-w-[1440px] mx-auto">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 cursor-pointer"
          aria-label="Back to top"
        >
          <JCMLogo className="h-9 w-auto" />
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`font-label text-sm font-medium transition-colors duration-200 relative group ${
                  isActive
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <button
          onClick={() => scrollToSection("#contact")}
          className="bg-primary text-on-primary rounded-xl px-5 py-2.5 font-label text-sm font-semibold hover:bg-primary-container transition-colors duration-200 active:scale-95"
        >
          Initiate a Project
        </button>
      </div>
    </nav>
  );
}
