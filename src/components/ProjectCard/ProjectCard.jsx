import "./ProjectCard.css";

function ProjectCard({
  title,
  kind,
  summary,
  description,
  image,
  imageFit = "cover",
  imageBackground,
  startDate,
  endDate,
  technologies = [],
  highlights = [],
  links = {},
}) {
  const dateRange =
    startDate && endDate
      ? `${startDate} — ${endDate}`
      : startDate || endDate || "";

  const linkList = [
    links.github && { label: "GitHub", href: links.github },
    links.demo && { label: "Live Demo", href: links.demo },
    links.website && { label: "Visit Website", href: links.website },
    links.chromeWebStore && {
      label: "Chrome Web Store",
      href: links.chromeWebStore,
    },
  ].filter(Boolean);

  return (
    <article className="project-card">
      <div
        className="project-media"
        style={
          imageBackground
            ? { "--project-image-background": imageBackground }
            : undefined
        }
      >
        {image ? (
          <img
            src={image}
            alt={`${title} project preview`}
            className={`project-image${
              imageFit === "contain" ? " project-image--contain" : ""
            }`}
          />
        ) : (
          <span className="project-media-kind">{kind}</span>
        )}
      </div>

      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{title}</h3>

          {dateRange && <span className="project-dates">{dateRange}</span>}
        </div>

        {kind && <p className="project-kind">{kind}</p>}

        {summary && <p className="project-summary">{summary}</p>}

        {description && (
          <p className="project-description">{description}</p>
        )}

        {technologies.length > 0 && (
          <div className="project-technologies">
            {technologies.map((technology) => (
              <span key={technology} className="tag">
                {technology}
              </span>
            ))}
          </div>
        )}

        {highlights.length > 0 && (
          <ul className="project-highlights">
            {highlights.map((highlight) => (
              <li key={highlight}>
                <span className="project-highlight-mark">▪</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {linkList.length > 0 && (
          <div className="project-links">
            {linkList.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
