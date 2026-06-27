export function translatePost(t, post) {
  const base = `blogPosts.${post.i18nKey}`;
  return {
    ...post,
    title: t(`${base}.title`),
    description: t(`${base}.description`),
    tag: t(`${base}.tag`),
    readTime: t(`${base}.readTime`),
    hero: t(`${base}.hero`),
    sections: post.sectionKeys.map((sectionKey) => ({
      heading: t(`${base}.${sectionKey}.heading`),
      paragraphs: [
        t(`${base}.${sectionKey}.p1`),
        t(`${base}.${sectionKey}.p2`),
      ],
    })),
  };
}

export const blogPosts = [
  {
    slug: "react-loyihani-tartibli-boshlash",
    i18nKey: "reactStart",
    date: "Apr 2026",
    dateIso: "2026-04-01",
    sectionKeys: ["sectionStart", "sectionFolders", "sectionResult"],
  },
  {
    slug: "responsive-dizayn-uchun-amaliy-yondashuv",
    i18nKey: "responsiveDesign",
    date: "Apr 2026",
    dateIso: "2026-04-01",
    sectionKeys: ["sectionMobile", "sectionSpacing", "sectionOutcome"],
  },
  {
    slug: "portfolio-sayt-nega-kerak",
    i18nKey: "whyPortfolio",
    date: "Apr 2026",
    dateIso: "2026-04-01",
    sectionKeys: ["sectionImpression", "sectionShowcase", "sectionLongTerm"],
  },
];
