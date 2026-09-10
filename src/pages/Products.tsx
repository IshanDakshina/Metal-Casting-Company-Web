import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Products() {
  return (
    <div>
      <PageHero
        eyebrow="Products"
        title="Our Core Product Lines"
        description="Standard cast products manufactured to consistent specifications, alongside full support for custom orders built to your own requirements."
      />

      <section className="section bg-surface dark:bg-navy">
        <div className="section-inner grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.06}>
              <ProductCard product={product} detailed />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-surface-soft dark:bg-navy-soft">
        <div className="section-inner rounded-2xl border border-ink-muted/12 dark:border-white/10 bg-white dark:bg-navy px-6 sm:px-12 py-12 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink dark:text-white">
              Don't See What You Need?
            </h2>
            <p className="mt-3 text-ink-muted max-w-xl mx-auto leading-relaxed">
              We regularly cast to custom specifications — non-standard sizes, replacement parts
              and one-off production runs. Send us your drawings or a sample part and we'll quote
              accordingly.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex rounded-lg bg-brand px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
            >
              Request a Custom Quote
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
