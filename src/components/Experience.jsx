import { useEffect, useRef } from "react";
import "./Experience.css";

const Experience = () => {
  const lineRef = useRef(null);

  const experiences = [
    {
      title: "WordPress Developer",
      company: "WowEffect Communications",
      period: "Oct 2024 – Apr 2025",
      location: "Lagos",
      highlights: [
        "Developed 8+ custom WordPress websites",
        "Converted UI/UX designs into responsive themes",
        "Optimized site performance by up to 35%",
        "Customized themes and plugins using ACF and CPT",
        "Maintained and secured WordPress sites",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "HNG Tech",
      period: "Jul 2024 – Aug 2024",
      location: "Remote",
      highlights: [
        "Built responsive UIs using React.js",
        "Collaborated with backend developers",
        "Participated in Agile development",
        "Contributed to a team-built project",
      ],
    },
    {
      title: "Frontend Developer Trainee",
      company: "New Horizon",
      period: "Aug 2023 – Jul 2024",
      location: "Ikeja, Lagos",
      highlights: [
        "Developed interactive landing pages",
        "Worked on React-based projects",
        "Contributed in developing WordPress websites",
        "Improved UI accessibility",
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && lineRef.current) {
          lineRef.current.classList.add("grow-line");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline-container">
          <div className="timeline-line" ref={lineRef}></div>

          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`experience-item ${
                  index === 1 ? "left" : "right"
                }`}
              >
                <div className="experience-dot"></div>
                <div className="experience-content">
                  <div className="experience-header">
                    <h3 className="experience-title">{exp.title}</h3>
                    <p className="experience-company">{exp.company}</p>
                    <p className="experience-period">{exp.period}</p>
                    <p className="experience-location">{exp.location}</p>
                  </div>
                  <div className="experience-details">
                    <ul>
                      {exp.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
