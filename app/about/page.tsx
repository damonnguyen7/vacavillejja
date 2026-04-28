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

const galleryItems = [
  {
    label: "SUG Champion",
    image: "/ufc-fightpass.jpeg",
    alt: "Denny Prokopos after competing on UFC Fight Pass",
  },
  {
    label: "World No-Gi Champion",
    image: "/podium.jpeg",
    alt: "Denny Prokopos on the podium",
  },
  {
    label: "EBI Competition",
    image: "/rchoke.jpeg",
    alt: "Denny Prokopos competing in no-gi jiu jitsu",
  },
  {
    label: "Submission Underground",
    image: "/ufc-fightpass-armbar.jpeg",
    alt: "Denny Prokopos attacking an armbar",
  },
  {
    label: "UFC Fight Pass",
    image: "/ebi-win.jpeg",
    alt: "Denny Prokopos celebrating a competition win",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-950">
      {/* PAGE HERO */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-slate-800">
          {/* <div className="flex h-full items-center justify-center text-center text-xs font-black uppercase tracking-[0.4em] text-slate-600">
            Hero Image Placeholder
          </div> */}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-sky-400">
            Our Story
          </p>

          <h1 className="mt-5 text-5xl font-black uppercase leading-none md:text-7xl">
            About <span className="text-sky-400">Denny Prokopos</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
            Pioneer. Champion. Coach. The man bringing 10th Planet to Vacaville.
          </p>
        </div>
      </section>

      {/* BIO SECTION */}
      <section className="grid bg-white lg:grid-cols-2">
        <div className="relative min-h-[560px] overflow-hidden bg-slate-800">
          <Image
            src="/class.jpeg"
            alt="Denny Prokopos teaching a jiu jitsu class"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.16),_transparent_35%),linear-gradient(180deg,_rgba(2,6,23,0.12),_rgba(2,6,23,0.55))]" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/35 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/45 to-transparent" />
        </div>

        <div className="flex items-center px-6 py-20 lg:px-20">
          <div className="w-full">
            <p className="text-xs font-black uppercase tracking-[0.45em] text-sky-400">
              The Man Behind The Academy
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase leading-none md:text-5xl">
              Denny <span className="text-sky-500">Prokopos</span>
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black uppercase text-sky-500">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] font-black uppercase leading-4 tracking-[0.2em] text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600">
              <p>
                Denny Prokopos is the first person ever promoted to black belt
                by Eddie Bravo under the 10th Planet system. Born with Greek
                heritage that instilled in him a warrior’s spirit, Denny has
                spent over two decades at the forefront of no-gi grappling.
              </p>

              <p>
                His career spans EBI championships, World No-Gi titles, SUG
                victories on UFC Fight Pass, and coaching some of the sport’s
                top competitors. Now he’s bringing that entire system to
                Vacaville.
              </p>

              <p>
                This is not a franchise gym. This is his academy, his
                curriculum, his legacy.
              </p>
            </div>

            <Link
              href="/get-started"
              className="mt-8 inline-flex w-full items-center justify-center bg-sky-500 px-6 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:bg-sky-400"
            >
              Train With Denny
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

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

            <p className="relative text-[10px] font-black uppercase tracking-[0.25em] text-white/80">
              {item.label}
            </p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-900 px-6 py-24 text-center text-white">
        <div className="absolute -bottom-24 -right-16 text-[260px] font-black leading-none text-white/[0.03]">
          Ω
        </div>

        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-4xl font-black uppercase md:text-5xl">
            Ready To <span className="text-sky-400">Train?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Join the academy and experience world-class jiu jitsu in Vacaville.
            Your first class is free.
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
