import { useState } from "react";
import { weddingData } from "../data/weddingData";

// ── Gallery Section ───────────────────────────────────────────────────────────
export default function Gallery() {
  const { gallery, groomName, brideName } = weddingData;
  const [lightbox, setLightbox] = useState(null);

  const openLightbox  = (idx) => setLightbox(idx);
  const closeLightbox = ()    => setLightbox(null);
  const prevImage = () => setLightbox((p) => (p - 1 + gallery.length) % gallery.length);
  const nextImage = () => setLightbox((p) => (p + 1) % gallery.length);

  return (
    <section id="gallery" className="section-wrapper bg-[var(--color-cream)]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-script text-[var(--color-gold)] text-4xl mb-2">Memories</p>
          <div className="ornament-divider">
            <span className="text-[var(--color-gold)] text-xl">✦</span>
          </div>
          <h2 className="font-serif text-[var(--color-charcoal)] font-light" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
            Our Gallery
          </h2>
          <p className="font-sans text-[var(--color-brown)] text-sm mt-2">{groomName} &amp; {brideName}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((src, idx) => (
            <button
              key={idx}
              onClick={() => openLightbox(idx)}
              className="gallery-item block w-full rounded-2xl overflow-hidden shadow-md aspect-[4/5] cursor-pointer group"
              aria-label={`Open photo ${idx + 1}`}
            >
              <img src={src} alt={`Gallery photo ${idx + 1}`} className="w-full h-full object-cover" />
              <div className="gallery-overlay" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-4xl drop-shadow-lg">🔍</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={closeLightbox}>
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-[var(--color-gold)] transition-colors z-10" aria-label="Previous">‹</button>
          <img src={gallery[lightbox]} alt={`Gallery ${lightbox + 1}`} className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-[var(--color-gold)] transition-colors z-10" aria-label="Next">›</button>
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white text-3xl hover:text-[var(--color-rose)] transition-colors" aria-label="Close">✕</button>
          <div className="absolute bottom-6 flex gap-2">
            {gallery.map((_, i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); setLightbox(i); }} className={`w-2 h-2 rounded-full transition-all ${i === lightbox ? "bg-[var(--color-gold)] scale-125" : "bg-white/40"}`} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
