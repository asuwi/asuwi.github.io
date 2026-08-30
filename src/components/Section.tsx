import type { ReactNode } from 'react'
import { cn } from './cn.ts'

interface SectionProps {
  children: ReactNode
  className?: string
  tone?: 'default' | 'green'
}

function Section({ children, className, tone = 'default' }: SectionProps) {
  return (
    <section
      className={cn(
        'border-b border-border py-12 md:py-24',
        tone === 'green' && 'bg-accent text-surface',
        className,
      )}
    >
      {children}
    </section>
  )
}

export default Section
