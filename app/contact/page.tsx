import Link from "next/link";
import { siteConfig } from "@/lib/site";

const contactItems = [
  {
    icon: "📍",
    title: "Location",
    lines: ["Vacaville, CA", "Full address releasing with grand opening"],
  },
  {
    icon: "📞",
    title: "Phone",
    lines: [siteConfig.phone],
  },
  {
    icon: "✉️",
    title: "Email",
    lines: [siteConfig.email],
  },
  {
    icon: "⏰",
    title: "Hours",
    lines: [
      "Mon–Fri: Beginners class at 6:00 PM",
      "Saturday: Open Mat at 1:00 PM",
      "Sunday: Closed",
    ],
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
  },
  {
    label: "YouTube",
    href: "#",
  },
  {
    label: "Facebook",
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-950">
      {/* PAGE HERO */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-slate-800">
          <div className="flex h-full items-center justify-center text-center text-xs font-black uppercase tracking-[0.4em] text-slate-600">
            Contact Hero Image Placeholder
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-sky-400">
            Get In Touch
          </p>

          <h1 className="mt-5 text-5xl font-black uppercase leading-none md:text-7xl">
            Contact <span className="text-sky-400">Us</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
            Questions, memberships, private lessons — we’ll get back to you
            quickly.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-slate-100 px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1fr]">
          {/* LEFT INFO */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.45em] text-sky-400">
              Reach Out
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-none md:text-5xl">
              We’d Love To{" "}
              <span className="text-sky-500">
                Hear From
                <br />
                You
              </span>
            </h2>

            <div className="mt-10 space-y-6">
              {contactItems.map((item) => (
                <div
                  key={item.title}
                  className="grid grid-cols-[44px_1fr] gap-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center bg-slate-950 text-lg">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wide">
                      {item.title}
                    </h3>

                    <div className="mt-1 space-y-1 text-sm leading-6 text-slate-600">
                      {item.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-slate-400">
                Follow Denny
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="bg-slate-950 px-4 py-2 text-xs font-black uppercase tracking-wide text-white transition hover:bg-sky-500"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-slate-950 px-6 py-10 text-center text-white">
              <p className="text-3xl">📍</p>

              <h3 className="mt-3 text-lg font-black uppercase">
                Vacaville, CA
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Full address releasing
              </p>

              <p className="mt-1 text-sm text-slate-500">
                with grand opening announcement
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form className="border-t-4 border-sky-500 bg-white p-6 shadow-xl md:p-8">
            <h2 className="text-2xl font-black uppercase">Send a Message</h2>

            <p className="mt-2 text-sm text-slate-500">
              We’ll get back to you within 24 hours.
            </p>

            <div className="mt-6 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="text-xs font-black uppercase tracking-wide text-slate-600"
                  >
                    First Name
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    className="mt-2 w-full border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500"
                    placeholder="First"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="text-xs font-black uppercase tracking-wide text-slate-600"
                  >
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    className="mt-2 w-full border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500"
                    placeholder="Last"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-black uppercase tracking-wide text-slate-600"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-2 w-full border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-xs font-black uppercase tracking-wide text-slate-600"
                >
                  Phone Optional
                </label>

                <input
                  id="phone"
                  name="phone"
                  className="mt-2 w-full border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500"
                  placeholder="(707) 000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="topic"
                  className="text-xs font-black uppercase tracking-wide text-slate-600"
                >
                  Topic
                </label>

                <select
                  id="topic"
                  name="topic"
                  className="mt-2 w-full border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select...
                  </option>
                  <option value="free-trial">Free Trial Class</option>
                  <option value="membership">Membership</option>
                  <option value="schedule">Class Schedule</option>
                  <option value="private-lessons">Private Lessons</option>
                  <option value="general">General Question</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-xs font-black uppercase tracking-wide text-slate-600"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  className="mt-2 min-h-36 w-full resize-none border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500"
                  placeholder="Tell us what’s on your mind..."
                />
              </div>

              <button
                type="button"
                className="bg-sky-500 px-6 py-4 text-xs font-black uppercase tracking-wide text-white transition hover:bg-sky-400"
              >
                Send Message →
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative overflow-hidden bg-slate-900 px-6 py-24 text-center text-white">
        <div className="absolute -bottom-24 -right-16 text-[260px] font-black leading-none text-white/[0.03]">
          Ω
        </div>

        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-sky-400">
            Opening Soon
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">
            Be First <span className="text-sky-400">On The Mat</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Sign up for the founding member list. Charter members receive
            special founding pricing when doors open.
          </p>

          <div className="mt-8">
            <Link
              href="/get-started"
              className="inline-flex bg-sky-500 px-6 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:bg-sky-400"
            >
              Join The Founding Member List
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
