import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

const STEPS = [
  {
    title: 'Share Your Requirements',
    description:
      'Send us your drawings, dimensions or a sample part, along with the quantity and material you need.',
  },
  {
    title: 'Receive a Quote',
    description:
      'We review your requirements and provide a clear quote covering cost, material and expected turnaround.',
  },
  {
    title: 'Production',
    description:
      'Once confirmed, we prepare the pattern, mould in sand, and cast your part in-house.',
  },
  {
    title: 'Quality Check & Delivery',
    description:
      'Each piece is checked against your specification before finishing and delivery or collection.',
  },
]

export default function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Custom Casting, Start to Finish"
        description="Beyond our standard product lines, we take on custom casting work built entirely to customer specifications — from a single replacement part to a full production run."
      />

      <section className="section bg-surface dark:bg-navy">
        <div className="section-inner">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="relative h-full rounded-xl border border-ink-muted/12 dark:border-white/10 bg-white dark:bg-navy-soft p-6 shadow-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white font-head font-bold text-lg">
                    {i + 1}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface-soft dark:bg-navy-soft">
        <div className="section-inner grid gap-10 lg:grid-cols-2 items-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink dark:text-white">
              What We Need From You
            </h2>
            <p className="mt-4 text-ink-muted leading-relaxed">
              The more detail you can share up front, the faster we can quote and cast your order.
              Helpful information includes:
            </p>
            <ul className="mt-5 space-y-3">
              {[
                'A drawing, sketch or CAD file, where available',
                'Key dimensions and tolerances',
                'A sample part, if you have one to reference',
                'Material preference and expected quantity',
                'Your target delivery date',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm sm:text-base text-ink/90 dark:text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand dark:bg-brand-light" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop"
              alt="Placeholder photo of a technical drawing alongside a cast metal part"
              className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
            />
          </Reveal>
        </div>
      </section>
    </div>
  )
}
