import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import { useTheme } from '../context/ThemeContext'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-[0.95rem] font-medium transition-colors ${
      isActive
        ? 'text-brand dark:text-brand-light'
        : 'text-ink/80 hover:text-brand dark:text-slate-200 dark:hover:text-brand-light'
    }`

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled
          ? 'bg-white/95 dark:bg-navy/95 backdrop-blur shadow-[0_1px_0_rgba(15,22,32,0.06),0_8px_20px_-16px_rgba(15,22,32,0.35)] dark:shadow-[0_1px_0_rgba(255,255,255,0.06)]'
          : 'bg-white dark:bg-navy'
      }`}
    >
      <div className="max-w-content mx-auto flex items-center justify-between px-6 sm:px-8 h-[72px]">
        <NavLink to="/" className="flex items-center" aria-label="Shashiki Metal Industries, home">
          <Logo />
        </NavLink>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            className="grid place-items-center h-9 w-9 rounded-full border border-ink-muted/25 text-ink-muted hover:text-brand hover:border-brand/40 dark:text-slate-300 dark:hover:text-brand-light dark:border-white/15 transition-colors"
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
          <NavLink
            to="/contact"
            className="rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark transition-colors"
          >
            Get a Quote
          </NavLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            className="grid place-items-center h-9 w-9 rounded-full border border-ink-muted/25 text-ink-muted dark:text-slate-300 dark:border-white/15"
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="grid place-items-center h-9 w-9 text-ink dark:text-white"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-ink-muted/15 bg-white dark:bg-navy dark:border-white/10"
            aria-label="Mobile"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `py-2.5 text-base font-medium border-b border-ink-muted/10 dark:border-white/10 last:border-none ${
                      isActive ? 'text-brand dark:text-brand-light' : 'text-ink dark:text-slate-200'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 rounded-lg bg-brand px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Get a Quote
              </NavLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
