import type { Product } from '../data/products'

interface ProductCardProps {
  product: Product
  detailed?: boolean
}

export default function ProductCard({ product, detailed = false }: ProductCardProps) {
  return (
    <div className="group rounded-xl border border-ink-muted/12 dark:border-white/10 bg-white dark:bg-navy-soft overflow-hidden shadow-card transition-transform hover:-translate-y-0.5">
      <div className="aspect-[4/3] overflow-hidden bg-surface-soft dark:bg-navy">
        <img
          src={product.image}
          alt={`${product.name} produced by Shashiki Metal Industries (placeholder photo)`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-ink dark:text-white">{product.name}</h3>
        <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">{product.tagline}</p>

        {detailed && (
          <>
            <p className="mt-4 text-sm leading-relaxed text-ink/90 dark:text-slate-300">
              {product.description}
            </p>
            <div className="mt-4">
              <p className="text-sm font-semibold text-ink dark:text-white mb-2">
                Typical uses
              </p>
              <ul className="space-y-1.5">
                {product.useCases.map((use) => (
                  <li key={use} className="flex gap-2 text-sm text-ink/90 dark:text-slate-300">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand dark:bg-brand-light" />
                    {use}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
