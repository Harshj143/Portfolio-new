"use client";

import { useEffect, type ReactNode } from "react";

/**
 * Drives the declassifier lens.
 *
 * Writes pointer position to :root as page coordinates (--px/--py) once per
 * animation frame, and each redaction's page offset (--ex/--ey) on layout.
 * The mask itself is pure CSS, so moving the pointer costs one style write
 * per frame no matter how many redactions are on the page.
 */
export function RedactionField({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(hover: none)").matches;

    root.classList.add("redact-on");

    const revealEverything = () => {
      document.querySelectorAll(".redact").forEach((n) => n.classList.add("revealed"));
    };

    // Keyboard-only visitors never generate a pointer position, so the first
    // Tab press declassifies the whole document rather than stranding them.
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        revealEverything();
        window.removeEventListener("keydown", onKey);
      }
    };
    window.addEventListener("keydown", onKey);

    let nodes: HTMLElement[] = [];
    let boxes: { el: HTMLElement; x: number; y: number; w: number; h: number }[] = [];

    const measure = () => {
      nodes = Array.from(document.querySelectorAll<HTMLElement>(".redact"));
      const sx = window.scrollX;
      const sy = window.scrollY;
      boxes = nodes.map((el) => {
        const r = el.getBoundingClientRect();
        const x = r.left + sx;
        const y = r.top + sy;
        el.style.setProperty("--ex", String(x));
        el.style.setProperty("--ey", String(y));
        return { el, x, y, w: r.width, h: r.height };
      });
    };

    // Touch and reduced-motion visitors never get a pointer: declassify on sight.
    if (reduced || coarse) {
      measure();
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("revealed");
              io.unobserve(e.target);
            }
          });
        },
        { rootMargin: "-12% 0px -12% 0px" }
      );
      nodes.forEach((n) => io.observe(n));
      return () => {
        io.disconnect();
        window.removeEventListener("keydown", onKey);
      };
    }

    let cx = -9999;
    let cy = -9999;
    let queued = false;

    const paint = () => {
      queued = false;
      const px = cx + window.scrollX;
      const py = cy + window.scrollY;
      root.style.setProperty("--px", String(px));
      root.style.setProperty("--py", String(py));

      // Permanent unlock: anything the lens actually crosses stays open.
      for (let i = 0; i < boxes.length; i++) {
        const b = boxes[i];
        if (b.el.classList.contains("revealed")) continue;
        const nx = Math.max(b.x, Math.min(px, b.x + b.w));
        const ny = Math.max(b.y, Math.min(py, b.y + b.h));
        const dx = px - nx;
        const dy = py - ny;
        if (dx * dx + dy * dy < 52 * 52) b.el.classList.add("revealed");
      }
    };

    const schedule = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(paint);
      }
    };

    const onMove = (e: PointerEvent) => {
      cx = e.clientX;
      cy = e.clientY;
      schedule();
    };

    let reflow: number | undefined;
    const onResize = () => {
      window.clearTimeout(reflow);
      reflow = window.setTimeout(measure, 120);
    };

    measure();
    // Fonts land after first paint and shift every box under them.
    document.fonts?.ready.then(measure).catch(() => {});

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(reflow);
    };
  }, []);

  return <>{children}</>;
}

/** A blacked-out span the lens can wipe away. */
export function Redacted({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`redact ${className}`}>
      <span className="txt">{children}</span>
      <span className="bar" aria-hidden="true" />
    </span>
  );
}
