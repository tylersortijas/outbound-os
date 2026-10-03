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

const SCENES = [
  {
    kicker: "Termination",
    line: "The way out.",
    q: "Can the customer terminate for convenience after year one?",
    a: "Yes. After the initial term, either party may terminate for convenience on thirty days’ notice.",
    cite: "§8.2 · page 11",
    before: "This Agreement begins on the Effective Date and continues for an initial term of one year.",
    hit: "After the Initial Term, either party may terminate this Agreement for convenience upon thirty (30) days’ prior written notice.",
    after: "Fees remain due only for work performed through the termination date.",
  },
  {
    kicker: "Work product",
    line: "Who keeps the work.",
    q: "Who owns work product created during the engagement?",
    a: "The client does. On payment, the firm assigns the work product, and keeps its preexisting tools.",
    cite: "§11.4 · page 16",
    before: "Each party retains its preexisting materials and tools.",
    hit: "Upon payment in full, Consultant assigns to Client all right, title, and interest in the work product created under this Agreement.",
    after: "Consultant keeps a license to reuse general know-how that contains no client confidential information.",
  },
  {
    kicker: "Liability",
    line: "Where the risk stops.",
    q: "Is liability capped, and at what amount?",
    a: "Yes. Liability is capped at the fees paid in the twelve months before the claim.",
    cite: "§14.1 · page 19",
    before: "Neither party is liable for indirect, incidental, or consequential damages.",
    hit: "Each party’s total liability will not exceed the fees paid under this Agreement in the twelve (12) months before the claim.",
    after: "The cap does not apply to a confidentiality breach or to fraud.",
  },
] as const;

type Scene = (typeof SCENES)[number];

const TICKER = ["Termination", "Work product", "Liability", "The page comes with it"];

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

function Frame({ item }: { item: Scene }) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
      <div>
        <p className="text-xs tracking-[0.2em] text-glow uppercase">{item.kicker}</p>
        <h2 className="mt-3 text-4xl leading-[0.95] font-semibold tracking-[-0.04em] md:text-6xl">{item.line}</h2>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">{item.q}</p>
      </div>
      <figure className="glass rounded-[1.5rem] p-5 text-left md:p-6">
        <figcaption className="flex items-center justify-between text-[11px] tracking-wide text-muted uppercase">
          <span>MSA-04</span>
          <span>{item.cite}</span>
        </figcaption>
        <div className="mt-5 space-y-3 text-sm leading-relaxed">
          <p className="text-ink/40">{item.before}</p>
          <p className="cite-hit rounded-r-lg py-2 pr-2 pl-3 text-ink">{item.hit}</p>
          <p className="text-ink/40">{item.after}</p>
        </div>
        <p className="mt-5 border-t border-line pt-4 text-base leading-relaxed">{item.a}</p>
        <p className="mt-3 text-[11px] text-muted">Sample. Not a client file.</p>
      </figure>
    </div>
  );
}

function ScrollShow() {
  const ref = useRef<HTMLElement>(null);
  const p = useScrub(ref);
  const scaled = Math.min(SCENES.length - 1, p * (SCENES.length - 1));
  const index = Math.round(scaled);

  const jump = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const top = el.getBoundingClientRect().top + window.scrollY + (i / (SCENES.length - 1)) * total;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <section className="md:hidden" aria-label="Termination, work product, and liability">
        {SCENES.map((item) => (
          <article key={item.kicker} className="snap-scene flex min-h-[100svh] items-center px-5 py-16">
            <Frame item={item} />
          </article>
        ))}
      </section>

      <section ref={ref} className="relative hidden h-[220vh] md:block" aria-label="Termination, work product, and liability">
        <div className="sticky top-14 flex h-[calc(100svh-3.5rem)] items-center">
          <div className="mx-auto w-full max-w-6xl px-8">
            <div className="mb-8 flex items-center gap-6">
              <div className="flex gap-2">
                {SCENES.map((s, i) => (
                  <button
                    key={s.kicker}
                    type="button"
                    onClick={() => jump(i)}
                    className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                      i === index ? "border-ink/30 bg-ink text-canvas" : "border-line text-muted hover:text-ink"
                    }`}
                  >
                    {s.kicker}
                  </button>
                ))}
              </div>
              <div className="h-px flex-1 bg-line">
                <div className="h-px origin-left bg-ink" style={{ transform: `scaleX(${p})` }} />
              </div>
            </div>
            <div className="grid">
              {SCENES.map((item, i) => {
                const opacity = Math.max(0, 1 - Math.abs(scaled - i) * 1.35);
                return (
                  <div
                    key={item.kicker}
                    className="col-start-1 row-start-1"
                    style={{ opacity, visibility: opacity < 0.05 ? "hidden" : "visible" }}
                    aria-hidden={i !== index}
                  >
                    <Frame item={item} />
                  </div>
                );
              })}
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
