"use client";
import { Sparkles, Mail } from "lucide-react";
import { site } from "@/lib/site";
import GradientMenu from "@/components/ui/gradient-menu";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-16">
      <div className="container-tight">
        <div className="flex flex-col items-center gap-10 text-center">
          <a href="#top" className="flex items-center gap-2 font-display text-xl font-bold text-white">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            Hallowis<span className="text-gradient">AI</span>
          </a>

          <p className="max-w-md text-sm text-slate-400">
            Intelligent systems that scale your business — lead generation, software,
            cloud, and automation.
          </p>

          {/* Adapted gradient menu as a social / quick-action dock */}
          <GradientMenu />

          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
          >
            <Mail className="h-4 w-4" />
            {site.email}
          </a>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} HallowisAI. All rights reserved.</p>
          <div className="flex gap-6">
            {site.nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-slate-300">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
