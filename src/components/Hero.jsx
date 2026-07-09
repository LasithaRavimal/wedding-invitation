import { useEffect, useRef } from "react";
import { weddingData } from "../data/weddingData";

export default function Hero() {
  const {
    groomName,
    brideName,
    guestName,
    initials,
    invitationTitle,
    weddingDate,
    weddingTime,
    invitationMessage,
    backgroundImage,
  } = weddingData;

  const formattedDate = new Date(weddingDate + "T00:00:00").toLocaleDateString(
    "en-US",
    { weekday: "long", year: "numeric", month: "long", day: "numeric" }
  );

  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${window.scrollY * 0.4}px`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    document.getElementById("couple")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 max-w-3xl mx-auto animate-fadeIn">
        <div className="glass-card rounded-[2rem] px-6 py-10 md:px-12 md:py-14 border border-[var(--color-gold)]/40">
          {initials && (
            <p className="font-serif text-[var(--color-gold)] text-4xl mb-3">
              {initials}
            </p>
          )}

          <p className="font-sans text-[var(--color-gold)] uppercase tracking-[0.3em] text-xs mb-4">
            {invitationTitle || "Wedding Invitation"}
          </p>

          {guestName && (
            <div className="mb-6">
              <p className="font-sans text-[var(--color-brown)] uppercase tracking-[0.25em] text-xs mb-2">
                Specially Invited
              </p>
              <h3 className="font-script text-[var(--color-rose-dk)] text-5xl">
                {guestName}
              </h3>
            </div>
          )}

          <h1
            className="font-serif text-[var(--color-charcoal)] font-light leading-tight mb-4"
            style={{ fontSize: "clamp(2.6rem, 8vw, 5rem)" }}
          >
            {brideName}
            <span
              className="font-script text-[var(--color-gold)] mx-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.3rem)" }}
            >
              &
            </span>
            {groomName}
          </h1>

          <div className="inline-block gold-gradient-bg text-[var(--color-charcoal)] font-sans font-semibold tracking-widest text-xs px-6 py-2 rounded-full mb-5 uppercase">
            {formattedDate}
          </div>

          <p className="font-sans text-[var(--color-brown)] text-sm tracking-widest uppercase mb-5">
            {weddingTime}
          </p>

          <p className="font-serif italic text-[var(--color-charcoal)]/80 text-xl leading-relaxed max-w-xl mx-auto mb-8">
            {invitationMessage}
          </p>

          <button
            onClick={scrollToNext}
            aria-label="Scroll to next section"
            className="btn-gold"
          >
            Open Invitation ↓
          </button>
        </div>
      </div>
    </section>
  );
}