"use client";
import React from "react";
import {
  IoHomeOutline,
  IoBriefcaseOutline,
  IoLogoYoutube,
  IoLogoLinkedin,
  IoCalendarOutline,
} from "react-icons/io5";
import { site } from "@/lib/site";

type MenuItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
  external?: boolean;
  gradientFrom: string;
  gradientTo: string;
};

const menuItems: MenuItem[] = [
  {
    title: "Top",
    icon: <IoHomeOutline />,
    href: "#top",
    gradientFrom: "#3b82f6",
    gradientTo: "#22d3ee",
  },
  {
    title: "Services",
    icon: <IoBriefcaseOutline />,
    href: "#services",
    gradientFrom: "#06b6d4",
    gradientTo: "#3b82f6",
  },
  {
    title: "Book",
    icon: <IoCalendarOutline />,
    href: site.links.calendly,
    external: true,
    gradientFrom: "#0ea5e9",
    gradientTo: "#22d3ee",
  },
  {
    title: "Podcast",
    icon: <IoLogoYoutube />,
    href: site.links.podcast,
    external: true,
    gradientFrom: "#2563eb",
    gradientTo: "#38bdf8",
  },
  {
    title: "LinkedIn",
    icon: <IoLogoLinkedin />,
    href: site.links.linkedin,
    external: true,
    gradientFrom: "#1d4ed8",
    gradientTo: "#22d3ee",
  },
];

export default function GradientMenu() {
  return (
    <ul className="flex gap-3 md:gap-5">
      {menuItems.map(({ title, icon, href, external, gradientFrom, gradientTo }, idx) => (
        <li
          key={idx}
          style={
            {
              "--gradient-from": gradientFrom,
              "--gradient-to": gradientTo,
            } as React.CSSProperties
          }
          className="group relative flex h-[54px] w-[54px] cursor-pointer items-center justify-center rounded-full bg-white/95 shadow-lg transition-all duration-500 hover:w-[150px] hover:shadow-none"
        >
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={title}
            className="absolute inset-0 z-20 flex items-center justify-center rounded-full"
          >
            {/* Gradient background on hover */}
            <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100"></span>
            {/* Blur glow */}
            <span className="absolute inset-x-0 top-[10px] -z-10 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 blur-[15px] transition-all duration-500 group-hover:opacity-50"></span>

            {/* Icon */}
            <span className="relative z-10 transition-all duration-500 group-hover:scale-0">
              <span className="text-2xl text-gray-600">{icon}</span>
            </span>

            {/* Title */}
            <span className="absolute z-10 scale-0 text-sm uppercase tracking-wide text-white transition-all delay-150 duration-500 group-hover:scale-100">
              {title}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
