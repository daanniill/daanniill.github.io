import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import SectionHeading from "./components/SectionHeading/SectionHeading";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import ExperienceCard from "./components/ExperienceCard/ExperienceCard";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Interests from "./components/Interests/Interests";
import experienceData from "./data/experience.json";
import projectsData from "./data/projects.json";
import educationData from "./data/education.json";
import skillsData from "./data/skills.json";

import "./App.css";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  return stored === "dark" || stored === "light" ? stored : "light";
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />

        <section id="education" className="education-section">
          <SectionHeading title="Education" />

          {educationData.education.map((edu) => (
            <Education key={edu.id} {...edu} />
          ))}
        </section>

        <section id="experience" className="experience-section">
          <SectionHeading title="Experience" />

          <div className="experience-list">
            {experienceData.experience.map((exp) => (
              <ExperienceCard key={exp.id} {...exp} />
            ))}
          </div>
        </section>

        <section id="projects" className="projects-section">
          <SectionHeading title="Selected Projects" />

          <div className="projects-grid">
            {projectsData.projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section id="skills" className="skills-section">
          <SectionHeading title="Skills" />

          <Skills skills={skillsData.skills} />
        </section>

        <Interests />

        <section id="contact" className="contact-section">
          <div className="contact-grid">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" />
                <span className="eyebrow-text">Contact</span>
              </div>

              <h2 className="contact-heading">Let's build something.</h2>

              <p className="contact-copy">
                Open to collaborations, questions, or just saying hi — always
                happy to talk about new projects and opportunities.
              </p>
            </div>

            <div className="contact-links">
              <a
                href="mailto:daniil.malakhov12@gmail.com"
                className="contact-link-row"
              >
                <span className="contact-link-label">Email</span>
                <span className="contact-link-value">
                  daniil.malakhov12@gmail.com
                </span>
              </a>

              <a
                href="https://github.com/daanniill"
                className="contact-link-row"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-label">GitHub</span>
                <span className="contact-link-value">@daanniill</span>
              </a>

              <a
                href="https://www.linkedin.com/in/daniil-malakhov-8420a0210/"
                className="contact-link-row"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-label">LinkedIn</span>
                <span className="contact-link-value">daniil-malakhov</span>
              </a>
            </div>
          </div>

          <div className="site-footer">
            <span>© 2026 Daniil Malakhov</span>
            <span>Built with React · Vite · GitHub Pages</span>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
