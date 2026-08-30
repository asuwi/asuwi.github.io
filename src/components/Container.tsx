import type { ReactNode } from 'react'
import { cn } from './cn.ts'

interface ContainerProps {
  children: ReactNode
  className?: string
}

function Container({ children, className }: ContainerProps) {
  return <div className={cn('px-5 md:px-16', className)}>{children}</div>
}

export default Container
