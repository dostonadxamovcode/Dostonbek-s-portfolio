import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function useScrollReveal(options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const photo = "/image2.jpg";

export default function Home() {
  const { t } = useTranslation();
  const leftRef = useScrollReveal();
  const imageRef = useScrollReveal();
  const statsRef = useScrollReveal();

  return (
    <>
      <title>Doston Adxamov (Uzcoder) | Frontend Developer | adxamovv.uz</title>
      <meta name="description" content="Doston Adxamov, known as Uzcoder — Frontend Developer and React Developer from Fergana, Uzbekistan. Building clean web experiences with React, JavaScript and Tailwind CSS." />
      <meta property="og:title" content="Doston Adxamov (Uzcoder) | Frontend Developer | adxamovv.uz" />
      <meta property="og:url" content="https://adxamovv.uz/" />
      <link rel="canonical" href="https://adxamovv.uz/" />
      <style>{`
        .reveal-left {
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-right {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
        }
        .reveal-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s;
        }
        .revealed {
          opacity: 1 !important;
          transform: none !important;
        }
        @keyframes spinRing {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className="flex min-h-[calc(100vh-12rem)] flex-col justify-center md:flex-row md:items-center md:justify-between gap-6 md:gap-12 py-6 sm:py-10 md:py-12 lg:py-16">

        {/* ── Left: Text Block ── */}
        <div ref={leftRef} className="reveal-left flex-1 w-full space-y-4 sm:space-y-5">

          {/* Eyebrow label */}
          <div className="flex items-center gap-2">
            <span className="inline-block w-5 sm:w-6 h-0.5 bg-amber-500"></span>
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-500">
              {t("home.eyebrow")}
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight font-display"
          >
            {t("home.greeting")} <br />
            <span className="italic text-amber-500">{t("home.name")}</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-sm sm:max-w-md">
            {t("home.description")}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:flex-nowrap gap-3 pt-1">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-5 py-2.5 bg-foreground text-background rounded-lg font-medium text-sm tracking-wide shadow-sm hover:opacity-80 hover:shadow-md active:scale-95 transition-all duration-200"
            >
              {t("home.viewProjects")} →
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-5 py-2.5 border-2 border-foreground rounded-lg font-medium text-sm tracking-wide hover:bg-foreground hover:text-background active:scale-95 transition-all duration-200"
            >
              {t("home.contactMe")}
            </Link>
            <a
              href="/Dostonbek_Adxamov_Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-5 py-2.5 border-2 border-border rounded-lg font-medium text-sm tracking-wide hover:border-amber-500 hover:text-amber-500 active:scale-95 transition-all duration-200 no-underline"
            >
              <span aria-hidden="true">↓</span>
              {t("home.downloadCV")}
            </a>
          </div>

          {/* Currently working with — concrete signal instead of vanity stats */}
          <div ref={statsRef} className="reveal-up space-y-2 pt-4 sm:pt-5 border-t border-border">
            <p className="text-xs uppercase tracking-widest opacity-40">
              {t("home.currentlyWorking")}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["React", "JavaScript", "Tailwind CSS", "Node.js", "Git"].map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full border border-border opacity-70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: Image Block ── */}
        <div ref={imageRef} className="reveal-right flex flex-col items-center gap-3 sm:gap-4 w-full md:flex-1 md:items-end mt-2 md:mt-0">
          <div className="relative w-44 h-44 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div
              className="absolute -inset-2.5 rounded-full border-4 border-dashed border-amber-400"
              style={{ animation: "spinRing 20s linear infinite" }}
            ></div>
            <img
              src={photo}
              alt="Doston Adxamov (Uzcoder) — Frontend Developer from Uzbekistan"
              fetchPriority="high"
              width={1080}
              height={1080}
              className="w-full h-full object-cover rounded-full border-[3px] sm:border-4 border-background shadow-xl sm:shadow-2xl"
            />
          </div>
        </div>

      </div>

      {/* ── Featured Project ── */}
      <section className="py-10 sm:py-14 border-t border-border space-y-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-block w-5 h-[2px] bg-amber-500"></span>
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-500">
                {t("home.featuredLabel")}
              </span>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-bold tracking-tight font-display"
            >
              {t("home.featuredHeading")}
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-sm font-medium hover:text-amber-500 transition-colors duration-200 no-underline whitespace-nowrap"
          >
            {t("home.viewAllProjects")} →
          </Link>
        </div>

        <ProjectCard project={projects[projects.length - 1]} featured />
      </section>
    </>
  );
}
