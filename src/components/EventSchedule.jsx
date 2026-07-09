import { weddingData } from "../data/weddingData";

// ── Event Schedule Section ────────────────────────────────────────────────────
// Renders the wedding day timeline from weddingData.schedule array.
// ─────────────────────────────────────────────────────────────────────────────
export default function EventSchedule() {
  const { schedule, weddingDate } = weddingData;

  const formattedDate = new Date(weddingDate + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    year:    "numeric",
    month:   "long",
    day:     "numeric",
  });

  return (
    <section id="schedule" className="section-wrapper bg-[var(--color-blush)]">
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="font-script text-[var(--color-rose-dk)] text-4xl mb-2">
            Wedding Day
          </p>
          <div className="ornament-divider">
            <span className="text-[var(--color-gold)] text-xl">✦</span>
          </div>
          <h2 className="font-serif text-[var(--color-charcoal)] font-light"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
            Event Schedule
          </h2>
          <p className="font-sans text-[var(--color-brown)] text-sm mt-2 tracking-wide">
            {formattedDate}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[50%] top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, transparent, var(--color-gold), transparent)" }}
          />

          <div className="flex flex-col gap-8">
            {schedule.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex items-center gap-6
                    ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}
                    flex-row`}
                >
                  {/* Content card */}
                  <div
                    className={`flex-1 glass-card rounded-2xl p-5 shadow-md
                      transition-transform duration-300 hover:-translate-y-1
                      ${isLeft ? "md:text-right" : "md:text-left"} text-left`}
                  >
                    <div className="flex items-center gap-3
                      ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'} flex-row">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <p className="font-script text-[var(--color-gold)] text-2xl leading-tight">
                          {item.title}
                        </p>
                        <p className="font-sans text-[var(--color-brown)] text-sm
                          font-semibold tracking-widest uppercase">
                          {item.time}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Centre dot (desktop) */}
                  <div
                    className="hidden md:flex w-10 h-10 flex-shrink-0 items-center
                      justify-center rounded-full gold-gradient-bg shadow-lg"
                  >
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>

                  {/* Empty side filler (desktop) */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
