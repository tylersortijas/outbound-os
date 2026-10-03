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

function useScrub(ref: RefObject<HTMLElement | null>) {
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const measure = () => {
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), Math.max(total, 0));
      setP(total > 0 ? scrolled / total : 0);
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

function ScrollShow() {
  const ref = useRef<HTMLElement>(null);
  const p = useScrub(ref);
  const scaled = Math.min(0.999, p) * SCENES.length;
  const index = Math.min(SCENES.length - 1, Math.floor(scaled));
  const local = scaled - index;
  const item = SCENES[index];
  const answer = Math.min(1, Math.max(0, (local - 0.32) / 0.38));

  const jump = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const top = el.getBoundingClientRect().top + window.scrollY + (i / SCENES.length) * total + 4;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative h-[260vh] md:h-[340vh]" aria-label="A citation, scrolled">
      <div className="sticky top-14 flex h-[calc(100svh-3.5rem)] items-center">
        <div className="mx-auto w-full max-w-3xl px-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div className="flex gap-2 overflow-x-auto">
              {SCENES.map((s, i) => (
                <button
                  key={s.kicker}
                  type="button"
                  onClick={() => jump(i)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${
                    i === index ? "border-ink/30 bg-ink text-canvas" : "border-line text-muted hover:text-ink"
                  }`}
                >
                  {s.kicker}
                </button>
              ))}
            </div>
            <p className="hidden text-xs text-muted tabular-nums sm:block">{String(index + 1).padStart(2, "0")} / 03</p>
          </div>
          <div className="mb-4 h-px bg-line">
            <div className="h-px origin-left bg-ink" style={{ transform: `scaleX(${p})` }} />
          </div>
          <figure className="glass relative overflow-hidden rounded-[1.75rem] p-6 text-left md:p-8">
            <div className="halo absolute -inset-24 -z-10" aria-hidden />
            <figcaption className="text-xs text-muted">Sample. Not a client file. Scroll to read it.</figcaption>
            <p className="mt-6 font-serif text-2xl leading-snug md:text-3xl">{item.q}</p>
            <div className="mt-6 space-y-3 text-sm leading-relaxed text-ink/55">
              <p style={{ opacity: 0.35 + local * 0.4 }}>{item.before}</p>
              <p
                className="cite-hit rounded-r-xl py-2 pr-3 pl-3 text-ink"
                style={{ clipPath: `inset(0 ${(1 - Math.min(1, local / 0.55)) * 100}% 0 0)` }}
              >
                {item.hit}
              </p>
              <p style={{ opacity: Math.min(1, Math.max(0, (local - 0.45) / 0.35)) }}>{item.after}</p>
            </div>
            <div
              className="mt-6 border-t border-line pt-5"
              style={{ opacity: answer, transform: `translateY(${(1 - answer) * 14}px)` }}
            >
              <p className="text-lg leading-relaxed">{item.a}</p>
              <p className="mt-2 text-xs text-glow">Master services agreement · {item.cite}</p>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Chapters() {
  const ref = useRef<HTMLElement>(null);
  const p = useScrub(ref);
  const scaled = Math.min(0.999, p) * CHAPTERS.length;
  const step = Math.min(CHAPTERS.length - 1, Math.floor(scaled));
  const chapter = CHAPTERS[step];

  return (
    <section ref={ref} className="relative h-[220vh] md:h-[300vh]" aria-labelledby="how-heading">
      <div className="sticky top-14 flex h-[calc(100svh-3.5rem)] items-center">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto_1fr] items-center gap-8 px-5 md:gap-16">
          <div className="relative h-48 w-px bg-line md:h-64" aria-hidden>
            <div className="absolute inset-x-0 top-0 w-px bg-ink" style={{ height: `${p * 100}%` }} />
          </div>
          <div>
            <p className="text-sm text-glow tabular-nums">{chapter.n} / 03</p>
            <h2
              id="how-heading"
              className="mt-4 max-w-3xl text-4xl leading-[0.95] font-semibold tracking-[-0.045em] md:text-6xl"
              style={{ transform: `translateY(${(1 - (scaled - step)) * 18}px)` }}
            >
              {chapter.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{chapter.body}</p>
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
      if (el) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        el.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      }
      const heroEl = hero.current;
      const copy = heroEl?.querySelector<HTMLElement>("[data-hero-copy]");
      if (heroEl && copy) {
        const passed = Math.min(1, Math.max(0, -heroEl.getBoundingClientRect().top / (heroEl.offsetHeight * 0.65)));
        copy.style.transform = `translateY(${passed * 48}px)`;
        copy.style.opacity = String(1 - passed * 0.9);
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

        <Chapters />

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
