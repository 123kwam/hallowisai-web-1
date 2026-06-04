"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Activity, Bot, TrendingUp, Zap } from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";

const kpiIcons = [TrendingUp, Zap, Activity, Bot];

function DashboardMockup() {
  const { t } = useLanguage();
  const d = t.showcase.dashboard;
  const bars = [42, 68, 55, 80, 64, 92, 76, 88];
  return (
    <div className="flex h-full w-full flex-col gap-4 rounded-xl bg-gradient-to-br from-[#0a0e17] to-[#0d121d] p-5 text-left md:p-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan">
            <Bot className="h-4 w-4 text-white" />
          </span>
          <span className="font-display text-sm font-semibold text-white">{d.title}</span>
        </div>
        <div className="hidden gap-1.5 sm:flex">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {d.kpis.map((kpi, i) => {
          const Icon = kpiIcons[i];
          return (
            <div key={kpi.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
              <Icon className="h-4 w-4 text-brand-cyan" />
              <div className="mt-2 font-display text-lg font-bold text-white">{kpi.value}</div>
              <div className="text-[10px] text-slate-400">{kpi.label}</div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-1 flex-col rounded-lg border border-white/10 bg-white/[0.02] p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-medium text-slate-300">{d.pipeline}</span>
          <span className="text-[10px] text-brand-cyan">{d.delta}</span>
        </div>
        <div className="flex flex-1 items-end gap-2 sm:gap-3">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-brand-blue/40 to-brand-cyan"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ScrollShowcase() {
  const { t } = useLanguage();
  return (
    <section className="relative">
      <ContainerScroll
        titleComponent={
          <div className="mb-4">
            <span className="eyebrow">{t.showcase.eyebrow}</span>
            <h2 className="section-title mt-6 text-4xl sm:text-6xl">
              {t.showcase.headingA} <br />
              <span className="italic text-gradient">{t.showcase.accent}</span>
            </h2>
          </div>
        }
      >
        <DashboardMockup />
      </ContainerScroll>
    </section>
  );
}
