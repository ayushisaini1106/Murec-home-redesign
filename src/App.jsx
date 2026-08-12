import { useEffect, useState } from "react";
import BackgroundCanvas from "./components/BackgroundCanvas";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Legacy from "./components/Legacy";
import Collection from "./components/Collection";
import Philosophy from "./components/Philosophy";
import Voices from "./components/Voices";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;

    // Lock scroll during intro
    document.body.style.overflow = 'hidden';

    const handleReady = () => {
      timer = window.setTimeout(() => {
        setLoaded(true);
        // Unlock scroll after intro finishes
        document.body.style.overflow = '';
      }, 1200);
    };

    if (document.readyState === "complete") {
      handleReady();
    } else {
      window.addEventListener("load", handleReady, { once: true });
    }

    const revealItems = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -70px 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const value = scrollable > 0 ? window.scrollY / scrollable : 0;
      setProgress(Math.min(1, Math.max(0, value)));

      document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (timer) window.clearTimeout(timer);
      document.body.style.overflow = '';
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("load", handleReady);
    };
  }, []);

  return (
    <div className={`site ${loaded ? "site-loaded" : ""}`}>
      <div className="intro-screen" aria-hidden={loaded}>
        <div className="intro-mark">
          <img src="/murec_logo.png" alt="MUREC emblem logo" className="intro-logo-img" />
          <span>MUREC</span>
          <small>MADHUSUDAN URBAN REAL ESTATE COLLECTION</small>
          <i />
        </div>
      </div>

      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="ambient-bg" aria-hidden="true">
        <BackgroundCanvas />
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-grain" />
      </div>
      <Navbar />

      <main>
        <Hero />
        <Legacy />
        <Collection />
        <Philosophy />
        <Voices />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
