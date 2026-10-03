"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";

const CALENDLY = "https://calendly.com/francisco-r-outboundos/30min";
const LINKEDIN = "https://www.linkedin.com/in/franciscoroncalli/";

function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path
        d="M44 16H24a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M38 32h16" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
    </svg>
  );
}

function BookButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={CALENDLY}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-canvas transition-transform duration-200 hover:scale-[1.03] ${className}`}
    >
      Book a 30-minute call
    </a>
  );
}

function Score({
  from,
  to,
  den,
  label,
}: {
  from: number;
  to: number;
  den: number;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(from);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setValue(to);
          return;
        }
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / 1200);
          const eased = 1 - (1 - p) ** 3;
          setValue(Math.round(from + (to - from) * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [from, to]);

  return (
    <div ref={ref}>
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-4 flex flex-wrap items-baseline gap-x-4 font-sans text-5xl font-semibold tracking-tight tabular-nums md:text-7xl">
        <span className="text-ink/35">
          {from}/{den}
        </span>
        <span className="sr-only">to</span>
        <span className="text-2xl text-ink/30" aria-hidden>
          →
        </span>
        <span>
          {value}/{den}
        </span>
      </p>
    </div>
  );
}

function ProductCard() {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.transform = `rotateX(${(py - 0.5) * -8}deg) rotateY(${(px - 0.5) * 10}deg)`;
    el.style.setProperty("--sx", `${px * 100}%`);
    el.style.setProperty("--sy", `${py * 100}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className="stage float relative mx-auto mt-16 max-w-xl">
      <div className="halo absolute -inset-16 -z-10" aria-hidden />
      <figure
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="glass relative overflow-hidden rounded-3xl p-7 text-left transition-transform duration-200 ease-out will-change-transform md:p-9"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="glass-sheen pointer-events-none absolute inset-0" aria-hidden />
        <figcaption className="relative text-xs text-muted">Sample answer. Not a client file.</figcaption>
        <p className="relative mt-6 font-serif text-2xl leading-snug md:text-3xl">
          Can the customer terminate for convenience after year one?
        </p>
        <p className="relative mt-4 leading-relaxed text-ink/80">
          Yes. After the initial term, either party may terminate for convenience on thirty days’
          notice. Fees are due only for work performed through the termination date.
        </p>
        <blockquote className="relative mt-6 border-l border-glow/80 pl-4">
          <p className="font-serif text-base leading-relaxed text-ink/90">
            “After the Initial Term, either party may terminate this Agreement for convenience upon
            thirty (30) days’ prior written notice.”
          </p>
          <p className="mt-3 text-xs text-muted">Master services agreement · §8.2 · page 11</p>
        </blockquote>
      </figure>
    </div>
  );
}

