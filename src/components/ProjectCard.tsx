import { Link } from 'react-router-dom'
import type { Project } from '../data/projects.ts'
import Cover from './Cover.tsx'

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <Link to={`/projets/${project.slug}`} className="group flex flex-col gap-3">
      <div className="relative aspect-square overflow-hidden border border-border bg-surface">
        <Cover
          slug={project.slug}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          fallback={
            <div className="flex h-full w-full items-end justify-start bg-[linear-gradient(135deg,var(--color-surface),var(--color-accent-soft))] p-4">
              <span className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.9] text-accent opacity-35">
                {number}
              </span>
            </div>
          }
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-display text-xl font-bold uppercase tracking-[-0.01em]">
          {project.title}
        </h3>
        <p className="text-[13px] uppercase tracking-wide text-muted">
          {project.client ? `${project.client} — ` : ''}
          {project.kind}
        </p>
      </div>
    </Link>
  )
}

export default ProjectCard
