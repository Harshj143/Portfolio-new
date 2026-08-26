import Image from "next/image";
import { Reveal, SectionHead } from "./Reveal";
import { WORK, type Project } from "@/lib/content";

function Arrow() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 15L15 5M15 5H7M15 5v8" />
    </svg>
  );
}

function Featured({ p }: { p: Project }) {
  return (
    <article className="grid gap-x-10 gap-y-8 sm:grid-cols-12 py-14 border-t border-rule">
      <div className="sm:col-span-2">
        <div
          className="display text-[clamp(2.6rem,5.1vw,4.6rem)] text-paper-3 select-none"
          style={{ lineHeight: 1.16 }}
          aria-hidden="true"
        >
          {p.n}
        </div>
        <div className="mono text-ink-3 pt-2">{p.year}</div>
      </div>

      <div className="sm:col-span-6">
        <div className="mono text-stamp pb-2">{p.kind}</div>
        <h3 className="display text-[clamp(2.1rem,5vw,3.5rem)] leading-[.95] pb-5">
          {p.href ? (
            <a href={p.href} target="_blank" rel="noreferrer" className="group inline-flex items-start gap-3 hover:text-stamp transition-colors duration-300">
              {p.name}
              <span className="pt-2"><Arrow /></span>
            </a>
          ) : (
            p.name
          )}
        </h3>
        <p className="text-[1.16rem] leading-[1.42] tracking-[-.012em] pb-4 max-w-[46ch]">
          {p.line}
        </p>
        <p className="text-[.96rem] leading-[1.66] text-ink-2 pb-6 max-w-[58ch]">{p.body}</p>
        <div className="flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="mono text-ink-2 border border-rule rounded-full px-2.5 py-1">
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="sm:col-span-3 sm:col-start-10">
        {p.image && (
          <div className="relative w-full aspect-[16/10] mb-5 overflow-hidden rounded-sm ring-1 ring-rule bg-paper-2">
            <Image
              src={p.image}
              alt={`${p.name} interface`}
              fill
              sizes="(max-width: 640px) 100vw, 24vw"
              className="object-cover object-top"
            />
          </div>
        )}
        <ul className="flex flex-col gap-2.5">
          {p.bullets.map((b, i) => (
            <li key={i} className="flex gap-2.5 text-[.86rem] leading-[1.5] text-ink-2">
              <span className="text-stamp shrink-0 pt-[.15rem]">&#9642;</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function Compact({ p }: { p: Project }) {
  const Inner = (
    <>
      <div className="flex items-baseline gap-3 pb-2">
        <span className="mono text-paper-3 text-[1.1rem]">{p.n}</span>
        <span className="mono text-stamp">{p.kind}</span>
        <span className="mono text-ink-3 ml-auto">{p.year}</span>
      </div>
      <h3 className="display text-[clamp(1.6rem,3vw,2.1rem)] leading-[1] pb-3 inline-flex items-start gap-2 group-hover:text-stamp transition-colors duration-300">
        {p.name}
        {p.href && <span className="pt-1.5"><Arrow /></span>}
      </h3>
      <p className="text-[.98rem] leading-[1.45] pb-3">{p.line}</p>
      <p className="text-[.88rem] leading-[1.6] text-ink-2 pb-4">{p.body}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {p.stack.map((s) => (
          <span key={s} className="mono text-ink-2 border border-rule rounded-full px-2.5 py-1">
            {s}
          </span>
        ))}
      </div>
    </>
  );

  const cls =
    "group flex flex-col h-full p-6 border border-rule rounded-sm bg-paper-2/45 transition-all duration-300 hover:bg-paper-2 hover:-translate-y-1 hover:shadow-[0_18px_40px_-28px_rgba(17,17,18,.55)]";

  return p.href ? (
    <a href={p.href} target="_blank" rel="noreferrer" className={cls}>
      {Inner}
    </a>
  ) : (
    <div className={cls}>{Inner}</div>
  );
}

export function Work() {
  const featured = WORK.filter((p) => p.featured);
  const rest = WORK.filter((p) => !p.featured);

  return (
    <section id="work" className="pt-28 sm:pt-36">
      <SectionHead n="03" title="Field Work" note={`${WORK.length} projects`} />

      <Reveal>
        <p className="display text-[clamp(1.5rem,3.2vw,2.4rem)] leading-[1.08] max-w-[24ch] pt-8 pb-4">
          AI is part of the attack surface now. These are the tools I built for it.
        </p>
      </Reveal>

      <div className="pt-6">
        {featured.map((p, i) => (
          <Reveal key={p.name} delay={0.04 * i}>
            <Featured p={p} />
          </Reveal>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 pt-14 border-t border-rule">
        {rest.map((p, i) => (
          <Reveal key={p.name} delay={0.04 * i} className="h-full">
            <Compact p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
