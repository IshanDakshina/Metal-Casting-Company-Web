import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

export default function About() {
  return (
    <div>
      {/* Page Hero */}
      <PageHero
        eyebrow="About Us"
        title="Two decades of dependable metal casting"
        description="Shashiki Metal Industries is a Sri Lankan sand casting and metal manufacturing business producing standard cast products alongside custom parts built to individual requirements."
      />

      {/* Background */}
      <section className="section bg-surface dark:bg-navy">
        <div className="section-inner">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            {/* Section Label */}
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand dark:text-brand-light">
                  Our Background
                </span>

                <div className="mt-4 h-px w-12 bg-brand dark:bg-brand-light" />

                <p className="mt-5 max-w-xs text-sm leading-6 text-ink-muted">
                  Experience built through years of practical casting,
                  manufacturing and customer-focused work.
                </p>
              </div>
            </Reveal>

            {/* Content */}
            <Reveal delay={0.1}>
              <div className="space-y-5">
                <p className="text-lg leading-8 text-ink dark:text-slate-200">
                  For over <strong className="font-semibold text-ink dark:text-white">20 years</strong>,
                  Shashiki Metal Industries has operated as a sand casting and metal
                  manufacturing foundry, supplying cast components to customers across
                  Sri Lanka.
                </p>

                <p className="leading-7 text-ink-muted">
                  Our product range includes GY plates, manhole covers, mechanical machine
                  parts, metal pipes and sand casting models. Alongside these standard
                  products, we also work on parts produced to customer drawings, dimensions
                  and physical samples.
                </p>

                <p className="leading-7 text-ink-muted">
                  We work with municipal bodies, utility contractors, machine shops and
                  private customers who need practical, dependable cast parts without
                  unnecessary complexity.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Quality / Process */}
      <section className="section bg-surface-soft dark:bg-navy-soft">
        <div className="section-inner">

          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow-tag">How We Work</span>

              <h2 className="mt-4 text-3xl font-bold text-ink dark:text-white sm:text-4xl">
                A consistent process from pattern to finished casting
              </h2>

              <p className="mt-4 leading-relaxed text-ink-muted">
                Good castings start with a controlled process. Our core workflow keeps
                preparation, moulding, pouring and finishing connected from start to finish.
              </p>
            </div>
          </Reveal>

          {/* Process Steps */}
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-muted/10 bg-ink-muted/10 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-5">

            {[
              {
                number: '01',
                title: 'Pattern',
                text: 'Prepare the pattern according to the required dimensions and design.',
              },
              {
                number: '02',
                title: 'Mould',
                text: 'Form the sand mould and prepare it for the metal pour.',
              },
              {
                number: '03',
                title: 'Pour',
                text: 'Melt and pour the required metal into the prepared mould.',
              },
              {
                number: '04',
                title: 'Finish',
                text: 'Remove, clean and finish the casting for its intended application.',
              },
              {
                number: '05',
                title: 'Check',
                text: 'Inspect the finished part and verify key dimensions before delivery.',
              },
            ].map((step, i) => (
              <Reveal key={step.number} delay={i * 0.06}>
                <div className="h-full bg-white p-6 dark:bg-navy-soft sm:p-7">
                  <span className="text-xs font-bold tracking-widest text-brand dark:text-brand-light">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-base font-bold text-ink dark:text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-ink-muted">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* Facility & Team */}
      <section className="section bg-surface dark:bg-navy">
        <div className="section-inner">

          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

            {/* Image */}
            <Reveal>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22731c9c8c?q=80&w=1200&auto=format&fit=crop"
                  alt="Shashiki Metal Industries workshop and manufacturing facility"
                  className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card"
                />

                {/* Image Label */}
                <div className="absolute bottom-4 left-4 rounded-lg border border-white/20 bg-navy/85 px-4 py-3 text-white backdrop-blur-md">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-light">
                    Our Workshop
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    Casting · Moulding · Finishing
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Content */}
            <Reveal delay={0.1}>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand dark:text-brand-light">
                  Facility & Team
                </span>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-ink dark:text-white sm:text-4xl">
                  Practical manufacturing,
                  <span className="text-brand dark:text-brand-light">
                    {' '}under one roof.
                  </span>
                </h2>

                <p className="mt-5 leading-7 text-ink-muted">
                  Our workshop brings pattern-making, moulding, melting and finishing
                  together in one working environment. This helps keep the production
                  process connected and allows us to respond to both regular orders
                  and custom requirements.
                </p>

                <p className="mt-4 leading-7 text-ink-muted">
                  Our team combines practical casting and machining experience with
                  an understanding of the requirements that customers bring to each
                  project.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-4 border-t border-ink-muted/10 pt-6 dark:border-white/10">
                  <div>
                    <p className="text-2xl font-bold text-ink dark:text-white">
                      20+
                    </p>
                    <p className="mt-1 text-xs text-ink-muted">
                      Years of experience
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-ink dark:text-white">
                      Sri Lanka
                    </p>
                    <p className="mt-1 text-xs text-ink-muted">
                      Serving local customers
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </div>
  )
}