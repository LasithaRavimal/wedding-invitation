import { useEffect, useRef } from "react";
import { weddingData } from "../data/weddingData";

export default function Hero() {
  const {
    groomName,
    brideName,
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
        heroRef.current.style.backgroundPositionY = `${window.scrollY * 0.35}px`;
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
      className="relative min-h-screen flex items-center justify-center text-center px-5 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/75" />

      <div className="relative z-10 max-w-4xl mx-auto pt-20 animate-fadeIn">
        {initials && (
          <p className="font-serif text-[var(--color-gold-lt)] text-5xl md:text-6xl mb-3 drop-shadow-lg">
            {initials}
          </p>
        )}

        <p className="font-sans text-white tracking-[0.45em] uppercase text-xs md:text-sm mb-5">
          {invitationTitle || "Wedding Invitation"}
        </p>

        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-28 bg-gradient-to-r from-transparent to-[var(--color-gold)]" />
          <span className="text-[var(--color-gold-lt)] text-xl">♡</span>
          <span className="h-px w-28 bg-gradient-to-l from-transparent to-[var(--color-gold)]" />
        </div>

        <h1
          className="font-serif text-white font-light leading-tight mb-7 drop-shadow-xl"
          style={{ fontSize: "clamp(3.2rem, 8vw, 6.5rem)" }}
        >
          {brideName}
          <span
            className="font-script text-[var(--color-gold-lt)] mx-4"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            &
          </span>
          {groomName}
        </h1>

        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="hidden sm:block h-px w-20 bg-[var(--color-gold)]" />
          <div className="font-sans text-white font-semibold tracking-widest text-sm md:text-base uppercase">
            {formattedDate}
          </div>
          <span className="hidden sm:block h-px w-20 bg-[var(--color-gold)]" />
        </div>

        <p className="font-sans text-[var(--color-gold-lt)] text-lg tracking-widest uppercase mb-8">
          {weddingTime}
        </p>

        <p className="font-serif text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 drop-shadow-md">
          {invitationMessage}
        </p>

        <button
          onClick={scrollToNext}
          aria-label="Scroll to next section"
          className="btn-outline-gold"
          style={{
            color: "var(--color-gold-lt)",
            borderColor: "var(--color-gold-lt)",
            background: "rgba(0,0,0,0.25)",
          }}
        >
          ♥ Open Invitation ↓
        </button>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--color-cream))",
        }}
      />
    </section>
  );
}