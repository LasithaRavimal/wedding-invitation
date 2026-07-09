import Navbar         from "./components/Navbar";
import Hero           from "./components/Hero";
import CoupleDetails  from "./components/CoupleDetails";
import Countdown      from "./components/Countdown";
import EventSchedule  from "./components/EventSchedule";
import Gallery        from "./components/Gallery";
import Venue          from "./components/Venue";
import RSVP           from "./components/RSVP";
import Footer         from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import { weddingData } from "./data/weddingData";

// ── App ───────────────────────────────────────────────────────────────────────
// Main application shell. Renders all sections in order.
// To customise this invitation, edit src/data/weddingData.js only.
// ─────────────────────────────────────────────────────────────────────────────
function App() {
  const { groomName, brideName, weddingDate } = weddingData;

  // Dynamic page title & meta
  if (typeof document !== "undefined") {
    document.title = `${groomName} & ${brideName} Wedding – ${new Date(weddingDate + "T00:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <CoupleDetails />
        <Countdown />
        <EventSchedule />
        <Gallery />
        <Venue />
        <RSVP />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
