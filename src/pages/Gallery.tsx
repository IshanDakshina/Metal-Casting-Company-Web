import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

const GALLERY_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=900&auto=format&fit=crop', alt: 'Placeholder photo of a molten metal pour during casting' },
  { src: 'https://images.unsplash.com/photo-1581092160607-ee22731c9c8c?q=80&w=900&auto=format&fit=crop', alt: 'Placeholder photo of finished cast metal plates' },
  { src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=900&auto=format&fit=crop', alt: 'Placeholder photo of a cast manhole cover' },
  { src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=900&auto=format&fit=crop', alt: 'Placeholder photo of mechanical machine parts' },
  { src: 'https://images.unsplash.com/photo-1544733422-2914eea3fbf9?q=80&w=900&auto=format&fit=crop', alt: 'Placeholder photo of stacked metal pipes' },
  { src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=900&auto=format&fit=crop', alt: 'Placeholder photo of the factory floor at Shashiki Metal Industries' },
  { src: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=900&auto=format&fit=crop', alt: 'Placeholder photo of a completed custom cast order' },
  { src: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=900&auto=format&fit=crop&sat=-20', alt: 'Placeholder photo of a sand casting mould' },
  { src: 'https://images.unsplash.com/photo-1581092160607-ee22731c9c8c?q=80&w=900&auto=format&fit=crop&sat=-20', alt: 'Placeholder photo of finished GY plates ready for delivery' },
]

export default function Gallery() {
  return (
    <div>
      <PageHero
        eyebrow="Gallery"
        title="Our Work"
        description="A look at completed products and factory work. Photos shown are placeholders — real photography from our workshop will replace these."
      />

      <section className="section bg-surface dark:bg-navy">
        <div className="section-inner grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {GALLERY_IMAGES.map((img, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06} className="overflow-hidden rounded-xl aspect-square">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
