import { useState } from "react";
import { weddingData } from "../data/weddingData";

// ── RSVP Section ──────────────────────────────────────────────────────────────
// No database or backend. On submit, opens WhatsApp with a pre-filled message.
// ─────────────────────────────────────────────────────────────────────────────
export default function RSVP() {
  const { groomName, brideName, contactNumber } = weddingData;

  const [form, setForm] = useState({
    guestName:  "",
    attending:  "yes",
    guestCount: "1",
    message:    "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { guestName, attending, guestCount, message } = form;
    const attendingText = attending === "yes" ? "✅ Yes, I will attend" : "❌ Sorry, I cannot attend";

    let waMsg = `Hello! I am *${guestName}*.\n`;
    waMsg += `Attendance: ${attendingText}\n`;
    if (attending === "yes") waMsg += `Number of guests: ${guestCount}\n`;
    if (message) waMsg += `Message: ${message}`;

    const encoded = encodeURIComponent(waMsg.trim());
    const url = `https://wa.me/${contactNumber}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="section-wrapper" style={{ background: "linear-gradient(135deg, #3D3028 0%, #5A3E33 100%)" }}>
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-script text-[var(--color-gold-lt)] text-4xl mb-2">Kindly Reply</p>
          <div className="ornament-divider">
            <span className="text-[var(--color-gold)] text-xl">✦</span>
          </div>
          <h2 className="font-serif text-white font-light text-3xl">RSVP</h2>
          <p className="font-sans text-white/60 text-sm mt-2">
            Please confirm your attendance by {new Date(weddingData.weddingDate + "T00:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>

        {submitted ? (
          <div className="glass-card rounded-3xl p-10 text-center">
            <div className="text-6xl mb-4">💌</div>
            <h3 className="font-script text-[var(--color-gold)] text-3xl mb-2">Thank You!</h3>
            <p className="font-serif text-[var(--color-charcoal)] text-lg">
              Your RSVP has been sent to {groomName} &amp; {brideName} via WhatsApp.
            </p>
            <button onClick={() => setSubmitted(false)} className="btn-outline-gold mt-6">
              Send Another Response
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 flex flex-col gap-5">
            {/* Guest Name */}
            <div>
              <label className="font-sans text-xs uppercase tracking-widest text-[var(--color-gold)] mb-2 block">
                Your Full Name *
              </label>
              <input
                type="text"
                name="guestName"
                value={form.guestName}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="wedding-input"
              />
            </div>

            {/* Attendance */}
            <div>
              <label className="font-sans text-xs uppercase tracking-widest text-[var(--color-gold)] mb-2 block">
                Will you attend? *
              </label>
              <div className="flex gap-3">
                {[
                  { value: "yes", label: "✅ Yes, I'll attend", },
                  { value: "no",  label: "❌ Sorry, I can't",  },
                ].map(({ value, label }) => (
                  <label
                    key={value}
                    className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border cursor-pointer transition-all font-sans text-sm font-medium
                      ${form.attending === value
                        ? "border-[var(--color-gold)] bg-[var(--color-gold)]/10 text-[var(--color-charcoal)]"
                        : "border-[var(--color-gold)]/30 text-[var(--color-charcoal)]/70"}`}
                  >
                    <input type="radio" name="attending" value={value} checked={form.attending === value} onChange={handleChange} className="sr-only" />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            {/* Guest Count – only shown if attending */}
            {form.attending === "yes" && (
              <div>
                <label className="font-sans text-xs uppercase tracking-widest text-[var(--color-gold)] mb-2 block">
                  Number of Guests *
                </label>
                <select name="guestCount" value={form.guestCount} onChange={handleChange} className="wedding-input">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Optional message */}
            <div>
              <label className="font-sans text-xs uppercase tracking-widest text-[var(--color-gold)] mb-2 block">
                Message (optional)
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Write a heartfelt message…"
                className="wedding-input resize-none"
              />
            </div>

            <button type="submit" className="btn-gold w-full text-base py-4">
              📲 Send via WhatsApp
            </button>
            <p className="font-sans text-[var(--color-charcoal)]/50 text-xs text-center">
              This will open WhatsApp with a pre-filled message.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
