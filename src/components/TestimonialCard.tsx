import type { Testimonial } from '../data/site.ts'
import { cn } from './cn.ts'

interface TestimonialCardProps {
  testimonial: Testimonial
  tone?: 'default' | 'green'
}

function TestimonialCard({
  testimonial,
  tone = 'default',
}: TestimonialCardProps) {
  const green = tone === 'green'
  const initials = testimonial.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <figure
      className={cn(
        'flex h-full flex-col gap-4 rounded-[var(--radius-card)] border p-6',
        green ? 'border-surface/20 bg-white/10' : 'border-border bg-surface',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'font-display text-5xl font-black leading-none',
          green ? 'text-surface/30' : 'text-accent-soft',
        )}
      >
        “
      </span>
      <blockquote className="flex-1 text-base leading-relaxed">
        {testimonial.quote}
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <span
          className={cn(
            'flex h-11 w-11 items-center justify-center rounded-full font-display text-sm font-bold',
            green ? 'bg-surface text-accent-deep' : 'bg-accent text-surface',
          )}
        >
          {initials}
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-semibold">{testimonial.name}</span>
          <span
            className={cn(
              'text-[13px]',
              green ? 'text-surface/70' : 'text-muted',
            )}
          >
            {testimonial.role}
          </span>
        </span>
      </figcaption>
    </figure>
  )
}

export default TestimonialCard
