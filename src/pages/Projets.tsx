import { Navigate } from 'react-router-dom'
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

  return (
    <section className="min-h-[55vh]">
      <Container className="py-12 md:py-24">
        <PageHeading title={meta.label} intro={meta.intro} />
        <ProjectGrid projects={items} />
      </Container>
    </section>
  )
}

export default Projets
