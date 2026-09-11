import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Products() {
  return (
    <div>
      {/* Page Hero */}
      <PageHero
        eyebrow="Products"
        title="Cast products built for real-world use"
        description="From utility covers and weight plates to mechanical components and custom castings, we manufacture practical metal products for industrial, commercial and everyday applications."
      />

      {/* Product Catalogue */}
      <section className="section bg-surface dark:bg-navy">
        <div className="section-inner">

          {/* Section Intro */}
          <Reveal>
            <div className="flex flex-col gap-4 border-b border-ink-muted/10 pb-8 dark:border-white/10 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand dark:text-brand-light">
                  Product Range
                </span>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink dark:text-white sm:text-4xl">
                  Our core cast-metal products
                </h2>

                <p className="mt-4 leading-7 text-ink-muted">
                  Explore our standard product lines. Each category can also be
                  adapted to specific dimensions, designs and application
                  requirements where required.
                </p>
              </div>

              <div className="shrink-0 text-sm text-ink-muted">
                <span className="font-semibold text-ink dark:text-white">
                  {products.length}
                </span>{' '}
                product categories
              </div>
            </div>
          </Reveal>

          {/* Products */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <Reveal key={product.slug} delay={i * 0.06}>
                <ProductCard product={product} detailed />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Manufacturing */}
      <section className="section bg-surface-soft dark:bg-navy-soft">
        <div className="section-inner">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-ink-muted/10 bg-navy dark:border-white/10 dark:bg-[#0A1018]">

              {/* Technical line detail */}
              <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-2/5 overflow-hidden sm:block">
                <div className="absolute right-[-120px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-white/10" />
                <div className="absolute right-[-70px] top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full border border-white/10" />
                <div className="absolute right-[-20px] top-1/2 h-[220px] w-[220px] -translate-y-1/2 rounded-full border border-white/10" />
              </div>

              <div className="relative z-10 grid gap-10 px-7 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1fr_auto] lg:items-center lg:px-14 lg:py-14">

                {/* Text */}
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-brand-light" />

                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light">
                      Custom Manufacturing
                    </span>
                  </div>

                  <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                    Need something outside our
                    <span className="text-brand-light"> standard range?</span>
                  </h2>

                  <p className="mt-4 leading-7 text-slate-400">
                    We also produce custom castings for replacement parts,
                    non-standard components and one-off or small production
                    runs. Share your drawing, dimensions or sample part with
                    us and we can discuss the requirements.
                  </p>

                  {/* Requirement indicators */}
                  <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-5">
                    {[
                      'Technical drawings',
                      'Dimensions',
                      'Sample parts',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-xs font-medium text-slate-400"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="lg:pl-8">
                  <Link
                    to="/contact"
                    className="group inline-flex w-full items-center justify-between gap-8 rounded-xl bg-brand px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-light hover:shadow-xl sm:w-auto"
                  >
                    <span>Request a Custom Quote</span>
                  </Link>

                  <p className="mt-3 text-xs text-slate-500 lg:text-right">
                    Standard or made-to-order
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}