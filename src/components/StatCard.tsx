import type { ReactNode } from 'react'
import type { Stat } from '../data/site.ts'
import { cn } from './cn.ts'

interface StatCardProps {
  stat: Stat
  icon?: ReactNode
  tone?: 'default' | 'green'
}

function StatCard({ stat, icon, tone = 'default' }: StatCardProps) {
  const green = tone === 'green'

  return (
    <div className="flex flex-col gap-3 px-6 py-4 md:px-10">
      {icon ? (
        <span
          className={cn(
            'flex h-8 w-8 items-center justify-center',
            green ? 'text-surface/60' : 'text-accent',
          )}
        >
          {icon}
        </span>
      ) : null}
      <span
        className={cn(
          'font-display text-[clamp(3.25rem,8vw,7rem)] font-black leading-[0.85] tracking-[-0.03em]',
          green ? 'text-surface' : 'text-accent-deep',
        )}
      >
        {stat.value}
      </span>
      <span
        className={cn(
          'font-script text-2xl leading-none md:text-3xl',
          green ? 'text-surface/85' : 'text-accent',
        )}
      >
        {stat.label}
      </span>
    </div>
  )
}

export default StatCard
