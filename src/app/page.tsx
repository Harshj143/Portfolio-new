import { RedactionField } from "@/components/Redaction";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Brief } from "@/components/Brief";
import { Record } from "@/components/Record";
import { Work } from "@/components/Work";
import { Commendations } from "@/components/Commendations";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SUBJECT, SUMMARY } from "@/lib/content";

const JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Harsh Jannawar",
  jobTitle: "Security Engineer",
  description: SUMMARY,
  url: "https://www.harshjannawar.com",
  email: `mailto:${SUBJECT.email}`,
  address: { "@type": "PostalAddress", addressLocality: "San Francisco", addressRegion: "CA", addressCountry: "US" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Washington" },
    { "@type": "CollegeOrUniversity", name: "Symbiosis Skills and Professional University" },
  ],
  sameAs: [SUBJECT.github, SUBJECT.linkedin],
  knowsAbout: ["Application Security", "AI Security", "LLM Security", "Cloud Security", "Detection Engineering", "Penetration Testing"],
};

export default function Page() {
  return (
    <RedactionField>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }}
      />
      <Nav />
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:rounded-sm"
      >
        Skip to content
      </a>

      <div id="top" className="relative z-10 [&_section]:scroll-mt-20 px-5 sm:px-8 lg:px-14 max-w-[1600px] mx-auto">
        <Hero />
        <main>
          <Brief />
          <Record />
          <Work />
          <Commendations />
          <Contact />
        </main>
        <Footer />
      </div>
    </RedactionField>
  );
}
