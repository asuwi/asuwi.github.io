import { useState } from 'react'
import type { ProjectImage } from '../data/projects.ts'
import ImageWithSkeleton from './ImageWithSkeleton.tsx'
import Lightbox from './Lightbox.tsx'

interface ProjectGalleryProps {
  images: ProjectImage[]
  title: string
}

function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  if (images.length === 0) {
    return (
      <div className="flex aspect-[16/7] items-center justify-center rounded-[var(--radius-card)] border border-border bg-[linear-gradient(135deg,var(--color-surface),var(--color-accent-soft))] p-8">
        <span className="text-center font-display text-[clamp(2rem,6vw,5rem)] font-black uppercase tracking-[-0.02em] text-accent opacity-50">
          {title}
        </span>
      </div>
    )
  }

  return (
    <>
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
        {images.map((image, index) => (
          <figure
            key={image.src}
            className="group break-inside-avoid overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="block w-full cursor-zoom-in"
              aria-label={image.caption ?? `Voir l'image ${index + 1}`}
            >
              <ImageWithSkeleton
                src={image.src}
                alt={image.caption ?? ''}
                className="w-full group-hover:scale-[1.02]"
                skeletonClassName="aspect-square w-full"
              />
            </button>
            {image.caption ? (
              <figcaption className="px-4 py-3 text-[13px] leading-snug text-muted">
                {image.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>

      {activeIndex !== null ? (
        <Lightbox
          images={images}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      ) : null}
    </>
  )
}

export default ProjectGallery
