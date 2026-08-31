import { Link } from 'react-router-dom'
import type { Project } from '../data/projects.ts'
import { cn } from './cn.ts'
import Cover from './Cover.tsx'

interface ProjectCardProps {
  project: Project
  index: number
  tone?: 'default' | 'green'
}

function ProjectCard({ project, index, tone = 'default' }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <Link to={`/projets/${project.slug}`} className="group flex flex-col gap-4">
      <div className="relative aspect-square overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface">
        <Cover
          src={project.cover}
          alt={project.title}
          className="h-full w-full object-cover group-hover:scale-[1.04]"
          fallback={
            <div className="flex h-full w-full items-end justify-start bg-[linear-gradient(135deg,var(--color-surface),var(--color-accent-soft))] p-4">
              <span className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.9] text-accent opacity-35">
                {number}
              </span>
            </div>
          }
        />
        <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-surface text-lg text-accent-deep shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-45 group-hover:text-accent">
          ↗
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <p
          className={cn(
            'text-[13px] font-semibold uppercase tracking-wide',
            tone === 'green' ? 'text-surface/80' : 'text-accent',
          )}
        >
          {project.kind}
        </p>
        <h3 className="font-display text-xl font-bold uppercase tracking-[-0.01em]">
          {project.title}
        </h3>
        {project.organization ? (
          <p
            className={cn(
              'text-[13px] uppercase tracking-wide',
              tone === 'green' ? 'text-surface/60' : 'text-muted',
            )}
          >
            {project.organization}
          </p>
        ) : null}
      </div>
    </Link>
  )
}

export default ProjectCard
