import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex shrink-0 items-center"
      aria-label="Shashiki Metal Industries, home"
    >
      <img
        src="/images/company_logo.png"
        alt="Shashiki Metal Industries"
        className="h-16 w-auto object-contain"
      />
    </Link>
  )
}