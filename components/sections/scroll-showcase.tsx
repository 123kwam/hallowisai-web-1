"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Activity, Bot, TrendingUp, Zap } from "lucide-react";

function DashboardMockup() {
  const bars = [42, 68, 55, 80, 64, 92, 76, 88];
  return (
    <div className="flex h-full w-full flex-col gap-4 rounded-xl bg-gradient-to-br from-[#0a0e17] to-[#0d121d] p-5 text-left md:p-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan">
            <Bot className="h-4 w-4 text-white" />
          </span>
          <span className="font-display text-sm font-semibold text-white">HallowisAI · Control Room</span>
        </div>
        <div className="hidden gap-1.5 sm:flex">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { icon: TrendingUp, label: "Qualified leads", value: "1,284" },
          { icon: Zap, label: "Automations live", value: "37" },
          { icon: Activity, label: "Uptime", value: "99.98%" },
          { icon: Bot, label: "Hours saved / wk", value: "210" },
        ].map((kpi) => (
          <div key={kpi.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <kpi.icon className="h-4 w-4 text-brand-cyan" />
            <div className="mt-2 font-display text-lg font-bold text-white">{kpi.value}</div>
            <div className="text-[10px] text-slate-400">{kpi.label}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-1 flex-col rounded-lg border border-white/10 bg-white/[0.02] p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-medium text-slate-300">Pipeline performance</span>
          <span className="text-[10px] text-brand-cyan">+18.2% this month</span>
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
  return (
    <section className="relative -mt-24 md:-mt-40">
      <ContainerScroll
        titleComponent={
          <div className="mb-4">
            <span className="eyebrow">The work</span>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
              From idea to a system that <br />
              <span className="text-gradient">runs your business</span>
            </h2>
          </div>
        }
      >
        <DashboardMockup />
      </ContainerScroll>
    </section>
  );
}
