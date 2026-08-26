"use client";

import { useEffect, useState } from "react";
import { SUBJECT, BOOKING } from "@/lib/content";

const ITEMS = [
  { id: "about", n: "01", label: "About" },
  { id: "experience", n: "02", label: "Experience" },
  { id: "work", n: "03", label: "Projects" },
  { id: "commendations", n: "04", label: "Commendations" },
  { id: "contact", n: "05", label: "Contact" },
];

export function Nav() {
  const [shown, setShown] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const spy = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] }
    );
    ITEMS.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) spy.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      spy.disconnect();
    };
  }, []);

  return (
    <nav
      aria-label="Sections"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        shown ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-paper/88 backdrop-blur-md border-b border-rule">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-14 h-14 flex items-center gap-6">
          <a
            href="#top"
            className="display text-[1.05rem] leading-none shrink-0 hover:text-stamp transition-colors duration-300"
          >
            HJ
          </a>

          <ul className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar -mx-1 px-1">
            {ITEMS.map((i) => {
              const on = active === i.id;
              return (
                <li key={i.id} className="shrink-0">
                  <a
                    href={`#${i.id}`}
                    aria-current={on ? "true" : undefined}
                    className={`mono px-2.5 py-1.5 rounded-sm whitespace-nowrap transition-colors duration-300 ${
                      on ? "text-ink bg-paper-3/70" : "text-ink-3 hover:text-ink"
                    }`}
                  >
                    <span className={on ? "text-stamp" : "text-paper-3"}>{i.n}</span>{" "}
                    {i.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href={BOOKING.url || `mailto:${SUBJECT.email}`}
            target={BOOKING.url ? "_blank" : undefined}
            rel="noreferrer"
            className="mono ml-auto shrink-0 hidden md:inline-flex items-center gap-2 border border-stamp text-stamp px-3 py-1.5 rounded-sm hover:bg-stamp hover:text-paper transition-colors duration-300"
          >
            Book a call
          </a>
        </div>
      </div>
    </nav>
  );
}
