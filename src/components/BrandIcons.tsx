import { cn } from './cn.ts'
import { brandIcons } from '../data/brandIcons.ts'
import type { BrandName, BrandVariant } from '../data/brandIcons.ts'

interface BrandIconProps {
  name: BrandName
  variant?: BrandVariant
  className?: string
}

function BrandIcon({ name, variant = 'color', className = 'h-5 w-5' }: BrandIconProps) {
  const src = brandIcons[name]

  if (variant === 'color') {
    return (
      <img
        src={src}
        alt=""
        className={cn('object-contain', className)}
      />
    )
  }

  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-block shrink-0',
        variant === 'green' ? 'text-accent' : 'text-surface',
        className,
      )}
      style={{
        backgroundColor: 'currentColor',
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  )
}

export default BrandIcon
