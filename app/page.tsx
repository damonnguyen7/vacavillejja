import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    value: "3×",
    label: "World Champion",
  },
  {
    value: "4th°",
    label: "Black Belt",
  },
  {
    value: "1st",
    label: "10P Black Belt",
  },
  {
    value: "EBI",
    label: "Champion",
  },
];

const features = [
  {
    number: "01",
    title: "Beginner Friendly",
    description:
      "Start with zero experience. We guide you step by step in a structured environment designed to build real confidence on and off the mat.",
  },
  {
    number: "02",
    title: "World-Class Instruction",
    description:
      "Learn from Denny Prokopos — the first ever 10th Planet black belt under Eddie Bravo and a 3× World Champion with decades of elite experience.",
  },
  {
    number: "03",
    title: "Strong Community",
    description:
      "Train alongside people who push each other to improve in a positive, focused environment. Everyone here is working toward something real.",
  },
];

const schedule = [
  {
    day: "Mon",
    time: "6:00 PM",
    title: "Beginners No-Gi",
    instructor: "Denny P.",
  },
  {
    day: "Tue",
    time: "6:00 PM",
    title: "Beginners No-Gi",
    instructor: "Denny P.",
  },
  {
    day: "Wed",
    time: "6:00 PM",
    title: "Beginners No-Gi",
    instructor: "Denny P.",
  },
  {
    day: "Thu",
    time: "6:00 PM",
    title: "Beginners No-Gi",
    instructor: "Denny P.",
  },
  {
    day: "Fri",
    time: "6:00 PM",
    title: "Beginners No-Gi",
    instructor: "Denny P.",
  },
  {
    day: "Sat",
    time: "1:00 PM",
    title: "Open Mat",
    instructor: "All Levels",
  },
];

const galleryItems = [
  {
    label: "Competition",
    image: "/ebi-win.jpeg",
    alt: "Denny Prokopos celebrating a competition win",
  },
  {
    label: "World Champion",
    image: "/podium.jpeg",
    alt: "Denny Prokopos standing on the podium",
  },
  {
    label: "Training Room",
    image: "/class.jpeg",
    alt: "Denny Prokopos teaching a jiu jitsu class",
  },
  {
    label: "Live Rounds",
    image: "/rchoke.jpeg",
    alt: "Denny Prokopos competing in no-gi jiu jitsu",
  },
  {
    label: "Combat Stage",
    image: "/podium-2.png",
    alt: "Denny Prokopos on a competition podium",
  },
];

