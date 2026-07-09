import { weddingData } from "../data/weddingData";

// ── Footer ────────────────────────────────────────────────────────────────────
export default function Footer() {
  const { groomName, brideName, weddingDate, brandName } = weddingData;
  const year = new Date(weddingDate).getFullYear();

  return (
    <footer id="footer" className="py-16 text-center px-6"
      style={{ background: "linear-gradient(to bottom, #2A2018, #1A130E)" }}>

      <div className="ornament-divider mb-8">
        <span className="text-[var(--color-gold)] text-xl">✦</span>
      </div>

      <p className="font-script text-[var(--color-gold-lt)] text-5xl mb-2">
        {groomName} &amp; {brideName}
      </p>

      <p className="font-sans text-white/60 text-sm uppercase tracking-widest mb-6">
        {year}
      </p>

      <p className="font-serif italic text-white/70 text-lg max-w-md mx-auto mb-8">
        "Thank you for being part of our journey. Your presence is our greatest gift."
      </p>

      <div className="h-px max-w-xs mx-auto mb-6"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)" }} />

      <p className="font-sans text-white/40 text-xs tracking-wider">
        Crafted with ❤️ by <span className="text-[var(--color-gold)]">{brandName}</span>
      </p>
    </footer>
  );
}
