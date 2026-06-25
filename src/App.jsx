import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import ProjectCard from './components/ProjectCard/ProjectCard'
import ExperienceCard from './components/ExperienceCard/ExperienceCard'
import HomelabBlog from './components/HomelabBlog/HomelabBlog'
import Interests from './components/Interests/Interests'
import experienceData from './data/experience.json'
import projectsData from './data/projects.json'

import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="experience" className="experience-section">
          <h2 className="section-title">Experience</h2>

          {experienceData.experience.map((exp) => (
            <ExperienceCard key={exp.id} {...exp} />
          ))}
        </section>

        <section id="projects" className="projects-section">
          <h2 className="section-title">Featured Projects</h2>

          <div className="projects-grid">
            {projectsData.projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <HomelabBlog />

        <Interests /> 

        <section id="contact" className="contact-section">
          <h2>Contact</h2>

          <p>
            Feel free to reach out for collaborations, questions, or just to say hi! I'm always open to discussing new projects and opportunities.
          </p>

          <div className="contact-links">
            <a href="daniil.malakhov12@gmail.com">Email</a>

            <a
              href="https://github.com/daanniill"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/daniil-malakhov-8420a0210/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
