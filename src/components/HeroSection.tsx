"use client";

import Image from "next/image";

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-28 px-6 lg:px-12 max-w-[1440px] mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 z-10 relative">
          <span className="inline-block py-1.5 px-3 rounded-full bg-surface-container-highest text-on-surface-variant font-label text-xs uppercase tracking-[0.1em] font-semibold mb-6">
            Independent Full-Stack Developer
          </span>

          <h1
            className="font-display text-5xl lg:text-6xl tracking-[-0.02em] font-extrabold text-on-surface leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            From Idea to Production—{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient">Without the Overhead.</span>
          </h1>

          <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-10 w-full md:w-[85%] lg:w-[75%]">
            I help founders, startups, and small businesses turn ideas into
            fast, scalable web applications. From concept to launch, you work
            directly with the developer building your product.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-primary text-on-primary rounded-xl px-8 py-4 font-label font-semibold hover:bg-primary-container transition-colors shadow-[0_24px_48px_rgba(25,28,29,0.06)] flex items-center gap-2 active:scale-95"
            >
              Start a Project <span aria-hidden>→</span>
            </button>
            <button
              onClick={() => scrollToSection("#projects")}
              className="bg-surface-container-lowest text-primary rounded-xl px-8 py-4 font-label font-semibold hover:bg-surface-container-low transition-colors border border-outline-variant/15 active:scale-95"
            >
              View My Work
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative group">
          <div className="relative w-full aspect-square rounded-full bg-surface-container-low flex items-center justify-center overflow-hidden shadow-[0_24px_48px_rgba(25,28,29,0.06)]">
            <div className="hero-gradient absolute inset-0 opacity-80 mix-blend-multiply" />
            <div className="relative w-[96%] h-[96%]">
              <Image
                src="/cta-img.png"
                alt="App preview"
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
