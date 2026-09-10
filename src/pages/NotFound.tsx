import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="section min-h-[60vh] flex items-center justify-center text-center">
      <div>
        <p className="text-brand dark:text-brand-light font-head font-bold text-5xl">404</p>
        <h1 className="mt-4 text-2xl font-bold text-ink dark:text-white">Page Not Found</h1>
        <p className="mt-2 text-ink-muted">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
