import React from 'react'

export const About = () => {
  return (
    <div className="about-container">
      <div className="hero-section">
        <h1 className="text-5xl font-bold text-gray-900">Yubraj Shrestha</h1>
        <p className="text-lg text-gray-600">Software Engineer</p>
        <img src="https://picsum.photos/200/300" alt="Yubraj Shrestha" className="rounded-full w-48 h-48" />
      </div>
      <div className="about-content">
        <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
        <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
      </div>
      <div className="skills-section">
        <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
        <ul className="list-none">
          <li className="text-lg text-gray-600">JavaScript</li>
          <li className="text-lg text-gray-600">React</li>
          <li className="text-lg text-gray-600">Node.js</li>
          <li className="text-lg text-gray-600">MongoDB</li>
        </ul>
      </div>
      <div className="experience-section">
        <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
        <ul className="list-none">
          <li className="text-lg text-gray-600">Software Engineer at ABC Company</li>
          <li className="text-lg text-gray-600">Front-end Developer at DEF Company</li>
        </ul>
      </div>
      <div className="education-section">
        <h2 className="text-3xl font-bold text-gray-900">Education</h2>
        <ul className="list-none">
          <li className="text-lg text-gray-600">Bachelor's Degree in Computer Science</li>
        </ul>
      </div>
      <div className="contact-section">
        <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
        <ul className="list-none">
          <li className="text-lg text-gray-600">Email: <a href="mailto:yubraj.shrestha@example.com" className="text-blue-600 hover:text-blue-800">yubraj.shrestha@example.com</a></li>
          <li className="text-lg text-gray-600">LinkedIn: <a href="https://www.linkedin.com/in/yubrajshrestha" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">linkedin.com/in/yubrajshrestha</a></li>
        </ul>
      </div>
    </div>
  )
}
