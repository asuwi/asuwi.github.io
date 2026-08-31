import type { ReactNode } from 'react'
import ImageWithSkeleton from './ImageWithSkeleton.tsx'

interface CoverProps {
  src: string
  alt: string
  className?: string
  fallback?: ReactNode
}

function Cover({ src, alt, className, fallback }: CoverProps) {
  return (
    <ImageWithSkeleton
      src={src}
      alt={alt}
      className={className}
      wrapperClassName="h-full w-full"
      skeletonClassName="h-full w-full"
      fallback={fallback}
    />
  )
}

export default Cover
