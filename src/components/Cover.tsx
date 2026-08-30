import { useState, type ReactNode } from 'react'

interface CoverProps {
  src: string
  alt: string
  className?: string
  fallback?: ReactNode
}

function Cover({ src, alt, className, fallback }: CoverProps) {
  const [ok, setOk] = useState(true)

  if (!ok || !src) {
    return <>{fallback}</>
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setOk(false)}
    />
  )
}

export default Cover
