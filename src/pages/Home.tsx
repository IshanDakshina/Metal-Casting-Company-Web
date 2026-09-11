import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        {/* Background Image */}
        <img
          src="/images/hero_img.png"
          alt="Shashiki Metal Industries foundry and metal casting"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D14]/95 via-[#0B121C]/80 to-[#0B121C]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D14]/70 via-transparent to-[#070D14]/20" />

        {/* Hero Content */}
        <div className="relative z-10 section-inner w-full px-6 sm:px-8 py-24 lg:py-28">
          <Reveal>
            <div className="max-w-4xl">
              {/* Main Heading */}
              <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
                Strong Metalwork.
                <br />
                <span className="text-white/90">
                  Built for Strength.
                </span>
                <br />
                <span className="text-brand">
                  Made to Last.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                From manhole covers and gym weight plates to machine parts
                and custom castings, Shashiki Metal Industries delivers
                dependable metal products built for demanding everyday use.
              </p>

              {/* CTA Buttons */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">

                {/* Products Button */}
                <Link
                  to="/products"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-black/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
                >
                  <span>Explore Our Products</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 0 1 .75-.75h10.638L11.22 6.082a.75.75 0 1 1 1.06-1.06l4.45 4.45a.75.75 0 0 1 0 1.06l-4.45 4.45a.75.75 0 0 1-1.06-1.06l3.168-3.168H3.75A.75.75 0 0 1 3 10Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/94753464816?text=Hello%20Shashiki%20Metal%20Industries,%20I%20would%20like%20to%20make%20an%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/10 px-6 py-3.5 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/15"
                >
                  {/* WhatsApp Icon */}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg">
                    <FaWhatsapp className="text-xl" />
                  </span>

                  <span className="text-left">
                    <span className="block text-sm font-semibold leading-tight">
                      Talk to Our Team
                    </span>
                    <span className="mt-0.5 block text-xs text-white/65">
                      Chat with us on WhatsApp
                    </span>
                  </span>
                </a>
              </div>

              {/* Trust / Capability Strip */}
              <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/15 pt-5">
                <div className="flex items-center gap-2 text-sm text-white/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 text-brand"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.707-9.707a1 1 0 0 0-1.414-1.414L9 10.172 7.707 8.879a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Custom Castings</span>
                </div>

                <div className="hidden h-4 w-px bg-white/20 sm:block" />

                <div className="flex items-center gap-2 text-sm text-white/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 text-brand"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.707-9.707a1 1 0 0 0-1.414-1.414L9 10.172 7.707 8.879a1 1 0 0 0 1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Industrial Products</span>
                </div>

                <div className="hidden h-4 w-px bg-white/20 sm:block" />

                <div className="flex items-center gap-2 text-sm text-white/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 text-brand"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.707-9.707a1 1 0 0 0-1.414-1.414L9 10.172 7.707 8.879a1 1 0 0 0 1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Built in Sri Lanka</span>
                </div>
              </div>

            </div>
          </Reveal>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B121C] to-transparent" />
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

      {/* Trust / Company Strength */}
      <section className="bg-navy dark:bg-[#0A1018]">
        <div className="section-inner px-6 sm:px-8 py-16 sm:py-20">
          <Reveal>
            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light">
                  Why Shashiki
                </span>

                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Built around dependable casting
                </h2>
              </div>

              <p className="max-w-md text-sm leading-relaxed text-slate-400 sm:text-right">
                Practical manufacturing, consistent workmanship and the flexibility
                to produce both standard and custom cast components.
              </p>
            </div>
          </Reveal>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {[
                {
                  end: 20,
                  suffix: '+',
                  label: 'Years',
                  detail: 'In operation',
                },
                {
                  end: 850,
                  suffix: '+',
                  label: 'Projects',
                  detail: 'Completed',
                },
                {
                  end: 6,
                  suffix: '',
                  label: 'Product lines',
                  detail: 'Core categories',
                },
                {
                  end: 100,
                  suffix: '%',
                  label: 'Custom',
                  detail: 'Orders welcome',
                },
              ].map((stat, i) => (
                <Reveal
                  key={stat.label}
                  delay={i * 0.08}
                  className={`
              ${i < 2 ? 'border-b border-white/10' : ''}
              ${i % 2 === 0 ? 'border-r border-white/10' : ''}
              ${i < 3 ? 'lg:border-b-0 lg:border-r' : 'lg:border-r-0'}
            `}
                >
                  <div className="relative px-6 py-8 sm:px-8 sm:py-10">
                    {/* Small index */}
                    <span className="absolute right-5 top-5 text-[10px] font-bold tracking-widest text-white/20">
                      0{i + 1}
                    </span>

                    <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                      <CountUp end={stat.end} suffix={stat.suffix} />
                    </p>

                    <p className="mt-3 text-sm font-semibold text-brand-light">
                      {stat.label}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {stat.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
<section className="section bg-surface-soft dark:bg-navy-soft">
  <div className="section-inner">
    <Reveal>
      <div className="relative overflow-hidden rounded-2xl bg-navy dark:bg-[#0A1018]">
        {/* Decorative industrial lines */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-30">
          <div className="absolute right-[-80px] top-[-80px] h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute right-[-30px] top-[-30px] h-56 w-56 rounded-full border border-white/10" />
          <div className="absolute right-[20px] top-[20px] h-40 w-40 rounded-full border border-white/10" />
        </div>

        <div className="relative z-10 grid items-center gap-10 px-7 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1fr_auto] lg:px-14 lg:py-14">
          {/* Text */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-brand-light" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light">
                Custom Manufacturing
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Have a part that needs
              <span className="text-brand-light"> casting?</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Share your drawing, dimensions or sample part with our team.
              We can discuss the requirements and provide a quotation for
              your casting.
            </p>
          </div>

          {/* Action */}
          <div className="lg:pl-8">
            <Link
              to="/contact"
              className="group inline-flex w-full items-center justify-between gap-8 rounded-xl bg-brand px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-light hover:shadow-xl sm:w-auto"
            >
              <span>Request a Quote</span>
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  </div>
</section>
    </div>
  )
}
