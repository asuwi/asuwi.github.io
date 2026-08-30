import { Link, Navigate, useParams } from 'react-router-dom'
import Container from '../components/Container.tsx'
import Cover from '../components/Cover.tsx'
import TagList from '../components/TagList.tsx'
import { categoryMeta, getProject, projects } from '../data/projects.ts'

function Project() {
  const { slug } = useParams()
  const project = getProject(slug ?? '')

  if (!project) {
    return <Navigate to="/" replace />
  }

  const siblings = projects.filter((p) => p.category === project.category)
  const currentIndex = siblings.findIndex((p) => p.slug === project.slug)
  const prev = currentIndex > 0 ? siblings[currentIndex - 1] : undefined
  const next =
    currentIndex < siblings.length - 1 ? siblings[currentIndex + 1] : undefined
  const meta = categoryMeta[project.category]

  return (
    <article>
      <Container className="py-8 md:py-20">
        <header className="mb-10 flex flex-col gap-3">
          <Link
            to={meta.path}
            className="self-start text-[13px] font-medium uppercase tracking-[0.04em] text-muted transition-colors hover:text-accent"
          >
            ← {meta.label}
          </Link>
          <h1 className="font-display text-[clamp(2rem,6vw,4rem)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-accent-deep">
            {project.title}
          </h1>
          <p className="text-[15px] uppercase tracking-wide text-muted">
            {project.client ? `${project.client} — ` : ''}
            {project.kind}
          </p>
        </header>

        <div className="mb-12 overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface">
          <Cover
            slug={project.slug}
            alt={project.title}
            className="w-full"
            fallback={
              <div className="flex aspect-[16/7] items-center justify-center bg-[linear-gradient(135deg,var(--color-surface),var(--color-accent-soft))] p-8">
                <span className="text-center font-display text-[clamp(2rem,6vw,5rem)] font-black uppercase tracking-[-0.02em] text-accent opacity-50">
                  {project.title}
                </span>
              </div>
            }
          />
        </div>

        <div className="mb-10 flex max-w-[65ch] flex-col gap-5">
          {project.description.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-base leading-[1.6]">
              {paragraph}
            </p>
          ))}
        </div>

        <TagList tags={project.tags} className="mb-16" />

        <nav className="flex justify-between gap-6 border-t border-border pt-8">
          {prev ? (
            <Link
              to={`/projets/${prev.slug}`}
              className="group flex max-w-[50%] flex-col gap-1.5"
            >
              <span className="text-[13px] uppercase tracking-[0.04em] text-muted">
                ← Précédent
              </span>
              <strong className="font-display font-bold uppercase leading-tight transition-colors group-hover:text-accent">
                {prev.title}
              </strong>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={`/projets/${next.slug}`}
              className="group flex max-w-[50%] flex-col items-end gap-1.5 text-right"
            >
              <span className="text-[13px] uppercase tracking-[0.04em] text-muted">
                Suivant →
              </span>
              <strong className="font-display font-bold uppercase leading-tight transition-colors group-hover:text-accent">
                {next.title}
              </strong>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </Container>
    </article>
  )
}

export default Project
