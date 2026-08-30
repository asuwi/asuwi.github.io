import { useCallback, useEffect } from 'react'
import type { ProjectImage } from '../data/projects.ts'

interface LightboxProps {
  images: ProjectImage[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const image = images[index]
  const hasPrev = index > 0
  const hasNext = index < images.length - 1

  const goPrev = useCallback(() => {
    if (hasPrev) onNavigate(index - 1)
  }, [hasPrev, index, onNavigate])

  const goNext = useCallback(() => {
    if (hasNext) onNavigate(index + 1)
  }, [hasNext, index, onNavigate])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }

    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [goPrev, goNext, onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-accent-deep/90 p-4 backdrop-blur-sm md:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image?.caption ?? 'Visionneuse'}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer"
        className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-surface/10 text-xl text-surface transition-colors hover:bg-surface/20 cursor-pointer"
      >
        ✕
      </button>

      {hasPrev ? (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            goPrev()
          }}
          aria-label="Image précédente"
          className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-surface/10 text-2xl text-surface transition-colors hover:bg-surface/20 md:left-6 cursor-pointer"
        >
          ←
        </button>
      ) : null}

      {hasNext ? (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            goNext()
          }}
          aria-label="Image suivante"
          className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-surface/10 text-2xl text-surface transition-colors hover:bg-surface/20 md:right-6 cursor-pointer"
        >
          →
        </button>
      ) : null}

      <figure
        className="flex max-h-full max-w-5xl flex-col items-center gap-4"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={image?.src}
          alt={image?.caption ?? ''}
          className="max-h-[80vh] w-auto max-w-full rounded-[var(--radius-card)] border border-surface/20 bg-bg object-contain"
        />
        {image?.caption ? (
          <figcaption className="text-center text-sm text-surface/90">
            {image.caption}
          </figcaption>
        ) : null}
        <span className="text-xs uppercase tracking-wide text-surface/60">
          {index + 1} / {images.length}
        </span>
      </figure>
    </div>
  )
}

export default Lightbox
