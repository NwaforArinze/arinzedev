import { Code2, Code, Terminal, FileText } from "lucide-react";
import { FaArrowDown, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaDownload, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Hero.css';

// Array of icons to choose from
const floatingIcons = [Code2, Code, Terminal, FileText];

const Hero = () => {
  return (
    <section id="hero" className="hero">
      
      {/* Floating Icons Layer */}
      <div className="floating-icons">
        {Array.from({ length: 20 }).map((_, i) => {
          // Pick a random icon component from the array
          const IconComponent = floatingIcons[Math.floor(Math.random() * floatingIcons.length)];
          return (
            <div
              key={i}
              className="icon"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              <IconComponent size={24 + Math.random() * 48} />
            </div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="container hero-container">
        <div className="hero-content">
          <h3 className="hero-subtitle">Hi, my name is</h3>
          <h1 className="hero-title">Arinzechukwu Chidera Nwafor</h1>
          <h2 className="hero-role">WordPress & Frontend Developer</h2>
          <p className="hero-description">
            Detail-oriented developer specializing in building responsive and user-centric WordPress websites.
            Skilled in creating custom themes, optimizing performance, and delivering exceptional user experiences.
          </p>

          <div className="hero-cta">
            <a href="public/Arinzechukwu_Nwafor_CV_latest.pdf" download>
              <button className="btn btn-primary">Download CV <FaDownload /></button>
            </a>
            <a href="https://wa.me/2348135496550" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-secondary">Contact Me <FaPaperPlane /></button>
            </a>
          </div>

          <div className="social-linkeds">
            <a href="https://linkedin.com/in/arinzechukwu-nwafor-b39087293" target="_blank" rel="noopener noreferrer" className="social-linked">
              <FaLinkedin />
            </a>
            <a href="https://github.com/NwaforArinze" target="_blank" rel="noopener noreferrer" className="social-linked">
              <FaGithub />
            </a>
            <a href="mailto:nwaforchideraarinze@gmail.com" target="_blank" rel="noopener noreferrer" className="social-linked">
              <FaEnvelope />
            </a>
            <a href="tel:+2348135496550" target="_blank" rel="noopener noreferrer" className="social-linked">
              <FaPhone />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="scroll-indicator">
        <Link to="about" smooth={true} duration={500} offset={-100}>
          <FaArrowDown />
        </Link>
      </div>

    </section>
  );
};

export default Hero;
