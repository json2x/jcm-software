import Image from "next/image";

const STRENGTHS = [
  "End-to-End Development",
  "Scalable Architecture",
  "Security by Design",
  "Clear, Direct Communication",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 lg:px-12 bg-surface-bright">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-label text-xs uppercase tracking-[0.1em] text-primary font-bold mb-4 block">
              Why Work With Me
            </span>
            <h2
              className="font-display text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your Developer, From First Commit to Final Launch.
            </h2>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-6">
              I work closely with founders, startups, and growing businesses to
              design, build, and launch modern web applications. No layers of
              account managers, no outsourcing—just direct collaboration and
              thoughtful engineering.
            </p>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-10">
              From product strategy and UI development to backend architecture
              and deployment, every line of code is written with performance,
              scalability, and maintainability in mind.
            </p>

            <div className="space-y-4">
              {STRENGTHS.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg
                    className="text-primary shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5-4.5-4.5 1.41-1.41L10 13.67l7.09-7.09L18.5 8l-8.5 8.5z" />
                  </svg>
                  <span className="font-body text-on-surface font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl bg-surface-container-low overflow-hidden shadow-[0_24px_48px_rgba(25,28,29,0.06)] border border-outline-variant/15">
              <Image
                src="/jcm-img.png"
                alt="Jayson Millan - Software Developer"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 rounded-xl shadow-[0_24px_48px_rgba(25,28,29,0.10)] border border-outline-variant/15 max-w-xs backdrop-blur-xl bg-white/95">
              <svg
                className="text-primary mb-2"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
              <p
                className="font-display text-xl font-bold text-on-surface italic"
                style={{ fontFamily: "var(--font-display)" }}
              >
                &ldquo;Built with care, tested for scale.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
