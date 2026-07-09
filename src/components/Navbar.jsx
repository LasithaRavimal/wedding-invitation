import { useState, useEffect } from "react";
import { weddingData } from "../data/weddingData";

// ── Sticky Navigation Bar ─────────────────────────────────────────────────────
export default function Navbar() {
  const { groomName, brideName } = weddingData;
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home",      label: "Home" },
    { href: "#couple",    label: "Couple" },
    { href: "#countdown", label: "Countdown" },
    { href: "#schedule",  label: "Schedule" },
    { href: "#gallery",   label: "Gallery" },
    { href: "#venue",     label: "Venue" },
    { href: "#rsvp",      label: "RSVP" },
  ];

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo / names */}
        <button
          onClick={() => scrollTo("#home")}
          className={`font-script text-2xl transition-colors ${
            scrolled ? "text-[var(--color-charcoal)]" : "text-white"
          }`}
        >
          {groomName} &amp; {brideName}
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className={`font-sans text-xs uppercase tracking-widest transition-colors hover:text-[var(--color-gold)] ${
                scrolled ? "text-[var(--color-charcoal)]" : "text-white/90"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden text-2xl transition-colors ${
            scrolled ? "text-[var(--color-charcoal)]" : "text-white"
          }`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white/97 backdrop-blur-md shadow-lg px-6 py-4 flex flex-col gap-3">
          {links.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className="font-sans text-sm uppercase tracking-widest text-[var(--color-charcoal)] hover:text-[var(--color-gold)] text-left py-1 border-b border-[var(--color-gold)]/10"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
