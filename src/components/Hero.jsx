import { useEffect, useRef } from "react";
import { Code2, Code, Terminal, FileText, ArrowRight, Download } from "lucide-react";
import {
  FaArrowDown,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaDownload,
  FaPaperPlane,
} from "react-icons/fa";
import { Link } from "react-scroll";
import "./Hero.css";

const floatingIcons = [Code2, Code, Terminal, FileText, ArrowRight, Download];

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];

    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(
            Math.random() * 100 + 100
          )}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.1})`,
        });
      }
    };

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(120, 120, 255, ${0.2 - distance / 500})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
      connectParticles();
    };

    createParticles();
    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particles.length = 0;
      createParticles();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Canvas background */}
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Floating Icons */}
      <div className="floating-icons">
        {Array.from({ length: 20 }).map((_, i) => {
          const Icon = floatingIcons[Math.floor(Math.random() * floatingIcons.length)];
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
              <Icon size={24 + Math.random() * 48} />
            </div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="container hero-container" data-aos="fade-up">
        <div className="hero-content">
          <div className="badge">
            <Code className="badge-icon" />
            <span>Frontend & WordPress Developer</span>
          </div>
          <h1 className="hero-title">Arinzechukwu <span>Chidera</span> Nwafor</h1>
          <p className="hero-description">
            Detail-oriented developer specializing in building responsive and user-centric WordPress websites.
          </p>

          <div className="hero-cta">
            <a href="public/Arinzechukwu_Nwafor_CV_latest.pdf" download>
              <button className="btn btn-primary">Download CV <FaDownload className="icon-spacing"/></button>
            </a>
            <a href="https://wa.me/2348135496550" target="_blank">
              <button className="btn btn-secondary">Contact Me <FaPaperPlane className="icon-spacing"/></button>
            </a>
          </div>

          {/* <div className="social-linkeds">
            <a href="https://linkedin.com/in/arinzechukwu-nwafor-b39087293" target="_blank" className="social-linked"><FaLinkedin /></a>
            <a href="https://github.com/NwaforArinze" target="_blank" className="social-linked"><FaGithub /></a>
            <a href="mailto:nwaforchideraarinze@gmail.com" className="social-linked"><FaEnvelope /></a>
            <a href="tel:+2348135496550" className="social-linked"><FaPhone /></a>
          </div> */}
        </div>
      </div>

      {/* Scroll Down */}
      <div className="scroll-indicator">
        <Link to="about" smooth duration={500} offset={-100}>
          <FaArrowDown />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
