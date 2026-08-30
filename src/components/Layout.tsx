import { NavLink, Outlet } from 'react-router-dom'
import site from '../data/site.ts'
import { cn } from './cn.ts'
import Container from './Container.tsx'
import ScrollToTop from './ScrollToTop.tsx'

const navLinks = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/projets-professionnels', label: 'Projets pro', end: false },
  { to: '/projets-fictifs', label: 'Projets fictifs', end: false },
  { to: '/a-propos', label: 'À propos', end: false },
]

function Layout() {
  const year = new Date().getFullYear()

  return (
    <>
      <ScrollToTop />
      <header className="sticky top-0 z-10 border-b border-border bg-bg">
        <Container className="flex items-center justify-between gap-4 py-4">
          <NavLink
            to="/"
            className="whitespace-nowrap font-display text-lg font-extrabold uppercase tracking-[-0.02em]"
          >
            {site.name}
          </NavLink>
          <nav className="flex items-center gap-4 md:gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  cn(
                    'relative whitespace-nowrap pb-1 text-[13px] font-medium uppercase tracking-wide text-muted transition-colors hover:text-text',
                    isActive &&
                      "text-text after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-accent after:content-['']",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </Container>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border bg-surface">
        <Container className="py-12 md:py-24">
          <section className="flex flex-col items-start gap-3">
            <h2 className="mb-2 font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold uppercase tracking-[-0.02em]">
              Contact
            </h2>
            <a
              href={site.emailHref}
              className="border-b-2 border-accent font-display text-[clamp(1.25rem,3vw,2rem)] font-bold transition-colors hover:text-accent"
            >
              {site.email}
            </a>
            <div className="mt-2 flex flex-wrap gap-5">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-border text-[15px] text-muted transition-colors hover:border-accent hover:text-text"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </section>
          <p className="mt-12 text-[13px] text-muted">
            © {year} {site.name}
          </p>
        </Container>
      </footer>
    </>
  )
}

export default Layout
