import { useEffect } from "react";

const SITE_URL = "https://adxamovv.uz";
const SITE_NAME = "Adxamovv";
const DEFAULT_IMAGE = `${SITE_URL}/image2.jpg`;
const DEFAULT_DESCRIPTION =
  "Adxamovv is an online education platform for programming, English learning, quizzes, and professional IT courses.";

const defaultStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Adxamovv",
    alternateName: ["Adxamov", "adxamovv.uz", "Uzcoder"],
    url: SITE_URL,
    logo: DEFAULT_IMAGE,
    description: DEFAULT_DESCRIPTION,
    founder: {
      "@type": "Person",
      name: "Doston Adxamov",
      alternateName: ["Dostonbek Adxamov", "Uzcoder"],
    },
    sameAs: [
      "https://github.com/dostonadxamovcode",
      "https://www.linkedin.com/in/doston-adxamov-47709a320/",
      "https://t.me/uzcoder_offical",
      "https://t.me/UzCoder018",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: ["Adxamov", "adxamovv.uz"],
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blog?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Doston Adxamov",
    alternateName: ["Dostonbek Adxamov", "Adxamov", "Adxamovv", "Uzcoder"],
    url: SITE_URL,
    image: DEFAULT_IMAGE,
    jobTitle: "Frontend Developer",
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    knowsAbout: [
      "Programming",
      "React",
      "JavaScript",
      "Node.js",
      "Tailwind CSS",
      "English learning",
      "Online quizzes",
      "IT courses",
    ],
    sameAs: [
      "https://github.com/dostonadxamovcode",
      "https://www.linkedin.com/in/doston-adxamov-47709a320/",
      "https://t.me/uzcoder_offical",
      "https://t.me/UzCoder018",
    ],
  },
];

function setMeta(selector, createOptions, content) {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    Object.entries(createOptions).forEach(([key, value]) => tag.setAttribute(key, value));
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
  tag.setAttribute("data-seo", "true");
}

function setLink(rel, href) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
  tag.setAttribute("data-seo", "true");
}

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  type = "website",
  image = DEFAULT_IMAGE,
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  structuredData = [],
}) {
  useEffect(() => {
    const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
    const pageStructuredData = [...defaultStructuredData, ...structuredData];

    document.documentElement.lang = "en";
    document.title = title;

    setMeta('meta[name="title"]', { name: "title" }, title);
    setMeta('meta[name="description"]', { name: "description" }, description);
    setMeta(
      'meta[name="keywords"]',
      { name: "keywords" },
      "adxamovv, adxamov, adxamovv.uz, Adxamovv IT courses, programming tests, online learning, English learning, programming quizzes, professional IT courses, React courses, JavaScript courses"
    );
    setMeta('meta[name="author"]', { name: "author" }, "Adxamovv");
    setMeta('meta[name="robots"]', { name: "robots" }, robots);
    setMeta('meta[name="language"]', { name: "language" }, "English");
    setMeta('meta[name="theme-color"]', { name: "theme-color" }, "#050505");

    setLink("canonical", url);

    setMeta('meta[property="og:type"]', { property: "og:type" }, type);
    setMeta('meta[property="og:url"]', { property: "og:url" }, url);
    setMeta('meta[property="og:site_name"]', { property: "og:site_name" }, SITE_NAME);
    setMeta('meta[property="og:title"]', { property: "og:title" }, title);
    setMeta('meta[property="og:description"]', { property: "og:description" }, description);
    setMeta('meta[property="og:image"]', { property: "og:image" }, image);
    setMeta('meta[property="og:image:alt"]', { property: "og:image:alt" }, `${SITE_NAME} online education platform`);
    setMeta('meta[property="og:image:width"]', { property: "og:image:width" }, "1080");
    setMeta('meta[property="og:image:height"]', { property: "og:image:height" }, "1080");
    setMeta('meta[property="og:locale"]', { property: "og:locale" }, "en_US");

    setMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image");
    setMeta('meta[name="twitter:url"]', { name: "twitter:url" }, url);
    setMeta('meta[name="twitter:title"]', { name: "twitter:title" }, title);
    setMeta('meta[name="twitter:description"]', { name: "twitter:description" }, description);
    setMeta('meta[name="twitter:image"]', { name: "twitter:image" }, image);
    setMeta('meta[name="twitter:image:alt"]', { name: "twitter:image:alt" }, `${SITE_NAME} online education platform`);

    document.head.querySelectorAll('script[type="application/ld+json"]').forEach((tag) => tag.remove());
    pageStructuredData.forEach((item) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo", "true");
      script.textContent = JSON.stringify(item);
      document.head.appendChild(script);
    });
  }, [description, image, path, robots, structuredData, title, type]);

  return null;
}
