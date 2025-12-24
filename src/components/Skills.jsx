import { FaWordpress, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaGit, FaFigma } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      icon: <FaWordpress />,
      name: 'WordPress',
      level: 90,
      color: '#21759b'
    },
    {
      icon: <FaHtml5 />,
      name: 'HTML5',
      level: 95,
      color: '#e34c26'
    },
    {
      icon: <FaCss3Alt />,
      name: 'CSS3',
      level: 90,
      color: '#264de4'
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
      level: 85,
      color: '#f7df1e'
    },
    {
      icon: <FaReact />,
      name: 'React.js',
      level: 75,
      color: '#61dafb'
    },
    // {
    //   icon: <FaPhp />,
    //   name: 'PHP',
    //   level: 80,
    //   color: '#8993be'
    // },
    {
      icon: <FaGit />,
      name: 'Git',
      level: 75,
      color: '#f05032'
    },
    {
      icon: <FaFigma />,
      name: 'Figma',
      level: 70,
      color: '#f24e1e'
    }
  ];
  
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">My Skills</h2>
        <div className="skills-content">
          <div className="skills-text" data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
            <h3>Technical Expertise</h3>
            <p>
              With experience in both WordPress and frontend development, I create
              custom solutions that deliver exceptional user experiences. My technical
              skills include:
            </p>
            <ul className="skills-list">
              <li>Custom WordPress theme development</li>
              <li>Advanced Custom Fields (ACF) implementation</li>
              <li>Custom Post Types (CPT) creation</li>
              <li>Responsive web design</li>
              <li>Performance optimization</li>
              <li>UI/UX implementation from Figma</li>
              <li>Version control with Git</li>
              <li>React.js development</li>
            </ul>
          </div>
          <div className="skills-bars" data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-info">
                  <div className="skill-name">
                    <span className="skill-icon" style={{ color: skill.color }}>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                  <div className="skill-percentage">{skill.level}%</div>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;