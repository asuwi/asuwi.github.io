import { useState, type ReactNode } from 'react'

interface CoverProps {
  slug: string
  alt: string
  className?: string
  fallback?: ReactNode
}

function Cover({ slug, alt, className, fallback }: CoverProps) {
  const [ok, setOk] = useState(true)

  if (!ok) {
    return <>{fallback}</>
  }

  return (
    <img
      className={className}
      src={`/projects/${slug}.jpg`}
      alt={alt}
      loading="lazy"
      onError={() => setOk(false)}
    />
  )
}

export default Cover
