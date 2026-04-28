import Link from "next/link";
import { siteConfig } from "@/lib/site";

const steps = [
  {
    number: "1",
    title: "Pick a Day",
    description:
      "Choose any available day that works for you from the calendar.",
  },
  {
    number: "2",
    title: "Arrive at Your Scheduled Time",
    description:
      "This is your onboarding window before class starts — we’ll get you set up, answer questions, and show you around.",
  },
  {
    number: "3",
    title: "Train at 6:00 PM",
    description:
      "You’ll jump straight into the class. Denny will guide you through everything — you don’t need to know anything going in.",
  },
];

const schedule = [
  {
    day: "Monday – Friday",
    time: "6:00 PM",
    title: "Beginners Friendly No-Gi",
    color: "text-sky-400",
  },
  {
    day: "Saturday",
    time: "1:00 PM",
    title: "Open Mat All Levels",
    color: "text-emerald-400",
  },
];

export default function GetStartedPage() {
  return (
    <main className="bg-white text-slate-950">
      {/* PAGE HERO */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-slate-800">
          <div className="flex h-full items-center justify-center text-center text-xs font-black uppercase tracking-[0.4em] text-slate-600">
            Get Started Hero Image Placeholder
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-sky-400">
            Join The Academy
          </p>

          <h1 className="mt-5 text-5xl font-black uppercase leading-none md:text-7xl">
            Get <span className="text-sky-400">Started</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
            Your first class is free. No experience required. Just pick a day
            and show up.
          </p>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section className="bg-slate-100 px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.05fr]">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-black uppercase leading-none md:text-5xl">
              Book Your <span className="text-sky-500">First Class</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600">
              Pick a day below to reserve your spot.{" "}
              <span className="font-bold text-slate-950">
                The time you select is your arrival time
              </span>{" "}
              — you’ll train in the{" "}
              <span className="font-bold text-slate-950">6:00 PM class</span>{" "}
              right after. Beginner friendly. No experience needed.
            </p>

            <div className="my-10 h-px bg-slate-300" />

            <p className="text-xs font-black uppercase tracking-[0.35em] text-slate-400">
              How It Works
            </p>

            <div className="mt-8 space-y-7">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="grid grid-cols-[40px_1fr] gap-5 border-b border-slate-200 pb-7 last:border-b-0"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-sm font-black text-white">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-base font-black uppercase">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* WHAT TO BRING */}
            <div className="mt-10 border border-slate-300 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-[36px_1fr] gap-4">
                <div className="text-2xl">🎒</div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                    What To Bring
                  </p>

                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 bg-sky-500" />
                      Comfortable athletic clothes: t-shirt and shorts
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 bg-sky-500" />
                      Water bottle
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 bg-sky-500" />
                      No experience needed — just show up
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CLASS SCHEDULE CARD */}
            <div className="mt-8 overflow-hidden bg-slate-950 text-white">
              <div className="border-b border-white/10 px-6 py-4">
                <p className="text-xs font-black uppercase tracking-[0.35em] text-sky-400">
                  Class Schedule
                </p>
              </div>

              <div>
                {schedule.map((item) => (
                  <div
                    key={item.day}
                    className="grid grid-cols-[1fr_auto] items-center gap-5 border-b border-white/10 px-6 py-5 last:border-b-0"
                  >
                    <p className="text-sm font-black">{item.day}</p>

                    <div className="text-right">
                      <p className={`text-3xl font-black ${item.color}`}>
                        {item.time}
                      </p>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/schedule"
                className="border border-slate-400 px-6 py-3 text-xs font-black uppercase tracking-wide text-slate-950 transition hover:border-slate-950"
              >
                View Full Schedule
              </Link>

              <Link
                href="/contact"
                className="border border-slate-400 px-6 py-3 text-xs font-black uppercase tracking-wide text-slate-950 transition hover:border-slate-950"
              >
                Ask a Question
              </Link>
            </div>
          </div>

          {/* RIGHT CALENDLY CARD */}
          <div className="border-t-4 border-sky-500 bg-white p-6 shadow-xl">
            <h2 className="text-2xl font-black uppercase">
              Select Your Arrival Time
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Choose a day to book your first class. You’ll arrive at the
              selected time for a brief onboarding before the 6 PM session.
            </p>

            <div className="mt-5 border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-bold leading-6 text-sky-800">
              The time you pick = your arrival. Class starts at 6:00 PM for
              everyone.
            </div>

            <div className="mt-6 overflow-hidden border border-slate-200 bg-white">
              <iframe
                src={siteConfig.calendlyUrl}
                className="h-[700px] w-full"
                title="Book a free trial class"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
