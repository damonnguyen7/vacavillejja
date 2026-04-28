import Link from "next/link";

const schedule = [
  {
    day: "Mon",
    time: "6:00 PM",
    title: "Beginners No-Gi",
    instructor: "Denny P.",
    type: "beginner",
  },
  {
    day: "Tue",
    time: "6:00 PM",
    title: "Beginners No-Gi",
    instructor: "Denny P.",
    type: "beginner",
  },
  {
    day: "Wed",
    time: "6:00 PM",
    title: "Beginners No-Gi",
    instructor: "Denny P.",
    type: "beginner",
  },
  {
    day: "Thu",
    time: "6:00 PM",
    title: "Beginners No-Gi",
    instructor: "Denny P.",
    type: "beginner",
  },
  {
    day: "Fri",
    time: "6:00 PM",
    title: "Beginners No-Gi",
    instructor: "Denny P.",
    type: "beginner",
  },
  {
    day: "Sat",
    time: "1:00 PM",
    title: "Open Mat",
    instructor: "All Levels",
    type: "open-mat",
  },
];

export default function SchedulePage() {
  return (
    <main className="bg-white text-slate-950">
      {/* PAGE HERO */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-slate-800">
          <div className="flex h-full items-center justify-center text-center text-xs font-black uppercase tracking-[0.4em] text-slate-600">
            Schedule Hero Image Placeholder
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-sky-400">
            Train With Us
          </p>

          <h1 className="mt-5 text-5xl font-black uppercase leading-none md:text-7xl">
            Class <span className="text-sky-400">Schedule</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
            Beginners class Monday through Friday. Open mat Saturday. All levels
            welcome.
          </p>
        </div>
      </section>

      {/* SCHEDULE SECTION */}
      <section className="bg-slate-100 px-6 py-24 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.45em] text-sky-400">
                Current Schedule
              </p>

              <h2 className="mt-4 text-4xl font-black uppercase leading-none md:text-5xl">
                Weekly Classes
              </h2>
            </div>

            <Link
              href="/get-started"
              className="w-fit bg-sky-500 px-8 py-4 text-xs font-black uppercase tracking-wide text-white transition hover:bg-sky-400"
            >
              Book Free Trial
            </Link>
          </div>

          <div className="overflow-hidden border border-slate-300 bg-white shadow-sm">
            <div className="grid grid-cols-6 bg-slate-950 text-white">
              {schedule.map((item) => (
                <div
                  key={item.day}
                  className="border-r border-white/10 px-3 py-4 text-center text-xs font-black uppercase tracking-[0.22em] text-sky-400 last:border-r-0"
                >
                  {item.day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6">
              {schedule.map((item) => (
                <div
                  key={item.day}
                  className="border-b border-slate-200 bg-white p-4 md:min-h-24 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <p
                    className={`text-sm font-black ${
                      item.type === "open-mat"
                        ? "text-emerald-500"
                        : "text-sky-500"
                    }`}
                  >
                    {item.time}
                  </p>

                  <p className="mt-1 text-sm font-black leading-5">
                    {item.title}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {item.instructor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative overflow-hidden bg-slate-900 px-6 py-24 text-center text-white md:py-28">
        <div className="absolute -bottom-24 -right-16 text-[260px] font-black leading-none text-white/[0.03]">
          Ω
        </div>

        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-4xl font-black uppercase leading-none md:text-5xl">
            Not Sure <span className="text-sky-400">Where To Start?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400">
            Come in for a free trial and we’ll show you exactly where you fit.
            No commitment required.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/get-started"
              className="bg-sky-500 px-7 py-4 text-xs font-black uppercase tracking-wide text-white transition hover:bg-sky-400"
            >
              Book a Free Trial
            </Link>

            <Link
              href="/contact"
              className="border border-white/30 px-7 py-4 text-xs font-black uppercase tracking-wide text-white transition hover:border-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
