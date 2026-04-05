import { useEffect, useRef } from "react";

function useScrollReveal(delay = 0) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return ref;
}

const projects = [
  {
    title: "Healthy Food",
    description: "A responsive website for a healthy food delivery service, built with React and Tailwind CSS.",
    url: "https://healty-psi.vercel.app/",
    badges: ["React", "Tailwind"],
    date: "Jan 2026",
  },
  {
    title: "Tez orada...",
    description: "",
    url: "https://example.com",
    badges: [],
    date: "",
  },
  {
    title: "Tez orada...",
    description: "",
    url: "https://example.com",
    badges: [],
    date: "",
  },
  {
    title: "Tez orada...",
    description: "",
    url: "https://example.com",
    badges: [],
    date: "",
  },
  {
    title: "Tez orada...",
    description: "",
    url: "https://example.com",
    badges: [],
    date: "",
  },

];

function ProjectCard({ project, index }) {
  const ref = useScrollReveal(index * 100);

  return (
    <div
      ref={ref}
      className="group flex items-start justify-between gap-4 py-4 border-b border-border last:border-0"
    >
      <div className="space-y-1.5 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <h2 className="text-sm font-semibold">{project.title}</h2>
          <span className="text-[10px] opacity-40">{project.date}</span>
        </div>
        <p className="text-xs opacity-60 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {project.badges.map((b) => (
            <span
              key={b}
              className="text-[10px] px-2 py-0.5 rounded-full border border-border opacity-70"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      <a
        className="shrink-0 mt-0.5 text-xs font-medium px-3 py-1.5 border border-border rounded-lg hover:border-amber-500 hover:text-amber-500 transition-colors duration-200 no-underline"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit →
      </a>
    </div>
  );
}

export default function Projects() {
  const headerRef = useScrollReveal(0);

  return (
    <div className="max-w-2xl mx-auto py-10 sm:py-16 space-y-3">
      <div ref={headerRef} className="mb-8 space-y-1">
        <div className="flex items-center gap-2">
          <span className="inline-block w-5 h-[2px] bg-amber-500"></span>
          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-amber-500">
            Portfolio
          </span>
        </div>
        <h1
          className="text-3xl sm:text-4xl font-bold tracking-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Projects
        </h1>
      </div>

      {projects.map((p, i) => (
        <ProjectCard key={i} project={p} index={i} />
      ))}
    </div>
  );
}