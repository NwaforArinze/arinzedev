import { FaWordpress, FaCode, FaLaptopCode } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          
          {/* Developer Image Block with AOS Animation */}
          <div className="about-image" data-aos="fade-right" data-aos-duration="600" data-aos-once="true">
            <div className="image-wrapper">
              <img src="/imagebg.png" alt="Professional Developer" className="image" />
            </div>
            <div className="code-bubble">
              <p className="code-snippet">
                <span className="keyword">const</span> developer = {'{'} <br />
                &nbsp;&nbsp;<span className="key">"name"</span>: <span className="value">"Arinzechukwu"</span>,<br />
                &nbsp;&nbsp;<span className="key">"role"</span>: <span className="value">"Frontend Developer"</span>,<br />
                &nbsp;&nbsp;<span className="key">"loves"</span>: <span className="value">"Clean Code"</span> <br />
                {'}'};
              </p>
            </div>
          </div>

          {/* About Text & Services */}
          <div className="about-text">
            <p>
              I'm a passionate WordPress and Frontend Developer with hands-on experience in building 
              responsive and user-centric websites. Currently working at WowEffect Communications in Lagos,
              I've successfully developed and launched multiple custom WordPress websites that deliver 
              results for clients.
            </p>
            <p>
              My approach combines technical expertise with creative problem-solving, focusing on 
              performance optimization and seamless user experiences. I pride myself on clean, 
              well-documented code and pixel-perfect implementations of designs.
            </p>
            <div className="about-services" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              <div className="service-card">
                <FaWordpress className="service-icon" />
                <h3>WordPress Development</h3>
                <p>Custom themes and plugins with ACF and CPT integration</p>
              </div>
              <div className="service-card">
                <FaCode className="service-icon" />
                <h3>Frontend Development</h3>
                <p>Responsive websites using modern HTML, CSS, and JavaScript</p>
              </div>
              <div className="service-card">
                <FaLaptopCode className="service-icon" />
                <h3>Performance Optimization</h3>
                <p>Speed optimization and security implementation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default About;