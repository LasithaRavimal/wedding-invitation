import { weddingData } from "../data/weddingData";

// ── Venue Section ─────────────────────────────────────────────────────────────
export default function Venue() {
  const { venueName, venueAddress, weddingTime, mapLink, contactNumber } = weddingData;

  const handleCall = () => {
    window.location.href = `tel:+${contactNumber}`;
  };

  return (
    <section id="venue" className="section-wrapper" style={{ background: "linear-gradient(135deg, #FDE8EF 0%, #FDF8F0 100%)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-script text-[var(--color-rose-dk)] text-4xl mb-2">Find Us</p>
          <div className="ornament-divider">
            <span className="text-[var(--color-gold)] text-xl">✦</span>
          </div>
          <h2 className="font-serif text-[var(--color-charcoal)] font-light" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
            Venue &amp; Location
          </h2>
        </div>

        <div className="glass-card rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row">
          {/* Map embed placeholder */}
          <div className="md:w-1/2 min-h-64 relative overflow-hidden">
            <iframe
              title="Venue Map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(venueAddress)}&output=embed`}
              className="w-full h-full min-h-64"
              style={{ border: 0, minHeight: "280px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Details */}
          <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center gap-5">
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-[var(--color-gold)] mb-1">Venue</p>
              <p className="font-script text-[var(--color-charcoal)] text-3xl">{venueName}</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl mt-0.5">📍</span>
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-[var(--color-gold)] mb-1">Address</p>
                <p className="font-serif text-[var(--color-charcoal)] text-lg">{venueAddress}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl mt-0.5">🕐</span>
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-[var(--color-gold)] mb-1">Time</p>
                <p className="font-serif text-[var(--color-charcoal)] text-lg">{weddingTime}</p>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-[var(--color-gold)] to-transparent" />

            <div className="flex flex-wrap gap-3">
              <a href={mapLink} target="_blank" rel="noopener noreferrer" className="btn-gold inline-block text-center">
                🗺️ Get Directions
              </a>
              <button onClick={handleCall} className="btn-outline-gold">
                📞 Call Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
