import { useState } from "react";
import { weddingData } from "../data/weddingData";

export default function RSVP() {
  const { groomName, brideName, contactNumber } = weddingData;

  const [form, setForm] = useState({
    guestName: "",
    attending: "yes",
    guestCount: "1",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const attendingText =
      form.attending === "yes"
        ? "Yes, I will attend"
        : "Sorry, I cannot attend";

    let waMsg = `Hello! I am ${form.guestName}.\n`;
    waMsg += `Wedding: ${groomName} & ${brideName}\n`;
    waMsg += `Attendance: ${attendingText}\n`;

    if (form.attending === "yes") {
      waMsg += `Number of guests: ${form.guestCount}\n`;
    }

    if (form.message) {
      waMsg += `Message: ${form.message}`;
    }

    window.open(
      `https://wa.me/${contactNumber}?text=${encodeURIComponent(waMsg)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setSubmitted(true);
  };

  return (
    <section
      id="rsvp"
      className="section-wrapper"
      style={{
        background:
          "linear-gradient(135deg, #2A2018 0%, #4B3328 50%, #2A2018 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-script text-[var(--color-gold-lt)] text-5xl mb-2">
            Kindly Reply
          </p>

          <h2 className="font-serif text-white text-4xl font-light">
            RSVP
          </h2>

          <p className="font-sans text-white/75 text-sm mt-3">
            Please confirm your attendance via WhatsApp
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-[2rem] p-10 text-center shadow-2xl">
            <div className="text-6xl mb-4">💌</div>

            <h3 className="font-script text-[var(--color-gold)] text-4xl mb-3">
              Thank You!
            </h3>

            <p className="font-serif text-[var(--color-charcoal)] text-xl">
              Your RSVP has been prepared for WhatsApp.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="btn-outline-gold mt-8"
            >
              Send Another Response
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-[2rem] p-6 md:p-10 shadow-2xl border border-[var(--color-gold)]/30"
          >
            <div className="mb-6">
              <label className="block font-sans text-[var(--color-charcoal)] font-semibold text-sm uppercase tracking-widest mb-2">
                Your Full Name *
              </label>

              <input
                type="text"
                name="guestName"
                value={form.guestName}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-[var(--color-gold)]/40 bg-white px-5 py-4 text-[var(--color-charcoal)] text-lg outline-none focus:border-[var(--color-gold)] focus:ring-4 focus:ring-[var(--color-gold)]/20"
              />
            </div>

            <div className="mb-6">
              <label className="block font-sans text-[var(--color-charcoal)] font-semibold text-sm uppercase tracking-widest mb-3">
                Will You Attend? *
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { value: "yes", label: "Yes, I'll attend", icon: "✅" },
                  { value: "no", label: "Sorry, I can't", icon: "❌" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center justify-center gap-3 rounded-xl border px-4 py-4 cursor-pointer transition-all text-base font-semibold ${
                      form.attending === option.value
                        ? "bg-[var(--color-gold)] text-[var(--color-charcoal)] border-[var(--color-gold)] shadow-md"
                        : "bg-white text-[var(--color-charcoal)] border-[var(--color-gold)]/35 hover:bg-[var(--color-cream)]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="attending"
                      value={option.value}
                      checked={form.attending === option.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span>{option.icon}</span>
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {form.attending === "yes" && (
              <div className="mb-6">
                <label className="block font-sans text-[var(--color-charcoal)] font-semibold text-sm uppercase tracking-widest mb-2">
                  Number of Guests *
                </label>

                <select
                  name="guestCount"
                  value={form.guestCount}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[var(--color-gold)]/40 bg-white px-5 py-4 text-[var(--color-charcoal)] text-lg outline-none focus:border-[var(--color-gold)] focus:ring-4 focus:ring-[var(--color-gold)]/20"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="mb-8">
              <label className="block font-sans text-[var(--color-charcoal)] font-semibold text-sm uppercase tracking-widest mb-2">
                Message Optional
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Write a heartfelt message..."
                className="w-full rounded-xl border border-[var(--color-gold)]/40 bg-white px-5 py-4 text-[var(--color-charcoal)] text-lg outline-none resize-none focus:border-[var(--color-gold)] focus:ring-4 focus:ring-[var(--color-gold)]/20"
              />
            </div>

            <button type="submit" className="btn-gold w-full py-4 text-sm">
              📲 Send via WhatsApp
            </button>

            <p className="text-center text-[var(--color-brown)] text-sm mt-5">
              WhatsApp will open with a pre-filled RSVP message.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}