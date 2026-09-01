import type { ReactNode } from 'react'
import { cn } from './cn.ts'

interface SectionProps {
  children: ReactNode
  className?: string
  tone?: 'default' | 'green'
  borderBottom?: boolean
}

function Section({
  children,
  className,
  tone = 'default',
  borderBottom = true,
}: SectionProps) {
  return (
    <section
      className={cn(
        'py-12 md:py-24',
        borderBottom && 'border-b border-border',
        tone === 'green' && 'bg-accent text-surface',
        className,
      )}
    >
      {children}
    </section>
  )
}

export default Section
