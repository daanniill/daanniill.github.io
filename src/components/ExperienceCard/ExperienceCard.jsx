import "./ExperienceCard.css";

function ExperienceCard({role, company, location, startDate, endDate, description, skills}) {
  return (
    <div className="experience-card">
      <h3 className="experience-role">{role}</h3>
      <p className="experience-company">{company} - {location}</p>
      <p className="experience-dates">{startDate} - {endDate}</p>
      <p className="experience-description">{description}</p>
      <div className="experience-skills">
        {skills.map((skill, index) => (
          <span key={index} className="experience-skill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ExperienceCard;