export default function Home() {
  const bar = useRef<HTMLDivElement>(null);
  const hero = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = bar.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      el.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHeroMove = (e: MouseEvent<HTMLElement>) => {
    const el = hero.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="grain" aria-hidden />
      <div
        ref={bar}
        className="fixed inset-x-0 top-0 z-40 h-px origin-left bg-ink"
        style={{ transform: "scaleX(0)" }}
        aria-hidden
      />

      <header className="sticky top-0 z-30 border-b border-line bg-canvas/55 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
          <a href="/" className="flex items-center gap-2.5 text-ink">
            <Mark className="size-7" />
            <span className="text-sm font-semibold tracking-tight">OutboundOS</span>
          </a>
          <BookButton className="hidden min-h-10 px-5 md:inline-flex" />
        </div>
      </header>

      <main className="pb-24 md:pb-0">
        <section
          ref={hero}
          onMouseMove={onHeroMove}
          className="relative overflow-hidden px-5 pt-20 pb-8 text-center md:pt-28"
          style={{
            background:
              "radial-gradient(640px circle at var(--mx, 50%) var(--my, 20%), rgba(255,255,255,0.07), transparent 42%)",
          }}
        >
          <div className="aurora" aria-hidden>
            <div className="aurora-a -top-40 left-1/2 -translate-x-[70%]" />
            <div className="aurora-b top-10 left-1/2 -translate-x-[-10%]" />
          </div>
          <div className="relative mx-auto max-w-4xl">
            <p className="text-sm text-muted">For firms of 50 to 200 attorneys</p>
            <h1 className="display mx-auto mt-5 max-w-4xl text-5xl leading-[0.96] font-semibold tracking-[-0.045em] md:text-7xl">
              The citation comes with the answer.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              A lawyer asks in plain English and gets an answer from your own contracts and case
              files, with the passage it used, so they stop hunting folders.
            </p>
            <div className="mt-9">
              <BookButton />
              <p className="mt-4 text-sm text-muted">
                Or start with a $200 audit of 5 to 10 documents. Credited if you proceed.
              </p>
            </div>
            <ProductCard />
          </div>
        </section>

        <section className="relative overflow-hidden px-5 py-24 md:py-32" aria-labelledby="proof-heading">
          <div className="orbit absolute top-1/2 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2" aria-hidden />
          <div className="relative mx-auto max-w-6xl">
            <div className="rise max-w-xl">
              <h2 id="proof-heading" className="text-4xl font-semibold tracking-tight md:text-5xl">
                A real deployment, not a demo.
              </h2>
              <p className="mt-3 text-sm text-muted">After about 1,100 documents were ingested.</p>
            </div>
            <div className="rise mt-16 grid gap-14 md:grid-cols-2">
              <Score from={5} to={14} den={14} label="Client benchmark, correct" />
              <Score from={36} to={52} den={60} label="Golden set, correct" />
            </div>
            <p className="rise mt-14 max-w-xl text-sm leading-relaxed text-muted">
              Claude with citations, Voyage legal embeddings, hybrid search, and OCR for scanned
              PDFs.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-8 md:py-16" aria-labelledby="how-heading">
          <h2 id="how-heading" className="rise text-4xl font-semibold tracking-tight md:text-5xl">
            How an answer is cited
          </h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["01", "The lawyer asks in plain English."],
              ["02", "The assistant searches that firm’s contracts and case files, not the open web."],
              ["03", "The answer comes back with the document and the passage it used."],
            ].map(([n, text]) => (
              <li key={n} className="rise glass rounded-3xl p-6">
                <span className="text-sm text-glow tabular-nums">{n}</span>
                <p className="mt-8 text-lg leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 border-t border-line" aria-labelledby="who-heading">
          <div className="mx-auto grid max-w-6xl md:grid-cols-2">
            <div className="rise px-5 py-16 md:pr-16 md:pl-5">
              <h2 id="who-heading" className="text-3xl font-semibold tracking-tight">
                Who it is for
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/80">
                A partner or practice leader at a mid-market California firm, about 50 to 200
                attorneys, whose people already have the document and still lose the hour finding
                it.
              </p>
            </div>
            <div className="rise border-t border-line px-5 py-16 md:border-t-0 md:border-l md:pr-5 md:pl-16">
              <h2 className="text-3xl font-semibold tracking-tight">Who it is not for</h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
                Not an AI receptionist. Not a chatbot that answers from the open web. If that is
                the job, this is the wrong system.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-line" aria-labelledby="audit-heading">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
            <div className="rise">
              <p className="text-7xl font-semibold tracking-tight tabular-nums md:text-8xl">$200</p>
              <h2 id="audit-heading" className="mt-2 text-3xl font-semibold tracking-tight">
                Accuracy audit
              </h2>
              <ul className="mt-6 space-y-3 text-lg leading-relaxed text-ink/80">
                <li>Send 5 to 10 of your documents.</li>
                <li>Get a written report on how accurate the assistant is on them.</li>
                <li>The $200 is credited toward the build if you proceed.</li>
              </ul>
              <p className="mt-6 text-sm text-muted">
                The package starts at an $8,000 build plus $3,500 a month.
              </p>
            </div>
            <div className="rise glass rounded-3xl p-7 md:p-9">
              <p className="font-serif text-3xl leading-snug">
                See whether your documents clear the same bar.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Thirty minutes. No software tour. If the volume is too thin, you will hear that.
              </p>
              <BookButton className="mt-8 w-full" />
              <address className="mt-8 border-t border-line pt-6 text-sm leading-relaxed not-italic">
                <span className="block font-semibold">Francisco Roncalli</span>
                <span className="block text-muted">OutboundOS Consulting LLC</span>
                <a className="text-ink underline decoration-line underline-offset-4" href="mailto:francisco.r@outboundos.net">
                  francisco.r@outboundos.net
                </a>
                <span className="block">
                  <a className="text-ink underline decoration-line underline-offset-4" href="tel:+18189380993">
                    (818) 938-0993
                  </a>
                </span>
                <span className="block text-muted">Los Angeles</span>
                <a
                  className="text-ink underline decoration-line underline-offset-4"
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </address>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-canvas/70 p-3 backdrop-blur-xl md:hidden">
        <BookButton className="w-full" />
      </div>
    </div>
  );
}
