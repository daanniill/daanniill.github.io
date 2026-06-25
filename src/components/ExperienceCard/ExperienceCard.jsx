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
      <div className="experience-card-header">
        <div>
          <h3 className="experience-role">{role}</h3>

          <p className="experience-company">
            {company}
            {location && <span> — {location}</span>}
          </p>
        </div>

        <p className="experience-dates">
          {startDate} – {endDate}
        </p>
      </div>

      <p className="experience-description">{description}</p>

      {highlights.length > 0 && (
        <ul className="experience-highlights">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}

      {skills.length > 0 && (
        <div className="experience-skills">
          {skills.map((skill) => (
            <span key={skill} className="experience-skill">
              {skill}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export default ExperienceCard;