import { cn } from './cn.ts'

interface IconProps {
  className?: string
}

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

export function PosterIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-6 w-6', className)}
      {...strokeProps}
    >
      <rect x="3.5" y="3" width="17" height="18" rx="2.5" />
      <circle cx="9" cy="8.5" r="1.6" />
      <path d="M5.5 16.5l3.5-3.5 3 3 2-2 4 3.2" />
    </svg>
  )
}

export function PencilIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-6 w-6', className)}
      {...strokeProps}
    >
      <path d="M4 20l1-4L16.5 4.5a2.12 2.12 0 0 1 3 3L8 19l-4 1Z" />
      <path d="M14.5 6.5l3 3" />
    </svg>
  )
}

export function ScreenIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-6 w-6', className)}
      {...strokeProps}
    >
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M9 21h6M12 17v4" />
    </svg>
  )
}

export function LinkIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-6 w-6', className)}
      {...strokeProps}
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

export function PaletteIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-6 w-6', className)}
      {...strokeProps}
    >
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.7 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.7 1.7-1.7h2c3 0 5.5-2.5 5.5-5.6C22 6 17.5 2 12 2Z" />
      <circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="9.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="5.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="9.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function MotionIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-6 w-6', className)}
      {...strokeProps}
    >
      <circle cx="6" cy="6" r="2.5" />
      <path d="M11 6h7M6 11h12M6 16h4" />
      <circle cx="18" cy="18" r="2.5" />
    </svg>
  )
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-6 w-6', className)}
      {...strokeProps}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-6 w-6', className)}
      {...strokeProps}
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function MegaphoneIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-6 w-6', className)}
      {...strokeProps}
    >
      <path d="M3 11v3l4 2v3a2 2 0 0 0 2 2h.5a2 2 0 0 0 2-2v-3.5l8 3.5V6l-8 3.5V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v6" />
      <path d="M19 10a3 3 0 0 1 0 5" />
    </svg>
  )
}

export function BriefcaseIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-6 w-6', className)}
      {...strokeProps}
    >
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.5h18" />
      <path d="M10 12.5v2h4v-2" />
    </svg>
  )
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-6 w-6', className)}
      {...strokeProps}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <path d="M10 9v6l5-3-5-3Z" fill="currentColor" stroke="none" />
    </svg>
  )
}
