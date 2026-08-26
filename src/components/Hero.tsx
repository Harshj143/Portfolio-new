import { Redacted } from "./Redaction";
import { SUBJECT } from "@/lib/content";

export function Hero() {
  return (
    <header className="relative min-h-[100svh] flex flex-col justify-between pt-8 pb-10">
      {/* top meta strip */}
      <div className="flex items-start justify-between gap-6 rise" style={{ animationDelay: ".05s" }}>
        <div className="mono text-ink-3 leading-relaxed">
          <div>File {SUBJECT.fileNo}</div>
          <div>Clearance: {SUBJECT.clearance}</div>
        </div>
        <div className="stamp mono text-[.6rem] sm:text-[.688rem] rotate-[2.5deg] shrink-0">
          Declassify by hand
        </div>
      </div>

      {/* the name — bleeds past the left edge on purpose */}
      <div className="-mt-4 namewrap">
        <h1 className="display text-ink select-none">
          <span
            className="block rise name-1 -ml-[.035em]"
            style={{ animationDelay: ".12s" }}
          >
            {SUBJECT.first}
          </span>
          <span
            className="block rise name-2 -ml-[.03em]"
            style={{ animationDelay: ".2s" }}
          >
            <Redacted>{SUBJECT.last}</Redacted>
          </span>
        </h1>

        <div
          className="mt-8 sm:mt-10 grid gap-6 sm:grid-cols-12 rise"
          style={{ animationDelay: ".34s" }}
        >
          <p className="sm:col-span-5 sm:col-start-2 text-[1.32rem] sm:text-[1.6rem] leading-[1.28] tracking-[-.018em]">
            {SUBJECT.role} working on{" "}
            <Redacted>application &amp; AI security</Redacted>, building the
            guardrails between <Redacted>AI agents</Redacted> and the damage they can do.
          </p>
          <p className="sm:col-span-4 sm:col-start-9 text-ink-2 text-[.95rem] leading-[1.62] self-end">
            M.S. Cybersecurity Engineering at the University of Washington.
            Previously <Redacted>SecureAIs</Redacted>,{" "}
            <Redacted>SecureThings</Redacted>, and the Pune Metro Rail Project.
          </p>
        </div>
      </div>

      {/* footer rail */}
      <div className="rise" style={{ animationDelay: ".46s" }}>
        <div className="rule mb-4" />
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 mono text-ink-3">
          <span className="text-ink">{SUBJECT.status}</span>
          <span>{SUBJECT.location}</span>
          <span className="hidden md:inline">{SUBJECT.focus}</span>
          <span className="text-stamp animate-pulse">
            <span className="hidden [@media(hover:hover)]:inline">Move cursor to declassify &rarr;</span>
            <span className="[@media(hover:hover)]:hidden">Scroll to declassify &darr;</span>
          </span>
        </div>
      </div>
    </header>
  );
}
