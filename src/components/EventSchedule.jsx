import { weddingData } from "../data/weddingData";

export default function EventSchedule() {
  const { schedule, weddingDate } = weddingData;

  const formattedDate = new Date(weddingDate + "T00:00:00").toLocaleDateString(
    "en-US",
    { weekday: "long", year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <section
      id="schedule"
      className="section-wrapper relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FFFDFB 0%, #FCF6EF 45%, #F7EFE6 100%)",
      }}
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-script text-[var(--color-rose-dk)] text-5xl mb-2">
            Wedding Day
          </p>

          <div className="ornament-divider">
            <span className="text-[var(--color-gold)] text-xl">✦</span>
          </div>

          <h2 className="font-serif text-[var(--color-charcoal)] font-light text-4xl md:text-5xl">
            Event Schedule
          </h2>

          <p className="font-sans text-[var(--color-brown)] text-sm mt-3 tracking-widest uppercase">
            {formattedDate}
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #C9A96E, transparent)",
            }}
          />

          <div className="flex flex-col gap-8">
            {schedule.map((item, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-20">
                    <div className="w-11 h-11 rounded-full gold-gradient-bg flex items-center justify-center shadow-lg">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                  </div>

                  <div
                    className={`w-full md:w-1/2 pl-14 md:pl-0 ${
                      isLeft ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-white rounded-3xl p-6 shadow-lg border border-[#EAD7AE] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div
                        className={`flex items-center gap-5 ${
                          isLeft ? "md:flex-row-reverse md:text-right" : ""
                        }`}
                      >
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-inner"
                          style={{
                            background:
                              "linear-gradient(135deg, #FFF9EE, #F7E2B5)",
                          }}
                        >
                          {item.icon}
                        </div>

                        <div className="flex-1">
                          <p className="font-script text-[var(--color-gold)] text-3xl leading-tight">
                            {item.title}
                          </p>

                          <p className="font-sans text-[var(--color-brown)] text-base font-bold tracking-widest uppercase mt-1">
                            {item.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}