"use client";

import { useEffect, useRef, useState, type MouseEvent, type RefObject } from "react";

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

const BEATS = [
  {
    kicker: "01  Ask",
    word: "Ask.",
    line: "In plain English.",
    body: "A lawyer types the question the way they would ask an associate. No query language. No folder to remember.",
    kind: "ask",
  },
  {
    kicker: "02  The file",
    word: "The file.",
    line: "Not the open web.",
    body: "It searches that firm’s contracts and case files. If the answer is not in the file, it does not borrow one from somewhere else.",
    kind: "file",
  },
  {
    kicker: "03  The page",
    word: "The page.",
    line: "The answer does not arrive alone.",
    body: "It comes back with the document and the lines it used. Cited, or it doesn’t count.",
    kind: "page",
  },
] as const;

type Beat = (typeof BEATS)[number];

const TICKER = ["Ask", "The file", "The page", "Cited, or it doesn’t count"];

function useScrub(ref: RefObject<HTMLElement | null>) {
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const measure = () => {
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), Math.max(total, 0));
      const next = total > 0 ? scrolled / total : 0;
      setP((prev) => (Math.abs(prev - next) < 0.008 ? prev : next));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);

  return p;
}

function Stage({ kind }: { kind: Beat["kind"] }) {
  if (kind === "ask") {
    return (
      <div className="glass mt-10 flex max-w-xl items-center gap-3 rounded-full px-5 py-4">
        <span className="size-1.5 shrink-0 rounded-full bg-glow" />
        <span className="text-lg">What does our file say?</span>
        <span className="caret ml-1" />
      </div>
    );
  }
  if (kind === "file") {
    return (
      <div className="mt-10 grid max-w-xl grid-cols-2 gap-3">
        <div className="flex items-end rounded-2xl border border-line p-5 text-muted">
          <p>
            <span className="line-through decoration-white/30">The open web</span>
            <span className="mt-2 block text-sm no-underline">Stays out.</span>
          </p>
        </div>
        <div className="glass relative overflow-hidden rounded-2xl p-5">
          <div className="sheet-scan" aria-hidden />
          <p className="relative">Your files</p>
          <p className="relative mt-2 text-sm text-muted">Contracts and case files.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="mt-10 grid max-w-xl grid-cols-[1fr_auto] gap-3">
      <div className="glass rounded-2xl p-5">
        <p className="text-xs tracking-wide text-muted uppercase">The answer</p>
        <p className="mt-3 text-lg leading-snug">In the file. With the lines it used.</p>
      </div>
      <div className="cite-hit flex w-24 flex-col justify-center rounded-2xl px-4">
        <p className="text-[11px] tracking-wide text-glow uppercase">Page</p>
        <p className="text-4xl font-semibold tracking-tight">11</p>
      </div>
    </div>
  );
}

function BeatView({ beat }: { beat: Beat }) {
  return (
    <div>
      <p className="text-xs tracking-[0.22em] text-glow uppercase">{beat.kicker}</p>
      <h2 className="mt-4 text-6xl leading-[0.9] font-semibold tracking-[-0.05em] md:text-8xl">{beat.word}</h2>
      <p className="mt-5 text-xl md:text-2xl">{beat.line}</p>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-muted md:text-lg">{beat.body}</p>
      <Stage kind={beat.kind} />
    </div>
  );
}

function ScrollShow() {
  const ref = useRef<HTMLElement>(null);
  const p = useScrub(ref);
  const scaled = Math.min(0.999, p) * BEATS.length;
  const index = Math.floor(scaled);
  const beat = BEATS[index];

  const jump = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const top = el.getBoundingClientRect().top + window.scrollY + (i / BEATS.length) * total + 8;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <section className="md:hidden" aria-label="Ask, the file, the page">
        {BEATS.map((item) => (
          <article key={item.word} className="snap-scene flex min-h-[100svh] items-center px-5 py-20">
            <BeatView beat={item} />
          </article>
        ))}
      </section>

      <section ref={ref} className="relative hidden h-[240vh] md:block" aria-label="Ask, the file, the page">
        <div className="sticky top-14 flex h-[calc(100svh-3.5rem)] items-center overflow-hidden">
          <div className="aurora" aria-hidden>
            <div className="aurora-a -top-24 left-1/3" />
            <div className="aurora-b top-1/3 right-0" />
          </div>
          <div className="relative mx-auto w-full max-w-6xl px-10">
            <div className="mb-10 flex items-center gap-6">
              {BEATS.map((item, i) => (
                <button
                  key={item.word}
                  type="button"
                  onClick={() => jump(i)}
                  className={`text-sm transition-colors ${i === index ? "text-ink" : "text-muted hover:text-ink"}`}
                >
                  {item.word}
                </button>
              ))}
              <div className="h-px flex-1 bg-line">
                <div className="h-px origin-left bg-ink" style={{ transform: `scaleX(${p})` }} />
              </div>
            </div>
            <div key={beat.word} className="answer-in">
              <BeatView beat={beat} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Home() {
  const bar = useRef<HTMLDivElement>(null);
  const hero = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = bar.current;
      if (el) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        el.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      }
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
          <div data-hero-copy className="relative mx-auto max-w-4xl">
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
            <div className="mt-14 flex flex-col items-center gap-3 text-xs tracking-[0.22em] text-muted uppercase">
              <span>Scroll the file</span>
              <span className="scroll-stem" aria-hidden />
            </div>
          </div>
        </section>

        <ScrollShow />

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

        <section className="border-t border-line" aria-labelledby="builder-heading">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <p className="text-xs tracking-[0.2em] text-glow uppercase">Francisco Roncalli</p>
            <h2 id="builder-heading" className="rise mt-4 max-w-3xl text-4xl leading-[0.95] font-semibold tracking-[-0.04em] md:text-6xl">
              Working software. Not a deck.
            </h2>
            <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted">
              He takes a messy business problem and ships the system. One person, so a company gets a senior builder without hiring a team.
            </p>
            <ol className="rise mt-14 grid overflow-hidden rounded-3xl border border-line md:grid-cols-3">
              {[
                [
                  "Ships it",
                  "Tech lead on a production system. The benchmark above is that work, after about 1,100 documents. Not a prototype that falls apart in use.",
                ],
                [
                  "Knows if it holds",
                  "Lead developer for Samsung, the Golden State Warriors, and Delta Air Lines. Mentored by the lead software engineer for Amazon Prime Video. He picks the tools, builds the thing, and can tell whether it works, scales, and is actually good.",
                ],
                [
                  "No team to hire",
                  "That work happens as one person. A business does not stand up a department to get a senior builder.",
                ],
              ].map(([title, body], i) => (
                <li key={title} className={`p-7 md:p-8 ${i > 0 ? "border-t border-line md:border-t-0 md:border-l" : ""}`}>
                  <p className="text-sm text-glow">{title}</p>
                  <p className="mt-4 text-base leading-relaxed text-ink/80">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-line" aria-labelledby="who-heading">
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
