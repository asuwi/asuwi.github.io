import { Link, Navigate } from 'react-router-dom'
import Container from '../components/Container.tsx'
import PageHeading from '../components/PageHeading.tsx'
import ProjectGrid from '../components/ProjectGrid.tsx'
import { categoryMeta, getProjects, type Category } from '../data/projects.ts'

interface ProjetsProps {
  category: Category
}

function Projets({ category }: ProjetsProps) {
  const meta = categoryMeta[category]
  if (!meta) {
    return <Navigate to="/" replace />
  }

  const items = getProjects(category)
  const other = categoryMeta[category === 'pro' ? 'perso' : 'pro']
  const isPro = category === 'pro'

  return (
    <section className="min-h-[55vh]">
      <Container className="py-12 md:py-24">
        <PageHeading title={meta.label} intro={meta.intro} />
        <ProjectGrid projects={items} />
        <nav
          className={`mt-16 flex border-t border-border pt-8 ${isPro ? 'justify-end' : 'justify-start'}`}
        >
          <Link
            to={other.path}
            className={`group flex max-w-[50%] flex-col gap-1.5 ${isPro ? 'items-end text-right' : 'items-start'}`}
          >
            <span className="text-[13px] uppercase tracking-[0.04em] text-muted">
              {isPro ? 'Suivant →' : '← Précédent'}
            </span>
            <strong className="font-display font-bold uppercase leading-tight transition-colors group-hover:text-accent">
              {other.label}
            </strong>
          </Link>
        </nav>
      </Container>
    </section>
  )
}

export default Projets
