import { useState, useEffect } from "react";
import { weddingData } from "../data/weddingData";

// ── Countdown Timer ───────────────────────────────────────────────────────────
// Live countdown that updates every second toward the wedding date.
// ─────────────────────────────────────────────────────────────────────────────
function getTimeLeft(targetDate) {
  const now  = new Date().getTime();
  const end  = new Date(targetDate + "T00:00:00").getTime();
  const diff = end - now;

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, over: true };

  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    over:    false,
  };
}

function CountdownUnit({ value, label }) {
  return (
    <div className="countdown-card rounded-2xl flex flex-col items-center
      justify-center px-4 py-5 md:px-8 md:py-7 min-w-[80px]">
      <span className="font-serif text-white font-semibold leading-none"
        style={{ fontSize: "clamp(2.2rem, 7vw, 4rem)" }}>
        {String(value).padStart(2, "0")}
      </span>
      <span className="font-sans text-white/70 text-xs uppercase tracking-widest mt-1">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const { weddingDate, groomName, brideName, weddingTime, venueName } = weddingData;
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(weddingDate));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(weddingDate)), 1000);
    return () => clearInterval(timer);
  }, [weddingDate]);

  const formattedDate = new Date(weddingDate + "T00:00:00").toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section
      id="countdown"
      className="section-wrapper relative text-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #3D3028 0%, #6B4E3D 50%, #3D3028 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-[-80px] left-[-80px] w-64 h-64 rounded-full
        opacity-10 bg-[var(--color-gold)]" />
      <div className="absolute bottom-[-60px] right-[-60px] w-48 h-48 rounded-full
        opacity-10 bg-[var(--color-rose)]" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="font-script text-[var(--color-gold-lt)] text-4xl mb-2">
          Counting Down
        </p>
        <div className="ornament-divider">
          <span className="text-[var(--color-gold)] text-xl">✦</span>
        </div>
        <h2 className="font-serif text-white font-light text-3xl mb-2">
          {groomName} &amp; {brideName}
        </h2>
        <p className="font-sans text-white/70 text-sm tracking-widest uppercase mb-8">
          {formattedDate} · {weddingTime} · {venueName}
        </p>

        {timeLeft.over ? (
          <div className="font-script text-[var(--color-gold-lt)] text-4xl">
            Today is the special day! 🎉
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-4">
            <CountdownUnit value={timeLeft.days}    label="Days" />
            <CountdownUnit value={timeLeft.hours}   label="Hours" />
            <CountdownUnit value={timeLeft.minutes} label="Minutes" />
            <CountdownUnit value={timeLeft.seconds} label="Seconds" />
          </div>
        )}

        {/* Add to Calendar button */}
        <div className="mt-8">
          <AddToCalendarButton />
        </div>
      </div>
    </section>
  );
}

// ── Add-to-Calendar helper ────────────────────────────────────────────────────
function AddToCalendarButton() {
  const { weddingDate, weddingTime, groomName, brideName, venueName, venueAddress } =
    weddingData;

  const handleAddToCalendar = () => {
    // Build a Google Calendar URL
    const title   = encodeURIComponent(`${groomName} & ${brideName} Wedding`);
    const details = encodeURIComponent(
      `You are invited to the wedding of ${groomName} & ${brideName} at ${venueName}, ${venueAddress}`
    );
    const location = encodeURIComponent(`${venueName}, ${venueAddress}`);

    // Date: YYYYMMDD – all-day event
    const dateStr = weddingDate.replace(/-/g, "");
    const nextDay = new Date(weddingDate + "T00:00:00");
    nextDay.setDate(nextDay.getDate() + 1);
    const nextDayStr = nextDay.toISOString().slice(0, 10).replace(/-/g, "");

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dateStr}/${nextDayStr}&details=${details}&location=${location}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button onClick={handleAddToCalendar} className="btn-outline-gold"
      style={{ color: "var(--color-gold-lt)", borderColor: "var(--color-gold-lt)" }}>
      📅 Add to Calendar
    </button>
  );
}
