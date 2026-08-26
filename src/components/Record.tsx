import Image from "next/image";
import { Reveal, SectionHead } from "./Reveal";
import { Redacted } from "./Redaction";
import { RECORD } from "@/lib/content";

export function Record() {
  return (
    <section id="record" className="pt-28 sm:pt-36">
      <SectionHead n="02" title="Service Record" note="2022 — 2025" />

      <div className="pt-8">
        {RECORD.map((r, i) => (
          <Reveal key={r.org} delay={0.05 * i}>
            <article className="grid gap-x-10 gap-y-5 sm:grid-cols-12 py-9 border-t border-rule first:border-t-0">
              <div className="sm:col-span-3">
                <div className="mono text-ink-3">
                  {r.from} &mdash; {r.to}
                </div>
                <div className="flex items-center gap-3 pt-3">
                  {r.logo && (
                    <span className="relative w-9 h-9 shrink-0 overflow-hidden rounded-sm bg-paper-2 ring-1 ring-rule">
                      <Image
                        src={r.logo}
                        alt=""
                        fill
                        sizes="36px"
                        className="object-contain p-1 mix-blend-multiply"
                      />
                    </span>
                  )}
                  <div>
                    <div className="font-semibold leading-tight">{r.org}</div>
                    <div className="mono text-ink-3 pt-0.5">{r.place}</div>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-8 sm:col-start-5">
                <h3 className="display text-[clamp(1.5rem,3vw,2.15rem)] leading-[1.04] pb-4">
                  {r.title}
                </h3>
                <ul className="flex flex-col gap-3 pb-5">
                  {r.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-3 text-[.96rem] leading-[1.6] text-ink-2">
                      <span className="mono text-stamp pt-1 shrink-0">{String(bi + 1).padStart(2, "0")}</span>
                      <span className="max-w-[64ch]">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-x-2 gap-y-2">
                  {r.stack.map((s) => (
                    <span
                      key={s}
                      className="mono text-ink-2 border border-rule rounded-full px-2.5 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mono text-ink-3 pt-6">
          Full history in the <Redacted>résumé</Redacted> &mdash; linked below.
        </p>
      </Reveal>
    </section>
  );
}
