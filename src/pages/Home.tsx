import Container from '../components/Container.tsx'
import ProjectSection from '../components/ProjectSection.tsx'
import { categoryMeta, getProjects } from '../data/projects.ts'
import site from '../data/site.ts'

function Home() {
  const pro = getProjects('pro')
  const fictif = getProjects('fictif')

  return (
    <>
      <section className="border-b border-border">
        <Container className="py-14 md:py-40">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">
            {site.role}
          </p>
          <h1 className="font-display text-[clamp(3.5rem,13vw,12.5rem)] font-black uppercase leading-[0.9] tracking-[-0.03em]">
            {site.name}
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 text-[15px] text-muted">
            {site.location && <span>{site.location}</span>}
            <a
              href={site.emailHref}
              className="border-b border-border transition-colors hover:border-accent hover:text-text"
            >
              {site.email}
            </a>
          </div>
        </Container>
      </section>

      <ProjectSection
        title={categoryMeta.pro.label}
        intro={categoryMeta.pro.intro}
        moreLink={categoryMeta.pro.path}
        projects={pro}
      />
      <ProjectSection
        title={categoryMeta.fictif.label}
        intro={categoryMeta.fictif.intro}
        moreLink={categoryMeta.fictif.path}
        projects={fictif}
      />
    </>
  )
}

export default Home
