import { Reveal, SectionHead } from "./Reveal";
import { Redacted } from "./Redaction";
import { SUBJECT, BOOKING } from "@/lib/content";

const LINKS = [
  { label: "Email", value: SUBJECT.email, href: `mailto:${SUBJECT.email}` },
  { label: "LinkedIn", value: "harsh-jannawar", href: SUBJECT.linkedin },
  { label: "GitHub", value: "Harshj143", href: SUBJECT.github },
  { label: "Résumé", value: "Download PDF", href: SUBJECT.resume },
];

function Booking() {
  const live = Boolean(BOOKING.url);
  return (
    <div className="grid gap-x-10 gap-y-8 sm:grid-cols-12 border border-rule rounded-sm bg-paper-2/50 p-7 sm:p-9">
      <div className="sm:col-span-7">
        <div className="mono text-stamp pb-2">Book a call &mdash; {BOOKING.duration}</div>
        <h3 className="display text-[clamp(1.5rem,3vw,2.2rem)] leading-[1.02] pb-3">
          Put something on the calendar.
        </h3>
        <p className="text-[.98rem] leading-[1.6] text-ink-2 max-w-[46ch]">{BOOKING.blurb}</p>
      </div>

      <div className="sm:col-span-4 sm:col-start-9 flex flex-col justify-end gap-3">
        <a
          href={live ? BOOKING.url : `mailto:${SUBJECT.email}?subject=Intro%20call`}
          target={live ? "_blank" : undefined}
          rel="noreferrer"
          className="group inline-flex items-center justify-between gap-3 bg-ink text-paper px-5 py-4 rounded-sm hover:bg-stamp transition-colors duration-300"
        >
          <span className="text-[1.02rem]">{live ? "Pick a time" : "Email to arrange a time"}</span>
          <span className="mono transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
        </a>
        <p className="mono text-ink-3 leading-relaxed">
          {live ? "Opens my scheduling page" : "Live scheduling coming shortly"}
        </p>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="pt-28 sm:pt-36 pb-16">
      <SectionHead n="05" title="Contact" note="Open to full-time roles" />

      <Reveal>
        <p className="display text-[clamp(2.4rem,8vw,6.2rem)] leading-[.94] tracking-[-.05em] pt-10 pb-10 max-w-[16ch]">
          Got an AI system you&rsquo;re not sure you can{" "}
          <Redacted>trust</Redacted>?
        </p>
      </Reveal>

      <Reveal>
        <div className="pb-6">
          <Booking />
        </div>
      </Reveal>

      <div className="grid gap-px bg-rule border border-rule sm:grid-cols-2 lg:grid-cols-4">
        {LINKS.map((l, i) => (
          <Reveal key={l.label} delay={0.04 * i}>
            <a
              href={l.href}
              target={l.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="group flex flex-col gap-1 bg-paper p-6 h-full transition-colors duration-300 hover:bg-ink hover:text-paper"
            >
              <span className="mono text-ink-3 group-hover:text-paper-3 transition-colors duration-300">
                {l.label}
              </span>
              <span className="text-[1.05rem] leading-tight break-words">{l.value}</span>
              <span className="mono text-stamp pt-3 mt-auto group-hover:text-paper transition-colors duration-300">
                Open &rarr;
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
