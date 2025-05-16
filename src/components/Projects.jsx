import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'MainOne',
      category: 'wordpress',
      image: 'mainone3.png',
      description: 'Complete website design with custom WordPress theme, improved mobile responsiveness, and 35% faster load times through optimization.',
      technologies: ['WordPress', 'ACF', 'PHP', 'JavaScript', 'CSS'],
      liveLink: 'https://mainone.net/',
      // codeLink: '#'
    },
    {
      id: 2,
      title: 'My Grocery app',
      category: 'frontend',
      image: 'Grocery Website.png',
      description: 'Interactive simple shopping website built during New Horizon internship using just HTML, CSS and Javascript.',
      technologies: ['JavaScript', 'HTML5', 'CSS'],
      liveLink: 'https://nwaforarinze.github.io/mygroco/',
      // codeLink: '#'
    },
    {
      id: 3,
      title: 'Top cancer hospital in Lagos, Nigeria',
      category: 'wordpress',
      image: 'Top cancer hospital in Lagos, Nigeria.png',
      description: 'Implemented a custom WordPress-based system for NLCC, enabling patients to schedule appointments with accuracy and automated email confirmations.',
      technologies: ['WordPress', 'PHP', 'JavaScript', 'ACF'],
      liveLink: 'nlcc.ng',
      // codeLink: '#'
    },
    {
      id: 4,
      title: 'Leading NGO in Nigeria - GivingHands.NG',
      category: 'wordpress',
      image: 'Leading NGO in Nigeria _ Giving Hands NG.png',
      description: 'Interactive NGO Website, showcasing impactful NGO initiatives with modern layouts, smooth animations, and mobile responsiveness..',
      technologies: ['WordPress', 'PHP', 'JavaScript', 'ACF'],
      liveLink: 'https://fibroidcarecentre.nordicalagos.org/',
      // codeLink: '#'
    },
    {
      id: 5,
      title: 'Calculator',
      category: 'frontend',
      image: 'Calculator.PNG',
      description: 'Lightweight calculator app built with HTML, CSS, and vanilla JavaScript for basic arithmetic operations and interactive UI transitions.',
      technologies: ['React.js', 'JavaScript', 'CSS Modules'],
      liveLink: 'https://nwaforarinze.github.io/calculator/',
      // codeLink: '#'
    },
    {
      id: 6,
      title: 'Ministry of Agriculture and Food Systems',
      category: 'wordpress',
      image: 'lagosagric.com_ (1).png',
      description: "Revamped the ministries website with responsive layout, and faster load times, resulting in a 30% improvement in user engagement.",
      technologies: ['WordPress', 'PHP', 'ACF', 'JavaScript'],
      liveLink: 'lagosagric.com',
      // codeLink: '#'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1200">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'wordpress' ? 'active' : ''}`}
            onClick={() => setFilter('wordpress')}
          >
            WordPress
          </button>
          {/* <button 
            className={`filter-btn ${filter === 'react' ? 'active' : ''}`}
            onClick={() => setFilter('react')}
          >
            React
          </button> */}
          <button 
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> Live
                    </a>
                    {/* <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub /> Code
                    </a> */}
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;