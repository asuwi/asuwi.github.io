import type { Service } from '../data/site.ts'
import { cn } from './cn.ts'
import {
  LinkIcon,
  PaletteIcon,
  PencilIcon,
  PlayIcon,
  PosterIcon,
  ScreenIcon,
} from './Icons.tsx'

const serviceIcons = {
  poster: PosterIcon,
  pencil: PencilIcon,
  screen: ScreenIcon,
  link: LinkIcon,
  palette: PaletteIcon,
  play: PlayIcon,
} as const

interface ServiceCardProps {
  service: Service
  tone?: 'default' | 'green'
}

function ServiceCard({ service, tone = 'default' }: ServiceCardProps) {
  const green = tone === 'green'
  const Icon = serviceIcons[service.icon]

  return (
    <div
      className={cn(
        'flex flex-col gap-3 rounded-[var(--radius-card)] border p-6 transition-colors',
        green
          ? 'border-surface/20 bg-white/10 hover:border-surface/50'
          : 'border-border bg-surface hover:border-accent',
      )}
    >
      <span
        className={cn(
          'flex h-12 w-12 items-center justify-center rounded-full',
          green ? 'bg-surface/20 text-surface' : 'bg-accent-soft text-accent',
        )}
      >
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="font-display text-lg font-bold uppercase tracking-[-0.01em]">
        {service.title}
      </h3>
      <p
        className={cn(
          'text-sm leading-relaxed',
          green ? 'text-surface/80' : 'text-muted',
        )}
      >
        {service.description}
      </p>
    </div>
  )
}

export default ServiceCard
