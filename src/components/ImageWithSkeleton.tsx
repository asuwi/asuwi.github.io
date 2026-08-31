import { useState, type ReactNode } from 'react'
import { cn } from './cn.ts'

interface ImageWithSkeletonProps {
  src: string
  alt: string
  className?: string
  wrapperClassName?: string
  skeletonClassName?: string
  fallback?: ReactNode
}

function ImageWithSkeleton({
  src,
  alt,
  className,
  wrapperClassName,
  skeletonClassName,
  fallback,
}: ImageWithSkeletonProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>(
    src ? 'loading' : 'error',
  )

  if (status === 'error' && fallback) {
    return <>{fallback}</>
  }

  const loading = status === 'loading'

  return (
    <span className={cn('relative block overflow-hidden', wrapperClassName)}>
      <span
        className={cn(
          'animate-skeleton transition-opacity duration-500',
          skeletonClassName,
          loading ? 'block opacity-100' : 'absolute inset-0 opacity-0',
        )}
        aria-hidden="true"
      />
      {status !== 'error' ? (
        <img
          className={cn(
            className,
            'transition-[opacity,transform] duration-500 ease-out',
            loading ? 'absolute inset-0 h-full w-full opacity-0' : 'opacity-100',
          )}
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      ) : null}
    </span>
  )
}

export default ImageWithSkeleton
