"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-sky-500 text-xs font-black uppercase text-white">
            VJJA
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

        <div className="hidden md:block">
          <Link
            href="/get-started"
            className="bg-sky-500 px-5 py-2 text-xs font-black uppercase tracking-wide text-white transition hover:bg-sky-400"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white transition hover:border-sky-400 hover:text-sky-400 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          <span className="sr-only">
            {isOpen ? "Close navigation menu" : "Open navigation menu"}
          </span>

          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 bg-current transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-white/10 py-4 text-sm font-black uppercase tracking-wide text-slate-300 transition last:border-b-0 hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/get-started"
              onClick={closeMenu}
              className="mt-5 inline-flex items-center justify-center bg-sky-500 px-5 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:bg-sky-400"
            >
              Get Started
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
