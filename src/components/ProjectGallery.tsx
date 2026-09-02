import { useMemo, useState } from 'react'
import { isEmbed, isImageGroup } from '../data/projects.ts'
import type { GalleryItem, ProjectImage } from '../data/projects.ts'
import ImageWithSkeleton from './ImageWithSkeleton.tsx'
import Lightbox from './Lightbox.tsx'

interface ProjectGalleryProps {
  gallery: GalleryItem[]
  images: ProjectImage[]
  title: string
}

function groupColumns(count: number): string {
  if (count <= 1) return 'grid-cols-1'
  if (count === 3) return 'grid-cols-3'
  return 'grid-cols-2'
}

function ProjectGallery({ gallery, images, title }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const indexed = useMemo(() => {
    const result: { item: GalleryItem; startIndex: number }[] = []
    gallery.reduce((offset, item) => {
      result.push({ item, startIndex: offset })
      return offset + (isImageGroup(item) ? item.images.length : isEmbed(item) ? 0 : 1)
    }, 0)
    return result
  }, [gallery])

  if (gallery.length === 0) {
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
        {indexed.map(({ item, startIndex }) => {
          if (isEmbed(item)) {
            return (
              <figure
                key={item.url}
                className="mt-6 break-inside-avoid overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface [column-span:all]"
              >
                <iframe
                  src={item.url}
                  title={item.caption ?? 'Site intégré'}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="aspect-video w-full bg-surface"
                />
                {item.caption || item.date ? (
                  <figcaption className="flex items-baseline justify-between gap-3 px-4 py-3 text-[13px] leading-snug text-muted">
                    <span>{item.caption}</span>
                    {item.date ? <span className="shrink-0">{item.date}</span> : null}
                  </figcaption>
                ) : null}
              </figure>
            )
          }

          if (isImageGroup(item)) {
            return (
              <figure
                key={item.images[0]?.src}
                className="break-inside-avoid overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface"
              >
                <div className={`grid gap-px bg-border ${groupColumns(item.images.length)}`}>
                  {item.images.map((image, subIndex) => (
                    <button
                      type="button"
                      key={image.src}
                      onClick={() => setActiveIndex(startIndex + subIndex)}
                      className="group block w-full cursor-zoom-in bg-surface"
                      aria-label={image.caption ?? `Voir l'image ${startIndex + subIndex + 1}`}
                    >
                      <ImageWithSkeleton
                        src={image.src}
                        alt={image.caption ?? ''}
                        className="w-full group-hover:scale-[1.02]"
                        skeletonClassName="aspect-square w-full"
                      />
                    </button>
                  ))}
                </div>
                <figcaption className="flex items-baseline justify-between gap-3 px-4 py-3 text-[13px] leading-snug text-muted">
                  <span>{item.caption}</span>
                  <span className="flex shrink-0 items-baseline gap-2">
                    {item.date ? <span>{item.date}</span> : null}
                    <span>
                      {item.images.length}{' '}
                      {item.images.length > 1 ? 'images' : 'image'}
                    </span>
                  </span>
                </figcaption>
              </figure>
            )
          }

          return (
            <figure
              key={item.src}
              className="group break-inside-avoid overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(startIndex)}
                className="block w-full cursor-zoom-in"
                aria-label={item.caption ?? `Voir l'image ${startIndex + 1}`}
              >
                <ImageWithSkeleton
                  src={item.src}
                  alt={item.caption ?? ''}
                  className="w-full group-hover:scale-[1.02]"
                  skeletonClassName="aspect-square w-full"
                />
              </button>
              {item.caption || item.date ? (
                <figcaption className="flex items-baseline justify-between gap-3 px-4 py-3 text-[13px] leading-snug text-muted">
                  <span>{item.caption}</span>
                  {item.date ? <span className="shrink-0">{item.date}</span> : null}
                </figcaption>
              ) : null}
            </figure>
          )
        })}
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
