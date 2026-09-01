import "./ExperienceCard.css";

function ExperienceCard({
  role,
  company,
  location,
  startDate,
  endDate,
  description,
  highlights = [],
  skills = [],
}) {
  return (
    <article className="experience-card">
      <div className="experience-meta">
        <div className="experience-dates">
          {startDate} — {endDate}
        </div>

        <div className="experience-company">{company}</div>

        {location && <div className="experience-location">{location}</div>}
      </div>

      <div className="experience-body">
        <h3 className="experience-role">{role}</h3>

        <p className="experience-description">{description}</p>

        {highlights.length > 0 && (
          <ul className="experience-highlights">
            {highlights.map((highlight) => (
              <li key={highlight}>
                <span className="experience-highlight-mark">—</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {skills.length > 0 && (
          <div className="experience-skills">
            {skills.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default ExperienceCard;
