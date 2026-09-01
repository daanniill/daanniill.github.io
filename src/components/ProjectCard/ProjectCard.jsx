import "./ProjectCard.css";

function ProjectCard({
  title,
  subtitle,
  summary,
  description,
  image,
  startDate,
  endDate,
  technologies = [],
  highlights = [],
  links = {},
}) {
  const dateRange =
    startDate && endDate
      ? `${startDate} – ${endDate}`
      : startDate || endDate || "";

  return (
    <article className="project-card">
      {image && (
        <div className="project-image-container">
          <img
            src={image}
            alt={`${title} project preview`}
            className="project-image"
          />
        </div>
      )}

      <div className="project-content">
        <div className="project-header">
          <div>
            <h3 className="project-title">{title}</h3>

            {subtitle && (
              <p className="project-subtitle">{subtitle}</p>
            )}
          </div>

          {dateRange && (
            <p className="project-dates">{dateRange}</p>
          )}
        </div>

        {summary && (
          <p className="project-summary">{summary}</p>
        )}

        {description && (
          <p className="project-description">{description}</p>
        )}

        {technologies.length > 0 && (
          <div className="project-technologies">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="project-technology"
              >
                {technology}
              </span>
            ))}
          </div>
        )}

        {highlights.length > 0 && (
          <div className="project-highlights">
            <h4 className="project-highlights-title">
              Highlights
            </h4>

            <ul className="project-highlights-list">
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}

        {(links.github || links.demo || links.website || links.chromeWebStore) && (
          <div className="project-links">
            {links.github && (
              <a
                href={links.github}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            )}

            {links.demo && (
              <a
                href={links.demo}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            )}

            {links.website && (
              <a
                href={links.website}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>
            )}

            {links.chromeWebStore && (
              <a
                href={links.chromeWebStore}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                Chrome Web Store
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
