import { Link } from 'react-router-dom'
import { cn } from './cn.ts'

interface SectionHeaderProps {
  title: string
  intro?: string
  moreLink?: string
  moreLabel?: string
  className?: string
}

function SectionHeader({
  title,
  intro,
  moreLink,
  moreLabel = 'Tout voir',
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-10', className)}>
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-extrabold uppercase tracking-[-0.02em]">
          {title}
        </h2>
        {moreLink ? (
          <Link
            to={moreLink}
            className="whitespace-nowrap text-[13px] font-semibold uppercase tracking-wide text-muted transition-colors hover:text-accent"
          >
            {moreLabel}
          </Link>
        ) : null}
      </div>
      {intro ? (
        <p className="mt-3 max-w-[60ch] text-muted">{intro}</p>
      ) : null}
    </div>
  )
}

export default SectionHeader
