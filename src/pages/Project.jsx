import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

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

export default function Projects() {
  const { t } = useTranslation();
  const headerRef = useScrollReveal(0);

  return (
    <div className="max-w-5xl mx-auto py-10 sm:py-16 space-y-10">
      <div ref={headerRef} className="space-y-2 max-w-2xl">
        <div className="flex items-center gap-2">
          <span className="inline-block w-5 h-[2px] bg-amber-500"></span>
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-500">
            {t("projects.eyebrow")}
          </span>
        </div>
        <h1
          className="text-3xl sm:text-4xl font-bold tracking-tight font-display"
        >
          {t("projects.heading")}
        </h1>
        <p className="text-sm sm:text-base opacity-70 leading-relaxed">
          {t("projects.description")}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
