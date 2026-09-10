import Reveal from './Reveal'

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-surface-soft dark:bg-navy-soft border-b border-ink-muted/10 dark:border-white/10">
      <div className="section-inner px-6 sm:px-8 py-14 sm:py-16">
        <Reveal>
          <span className="eyebrow-tag">{eyebrow}</span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-ink dark:text-white max-w-2xl">
            {title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-muted max-w-2xl leading-relaxed">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
