import "./Carousel.css";

const techLogos = [
  { src: "html-5_919827.png", name: "HTML5" },
  { src: "css_919826.png", name: "CSS3" },
  { src: "webflow.svg", name: "webflow" },
  { src: "wordpress.png", name: "Wordpress" },
  { src: "js_5968292.png", name: "JavaScript" },
  { src: "science_15886932.png", name: "React" },
  { src: "typescript_5968381.png", name: "TypeScript" },
  { src: "social_15466163.png", name: "Git" },
  { src: "github_3291695.png", name: "GitHub" },
  { src: "figma_5968705.png", name: "Figma" },
];

const InfiniteCarousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {[...techLogos, ...techLogos].map((logo, index) => (
          <div className="carousel-item" key={index}>
            <img src={logo.src} alt={logo.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
