import React from "react";
import "./Carousel.css";

const techLogos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
];

const InfiniteCarousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {[...techLogos, ...techLogos, ...techLogos, ...techLogos].map((logo, index) => (
          <div className="carousel-item" key={index}>
            <img src={logo} alt={`tech-logo-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
