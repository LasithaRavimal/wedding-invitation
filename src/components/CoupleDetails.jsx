import { weddingData } from "../data/weddingData";

// ── Couple Details Section ────────────────────────────────────────────────────
// Shows couple photo, invitation message, and dress code.
// ─────────────────────────────────────────────────────────────────────────────
export default function CoupleDetails() {
  const {
    groomName,
    brideName,
    invitationMessage,
    dressCode,
    coupleImage,
  } = weddingData;

  return (
    <section id="couple" className="section-wrapper bg-[var(--color-cream)]">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="font-script text-[var(--color-gold)] text-4xl mb-2">
            Our Story
          </p>
          <div className="ornament-divider">
            <span className="text-[var(--color-gold)] text-xl">✦</span>
          </div>
          <h2 className="font-serif text-[var(--color-charcoal)] font-light"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            {groomName}{" "}
            <span className="font-script text-[var(--color-rose-dk)]">&amp;</span>{" "}
            {brideName}
          </h2>
        </div>

        {/* Card */}
        <div className="glass-card rounded-3xl overflow-hidden shadow-xl
          flex flex-col md:flex-row items-stretch">

          {/* Photo */}
          <div className="md:w-2/5 relative min-h-72 md:min-h-full">
            <img
              src={coupleImage}
              alt={`${groomName} and ${brideName}`}
              className="w-full h-full object-cover"
              style={{ minHeight: "340px" }}
            />
            {/* Subtle gold border overlay on photo */}
            <div className="absolute inset-0 border-4 border-white/30 rounded-none pointer-events-none" />
          </div>

          {/* Details */}
          <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center gap-6">
            {/* Quote mark */}
            <span className="font-script text-[var(--color-gold)] text-6xl leading-none select-none">
              "
            </span>

            <p className="font-serif italic text-[var(--color-charcoal)] text-xl md:text-2xl leading-relaxed -mt-6">
              {invitationMessage}
            </p>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-[var(--color-gold)] via-[var(--color-rose)] to-transparent" />

            {/* Names (stylised) */}
            <div className="flex items-center gap-4">
              <div>
                <p className="font-script text-[var(--color-gold)] text-2xl">{groomName}</p>
                <p className="font-sans text-xs text-[var(--color-brown)] uppercase tracking-widest">
                  Groom
                </p>
              </div>
              <div className="flex-1 text-center font-script text-[var(--color-rose-dk)] text-3xl">
                &amp;
              </div>
              <div className="text-right">
                <p className="font-script text-[var(--color-gold)] text-2xl">{brideName}</p>
                <p className="font-sans text-xs text-[var(--color-brown)] uppercase tracking-widest">
                  Bride
                </p>
              </div>
            </div>

            {/* Dress code badge */}
            <div className="inline-flex items-center gap-2 self-start
              border border-[var(--color-gold)] rounded-full px-5 py-2">
              <span>👗</span>
              <span className="font-sans text-xs font-semibold uppercase tracking-widest
                text-[var(--color-gold)]">
                Dress Code: {dressCode}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
