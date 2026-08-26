import { Reveal, SectionHead } from "./Reveal";
import { Redacted } from "./Redaction";
import { SUMMARY, BRIEF, CAPABILITIES, EDUCATION } from "@/lib/content";

export function Brief() {
  return (
    <section id="subject" className="pt-28 sm:pt-36">
      <SectionHead n="01" title="Subject" note="Background" />

      <div className="grid gap-x-10 gap-y-14 sm:grid-cols-12 pt-8">
        <div className="sm:col-span-7 sm:col-start-2">
          <Reveal>
            <p className="display text-[clamp(1.7rem,3.8vw,2.9rem)] leading-[1.04] pb-8 max-w-[19ch]">
              I ship security tooling, not just{" "}
              <Redacted>findings</Redacted>.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-[1.08rem] leading-[1.62] pb-5 max-w-[62ch]">{SUMMARY}</p>
          </Reveal>

          {BRIEF.map((p, i) => (
            <Reveal key={i} delay={0.06 * (i + 1)}>
              <p className="text-[1rem] leading-[1.68] text-ink-2 pb-5 max-w-[62ch]">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.1}>
            <div className="pt-6">
              <div className="mono text-ink-3 pb-3">Education</div>
              {EDUCATION.map((e) => (
                <div
                  key={e.school}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-rule py-4"
                >
                  <div>
                    <div className="font-semibold leading-tight">{e.school}</div>
                    <div className="text-[.92rem] text-ink-2 pt-0.5">{e.degree}</div>
                  </div>
                  <div className="mono text-ink-3 text-right">
                    <div>
                      {e.from} &mdash; {e.to}
                    </div>
                    <div className="text-stamp pt-0.5">{e.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="sm:col-span-3 sm:col-start-10">
          <Reveal delay={0.12}>
            <div className="mono text-ink-3 pb-4">Capabilities</div>
            <div className="flex flex-col gap-5">
              {CAPABILITIES.map((c) => (
                <div key={c.g}>
                  <div className="mono text-stamp pb-1.5">{c.g}</div>
                  <ul className="text-[.85rem] leading-[1.55] text-ink-2">
                    {c.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
