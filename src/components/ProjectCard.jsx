import { useTranslation } from "react-i18next";

function TechBadge({ children }) {
  return (
    <span className="text-xs px-2.5 py-1 rounded-full border border-border opacity-70">
      {children}
    </span>
  );
}

function VisitButton({ url }) {
  const { t } = useTranslation();
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 border border-border rounded-lg hover:border-amber-500 hover:text-amber-500 transition-colors duration-200 no-underline"
    >
      {t("projectCard.visitProject")}
      <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
    </a>
  );
}

/**
 * Premium case-study card. `featured` renders a large two-column
 * layout (screenshot + details side by side on lg+ screens); the
 * default renders a stacked grid card.
 */
export default function ProjectCard({ project, featured = false }) {
  const { t } = useTranslation();
  const { title, i18nKey, tech, url, image, date } = project;
  const subtitle = t(`projectData.${i18nKey}.subtitle`);
  const pitch = t(`projectData.${i18nKey}.pitch`);
  const achievement = t(`projectData.${i18nKey}.achievement`);

  const media = (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/media block overflow-hidden rounded-xl border border-border"
    >
      <div className={featured ? "aspect-[16/10]" : "aspect-[16/10]"}>
        <img
          src={image}
          alt={`${title} — preview`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover/media:scale-[1.03]"
        />
      </div>
    </a>
  );

  const details = (
    <div className="flex flex-col gap-3 flex-1">
      <div className="space-y-1">
        <div className="flex items-center gap-2 flex-wrap">
          <h3
            className="text-xl sm:text-2xl font-bold tracking-tight font-display"
          >
            {title}
          </h3>
          <span className="text-xs opacity-40">{date}</span>
        </div>
        <p className="text-xs uppercase tracking-widest opacity-40">{subtitle}</p>
      </div>

      <p className="text-sm leading-relaxed opacity-75">{pitch}</p>

      <div className="flex items-start gap-2 text-sm leading-relaxed">
        <span className="mt-0.5 text-amber-500">★</span>
        <p className="opacity-70">{achievement}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-1">
        {tech.map((t) => (
          <TechBadge key={t}>{t}</TechBadge>
        ))}
      </div>

      <div className="pt-2 mt-auto">
        <VisitButton url={url} />
      </div>
    </div>
  );

  if (featured) {
    return (
      <div className="group grid gap-6 lg:grid-cols-2 lg:gap-10 lg:items-center rounded-2xl border border-border p-4 sm:p-6 transition-colors duration-200 hover:border-amber-500/40">
        {media}
        {details}
      </div>
    );
  }

  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-border p-4 sm:p-5 transition-all duration-200 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-lg">
      {media}
      {details}
    </div>
  );
}
