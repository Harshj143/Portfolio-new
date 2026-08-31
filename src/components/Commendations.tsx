import { Reveal, SectionHead } from "./Reveal";
import { COMMENDATIONS, CERTS } from "@/lib/content";

export function Commendations() {
  return (
    <section id="commendations" className="pt-28 sm:pt-36">
      <SectionHead n="04" title="Commendations" />

      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-12 pt-8">
        <div className="sm:col-span-7">
          <div className="flex flex-col">
            {COMMENDATIONS.map((c, i) => (
              <Reveal key={c.t} delay={0.05 * i}>
                <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 py-6 border-t border-rule">
                  <span className="display text-[clamp(1.4rem,3.2vw,2.2rem)] text-stamp shrink-0 sm:w-[8.2em]" style={{ lineHeight: 1.1 }}>
                    {c.k}
                  </span>
                  <div className="min-w-[16rem] flex-1">
                    <div className="font-semibold text-[1.05rem] leading-tight pb-1">{c.t}</div>
                    <p className="text-[.92rem] leading-[1.55] text-ink-2 max-w-[46ch]">{c.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="sm:col-span-4 sm:col-start-9">
          <Reveal delay={0.1}>
            <div className="mono text-ink-3 pb-4">Certifications</div>
            <ul className="flex flex-col">
              {CERTS.map((c) => (
                <li
                  key={c}
                  className="flex gap-3 text-[.95rem] leading-[1.45] text-ink-2 border-b border-rule py-3"
                >
                  <span className="text-stamp shrink-0">&#9642;</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
