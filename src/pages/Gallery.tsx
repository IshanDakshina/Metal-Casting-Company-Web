import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1200&auto=format&fit=crop',
    alt: 'Molten metal during a casting process',
    title: 'Metal Casting',
    category: 'Production',
  },
  {
    src: 'https://images.unsplash.com/photo-1581092160607-ee22731c9c8c?q=80&w=1200&auto=format&fit=crop',
    alt: 'Industrial metal components',
    title: 'Finished Components',
    category: 'Products',
  },
  {
    src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1200&auto=format&fit=crop',
    alt: 'Cast metal utility component',
    title: 'Utility Castings',
    category: 'Products',
  },
  {
    src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop',
    alt: 'Industrial machinery and metal components',
    title: 'Machine Parts',
    category: 'Manufacturing',
  },
  {
    src: 'https://images.unsplash.com/photo-1544733422-2914eea3fbf9?q=80&w=1200&auto=format&fit=crop',
    alt: 'Metal pipes and industrial materials',
    title: 'Metal Products',
    category: 'Products',
  },
  {
    src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop',
    alt: 'Industrial workshop floor',
    title: 'Our Workshop',
    category: 'Facility',
  },
  {
    src: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200&auto=format&fit=crop',
    alt: 'Completed custom metal casting',
    title: 'Custom Casting',
    category: 'Custom Work',
  },
  {
    src: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1200&auto=format&fit=crop&sat=-20',
    alt: 'Sand casting mould preparation',
    title: 'Mould Preparation',
    category: 'Production',
  },
  {
    src: 'https://images.unsplash.com/photo-1581092160607-ee22731c9c8c?q=80&w=1200&auto=format&fit=crop&sat=-20',
    alt: 'Finished cast products ready for delivery',
    title: 'Ready for Delivery',
    category: 'Products',
  },
]

export default function Gallery() {
  return (
    <div>
      {/* Page Hero */}
      <PageHero
        eyebrow="Gallery"
        title="Inside our work"
        description="A closer look at our casting, manufacturing environment and finished products. Real workshop photography can be added here as the portfolio grows."
      />

      {/* Gallery */}
      <section className="section bg-surface dark:bg-navy">
        <div className="section-inner">

          {/* Intro */}
          <Reveal>
            <div className="flex flex-col gap-5 border-b border-ink-muted/10 pb-8 dark:border-white/10 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand dark:text-brand-light">
                  Work & Facility
                </span>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink dark:text-white sm:text-4xl">
                  From the workshop to the finished product
                </h2>

                <p className="mt-4 leading-7 text-ink-muted">
                  See examples of the products, processes and working
                  environment behind our metal casting operations.
                </p>
              </div>

              <div className="shrink-0">
                <span className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                  {GALLERY_IMAGES.length} Images
                </span>
              </div>
            </div>
          </Reveal>

          {/* Featured Gallery Layout */}
          <div className="mt-10 grid gap-5 lg:grid-cols-12">

            {/* Large Feature */}
            <Reveal className="lg:col-span-7">
              <div className="group relative h-full min-h-[420px] overflow-hidden rounded-2xl bg-navy">
                <img
                  src={GALLERY_IMAGES[0].src}
                  alt={GALLERY_IMAGES[0].alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#070D14]/90 via-[#070D14]/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-light">
                    {GALLERY_IMAGES[0].category}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    {GALLERY_IMAGES[0].title}
                  </h3>

                  <div className="mt-4 h-px w-10 bg-brand-light" />
                </div>
              </div>
            </Reveal>

            {/* Two Supporting Images */}
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">

              {[GALLERY_IMAGES[1], GALLERY_IMAGES[2]].map((img, index) => (
                <Reveal
                  key={img.title}
                  delay={(index + 1) * 0.06}
                  className="group relative min-h-[260px] overflow-hidden rounded-2xl bg-navy"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#070D14]/85 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-light">
                      {img.category}
                    </span>

                    <h3 className="mt-1.5 text-lg font-bold text-white">
                      {img.title}
                    </h3>
                  </div>
                </Reveal>
              ))}

            </div>
          </div>

          {/* Remaining Images */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY_IMAGES.slice(3).map((img, i) => (
              <Reveal
                key={img.title}
                delay={(i % 3) * 0.06}
              >
                <div className="group relative overflow-hidden rounded-xl bg-surface-soft dark:bg-navy-soft">

                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="border-t border-ink-muted/10 bg-white px-5 py-4 dark:border-white/10 dark:bg-navy-soft">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand dark:text-brand-light">
                      {img.category}
                    </p>

                    <h3 className="mt-1.5 text-sm font-bold text-ink dark:text-white">
                      {img.title}
                    </h3>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}