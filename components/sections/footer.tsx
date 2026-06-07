"use client";
import { Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import GradientMenu from "@/components/ui/gradient-menu";
import { useLanguage } from "@/components/i18n/language-provider";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative border-t border-white/10 py-16">
      <div className="container-tight">
        <div className="flex flex-col items-center gap-10 text-center">
          <a href="#top" className="font-display text-2xl font-extrabold uppercase tracking-tight text-white">
            Hallowis<span className="text-gradient">AI</span>
          </a>

          <p className="max-w-md text-base text-slate-300">{t.footer.tagline}</p>

          {/* Adapted gradient menu as a social / quick-action dock */}
          <GradientMenu />

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              {site.email}
            </a>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span className="inline-flex items-center gap-2 text-sm text-slate-300">
              <MapPin className="h-4 w-4 text-brand-cyan" />
              {t.footer.location}
            </span>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} HallowisAI. {t.footer.rights}</p>
          <div className="flex gap-6">
            {t.navItems.map((item) => (
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
