import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="Two decades of casting metal parts Sri Lankan industry relies on"
        description="Shashiki Metal Industries is a medium-scale sand casting and metal manufacturing business, producing standard cast products alongside custom orders built to individual specifications."
      />

      <section className="section bg-surface dark:bg-navy">
        <div className="section-inner grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-bold text-ink dark:text-white">Our Background</h2>
            <p className="mt-4 text-ink-muted leading-relaxed">
              For over 20 years, Shashiki Metal Industries has operated as a sand casting and
              metal manufacturing foundry, supplying GY plates, manhole covers, mechanical machine
              parts, metal pipes and sand casting models to customers across Sri Lanka.
            </p>
            <p className="mt-4 text-ink-muted leading-relaxed">
              We work with municipal bodies, utility contractors, machine shops and private
              customers who need dependable cast parts, whether that means a standard product off
              the line or a piece built to a drawing they bring in themselves.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-2xl font-bold text-ink dark:text-white">Our Approach to Quality</h2>
            <p className="mt-4 text-ink-muted leading-relaxed">
              Every casting passes through the same core process — pattern preparation, sand
              moulding, pouring, cooling and a quality check — regardless of order size. Consistent
              process control is what keeps our standard products uniform, batch after batch.
            </p>
            <p className="mt-4 text-ink-muted leading-relaxed">
              For custom work, we treat the customer's drawing or sample as the standard the
              finished part must meet, and we check dimensions before the piece leaves the
              workshop.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-surface-soft dark:bg-navy-soft">
        <div className="section-inner grid gap-10 lg:grid-cols-2 items-center">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22731c9c8c?q=80&w=1200&auto=format&fit=crop"
              alt="Placeholder photo of the Shashiki Metal Industries team and facility"
              className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-2xl font-bold text-ink dark:text-white">Our Facility &amp; Team</h2>
            <p className="mt-4 text-ink-muted leading-relaxed">
              Our workshop houses pattern-making, moulding, melting and finishing under one roof,
              staffed by casting and machining hands who have worked together for years. That
              continuity is part of how we keep quality consistent order to order.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-surface dark:bg-navy">
        <div className="section-inner rounded-2xl bg-brand text-white px-6 sm:px-12 py-12 sm:py-14">
          <Reveal className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold">Built Around Your Specifications</h2>
            <p className="mt-3 text-white/85 leading-relaxed">
              Beyond our standard product lines, we regularly take on custom casting work —
              non-standard sizes, replacement parts for older machinery, and one-off production
              runs. If you have a drawing, a dimension sheet or even just a sample part, we can
              quote against it.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand hover:bg-white/90 transition-colors"
            >
              Discuss Your Requirements
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
