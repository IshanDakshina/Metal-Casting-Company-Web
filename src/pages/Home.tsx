import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <img
          src="/images/hero_img.png"
          alt="Placeholder photo of a foundry floor with molten metal casting in progress"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B121C]/90 via-[#0B121C]/70 to-[#0B121C]/45" />

        <div className="relative z-10 section-inner px-6 sm:px-8 py-24">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur-sm">
              Sand Casting &amp; Metal Manufacturing
            </span>
            <h1 className="mt-6 max-w-2xl text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] text-white">
              Shashiki Metal Industries — Reliable Sand Casting &amp; Metal Manufacturing in Sri Lanka
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/85">
              From manhole covers and gym weight plates to machine parts 
              and custom castings, we make quality metal products built for strength, durability, and everyday use.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 hover:bg-brand-dark transition-colors"
              >
                View Our Products
              </Link>
              <Link
                to="/contact"
                className="rounded-lg bg-white/95 px-6 py-3.5 text-sm font-semibold text-ink hover:bg-white transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section bg-surface dark:bg-navy">
        <div className="section-inner">
          <Reveal className="max-w-2xl">
            <span className="eyebrow-tag">What We Make</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-ink dark:text-white">
              Cast products for industrial, municipal and custom needs
            </h2>
            <p className="mt-4 text-ink-muted leading-relaxed">
              Every piece is cast in-house and finished to a consistent standard, whether it is a
              standard product line or a one-off part built from your drawings.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <Reveal key={product.slug} delay={i * 0.06}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="section bg-surface-soft dark:bg-navy-soft">
        <div className="section-inner grid gap-10 lg:grid-cols-2 items-center">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop"
              alt="Placeholder photo of the Shashiki Metal Industries factory floor"
              className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow-tag">About Us</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-ink dark:text-white">
              A local foundry built on consistent, dependable casting
            </h2>
            <p className="mt-4 text-ink-muted leading-relaxed">
              Shashiki Metal Industries has grown into a trusted medium-scale sand casting and
              metal manufacturing operation, supplying standard cast products alongside custom
              work built to individual customer requirements.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-brand dark:text-brand-light hover:underline"
            >
              Learn more about us
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Trust strip */}
      <section className="section bg-brand dark:bg-navy border-y border-brand-dark/40 dark:border-white/10">
        <div className="section-inner grid grid-cols-2 sm:grid-cols-4 gap-8 text-center text-white">
          {[
            { end: 20, suffix: '+', label: 'Years in Operation' },
            { end: 850, suffix: '+', label: 'Projects Completed' },
            { end: 6, suffix: '', label: 'Core Product Lines' },
            { end: 100, suffix: '%', label: 'Custom Orders Welcome' },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <p className="text-3xl sm:text-4xl font-bold">
                <CountUp end={stat.end} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-white/80">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section bg-surface dark:bg-navy">
        <div className="section-inner rounded-2xl bg-surface-soft dark:bg-navy-soft border border-ink-muted/10 dark:border-white/10 px-6 sm:px-12 py-14 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink dark:text-white">
              Need a Custom Casting Solution?
            </h2>
            <p className="mt-3 text-ink-muted max-w-xl mx-auto leading-relaxed">
              Send us your drawings, dimensions or a sample part and we will get back to you with
              a clear quote.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex rounded-lg bg-brand px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
            >
              Contact Us Today
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
