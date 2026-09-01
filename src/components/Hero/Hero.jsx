import "./Hero.css";
import profileImage from "../../assets/profile.png";

function Hero() {
  return (
    <section id="about" className="about">
      <div className="about-text">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Mathematics of Computation</span>
        </div>

        <h1 className="about-title">
          Daniil
          <br />
          Malakhov
        </h1>

        <p className="about-description">
          UCLA Mathematics of Computation student building full-stack
          applications, software tools, and technical projects at the
          intersection of math and software engineering.
        </p>

        <div className="about-actions">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>

          <a
            href="https://github.com/daanniill"
            className="btn btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/daniil-malakhov-8420a0210/"
            className="btn btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="about-stats">
          <div className="about-stat">
            <div className="about-stat-label">Focus</div>
            <div className="about-stat-value">Software Systems</div>
          </div>

          <div className="about-stat">
            <div className="about-stat-label">Based in</div>
            <div className="about-stat-value">Los Angeles, CA</div>
          </div>

          <div className="about-stat">
            <div className="about-stat-label">Status</div>
            <div className="about-stat-value">Open to internships</div>
          </div>
        </div>
      </div>

      <div className="about-portrait">
        <div className="about-portrait-frame" />
        <img
          src={profileImage}
          alt="Daniil Malakhov"
          className="about-portrait-image"
        />
      </div>
    </section>
  );
}

export default Hero;
