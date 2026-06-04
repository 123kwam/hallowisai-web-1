"use client";
import React from "react";
import { Menu, X, Sparkles } from "lucide-react";
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
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container-tight">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300",
            scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
          )}
        >
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-white">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan shadow-[0_0_20px_-4px_rgba(56,189,248,0.8)]">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            Hallowis<span className="text-gradient">AI</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a href={site.links.calendly} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a Call
            </a>
          </div>

          <button
            className="text-slate-200 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {open && (
          <div className="glass mt-2 rounded-2xl p-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/5"
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
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
