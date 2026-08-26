import { Reveal, SectionHead } from "./Reveal";
import { Redacted } from "./Redaction";
import { BookingEmbed } from "./BookingEmbed";
import { SUBJECT } from "@/lib/content";

const LINKS: { label: string; value: string; href: string; download?: boolean }[] = [
  { label: "Email", value: SUBJECT.email, href: `mailto:${SUBJECT.email}` },
  { label: "LinkedIn", value: "harsh-jannawar", href: SUBJECT.linkedin },
  { label: "GitHub", value: "Harshj143", href: SUBJECT.github },
  { label: "Résumé", value: "Download PDF", href: SUBJECT.resume, download: true },
];

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
          <BookingEmbed />
        </div>
      </Reveal>

      <div className="grid gap-px bg-rule border border-rule sm:grid-cols-2 lg:grid-cols-4">
        {LINKS.map((l, i) => (
          <Reveal key={l.label} delay={0.04 * i}>
            <a
              href={l.href}
              {...(l.download
                ? { download: "Harsh-Jannawar-Security-Engineer.pdf" }
                : { target: l.href.startsWith("mailto:") ? undefined : "_blank", rel: "noreferrer" })}
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
