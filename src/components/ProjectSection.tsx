import type { Project } from '../data/projects.ts'
import Container from './Container.tsx'
import ProjectGrid from './ProjectGrid.tsx'
import Section from './Section.tsx'
import SectionHeader from './SectionHeader.tsx'

interface ProjectSectionProps {
  title: string
  intro?: string
  moreLink?: string
  projects: Project[]
}

function ProjectSection({
  title,
  intro,
  moreLink,
  projects,
}: ProjectSectionProps) {
  return (
    <Section>
      <Container>
        <SectionHeader title={title} intro={intro} moreLink={moreLink} />
        <ProjectGrid projects={projects} />
      </Container>
    </Section>
  )
}

export default ProjectSection
