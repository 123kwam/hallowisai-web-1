"use client";
import React from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-ink/80 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5"
      )}
    >
      <div className="container-tight flex items-center justify-between">
        {/* wordmark */}
        <a
          href="#top"
          className="font-display text-base font-extrabold uppercase tracking-tight text-white"
        >
          Hallowis<span className="text-gradient">AI</span>
        </a>

        {/* desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* right cluster */}
        <div className="flex items-center gap-5">
          <div className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] sm:flex">
            <span className="text-brand-cyan">EN</span>
            <span className="text-white/25">/</span>
            <span className="text-white/40">NL</span>
          </div>
          <a
            href={site.links.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden btn-primary !px-6 !py-3 sm:inline-flex"
          >
            Get Started
          </a>
          <button
            className="text-slate-200 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="container-tight mt-3 lg:hidden">
          <div className="glass rounded-2xl p-4">
            <ul className="flex flex-col gap-1">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-200 hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={site.links.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
