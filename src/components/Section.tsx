import type { ReactNode } from 'react'
import { cn } from './cn.ts'

interface SectionProps {
  children: ReactNode
  className?: string
}

function Section({ children, className }: SectionProps) {
  return (
    <section className={cn('border-b border-border py-12 md:py-24', className)}>
      {children}
    </section>
  )
}

export default Section
