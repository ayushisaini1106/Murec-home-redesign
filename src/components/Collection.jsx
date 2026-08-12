import { useState, useEffect } from "react";

const featured = {
  number: "00",
  title: "Forest Walk, Dasna",
  subtitle: "NH-24 · Eastern Peripheral Expressway",
  text: "Forest Walk is a premium gated villa community envisioned as a living forest ecosystem—designed to feel immersive, calm, and deeply connected to nature. Set on NH-24 at the Eastern Peripheral Expressway, only 97 exclusive villas share the address.",
  details: [
    { label: "Address", value: "Forest Walk, Dasna, NH-24" },
    { label: "Residences", value: "97 Exclusive Villas" },
    { label: "Vision Standard", value: "IGBC Certified Green Living" },
    { label: "Architect Partner", value: "Goonmeet Singh Chauhan / Bobby Mukherrji" }
  ],
  image: "https://murec.com/images/about-forest.webp",
};

const cards = [
  {
    number: "01",
    title: "MUREC Urban Residences",
    subtitle: "Enduring Value · Disciplined Craft",
    text: "A portfolio shaped by legacy and guided by vision, where every project reflects a way of building that is deliberate, refined, and enduring.",
    details: [
      { label: "Focus", value: "Prime Urban Landmarks" },
      { label: "Philosophy", value: "Quality before profit, trust before everything" },
      { label: "Heritage", value: "78+ Years of Group Legacy" },
      { label: "Location", value: "Noida · NCR · India" }
    ],
    image: "https://murec.com/images/villa.jpg",
  },
  {
    number: "02",
    title: "Architectural Vision",
    subtitle: "Sculpted Elegance · Spatial Identity",
    text: "Sculpted in collaboration with renowned architects and interior consultants to craft contemporary living spaces of lasting elegance.",
    details: [
      { label: "Architects", value: "Goonmeet Singh Chauhan (Design Lead)" },
      { label: "Interiors", value: "Bobby Mukherrji (Clubhouse & Lobbies)" },
      { label: "Scale Model", value: "Malchand (Physical Master Model)" },
      { label: "Style", value: "Contemporary Living Landmark" }
    ],
    image: "https://murec.com/images/city.jpg",
  },
  {
    number: "03",
    title: "A Responsible Future",
    subtitle: "Environmental Stewardship · IGBC Standards",
    text: "Envisioned to align with IGBC certification standards, integrating environmental stewardship, natural landscapes, and healthier living.",
    details: [
      { label: "Certification", value: "IGBC Green Building Ready" },
      { label: "Sustainability", value: "Resource Efficiency & Native Flora" },
      { label: "Wellness", value: "Pure Air Ecosystems & Daylight Planning" },
      { label: "Growth Partner", value: "Propacity Enablement" }
    ],
    image: "https://murec.com/images/sunsability.webp",
  },
];

export default function Collection() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    if (activeProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  return (
    <section className="section collection-section" id="collection">
      <div className="site-container">
        <div className="collection-heading" data-reveal>
          <div className="section-kicker">
            <span>02</span>
            <span>MUREC Collection</span>
          </div>
          <h2>Where legacy meets<br /><i>vision.</i></h2>
          <p>
            A portfolio shaped by legacy and guided by vision, the MUREC Collection
            is where every project reflects our way of building.
          </p>
        </div>

        <div className="collection-featured" data-reveal>
          <div className="featured-copy">
            <p className="eyebrow">Featured story</p>
            <h3>{featured.title}</h3>
            <p>{featured.text}</p>
            <button
              className="text-link modal-trigger-btn"
              onClick={() => setActiveProject(featured)}
            >
              Discover more <span>↗</span>
            </button>
          </div>

          <div
            className="featured-image clickable-image"
            onClick={() => setActiveProject(featured)}
            role="button"
            tabIndex={0}
            aria-label={`Explore ${featured.title}`}
          >
            <img src={featured.image} alt="Forest Walk, Dasna project" loading="lazy" />
            <div className="image-shade"></div>
            <button className="project-hover-label" aria-label="Explore project">EXPLORE</button>
          </div>
        </div>

        <div className="project-list">
          {cards.map((card, index) => (
            <article
              className="project-card"
              key={card.number}
              data-reveal
              style={{ "--delay": `${index * 120}ms` }}
            >
              <div
                className="project-image clickable-image"
                onClick={() => setActiveProject(card)}
                role="button"
                tabIndex={0}
                aria-label={`Explore ${card.title}`}
              >
                <img src={card.image} alt={`${card.title} architectural visual`} loading="lazy" />
                <div className="image-shade"></div>
                <span className="project-number">{card.number}</span>
                <button
                  className="view-project clickable-badge"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProject(card);
                  }}
                >
                  Explore <b>↗</b>
                </button>
                <button
                  className="project-hover-label"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProject(card);
                  }}
                >
                  DISCOVER
                </button>
              </div>
              <div className="project-info">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* INTERACTIVE PROJECT DETAIL MODAL */}
      {activeProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setActiveProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="project-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-cross-btn"
              onClick={() => setActiveProject(null)}
              aria-label="Close project modal"
              title="Close and return to page"
            >
              ✕
            </button>

            <div className="modal-body-grid">
              <div className="modal-image-col">
                <img src={activeProject.image} alt={activeProject.title} />
                <span className="modal-badge">{activeProject.number || "00"} · COLLECTION</span>
              </div>

              <div className="modal-info-col">
                <p className="eyebrow">{activeProject.subtitle}</p>
                <h3 id="modal-title">{activeProject.title}</h3>
                <p className="modal-desc">{activeProject.text}</p>

                <div className="modal-specs-list">
                  {activeProject.details?.map((spec) => (
                    <div className="spec-item" key={spec.label}>
                      <span>{spec.label}</span>
                      <strong>{spec.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="modal-footer-actions">
                  <a
                    className="light-button"
                    href="#contact"
                    onClick={() => setActiveProject(null)}
                  >
                    Inquire about project <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
