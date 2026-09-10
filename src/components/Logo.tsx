interface LogoProps {
  className?: string
  showWordmark?: boolean
}

export default function Logo({ className = '', showWordmark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <path
          d="M32 6l4.2 1.1 1.6 5.3a20.9 20.9 0 0 1 5.4 3.1l5.3-1.8 4.2 3.9-1.5 5.4a20.9 20.9 0 0 1 2.2 5.9l5 2.6v5.9l-5 2.6a20.9 20.9 0 0 1-2.2 5.9l1.5 5.4-4.2 3.9-5.3-1.8a20.9 20.9 0 0 1-5.4 3.1l-1.6 5.3L32 58l-4.2-1.1-1.6-5.3a20.9 20.9 0 0 1-5.4-3.1l-5.3 1.8-4.2-3.9 1.5-5.4a20.9 20.9 0 0 1-2.2-5.9l-5-2.6v-5.9l5-2.6a20.9 20.9 0 0 1 2.2-5.9l-1.5-5.4 4.2-3.9 5.3 1.8a20.9 20.9 0 0 1 5.4-3.1l1.6-5.3z"
          className="fill-brand dark:fill-brand-light"
        />
        <circle cx="32" cy="32" r="11" className="fill-white dark:fill-navy" />
        <circle cx="32" cy="32" r="6" className="fill-brand dark:fill-brand-light" />
      </svg>
      {showWordmark && (
        <span className="font-head font-bold tracking-tight leading-none text-[1.05rem] sm:text-lg text-ink dark:text-white">
          SHASHIKI
          <span className="block text-[0.6rem] sm:text-[0.65rem] font-sans font-semibold tracking-[0.14em] text-ink-muted -mt-0.5">
            METAL INDUSTRIES
          </span>
        </span>
      )}
    </div>
  )
}
