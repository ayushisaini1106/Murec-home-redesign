const voices = [
  {
    name: "Malchand",
    quote: "The scale model for MUREC will serve as a tangible representation of the proposed development.",
  },
  {
    name: "Bobby Mukherrji",
    quote: "We are engaged to conceptualize the interiors for MUREC’s clubhouse and tower lobbies, with a focus on refined luxury and strong spatial identity.",
  },
  {
    name: "Goonmeet Ji",
    quote: "We are engaged to sculpt the architectural vision for MUREC as a contemporary residential landmark—an address conceived for refined urban living, where design elegance is thoughtfully interwoven with functional planning.",
  },
  {
    name: "Shivam Patodia",
    quote: "Propacity is proud to partner with MUREC as its mandate-led growth partner. From brand launch to project marketing and consulting enablement, the collaboration reflects strategic thinking, strong execution, and a shared vision of building a future-forward real estate brand.",
  },
];

export default function Voices() {
  return (
    <section className="section voices-section" id="partners">
      {/* Background Image Layer */}
      <div className="voices-bg-wrapper">
        <div className="voices-bg-image"></div>
        <div className="voices-overlay"></div>
      </div>

      <div className="site-container">
        <div className="section-kicker" data-reveal>
          <span>04</span>
          <span>From our partners</span>
        </div>

        <div className="voices-intro" data-reveal>
          <p className="eyebrow">Our associations</p>
          <h2>Built together.<br /><i>Designed to last.</i></h2>
        </div>

        <div className="voices-grid">
          {voices.map((voice, index) => (
            <blockquote key={voice.name} data-reveal style={{ "--delay": `${index * 100}ms` }}>
              <span className="quote-mark">“</span>
              <p>{voice.quote}</p>
              <footer>{voice.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
