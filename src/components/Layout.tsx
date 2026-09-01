import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import site from '../data/site.ts'
import { cn } from './cn.ts'
import Container from './Container.tsx'
import ScrollToTop from './ScrollToTop.tsx'
import { Sparkle } from './Decorative.tsx'
import { CloseIcon, MenuIcon } from './Icons.tsx'

const navLinks = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/projets-professionnels', label: 'Projets professionnels', end: false },
  { to: '/projets-perso', label: 'Projets personnels', end: false },
  { to: '/a-propos', label: 'À propos', end: false },
]

function navLinkClass({ isActive }: { isActive: boolean }) {
  return cn(
    'relative whitespace-nowrap pb-1 text-[13px] font-medium uppercase tracking-wide text-muted transition-colors hover:text-text',
    isActive &&
      "text-text after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-accent after:content-['']",
  )
}

function Layout() {
  const year = new Date().getFullYear()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <ScrollToTop />
      <header className="sticky top-0 z-10 border-b border-border bg-bg">
        <Container className="flex items-center justify-between gap-4 py-4">
          <NavLink
            to="/"
            className="flex items-center gap-2 whitespace-nowrap font-display text-lg font-extrabold uppercase tracking-[-0.02em] text-accent-deep"
            onClick={() => setMenuOpen(false)}
          >
            {site.name}
            <Sparkle className="h-4 w-4 text-accent" />
          </NavLink>

          <nav className="hidden items-center gap-4 xl:flex xl:gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={navLinkClass}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={site.emailHref}
              className="hidden whitespace-nowrap rounded-full bg-accent px-5 py-2 text-[13px] font-semibold uppercase tracking-wide text-surface transition-colors hover:bg-accent-deep xl:inline-block"
            >
              Travaillons ensemble
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-accent-deep transition-colors hover:bg-accent-soft xl:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </Container>

        {menuOpen ? (
          <div
            id="mobile-menu"
            className="border-t border-border bg-bg xl:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-lg px-3 py-3 text-[13px] font-medium uppercase tracking-wide transition-colors',
                      isActive
                        ? 'bg-accent-soft text-text'
                        : 'text-muted hover:bg-accent-soft hover:text-text',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href={site.emailHref}
                className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-[13px] font-semibold uppercase tracking-wide text-surface transition-colors hover:bg-accent-deep"
              >
                Travaillons ensemble
              </a>
            </Container>
          </div>
        ) : null}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="relative overflow-hidden bg-accent-deep text-surface">
        <Container className="relative py-16 md:py-24">
          <section className="flex max-w-[30ch] flex-col items-start gap-3">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-accent-soft">
              Envie de collaborer ?
            </p>
            <h2 className="font-display text-[clamp(2rem,6vw,3.5rem)] font-black uppercase leading-[0.95] tracking-[-0.02em]">
              Travaillons
              <span className="block font-script font-semibold normal-case tracking-normal">
                ensemble !
              </span>
            </h2>
            <a
              href={site.emailHref}
              className="mt-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-surface transition-colors hover:bg-surface hover:text-accent-deep"
            >
              Me contacter →
            </a>
            <div className="mt-6 flex flex-wrap gap-5">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-surface/40 text-[15px] text-surface/80 transition-colors hover:border-surface hover:text-surface"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </section>
          <p className="mt-12 text-[13px] text-surface/60">
            © {year} {site.name}
          </p>
        </Container>
      </footer>
    </>
  )
}

export default Layout
