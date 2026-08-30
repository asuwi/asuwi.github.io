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
  tone?: 'default' | 'green'
}

function ProjectSection({
  title,
  intro,
  moreLink,
  projects,
  tone = 'default',
}: ProjectSectionProps) {
  return (
    <Section tone={tone}>
      <Container>
        <SectionHeader
          title={title}
          intro={intro}
          moreLink={moreLink}
          tone={tone}
        />
        <ProjectGrid projects={projects} tone={tone} />
      </Container>
    </Section>
  )
}

export default ProjectSection
