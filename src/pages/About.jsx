import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
    category: "Frontend",
    items: [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "Figma", icon: FaFigma },
      { name: "Vite", icon: SiVite },
      { name: "Node.js", icon: FaNodeJs },
    ],
  },
];

const learning = [
  {
    name: "TypeScript",
    note: "Adding type safety to React components and shared utilities.",
    icon: SiTypescript,
  },
  {
    name: "Next.js",
    note: "Learning server-side rendering, routing and data fetching patterns.",
    icon: SiNextdotjs,
  },
];

const education = [
  {
    degree: "Digital information processing specialist",
    school: "Fergana Lola Murotova college",
    date: "2025 — 2026",
  },
];

const experience = [
  {
    role: "Frontend Developer",
    company: "Zamon agency",
    date: "2024 — Present",
    desc: "Building responsive web applications for clients.",
  },
];

const facts = [
  { label: "Based in", value: "Fergana, Uzbekistan" },
  { label: "Focus", value: "React & Tailwind CSS" },
  { label: "Status", value: "Open to opportunities" },
];

function SectionLabel({ children }) {
  return (
    <h2 className="text-xs font-semibold tracking-widest uppercase opacity-40">{children}</h2>
  );
}

export default function About() {
  const headerRef = useScrollReveal(0);
  const bioRef = useScrollReveal(100);
  const stackRef = useScrollReveal(150);
  const learningRef = useScrollReveal(200);
  const expRef = useScrollReveal(250);
  const eduRef = useScrollReveal(300);

  return (
    <div className="max-w-6xl mx-auto py-10 sm:py-16">
      <div className="xl:grid xl:grid-cols-[300px_1fr] xl:gap-16">

        {/* ── Left: profile panel (sticky on desktop) ── */}
        <aside ref={headerRef} className="xl:sticky xl:top-28 xl:self-start space-y-6 pb-10 xl:pb-0">
          <div className="flex items-center gap-4 xl:flex-col xl:items-start xl:gap-5">
            <img
              src="/person.jpg"
              alt="Dostonbek"
              className="w-16 h-16 xl:w-28 xl:h-28 rounded-2xl object-cover border border-border"
            />
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="inline-block w-5 h-[2px] bg-amber-500"></span>
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-500">
                  About Me
                </span>
              </div>
              <h1 className="text-2xl xl:text-3xl font-bold tracking-tight font-display">
                Dostonbek
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
            Get in touch
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
        </aside>

        {/* ── Right: content ── */}
        <div className="space-y-10 xl:space-y-12">

          {/* Bio */}
          <div ref={bioRef} className="space-y-2 border-b border-border pb-8 xl:pb-10">
            <SectionLabel>Bio</SectionLabel>
            <p className="text-sm sm:text-base leading-relaxed opacity-80 max-w-2xl">
              I'm a frontend developer passionate about building clean, fast, and accessible web experiences.
              I focus on writing maintainable code and thoughtful UI design. Currently open to new opportunities.
            </p>
          </div>

          {/* Tech Stack */}
          <div ref={stackRef} className="space-y-5 border-b border-border pb-8 xl:pb-10">
            <SectionLabel>Tech Stack</SectionLabel>
            <div className="grid gap-6 sm:grid-cols-2">
              {techStack.map((group) => (
                <div key={group.category} className="space-y-3">
                  <p className="text-sm font-medium opacity-60">{group.category}</p>
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
            <SectionLabel>Currently Learning</SectionLabel>
            <div className="grid gap-3 sm:grid-cols-2">
              {learning.map(({ name, note, icon: Icon }) => (
                <div key={name} className="flex gap-3 rounded-xl border border-border p-4">
                  <Icon className="mt-0.5 text-lg text-amber-500 shrink-0" />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="text-xs leading-relaxed opacity-60">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div ref={expRef} className="space-y-4 border-b border-border pb-8 xl:pb-10">
            <SectionLabel>Experience</SectionLabel>
            <div className="space-y-4">
              {experience.map((e, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-xs opacity-40 w-24 shrink-0 pt-0.5 leading-relaxed">{e.date}</span>
                  <div className="space-y-0.5">
                    <p className="text-sm font-semibold">{e.role}</p>
                    <p className="text-xs opacity-50">{e.company}</p>
                    <p className="text-xs opacity-60 leading-relaxed pt-0.5">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div ref={eduRef} className="space-y-4">
            <SectionLabel>Education</SectionLabel>
            <div className="space-y-4">
              {education.map((e, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-xs opacity-40 w-24 shrink-0 pt-0.5 leading-relaxed">{e.date}</span>
                  <div className="space-y-0.5">
                    <p className="text-sm font-semibold">{e.degree}</p>
                    <p className="text-xs opacity-50">{e.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
