import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface-soft dark:bg-navy-soft border-t border-ink-muted/10 dark:border-white/10">
      <div className="max-w-content mx-auto px-6 sm:px-8 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink-muted max-w-[26ch]">
              Sand casting and metal manufacturing for industrial, municipal and custom
              applications across Sri Lanka.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink dark:text-white mb-4">Navigate</h3>
            <ul className="space-y-2.5 text-sm text-ink-muted">
              <li><Link to="/" className="hover:text-brand dark:hover:text-brand-light">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand dark:hover:text-brand-light">About Us</Link></li>
              <li><Link to="/products" className="hover:text-brand dark:hover:text-brand-light">Products</Link></li>
              <li><Link to="/services" className="hover:text-brand dark:hover:text-brand-light">Services</Link></li>
              {/* <li><Link to="/gallery" className="hover:text-brand dark:hover:text-brand-light">Gallery</Link></li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink dark:text-white mb-4">What We Make</h3>
            <ul className="space-y-2.5 text-sm text-ink-muted">
              <li>Gym Weight Plates</li>
              <li>Manhole Covers</li>
              <li>Mechanical Machine Parts</li>
              <li>Metal Pipes</li>
              <li>Sand Casting Models</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink dark:text-white mb-4">Contact</h3>
            <ul className="space-y-2.5 text-sm text-ink-muted">
              <li>621/3, Thunadahena, Korathota, Kaduwela</li>
              <li><a href="tel:+94750295043" className="hover:text-brand dark:hover:text-brand-light">+94 75 029 5043</a></li>
              <li><a href="mailto:metal.shashiki@gmail.com" className="hover:text-brand dark:hover:text-brand-light">metal.shashiki@gmail.com</a></li>
              <li>Mon - Sat, 8:00 AM - 5:30 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-ink-muted/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-muted">
          <p>&copy; {year} Shashiki Metal Industries. All rights reserved.</p>
          <p>Custom casting orders welcome &mdash; built to your specifications.</p>
        </div>
      </div>
    </footer>
  )
}
