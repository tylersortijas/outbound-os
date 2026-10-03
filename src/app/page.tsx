const CALENDLY = "https://calendly.com/francisco-r-outboundos/30min";
const LINKEDIN = "https://www.linkedin.com/in/franciscoroncalli/";

function BookButton({ className = "inline-flex" }: { className?: string }) {
  return (
    <a
      href={CALENDLY}
      target="_blank"
      rel="noreferrer"
      className={`min-h-12 items-center justify-center bg-copper px-6 text-sm font-semibold text-paper transition-colors duration-200 hover:bg-ink ${className}`}
    >
      Book a 30-minute call
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-20 border-b border-line bg-paper">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <p className="font-serif text-xl font-semibold">OutboundOS</p>
          <BookButton className="hidden md:inline-flex" />
        </div>
      </header>

      <main className="pb-24 md:pb-0">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-sm font-medium text-copper">For firms of 50 to 200 attorneys</p>
            <h1 className="mt-4 font-serif text-5xl leading-tight font-semibold md:text-6xl">
              The citation comes with the answer.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed">
              A lawyer asks in plain English and gets an answer from your own contracts and case
              files, with the passage it used, so they stop hunting folders.
            </p>
            <div className="mt-8">
              <BookButton className="inline-flex w-full sm:w-auto" />
              <p className="mt-3 text-sm text-muted">
                Or start with a $200 audit of 5 to 10 documents. Credited if you proceed.
              </p>
            </div>
          </div>

          <figure className="border border-line bg-paper p-6 shadow-lift md:p-8">
            <figcaption className="text-xs font-medium tracking-wide text-muted">
              Sample answer. Not a client file.
            </figcaption>
            <p className="mt-5 font-serif text-2xl leading-snug">
              Can the customer terminate for convenience after year one?
            </p>
            <p className="mt-4 leading-relaxed">
              Yes. After the initial term, either party may terminate for convenience on thirty
              days’ notice. Fees are due only for work performed through the termination date.
            </p>
            <blockquote className="mt-6 border-l-2 border-copper bg-wash px-4 py-3">
              <p className="text-sm leading-relaxed">
                “After the Initial Term, either party may terminate this Agreement for convenience
                upon thirty (30) days’ prior written notice.”
              </p>
              <p className="mt-3 text-xs text-muted">Master services agreement · §8.2 · page 11</p>
            </blockquote>
          </figure>
        </section>

        <section className="bg-ink text-paper" aria-labelledby="proof-heading">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2 id="proof-heading" className="font-serif text-3xl font-semibold md:text-4xl">
                A real deployment, not a demo.
              </h2>
              <p className="text-sm text-wash">After about 1,100 documents were ingested.</p>
            </div>
            <dl className="mt-10 grid gap-10 sm:grid-cols-2">
              <div className="border-t border-rule pt-6">
                <dt className="text-sm text-wash">Client benchmark, correct</dt>
                <dd className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1 font-serif text-5xl font-semibold tabular-nums md:text-6xl">
                  <span className="text-wash">5/14</span>
                  <span className="sr-only">to</span>
                  <span className="text-2xl text-wash" aria-hidden>
                    →
                  </span>
                  <span>14/14</span>
                </dd>
              </div>
              <div className="border-t border-rule pt-6">
                <dt className="text-sm text-wash">Golden set, correct</dt>
                <dd className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1 font-serif text-5xl font-semibold tabular-nums md:text-6xl">
                  <span className="text-wash">36/60</span>
                  <span className="sr-only">to</span>
                  <span className="text-2xl text-wash" aria-hidden>
                    →
                  </span>
                  <span>52/60</span>
                </dd>
              </div>
            </dl>
            <p className="mt-10 max-w-2xl text-sm leading-relaxed text-wash">
              Claude with citations, Voyage legal embeddings, hybrid search, and OCR for scanned
              PDFs.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 md:py-20" aria-labelledby="how-heading">
          <h2 id="how-heading" className="font-serif text-3xl font-semibold md:text-4xl">
            How an answer is cited
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["1", "The lawyer asks in plain English."],
              ["2", "The assistant searches that firm’s contracts and case files, not the open web."],
              ["3", "The answer comes back with the document and the passage it used."],
            ].map(([n, text]) => (
              <li key={n} className="border border-line bg-wash p-6">
                <span className="font-serif text-3xl font-semibold text-copper tabular-nums">{n}</span>
                <p className="mt-4 leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-line" aria-labelledby="who-heading">
          <div className="mx-auto grid max-w-6xl md:grid-cols-2">
            <div className="px-5 py-14 md:py-20 md:pr-12">
              <h2 id="who-heading" className="font-serif text-3xl font-semibold">
                Who it is for
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed">
                A partner or practice leader at a mid-market California firm, about 50 to 200
                attorneys, whose people already have the document and still lose the hour finding
                it.
              </p>
            </div>
            <div className="border-t border-line bg-wash px-5 py-14 md:border-t-0 md:border-l md:py-20 md:pl-12">
              <h2 className="font-serif text-3xl font-semibold">Who it is not for</h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
                Not an AI receptionist. Not a chatbot that answers from the open web. If that is
                the job, this is the wrong system.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-wash" aria-labelledby="audit-heading">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
            <div>
              <p className="font-serif text-6xl font-semibold tabular-nums">$200</p>
              <h2 id="audit-heading" className="mt-2 font-serif text-3xl font-semibold">
                Accuracy audit
              </h2>
              <ul className="mt-6 space-y-3 text-base leading-relaxed">
                <li>Send 5 to 10 of your documents.</li>
                <li>Get a written report on how accurate the assistant is on them.</li>
                <li>The $200 is credited toward the build if you proceed.</li>
              </ul>
              <p className="mt-6 text-sm text-muted">
                The package starts at an $8,000 build plus $3,500 a month.
              </p>
            </div>
            <div className="border border-line bg-paper p-6 shadow-lift md:p-8">
              <p className="font-serif text-2xl leading-snug">
                See whether your documents clear the same bar.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Thirty minutes. No software tour. If the volume is too thin, you will hear that.
              </p>
              <BookButton className="mt-8 inline-flex w-full" />
              <address className="mt-8 border-t border-line pt-6 text-sm leading-relaxed not-italic">
                <span className="block font-semibold">Francisco Roncalli</span>
                <span className="block">OutboundOS Consulting LLC</span>
                <a className="underline decoration-line underline-offset-4" href="mailto:francisco.r@outboundos.net">
                  francisco.r@outboundos.net
                </a>
                <span className="block">
                  <a className="underline decoration-line underline-offset-4" href="tel:+18189380993">
                    (818) 938-0993
                  </a>
                </span>
                <span className="block text-muted">Los Angeles</span>
                <a
                  className="underline decoration-line underline-offset-4"
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

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-paper p-3 md:hidden">
        <BookButton className="inline-flex w-full" />
      </div>
    </div>
  );
}
