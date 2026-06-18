import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiVite, SiTypescript, SiNextdotjs } from "react-icons/si";

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

const techStack = [
  {
    categoryKey: "frontend",
    items: [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    categoryKey: "tools",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "Figma", icon: FaFigma },
      { name: "Vite", icon: SiVite },
      { name: "Node.js", icon: FaNodeJs },
    ],
  },
];

const learning = [
  { name: "TypeScript", noteKey: "learningTypeScriptNote", icon: SiTypescript },
  { name: "Next.js", noteKey: "learningNextNote", icon: SiNextdotjs },
];

function SectionLabel({ children }) {
  return (
    <h2 className="text-xs font-semibold tracking-widest uppercase opacity-40">{children}</h2>
  );
}

export default function About() {
  const { t } = useTranslation();
  const facts = [
    { label: t("about.basedIn"), value: t("about.basedInValue") },
    { label: t("about.focus"), value: t("about.focusValue") },
    { label: t("about.status"), value: t("about.statusValue") },
  ];
  const headerRef = useScrollReveal(0);
  const bioRef = useScrollReveal(100);
  const stackRef = useScrollReveal(150);
  const learningRef = useScrollReveal(200);
  const expRef = useScrollReveal(250);
  const eduRef = useScrollReveal(300);

  return (
    <div className="max-w-6xl mx-auto py-10 sm:py-16">
      <title>About Doston Adxamov | Adxamovv — Frontend Developer from Uzbekistan</title>
      <meta name="description" content="Learn about Doston Adxamov (Adxamovv), a Frontend Developer from Fergana, Uzbekistan. Skills in React, JavaScript, Node.js, Tailwind CSS, and more." />
      <meta property="og:title" content="About Doston Adxamov | Adxamovv" />
      <meta property="og:url" content="https://adxamovv.uz/about" />
      <link rel="canonical" href="https://adxamovv.uz/about" />
      <div className="xl:grid xl:grid-cols-[300px_1fr] xl:gap-16">

        {/* ── Left: profile panel (sticky on desktop) ── */}
        <aside ref={headerRef} className="xl:sticky xl:top-28 xl:self-start space-y-6 pb-10 xl:pb-0">
          <div className="flex items-center gap-4 xl:flex-col xl:items-start xl:gap-5">
            <img
              src="/person.jpg"
              alt="Doston Adxamov — Frontend Developer"
              loading="lazy"
              className="w-16 h-16 xl:w-28 xl:h-28 rounded-2xl object-cover border border-border"
            />
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="inline-block w-5 h-[2px] bg-amber-500"></span>
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-500">
                  {t("about.eyebrow")}
                </span>
              </div>
              <h1 className="text-2xl xl:text-3xl font-bold tracking-tight font-display">
                {t("about.name")}
              </h1>
            </div>
          </div>

          <dl className="space-y-2.5 border-t border-border pt-5">
            {facts.map((f) => (
              <div key={f.label} className="flex items-center justify-between gap-4 text-sm">
                <dt className="opacity-40">{f.label}</dt>
                <dd className="font-medium text-right">{f.value}</dd>
              </div>
            ))}
          </dl>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 border border-border rounded-lg hover:border-amber-500 hover:text-amber-500 transition-colors duration-200 no-underline"
          >
            {t("about.getInTouch")}
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
        </aside>

        {/* ── Right: content ── */}
        <div className="space-y-10 xl:space-y-12">

          {/* Bio */}
          <div ref={bioRef} className="space-y-2 border-b border-border pb-8 xl:pb-10">
            <SectionLabel>{t("about.bioLabel")}</SectionLabel>
            <p className="text-sm sm:text-base leading-relaxed opacity-80 max-w-2xl">
              {t("about.bioText")}
            </p>
          </div>

          {/* Tech Stack */}
          <div ref={stackRef} className="space-y-5 border-b border-border pb-8 xl:pb-10">
            <SectionLabel>{t("about.techStackLabel")}</SectionLabel>
            <div className="grid gap-6 sm:grid-cols-2">
              {techStack.map((group) => (
                <div key={group.categoryKey} className="space-y-3">
                  <p className="text-sm font-medium opacity-60">{t(`about.${group.categoryKey}`)}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {group.items.map(({ name, icon: Icon }) => (
                      <div
                        key={name}
                        className="flex items-center gap-2.5 rounded-lg border border-border px-3 py-2 text-sm"
                      >
                        <Icon className="text-base opacity-70 shrink-0" />
                        <span className="opacity-80">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Currently Learning */}
          <div ref={learningRef} className="space-y-5 border-b border-border pb-8 xl:pb-10">
            <SectionLabel>{t("about.learningLabel")}</SectionLabel>
            <div className="grid gap-3 sm:grid-cols-2">
              {learning.map(({ name, noteKey, icon: Icon }) => (
                <div key={name} className="flex gap-3 rounded-xl border border-border p-4">
                  <Icon className="mt-0.5 text-lg text-amber-500 shrink-0" />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="text-xs leading-relaxed opacity-60">{t(`about.${noteKey}`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div ref={expRef} className="space-y-4 border-b border-border pb-8 xl:pb-10">
            <SectionLabel>{t("about.experienceLabel")}</SectionLabel>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="text-xs opacity-40 w-24 shrink-0 pt-0.5 leading-relaxed">{t("about.experienceDate")}</span>
                <div className="space-y-0.5">
                  <p className="text-sm font-semibold">{t("about.experienceRole")}</p>
                  <p className="text-xs opacity-50">{t("about.experienceCompany")}</p>
                  <p className="text-xs opacity-60 leading-relaxed pt-0.5">{t("about.experienceDesc")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div ref={eduRef} className="space-y-4">
            <SectionLabel>{t("about.educationLabel")}</SectionLabel>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="text-xs opacity-40 w-24 shrink-0 pt-0.5 leading-relaxed">{t("about.educationDate")}</span>
                <div className="space-y-0.5">
                  <p className="text-sm font-semibold">{t("about.educationDegree")}</p>
                  <p className="text-xs opacity-50">{t("about.educationSchool")}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
