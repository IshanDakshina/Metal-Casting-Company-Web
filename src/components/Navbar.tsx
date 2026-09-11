import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import { useTheme } from '../context/ThemeContext'
import { FaWhatsapp } from 'react-icons/fa'

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
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="transition-transform duration-300 group-hover:translate-x-0.5"
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 0 1 .75-.75h10.638L11.22 6.082a.75.75 0 1 1 1.06-1.06l4.45 4.45a.75.75 0 0 1 0 1.06l-4.45 4.45a.75.75 0 0 1-1.06-1.06l3.168-3.168H3.75A.75.75 0 0 1 3 10Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 px-3 sm:px-5 lg:px-6">
      <div
        className={`mx-auto transition-all duration-300 ${scrolled
          ? 'max-w-[1280px] pt-3'
          : 'max-w-content'
          }`}
      >
        <div
          className={`
            relative flex h-[72px] items-center justify-between
            px-4 sm:px-6
            transition-all duration-300
            ${scrolled
              ? `
                  rounded-2xl
                  border border-ink-muted/10
                  bg-white/90
                  shadow-[0_12px_35px_-18px_rgba(15,22,32,0.45)]
                  backdrop-blur-xl
                  dark:border-white/10
                  dark:bg-navy/90
                  dark:shadow-[0_12px_35px_-18px_rgba(0,0,0,0.7)]
                `
              : `
                  bg-white
                  dark:bg-navy
                `
            }
          `}
        >
          {/* Logo */}
          <NavLink
            to="/"
            className="flex shrink-0 items-center"
            aria-label="Shashiki Metal Industries, home"
          >
            <Logo />
          </NavLink>

          {/* Desktop Navigation */}
          <nav
            className="
              hidden lg:flex
              items-center
              gap-1
              rounded-full
              border border-ink-muted/10
              bg-surface-soft/70
              p-1
              dark:border-white/10
              dark:bg-white/[0.04]
            "
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `
                  relative rounded-full
                  px-4 py-2
                  text-[0.9rem]
                  font-medium
                  transition-all duration-200
                  ${isActive
                    ? `
                        bg-white
                        text-brand
                        shadow-sm
                        dark:bg-white/10
                        dark:text-brand-light
                      `
                    : `
                        text-ink/70
                        hover:bg-white/70
                        hover:text-ink
                        dark:text-slate-300/80
                        dark:hover:bg-white/5
                        dark:hover:text-white
                      `
                  }
                `
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2.5">

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={
                theme === 'light'
                  ? 'Switch to dark mode'
                  : 'Switch to light mode'
              }
              className="
      grid h-10 w-10 place-items-center
      rounded-full
      border border-ink-muted/15
      bg-surface-soft/60
      text-ink-muted
      transition-all duration-200
      hover:border-brand/30
      hover:bg-brand/5
      hover:text-brand
      dark:border-white/10
      dark:bg-white/[0.04]
      dark:text-slate-300
      dark:hover:border-brand-light/30
      dark:hover:bg-brand-light/5
      dark:hover:text-brand-light
    "
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>

            {/* Get a Quote */}
            <NavLink
              to="/contact"
              className="
      group
      inline-flex items-center gap-2
      rounded-full
      bg-brand
      px-5 py-2.5
      text-sm font-semibold
      text-white
      shadow-sm
      transition-all duration-300
      hover:-translate-y-0.5
      hover:bg-brand-dark
      hover:shadow-lg
    "
            >
              <span>Get a Quote</span>

              <svg
                width="15"
                height="15"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 0 1 .75-.75h10.638L11.22 6.082a.75.75 0 1 1 1.06-1.06l4.45 4.45a.75.75 0 0 1 0 1.06l-4.45 4.45a.75.75 0 0 1-1.06 1.06l-4.45-4.45a.75.75 0 0 1 0-1.06l4.45-4.45A.75.75 0 0 1 3 10Z"
                  clipRule="evenodd"
                />
              </svg>
            </NavLink>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">

            {/* Theme */}
            <button
              onClick={toggleTheme}
              aria-label={
                theme === 'light'
                  ? 'Switch to dark mode'
                  : 'Switch to light mode'
              }
              className="
                grid h-10 w-10 place-items-center
                rounded-full
                border border-ink-muted/15
                text-ink-muted
                transition-colors
                hover:text-brand
                dark:border-white/10
                dark:text-slate-300
              "
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>

            {/* Menu */}
            <button
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="
                grid h-10 w-10 place-items-center
                rounded-full
                bg-surface-soft
                text-ink
                transition-colors
                hover:text-brand
                dark:bg-white/5
                dark:text-white
              "
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {menuOpen ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{
                duration: 0.2,
                ease: 'easeOut',
              }}
              className="
        absolute
        left-3 right-3
        top-[78px]
        overflow-hidden
        rounded-2xl
        border border-ink-muted/10
        bg-white/95
        p-3
        shadow-[0_20px_50px_-20px_rgba(15,22,32,0.35)]
        backdrop-blur-xl
        dark:border-white/10
        dark:bg-navy/95
        lg:hidden
      "
            >
              <nav
                className="flex flex-col gap-1"
                aria-label="Mobile"
              >
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `
              flex items-center justify-between
              rounded-xl
              px-4 py-3.5
              text-[0.95rem]
              font-medium
              transition-all duration-200
              ${isActive
                        ? `
                    bg-brand/10
                    text-brand
                    dark:bg-brand-light/10
                    dark:text-brand-light
                  `
                        : `
                    text-ink
                    hover:bg-surface-soft
                    hover:text-brand
                    dark:text-slate-200
                    dark:hover:bg-white/5
                    dark:hover:text-brand-light
                  `
                      }
            `
                    }
                  >
                    <span>{link.label}</span>

                    {/* Arrow */}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="opacity-30"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 0 1 .02-1.06L10.94 10 7.23 6.29a.75.75 0 1 1 1.06-1.06l4.24 4.24a.75.75 0 0 1 0 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0 .75.75 0 0 1-.02-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </NavLink>
                ))}

                {/* Divider */}
                <div className="my-2 h-px bg-ink-muted/10 dark:bg-white/10" />

                {/* Get a Quote */}
                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="
            group
            flex items-center justify-center gap-2
            rounded-xl
            bg-brand
            px-4 py-3.5
            text-sm font-semibold
            text-white
            shadow-sm
            transition-all duration-300
            hover:bg-brand-dark
            hover:shadow-md
          "
                >
                  <span>Get a Quote</span>

                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 0 1 .75-.75h10.638L11.22 6.082a.75.75 0 1 1 1.06-1.06l4.45 4.45a.75.75 0 0 1 0 1.06l-4.45-4.45a.75.75 0 0 1 1.06-1.06l3.168 3.168H3.75A.75.75 0 0 1 3 10Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </NavLink>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}