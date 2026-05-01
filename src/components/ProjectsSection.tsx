import Image from "next/image";
import PROJECTS from "@/data/projects.json";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 lg:px-12 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="md:w-1/2">
            <span className="font-label text-xs uppercase tracking-[0.1em] text-primary font-bold mb-4 block">
              Selected Works
            </span>
            <h2
              className="font-display text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Projects
            </h2>
          </div>
          <div className="md:w-1/3">
            <p className="font-body text-on-surface-variant leading-relaxed">
              A showcase of recent applications built from the ground up,
              highlighting complex problem-solving and clean execution.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer ${index % 2 !== 0 ? "md:mt-12" : ""}`}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 bg-surface-container-highest aspect-[4/3] border border-outline-variant/15">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-on-surface/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="px-3 py-1 bg-secondary-container text-on-secondary-container font-body text-xs font-medium rounded-full">
                    {project.tags[0]}
                  </span>
                  {project.tags.slice(1).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-surface-container text-on-surface-variant font-body text-xs font-medium rounded-full border border-outline-variant/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3
                  className="font-headline text-2xl font-bold text-on-surface group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  {project.title}
                </h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
