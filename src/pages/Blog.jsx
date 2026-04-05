import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

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

export default function Blog() {
  const headerRef = useScrollReveal(0);
  const introRef = useScrollReveal(100);
  const listRef = useScrollReveal(200);

  return (
    <div className="max-w-4xl mx-auto py-10 sm:py-16 space-y-10">
      <div ref={headerRef} className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-5 h-[2px] bg-amber-500"></span>
          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-amber-500">
            Blog
          </span>
        </div>
        <h1
          className="text-3xl sm:text-4xl font-bold tracking-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Fikrlar, tajriba va foydali yozuvlar
        </h1>
        <p className="text-sm sm:text-base opacity-70 max-w-2xl leading-relaxed">
          Bu sahifada frontend, dizayn va o'sish jarayonimdagi foydali mavzularni
          ulashaman. Blog portfolio ichida jonli kontent markazi sifatida ishlaydi.
        </p>
      </div>

      <div
        ref={introRef}
        className="grid gap-4 md:grid-cols-3 border-y border-border py-6"
      >
        <div className="rounded-2xl border border-border p-5 bg-card/50">
          <p className="text-[10px] uppercase tracking-[0.2em] text-amber-500 font-semibold">
            Vazifasi
          </p>
          <p className="text-sm leading-relaxed opacity-80 mt-3">
            Blog sahifasi sizning bilim, tajriba va qarashlaringizni maqola
            ko'rinishida ko'rsatadi.
          </p>
        </div>
        <div className="rounded-2xl border border-border p-5 bg-card/50">
          <p className="text-[10px] uppercase tracking-[0.2em] text-amber-500 font-semibold">
            Kim uchun
          </p>
          <p className="text-sm leading-relaxed opacity-80 mt-3">
            Potensial mijozlar, recruiterlar va sizning ish uslubingizni bilmoqchi
            bo'lgan odamlar uchun.
          </p>
        </div>
        <div className="rounded-2xl border border-border p-5 bg-card/50">
          <p className="text-[10px] uppercase tracking-[0.2em] text-amber-500 font-semibold">
            Natija
          </p>
          <p className="text-sm leading-relaxed opacity-80 mt-3">
            Sayt ko'proq ishonch uyg'otadi va portfolio oddiy vitrinadan kuchli
            shaxsiy brend maydoniga aylanadi.
          </p>
        </div>
      </div>

      <div ref={listRef} className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-semibold">So'nggi postlar</h2>
          <p className="text-sm opacity-60">
            Hozircha namunaviy maqolalar qo'shildi. Keyin real postlar bilan almashtiriladi.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border p-5 transition-all duration-200 hover:-translate-y-1 hover:border-amber-500 hover:shadow-lg no-underline"
            >
              <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.16em] opacity-50">
                <span>{post.tag}</span>
                <span>{post.date}</span>
              </div>
              <h3
                className="mt-4 text-lg font-semibold leading-snug group-hover:text-amber-500 transition-colors duration-200"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed opacity-70">
                {post.description}
              </p>
              <div className="mt-5 flex items-center justify-between text-xs font-medium">
                <span className="opacity-50">{post.readTime}</span>
                <span className="text-amber-500">Read article →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
