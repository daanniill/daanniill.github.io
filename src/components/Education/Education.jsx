import "./Education.css";

function Education({
  school,
  degree,
  location,
  startDate,
  endDate,
  coursework = [],
}) {
  return (
    <article className="education-card">
      <div className="education-card-header">
        <div>
          <h3 className="education-school">{school}</h3>

          <p className="education-degree">
            {degree}
            {location && <span> — {location}</span>}
          </p>
        </div>

        <p className="education-dates">
          {startDate} – {endDate}
        </p>
      </div>

      {coursework.length > 0 && (
        <div className="education-coursework">
          {coursework.map((course) => (
            <span key={course} className="education-course">
              {course}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export default Education;
