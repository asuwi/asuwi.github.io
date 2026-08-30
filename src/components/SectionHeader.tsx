import { Link } from 'react-router-dom'
import { cn } from './cn.ts'

interface SectionHeaderProps {
  title: string
  intro?: string
  moreLink?: string
  moreLabel?: string
  className?: string
  tone?: 'default' | 'green'
}

function SectionHeader({
  title,
  intro,
  moreLink,
  moreLabel = 'Tout voir',
  className,
  tone = 'default',
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-10', className)}>
      <div className="flex items-baseline justify-between gap-4">
        <h2
          className={cn(
            'font-display text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold uppercase tracking-[-0.02em]',
            tone === 'green' ? 'text-surface' : 'text-accent-deep',
          )}
        >
          {title}
        </h2>
        {moreLink ? (
          <Link
            to={moreLink}
            className={cn(
              'whitespace-nowrap rounded-full px-4 py-1.5 text-[13px] font-semibold uppercase tracking-wide transition-colors',
              tone === 'green'
                ? 'bg-surface text-accent-deep hover:bg-bg'
                : 'bg-accent text-surface hover:bg-accent-deep',
            )}
          >
            {moreLabel} →
          </Link>
        ) : null}
      </div>
      {intro ? (
        <p
          className={cn(
            'mt-3 max-w-[60ch] text-base',
            tone === 'green' ? 'text-surface/80' : 'text-muted',
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeader
