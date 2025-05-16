import { Link } from 'react-scroll';
import { FaHeart, FaHome, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Arinze<span className="accent-text">Dev</span></h2>
            <p>WordPress & Frontend Development</p>
          </div>
          
          <div className="footer-nav">
            <h3>Navigation</h3>
            <ul>
              <li>
                <Link to="hero" smooth={true} duration={500} offset={-100}>Home</Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} offset={-100}>About</Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={500} offset={-100}>Skills</Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500} offset={-100}>Projects</Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} offset={-100}>Contact</Link>
              </li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact</h3>
            <p><FaEnvelope className="other-icon" />nwaforchideraarinze@gmail.com</p>
            <p><FaPhone className="other-icon" />08135496550</p>
            <p><FaHome className="other-icon" />Ikotun, Lagos State</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Arinzechukwu Nwafor. All rights reserved.</p>
          <p>Made with <FaHeart className="heart-icon" /> by Arinzechukwu</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;