export default function HomePage() {
  return (
    <main className="bg-white text-slate-950">
      {/* HERO */}
      <section className="relative min-h-[760px] overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/ufc-fightpass.jpeg"
            alt="Denny Prokopos holding a flag after competition"
            fill
            priority
            className="object-cover object-[center_12%]"
          />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.18),_transparent_32%),linear-gradient(180deg,_rgba(2,6,23,0.15),_rgba(2,6,23,0.95))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />

        <div className="relative mx-auto flex min-h-[760px] max-w-7xl flex-col justify-center px-6 pt-20">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.45em] text-sky-400">
              10th Planet Vacaville
            </p>

            <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
              World-Class
              <br />
              <span className="text-sky-400">Jiu Jitsu</span>
              <br />
              In Vacaville
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-300">
              Train under one of the original pioneers of 10th Planet — built
              for complete beginners and serious competitors alike.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/get-started"
                className="bg-sky-500 px-6 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:bg-sky-400"
              >
                Try a Free Class
              </Link>

              <Link
                href="/schedule"
                className="border border-white/30 px-6 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:border-white"
              >
                View Schedule
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-4 border border-sky-400/20 bg-slate-950/50">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-r border-sky-400/20 p-4 last:border-r-0"
                >
                  <p className="text-2xl font-black uppercase text-sky-400">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase leading-4 tracking-[0.18em] text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl border-t border-white/10 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border-b border-white/10 px-6 py-10 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <p className="mb-8 text-xs font-black text-sky-400/60">
                {feature.number}
              </p>

              <h3 className="text-lg font-black uppercase text-sky-400">
                {feature.title}
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-7 text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INSTRUCTOR SECTION */}
      <section className="grid bg-white lg:grid-cols-2">
        <div className="relative min-h-[520px] overflow-hidden bg-slate-800">
          <Image
            src="/ufc-fightpass-armbar.jpeg"
            alt="Denny Prokopos demonstrating an armbar"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="flex items-center px-6 py-20 lg:px-20">
          <div className="w-full max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.45em] text-sky-400">
              Featured Instructor
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase md:text-5xl">
              Denny <span className="text-sky-500">Prokopos</span>
            </h2>

            <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200 text-sm text-slate-600">
              <p className="py-3">
                First ever 10th Planet black belt under Eddie Bravo
              </p>
              <p className="py-3">ADCC veteran and EBI Champion</p>
              <p className="py-3">
                3× World Champion — competed at the highest levels
              </p>
              <p className="py-3">
                Coach of UFC fighters, ADCC and world champions
              </p>
              <p className="py-3">Pioneer of modern no-gi jiu jitsu</p>
            </div>

            <p className="mt-8 text-sm leading-7 text-slate-600">
              Denny has helped shape modern no-gi jiu jitsu from the ground up.
              Every student gets clear, structured instruction designed for real
              improvement — whether it’s day one or competition prep.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex w-full items-center justify-center bg-slate-950 px-6 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:bg-sky-500"
            >
              Full Bio
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="grid grid-cols-2 bg-slate-950 md:grid-cols-5">
        {galleryItems.map((item) => (
          <div
            key={item.label}
            className="relative flex h-48 items-end overflow-hidden border-r border-white/10 bg-slate-800 p-4 last:border-r-0 md:h-56"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

            <p className="relative text-[10px] font-black uppercase tracking-[0.25em] text-white/80">
              {item.label}
            </p>
          </div>
        ))}
      </section>

      {/* SCHEDULE PREVIEW */}
      <section className="bg-slate-100 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.45em] text-sky-400">
                Weekly Schedule
              </p>

              <h2 className="mt-4 text-4xl font-black uppercase">
                Find Your Class
              </h2>
            </div>

            <Link
              href="/schedule"
              className="w-fit bg-sky-500 px-6 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:bg-sky-400"
            >
              Full Schedule
            </Link>
          </div>

          <div className="overflow-hidden border border-slate-300 bg-white">
            <div className="grid grid-cols-6 bg-slate-950 text-white">
              {schedule.map((item) => (
                <div
                  key={item.day}
                  className="border-r border-white/10 p-3 text-center text-xs font-black uppercase tracking-[0.2em] text-sky-400 last:border-r-0"
                >
                  {item.day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6">
              {schedule.map((item) => (
                <div
                  key={item.day}
                  className="border-b border-slate-200 p-4 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <p className="text-sm font-black text-sky-500">{item.time}</p>
                  <p className="mt-1 text-sm font-black">{item.title}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {item.instructor}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex justify-center gap-6 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-sky-500" />
              Beginners No-Gi
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-emerald-500" />
              Open Mat
            </div>
          </div>
        </div>
      </section>

      {/* LEVEL SECTION */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-sky-400">
            Who This Is For
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">
            Built For <span className="text-sky-500">Every Level</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600">
            Whether you’ve never trained a day in your life or you’ve been
            competing for years — there’s a place for you here.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="border border-slate-200 p-8 text-left">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                New To Jiu Jitsu
              </p>

              <h3 className="mt-3 text-2xl font-black uppercase text-sky-500">
                Beginners
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Learn in a structured system focused on progress without
                overwhelm. Build confidence, get fit, and develop real
                self-defense from day one.
              </p>
            </div>

            <div className="border border-slate-200 p-8 text-left">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                Already Training
              </p>

              <h3 className="mt-3 text-2xl font-black uppercase text-sky-500">
                Experienced
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Access high-level systems and detailed instruction in a
                competitive environment. Whether chasing titles or leveling up —
                this is the place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-900 px-6 py-24 text-center text-white">
        <div className="absolute -bottom-24 -right-16 text-[260px] font-black leading-none text-white/[0.03]">
          Ω
        </div>

        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-4xl font-black uppercase md:text-5xl">
            Start Training Today
          </h2>

          <p className="mt-4 text-sm text-slate-400">
            Your first class is free. No experience required. Just show up ready
            to learn.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/get-started"
              className="bg-sky-500 px-6 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:bg-sky-400"
            >
              Try a Free Class
            </Link>

            <Link
              href="/schedule"
              className="border border-white/30 px-6 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:border-white"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
