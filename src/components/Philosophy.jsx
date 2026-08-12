const values = [
  ["01", "Trust", "Building trust as the foundation of every decision and relationship."],
  ["02", "Quality", "Delivering quality through uncompromising standards and considered detail."],
  ["03", "Transparency", "Practicing transparency in how we build, communicate, and grow."],
  ["04", "Innovation", "Embracing innovation as the foundation of responsible, future-ready living."],
];

export default function Philosophy() {
  return (
    <section className="philosophy-section" id="philosophy">
      <div className="philosophy-container site-container">
        <div className="philosophy-visual" data-reveal>
          <div className="visual-frame">
            <span className="visual-word">MUREC · PRINCIPLES · 2026</span>
            <div className="visual-orbit orbit-one"></div>
            <div className="visual-orbit orbit-two"></div>
            <div className="visual-orbit orbit-three"></div>
            <div className="visual-center">M</div>
          </div>
          <div className="visual-caption">IGBC CERTIFIED DESIGN PHILOSOPHY</div>
        </div>

        <div className="philosophy-content">
          <div className="section-kicker" data-reveal>
            <span>03</span>
            <span>Living by principles</span>
          </div>

          <div data-reveal>
            <h2>Values that shape<br /><i>every decision.</i></h2>
            <p className="lead">
              The first MUREC collection is envisioned to align with IGBC certification
              standards, reflecting a commitment to responsible development. From
              efficient resource planning to healthier living environments, the project
              integrates sustainability as a core design principle.
            </p>
          </div>

          <div className="value-list">
            {values.map(([number, title, text]) => (
              <div className="value-row" key={number} data-reveal>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <b>↗</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
