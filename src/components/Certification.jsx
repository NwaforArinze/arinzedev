import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import "./Certification.css";

const certifications = [
  {
    title: "Web Development(Frontend)",
    issuer: "HNG Internship Program",
    date: "07th August 2024",
    link: "HNG Internship 11_Nwafor Arinzechukwu_certificate.pdf",
  },
  {
    title: "Web Development(Frontend)",
    issuer: "New Horizon Academy,",
    date: "20th October 2024",
    link: "New Horizon-Nwafor Arinzechukwu Chidera.pdf",
  },
  {
    title: "Word Processing",
    issuer: "Cisco Networking Academy",
    date: "26th October 2018",
    link: "/cisco.pdf",
  },
];

const Certification = () => {
  return (
    <section className="certificate">
        <div className="certificate-container" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            <h2 className="section-title">My Certifications</h2>
            <p className="cert-subtitle">
                Recognized qualifications that validate my technical expertise and professional development.
            </p>
            <div className="cert-grid">
                {certifications.map((cert, index) => (
                <div className="cert-card" key={index}>
                    <h3>{cert.title}</h3>
                    <p><strong>Issued by:</strong> {cert.issuer}</p>
                    <p><strong>Date:</strong> {cert.date}</p>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-btn">
                    View Certificate <span><BsBoxArrowUpRight /></span>
                    </a>
                </div>
                ))}
            </div>
        </div>
      
    </section>
  );
};

export default Certification;
