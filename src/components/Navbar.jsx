import { useEffect, useState } from "react";

const links = [
  ["Legacy", "#legacy"],
  ["Collection", "#collection"],
  ["Philosophy", "#philosophy"],
  ["Partners", "#partners"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["legacy", "collection", "philosophy", "partners", "contact"];
      const current = sections
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= window.innerHeight * 0.35 && rect.bottom > window.innerHeight * 0.35;
        });

      setActive(current ? `#${current.id}` : "#top");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${open ? "menu-open" : ""} ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container site-container">
        <a href="#top" className="brand" aria-label="MUREC home" onClick={close}>
          <img src="/murec_logo.png" alt="MUREC logo" className="brand-logo" />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a className={active === href ? "active" : ""} key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          Get in touch <span>↗</span>
        </a>

        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <div className="mobile-menu">
          {links.map(([label, href]) => (
            <a className={active === href ? "active" : ""} key={label} href={href} onClick={close}>
              <span>{label}</span>
              <small>0{links.findIndex((item) => item[1] === href) + 1}</small>
            </a>
          ))}
          <a href="#contact" onClick={close}>Get in touch ↗</a>
        </div>
      </div>
    </header>
  );
}
