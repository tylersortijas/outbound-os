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

const SCENES = [
  {
    kicker: "Termination",
    q: "Can the customer terminate for convenience after year one?",
    a: "Yes. After the initial term, either party may terminate for convenience on thirty days’ notice.",
    cite: "§8.2 · page 11",
    before: "This Agreement begins on the Effective Date and continues for an initial term of one year.",
    hit: "After the Initial Term, either party may terminate this Agreement for convenience upon thirty (30) days’ prior written notice.",
    after: "Fees remain due only for work performed through the termination date.",
  },
  {
    kicker: "Work product",
    q: "Who owns work product created during the engagement?",
    a: "The client does. On payment, the firm assigns the work product, and keeps its preexisting tools.",
    cite: "§11.4 · page 16",
    before: "Each party retains its preexisting materials and tools.",
    hit: "Upon payment in full, Consultant assigns to Client all right, title, and interest in the work product created under this Agreement.",
    after: "Consultant keeps a license to reuse general know-how that contains no client confidential information.",
  },
  {
    kicker: "Liability",
    q: "Is liability capped, and at what amount?",
    a: "Yes. Liability is capped at the fees paid in the twelve months before the claim.",
    cite: "§14.1 · page 19",
    before: "Neither party is liable for indirect, incidental, or consequential damages.",
    hit: "Each party’s total liability will not exceed the fees paid under this Agreement in the twelve (12) months before the claim.",
    after: "The cap does not apply to a confidentiality breach or to fraud.",
  },
] as const;

const CHAPTERS = [
  {
    n: "01",
    title: "Ask in plain English.",
    body: "A lawyer types the question the way they would ask an associate. No query language. No folder path.",
  },
  {
    n: "02",
    title: "Your files. Not the web.",
    body: "The assistant searches that firm’s contracts and case files. If it is not in the file, it does not answer from the open web.",
  },
  {
    n: "03",
    title: "The passage comes back.",
    body: "The answer arrives with the document, the section, and the lines it used. Cited, or it doesn’t count.",
  },
] as const;

const TICKER = [
  "Cited, or it doesn’t count",
  "Plain English in",
  "Page number out",
  "Your files, not the web",
  "Accuracy you can audit",
  "A real deployment, not a demo",
];

function Theater() {
  const [scene, setScene] = useState(0);
  const [paused, setPaused] = useState(false);
  const item = SCENES[scene];

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setScene((s) => (s + 1) % SCENES.length), 5600);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative mx-auto mt-16 max-w-3xl text-left"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="halo absolute -inset-24 -z-10" aria-hidden />
      <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
        {SCENES.map((s, i) => (
          <button
            key={s.kicker}
            type="button"
            onClick={() => {
              setScene(i);
              setPaused(true);
            }}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${
              i === scene ? "border-ink/30 bg-ink text-canvas" : "border-line text-muted hover:text-ink"
            }`}
          >
            {s.kicker}
          </button>
        ))}
      </div>
      <div className="stage">
        <figure className="glass relative overflow-hidden rounded-[1.75rem] p-6 md:p-8" style={{ transformStyle: "preserve-3d" }}>
          <figcaption className="flex items-center justify-between text-xs text-muted">
            <span>Sample. Not a client file.</span>
            <span className="tabular-nums">{paused ? "Paused" : "Playing"}</span>
          </figcaption>
          <p key={item.q} className="answer-in mt-6 font-serif text-2xl leading-snug md:text-3xl">
            {item.q}
          </p>
          <div key={item.cite} className="mt-6 space-y-3 text-sm leading-relaxed text-ink/55">
            <p>{item.before}</p>
            <p className="cite-hit hit-in rounded-r-xl py-2 pr-3 pl-3 text-ink">{item.hit}</p>
            <p>{item.after}</p>
          </div>
          <div key={item.a} className="answer-in mt-6 border-t border-line pt-5">
            <p className="text-lg leading-relaxed">{item.a}</p>
            <p className="mt-2 text-xs text-glow">Master services agreement · {item.cite}</p>
          </div>
        </figure>
      </div>
    </div>
  );
}

function Chapters() {
  const ref = useRef<HTMLElement>(null);
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), Math.max(total, 0));
      const p = total > 0 ? scrolled / total : 0;
      setProgress(p);
      setStep(p < 0.34 ? 0 : p < 0.67 ? 1 : 2);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const chapter = CHAPTERS[step];

  return (
    <section ref={ref} className="relative hidden h-[280vh] md:block" aria-labelledby="how-heading">
      <div className="sticky top-0 flex h-screen items-center">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto_1fr] items-center gap-16 px-5">
          <div className="relative h-64 w-px bg-line" aria-hidden>
            <div className="absolute inset-x-0 top-0 w-px bg-ink" style={{ height: `${progress * 100}%` }} />
          </div>
          <div>
            <p className="text-sm text-glow tabular-nums">{chapter.n} / 03</p>
            <h2 id="how-heading" key={chapter.n} className="answer-in mt-4 max-w-3xl text-6xl leading-[0.95] font-semibold tracking-[-0.045em]">
              {chapter.title}
            </h2>
            <p key={chapter.body} className="answer-in mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {chapter.body}
            </p>
            <ol className="sr-only">
              {CHAPTERS.map((c) => (
                <li key={c.n}>
                  {c.title} {c.body}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
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
    <div className="min-h-screen overflow-x-hidden bg-canvas text-ink">
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
            <p className="text-sm text-glow">Cited, or it doesn’t count.</p>
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
            <Theater />
          </div>
        </section>

        <div className="overflow-hidden border-y border-line py-4" aria-hidden>
          <div className="marquee-track text-sm tracking-tight text-muted">
            {[...TICKER, ...TICKER].map((line, i) => (
              <span key={i} className="flex items-center gap-10">
                {line}
                <span className="text-glow">·</span>
              </span>
            ))}
          </div>
        </div>

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

        <Chapters />

        <section className="mx-auto max-w-6xl px-5 py-16 md:hidden" aria-labelledby="how-mobile">
          <h2 id="how-mobile" className="text-4xl font-semibold tracking-tight">
            How an answer is cited
          </h2>
          <ol className="mt-8 space-y-4">
            {CHAPTERS.map((c) => (
              <li key={c.n} className="glass rounded-3xl p-6">
                <span className="text-sm text-glow tabular-nums">{c.n}</span>
                <p className="mt-4 text-2xl font-semibold tracking-tight">{c.title}</p>
                <p className="mt-3 leading-relaxed text-muted">{c.body}</p>
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
