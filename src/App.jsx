import { useState } from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import ProjectCard from './components/ProjectCard/ProjectCard'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>
        Featured Projects:
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', padding: '2rem' }}>
        <ProjectCard
          title="Sample Project 1"
          description="A custom-trained language model designed to understand and solve complex mathematical problems, providing step-by-step solutions and explanations."
          tags={['AI', 'Machine Learning', 'Mathematics']}
          githubLink="https://github.com/daanniill/restaurant-page"
          liveLink="https://daanniill.github.io/restaurant-page/"
        />
      </div>
    </>
  )
}

export default App
