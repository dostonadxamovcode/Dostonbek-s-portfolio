import { Link, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { blogPosts, translatePost } from "../data/blogPosts";
import SEO from "../components/SEO";

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

export default function BlogDetail() {
  const { t } = useTranslation();
  const { slug } = useParams();
  const rawPost = blogPosts.find((item) => item.slug === slug);
  const post = rawPost ? translatePost(t, rawPost) : null;

  const heroRef = useScrollReveal(0);
  const contentRef = useScrollReveal(120);
  const relatedRef = useScrollReveal(220);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto py-16 sm:py-20 text-center space-y-5">
        <SEO
          title="Post Not Found | Adxamovv Blog"
          description="This Adxamovv blog post could not be found."
          path={`/blog/${slug || ""}`}
          robots="noindex, follow"
        />
        <p className="text-xs uppercase tracking-[0.2em] text-amber-500 font-semibold">
          {t("blogDetail.notFoundTag")}
        </p>
        <h1
          className="text-3xl sm:text-4xl font-bold font-display"
        >
          {t("blogDetail.notFoundTitle")}
        </h1>
        <p className="text-sm opacity-60">
          {t("blogDetail.notFoundDesc")}
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium no-underline hover:border-amber-500 hover:text-amber-500 transition-colors duration-200"
        >
          {t("blogDetail.backToBlog")}
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 2)
    .map((item) => translatePost(t, item));
  const takeaway = post.sections[post.sections.length - 1]?.paragraphs[0];

  const postUrl = `https://adxamovv.uz/blog/${post.slug}`;

  return (
    <div className="max-w-5xl mx-auto py-10 sm:py-16 space-y-10">
      <SEO
        title={`${post.title} | Adxamovv Blog`}
        description={post.description}
        path={`/blog/${post.slug}`}
        type="article"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            url: postUrl,
            datePublished: rawPost.dateIso,
            dateModified: rawPost.dateIso,
            author: {
              "@type": "Person",
              name: "Doston Adxamov",
              url: "https://adxamovv.uz",
            },
            publisher: {
              "@type": "Organization",
              name: "Adxamovv",
              logo: {
                "@type": "ImageObject",
                url: "https://adxamovv.uz/image2.jpg",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": postUrl,
            },
          },
        ]}
      />
      <section
        ref={heroRef}
        className="relative overflow-hidden rounded-[2rem] border border-border px-6 py-8 sm:px-10 sm:py-12"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.08),transparent_24%)]" />
        <div className="relative space-y-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] opacity-60 no-underline hover:text-amber-500 transition-colors duration-200"
          >
            ← {t("blogDetail.backToBlog")}
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] opacity-60">
            <span className="rounded-full border border-border px-3 py-1">{post.tag}</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-display"
            >
              {post.title}
            </h1>
            <p className="text-base sm:text-lg leading-relaxed opacity-75">
              {post.hero}
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
        <article ref={contentRef} className="rounded-[2rem] border border-border p-6 sm:p-8 lg:p-10">
          <div className="space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2
                  className="text-2xl sm:text-3xl font-semibold font-display"
                >
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm sm:text-base leading-8 opacity-80"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>

        <aside ref={relatedRef} className="space-y-4">
          <div className="rounded-[2rem] border border-border p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-500 font-semibold">
              {t("blogDetail.keyTakeaway")}
            </p>
            <p className="mt-4 text-sm leading-relaxed opacity-75">{takeaway}</p>
          </div>

          <div className="rounded-[2rem] border border-border p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-500 font-semibold">
              {t("blogDetail.otherPosts")}
            </p>
            <div className="mt-4 space-y-3">
              {relatedPosts.map((item) => (
                <Link
                  key={item.slug}
                  to={`/blog/${item.slug}`}
                  className="block rounded-2xl border border-border p-4 no-underline transition-colors duration-200 hover:border-amber-500"
                >
                  <p className="text-xs uppercase tracking-[0.16em] opacity-50">
                    {item.tag}
                  </p>
                  <h3
                    className="mt-2 text-lg font-semibold leading-snug font-display"
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs opacity-60">{item.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
