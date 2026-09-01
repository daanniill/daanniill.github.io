import "./Skills.css";

function Skills({ skills = [] }) {
  return (
    <div className="skills-grid">
      {skills.map(({ category, items = [] }) => (
        <div key={category} className="skills-group">
          <div className="skills-category">{category}</div>

          <div className="skills-items">
            {items.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
