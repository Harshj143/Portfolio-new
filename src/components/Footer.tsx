import { SUBJECT } from "@/lib/content";

export function Footer() {
  return (
    <footer className="pt-10 pb-12 border-t border-rule">
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 mono text-ink-3">
        <span>
          &copy; {new Date().getFullYear()} {SUBJECT.first} {SUBJECT.last}
        </span>
        <span>File {SUBJECT.fileNo} &mdash; end of document</span>
        <a href="#top" className="hover:text-ink transition-colors duration-300">
          Back to top &uarr;
        </a>
      </div>
    </footer>
  );
}
