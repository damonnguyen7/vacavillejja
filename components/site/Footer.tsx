import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em]">
            {siteConfig.name}
          </h3>
          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
            {siteConfig.tagline}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.25em] text-sky-400">
            Navigation
          </h4>

          <div className="mt-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-400 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.25em] text-sky-400">
            Programs
          </h4>

          <div className="mt-4 flex flex-col gap-2 text-sm text-slate-400">
            <p>Adult Jiu Jitsu</p>
            <p>Class Schedule</p>
            <p>Free Trial Class</p>
            <p>Private Lessons</p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.25em] text-sky-400">
            Contact
          </h4>

          <div className="mt-4 space-y-2 text-sm text-slate-400">
            <p>{siteConfig.location}</p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-slate-600">
        © 2026 {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
