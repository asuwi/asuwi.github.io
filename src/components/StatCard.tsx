import type { Stat } from '../data/site.ts'
import { cn } from './cn.ts'

interface StatCardProps {
  stat: Stat
  accent?: boolean
  tone?: 'default' | 'green'
}

function StatCard({ stat, accent, tone = 'default' }: StatCardProps) {
  const green = tone === 'green'

  return (
    <div
      className={cn(
        'flex flex-col justify-between rounded-[var(--radius-card)] p-6',
        green
          ? accent
            ? 'bg-surface text-accent-deep'
            : 'bg-white/10 text-surface'
          : accent
            ? 'bg-accent text-surface'
            : 'bg-accent-soft text-text',
      )}
    >
      <span className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-black leading-none tracking-[-0.02em]">
        {stat.value}
      </span>
      <span
        className={cn(
          'mt-4 text-sm font-medium',
          green
            ? accent
              ? 'text-accent-deep/70'
              : 'text-surface/70'
            : accent
              ? 'text-surface/80'
              : 'text-muted',
        )}
      >
        {stat.label}
      </span>
    </div>
  )
}

export default StatCard
