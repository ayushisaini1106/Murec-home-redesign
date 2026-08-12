export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* Animated Villa Background Layer */}
      <div className="hero-bg-wrapper">
        <div className="hero-bg-image"></div>
        <div className="hero-overlay"></div>
      </div>

      <div className="site-container">
        <div className="hero-grid hero-full-copy">
          <div className="hero-copy">
            <div className="hero-brand-mark">
              <img src="/murec_logo.png" alt="MUREC logo" />
              <span>MUREC · Madhusudan Urban Real Estate Collection</span>
            </div>

            <h1 aria-label="The legacy beyond compare">
              <span className="hero-line"><span>THE LEGACY</span></span>
              <span className="hero-line hero-line-accent"><span>BEYOND COMPARE</span></span>
            </h1>

            <p className="hero-description">
              For over seven decades, MUREC has stood for perseverance, integrity, and
              nation-building through enterprise. Every step has been guided by one
              principle: quality before profit, trust before everything.
            </p>

            <div className="hero-stats" aria-label="MUREC highlights">
              <span>78+ years of legacy</span>
              <span>IGBC-ready vision</span>
              <span>Noida · India</span>
            </div>
          </div>
        </div>
      </div>

      {/* TIMELESS-STYLE ANIMATED EXPLORE CIRCLE */}
      <a className="timeless-explore-badge" href="#legacy" aria-label="Explore MUREC">
        <div className="timeless-orbit-ring ring-1"></div>
        <div className="timeless-orbit-ring ring-2"></div>
        <div className="timeless-circle-core">
          <span>EXPLORE</span>
          <span className="arrow">↓</span>
        </div>
      </a>
    </section>
  );
}
