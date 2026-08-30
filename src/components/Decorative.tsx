import { cn } from './cn.ts'

interface ShapeProps {
  className?: string
}

export function Sparkle({ className }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-6 w-6', className)}
      fill="currentColor"
    >
      <path d="M12 0c1 6.3 5.7 11 12 12-6.3 1-11 5.7-12 12-1-6.3-5.7-11-12-12 6.3-1 11-5.7 12-12Z" />
    </svg>
  )
}

export function Asterisk({ className }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-6 w-6', className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    >
      <path d="M12 2v20M3.4 7l17.2 10M20.6 7 3.4 17" />
    </svg>
  )
}

export function Flower({ className }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-6 w-6', className)}
      fill="currentColor"
    >
      <g>
        <circle cx="12" cy="5" r="3" />
        <circle cx="5" cy="9" r="3" />
        <circle cx="19" cy="9" r="3" />
        <circle cx="7" cy="17" r="3" />
        <circle cx="17" cy="17" r="3" />
        <circle cx="12" cy="12" r="2.4" fill="var(--color-bg)" />
      </g>
    </svg>
  )
}

export function Squiggle({ className }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 120 20"
      aria-hidden="true"
      className={cn('h-5 w-28', className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    >
      <path d="M2 10c8-8 16 8 24 0s16 8 24 0 16 8 24 0 16 8 24 0 16 8 24 0" />
    </svg>
  )
}

export function Blob({ className }: ShapeProps) {
  return (
    <div
      aria-hidden="true"
      className={cn('rounded-[48%_52%_55%_45%/45%_48%_52%_55%]', className)}
    />
  )
}

export function Rays({ className }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={cn('h-40 w-40', className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    >
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180
        const x1 = 50 + Math.cos(angle) * 22
        const y1 = 50 + Math.sin(angle) * 22
        const x2 = 50 + Math.cos(angle) * 46
        const y2 = 50 + Math.sin(angle) * 46
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
      })}
    </svg>
  )
}
