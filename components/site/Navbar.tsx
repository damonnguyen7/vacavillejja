import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center bg-sky-500 text-xs font-black uppercase text-white">
            10P
          </div>

          <span className="text-sm font-black uppercase tracking-[0.2em] text-white">
            {siteConfig.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-bold text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/get-started"
          className="bg-sky-500 px-5 py-2 text-xs font-black uppercase tracking-wide text-white transition hover:bg-sky-400"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
