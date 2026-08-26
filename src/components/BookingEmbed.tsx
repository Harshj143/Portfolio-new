"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { BOOKING, SUBJECT } from "@/lib/content";

/**
 * The calendar mounts only once someone asks for it, so Cal.com's script never
 * loads for the majority of visitors who read and leave. Every state keeps a
 * plain link out, so the block still works if the embed fails.
 */
export function BookingEmbed() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const live = Boolean(BOOKING.calLink);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    (async () => {
      try {
        const cal = await getCalApi({ namespace: "portfolio" });
        cal("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
          theme: "light",
          cssVarsPerTheme: {
            light: { "cal-brand": "#C2341D" },
            dark: { "cal-brand": "#C2341D" },
          },
        });
      } catch {
        /* the fallback link stays available */
      }
      if (!cancelled) setReady(true);
    })();
    return () => {
      cancelled = true;
    };
  }, [open]);

  return (
    <div className="border border-rule rounded-sm bg-paper-2/50 p-7 sm:p-9">
      <div className="grid gap-x-10 gap-y-6 sm:grid-cols-12">
        <div className="sm:col-span-7">
          <div className="mono text-stamp pb-2">Book a call &middot; {BOOKING.duration}</div>
          <h3 className="display text-[clamp(1.5rem,3vw,2.2rem)] leading-[1.02] pb-3">
            Put something on the calendar.
          </h3>
          <p className="text-[.98rem] leading-[1.6] text-ink-2 max-w-[46ch]">{BOOKING.blurb}</p>
        </div>

        <div className="sm:col-span-4 sm:col-start-9 flex flex-col justify-end gap-3">
          {live ? (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="group inline-flex items-center justify-between gap-3 bg-ink text-paper px-5 py-4 rounded-sm hover:bg-stamp transition-colors duration-300 w-full text-left cursor-pointer"
            >
              <span className="text-[1.02rem]">{open ? "Hide calendar" : "Pick a time"}</span>
              <span
                className={`mono transition-transform duration-300 ${
                  open ? "rotate-180" : "group-hover:translate-y-0.5"
                }`}
              >
                &darr;
              </span>
            </button>
          ) : (
            <a
              href={`mailto:${SUBJECT.email}?subject=Intro%20call`}
              className="group inline-flex items-center justify-between gap-3 bg-ink text-paper px-5 py-4 rounded-sm hover:bg-stamp transition-colors duration-300"
            >
              <span className="text-[1.02rem]">Email to arrange a time</span>
              <span className="mono group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </a>
          )}

          <a
            href={live ? BOOKING.url : `mailto:${SUBJECT.email}`}
            target={live ? "_blank" : undefined}
            rel="noreferrer"
            className="mono text-ink-3 hover:text-ink transition-colors duration-300"
          >
            {live ? "or open it in a new tab →" : "Live scheduling coming shortly"}
          </a>
        </div>
      </div>

      {live && open && (
        <div className="pt-8">
          <div className="rounded-sm border border-rule bg-paper overflow-hidden">
            {!ready && <div className="mono text-ink-3 p-6">Loading calendar&hellip;</div>}
            <Cal
              namespace="portfolio"
              calLink={BOOKING.calLink}
              style={{ width: "100%", minHeight: "34rem", overflow: "scroll" }}
              config={{ layout: "month_view" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
