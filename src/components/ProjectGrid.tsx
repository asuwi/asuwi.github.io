import type { Project } from '../data/projects.ts'
import ProjectCard from './ProjectCard.tsx'

interface ProjectGridProps {
  projects: Project[]
  tone?: 'default' | 'green'
}

function ProjectGrid({ projects, tone = 'default' }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          index={index}
          tone={tone}
        />
      ))}
    </div>
  )
}

export default ProjectGrid
