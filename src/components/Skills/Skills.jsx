import "./Skills.css";

function Skills({ skills = [] }) {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skills.map(({ category, items = [] }) => (
          <div key={category} className="skills-group">
            <h3 className="skills-category">{category}</h3>

            <div className="skills-items">
              {items.map((item) => (
                <span key={item} className="skills-item">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
