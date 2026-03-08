import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

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

export default function Home() {
  const leftRef = useScrollReveal();
  const imageRef = useScrollReveal();
  const statsRef = useScrollReveal();

  return (
    <>
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

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 py-6 sm:py-10 md:py-16 lg:py-20">

        {/* ── Left: Text Block ── */}
        <div ref={leftRef} className="reveal-left flex-1 w-full space-y-4 sm:space-y-5">

          {/* Eyebrow label */}
          <div className="flex items-center gap-2">
            <span className="inline-block w-5 sm:w-6 h-0.5 bg-amber-500"></span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-amber-500">
              Frontend Developer
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Hi, I'm <br />
            <span className="italic text-amber-500">Dostonbek</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-sm sm:max-w-md">
            Crafting seamless digital experiences with modern web technologies.
            Clean code. Thoughtful design. Real results.
          </p>

          {/* Buttons */}
          <div className="flex flex-col xs:flex-row sm:flex-row gap-3 pt-1 w-full sm:w-auto">
            <Link
              to="/projects"
              className="
                w-full sm:w-auto text-center
                px-4 py-2.5 sm:px-6 sm:py-3
                bg-foreground text-background
                rounded-lg hover:opacity-80
                active:scale-95
                transition-all duration-200
                font-medium text-sm tracking-wide
                shadow-sm hover:shadow-md
              "
            >
              View My Projects →
            </Link>
            <Link
              to="/contact"
              className="
                w-full sm:w-auto text-center
                px-4 py-2.5 sm:px-6 sm:py-3
                border-2 border-foreground
                rounded-lg hover:bg-foreground hover:text-background
                active:scale-95
                transition-all duration-200
                font-medium text-sm tracking-wide
              "
            >
              Contact Me
            </Link>
          </div>

          {/* Stats row */}
          <div ref={statsRef} className="reveal-up flex gap-5 sm:gap-8 lg:gap-10 pt-4 sm:pt-5 border-t border-border">
            {[
              { num: "0", label: "Years Experience" },
              { num: "0", label: "Projects Completed" },
              { num: "0", label: "Happy Clients" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="text-xl sm:text-2xl lg:text-3xl font-bold"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {s.num}
                </p>
                <p className="text-[10px] sm:text-xs mt-0.5 tracking-wide leading-tight opacity-60">
                  {s.label}
                </p>
              </div>
            ))}
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
              src="/person.jpg"
              alt="Dostonbek"
              className="w-full h-full object-cover rounded-full border-[3px] sm:border-4 border-background shadow-xl sm:shadow-2xl"
            />
          </div>
        </div>

      </div>
    </>
  );
}