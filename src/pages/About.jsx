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

const skills = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
  { category: "Tools", items: ["Git", "Figma", "VS Code", "Vite"] },
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

export default function About() {
  const headerRef = useScrollReveal(0);
  const bioRef = useScrollReveal(100);
  const skillsRef = useScrollReveal(200);
  const expRef = useScrollReveal(300);
  const eduRef = useScrollReveal(400);
  const cvRef = useScrollReveal(500);

  return (
    <div className="max-w-2xl mx-auto py-10 sm:py-16 space-y-10">

      {/* Header */}
      <div ref={headerRef} className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="inline-block w-5 h-[2px] bg-amber-500"></span>
          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-amber-500">
            About Me
          </span>
        </div>
        <h1
          className="text-3xl sm:text-4xl font-bold tracking-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Dostonbek
        </h1>
      </div>

      {/* Bio */}
      <div ref={bioRef} className="space-y-2 border-b border-border pb-8">
        <h2 className="text-xs font-semibold tracking-widest uppercase opacity-40">Bio</h2>
        <p className="text-sm leading-relaxed opacity-80">
          I'm a frontend developer passionate about building clean, fast, and accessible web experiences.
          I focus on writing maintainable code and thoughtful UI design. Currently open to new opportunities.
        </p>
      </div>

      {/* Skills */}
      <div ref={skillsRef} className="space-y-4 border-b border-border pb-8">
        <h2 className="text-xs font-semibold tracking-widest uppercase opacity-40">Skills</h2>
        <div className="space-y-3">
          {skills.map((s) => (
            <div key={s.category} className="flex gap-4 items-start">
              <span className="text-xs opacity-40 w-20 shrink-0 pt-0.5">{s.category}</span>
              <div className="flex flex-wrap gap-1.5">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="text-[10px] px-2 py-0.5 rounded-full border border-border opacity-70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div ref={expRef} className="space-y-4 border-b border-border pb-8">
        <h2 className="text-xs font-semibold tracking-widest uppercase opacity-40">Experience</h2>
        <div className="space-y-4">
          {experience.map((e, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="text-[10px] opacity-40 w-20 shrink-0 pt-0.5 leading-relaxed">{e.date}</span>
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
      <div ref={eduRef} className="space-y-4 border-b border-border pb-8">
        <h2 className="text-xs font-semibold tracking-widest uppercase opacity-40">Education</h2>
        <div className="space-y-4">
          {education.map((e, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="text-[10px] opacity-40 w-20 shrink-0 pt-0.5 leading-relaxed">{e.date}</span>
              <div className="space-y-0.5">
                <p className="text-sm font-semibold">{e.degree}</p>
                <p className="text-xs opacity-50">{e.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CV */}
      <div ref={cvRef}>
        <a
          href="/cv.pdf"
          download
          className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 border border-border rounded-lg hover:border-amber-500 hover:text-amber-500 transition-colors duration-200 no-underline"
        >
          <span>↓</span>
          Download CV
        </a>
      </div>

    </div>
  );
}