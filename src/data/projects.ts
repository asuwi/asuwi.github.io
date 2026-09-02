import { optimizedKeys, optimizedUrl } from './optimizedImages.ts'

export type Category = 'pro' | 'perso'

export interface ProjectImage {
  src: string
  caption?: string
  date?: string
}

export interface ImageGroup {
  images: ProjectImage[]
  caption?: string
  date?: string
}

export type GalleryItem = ProjectImage | ImageGroup

export interface Project {
  slug: string
  title: string
  category: Category
  organization?: string
  kind: string
  tags: string[]
  description: string[]
  date?: string
  cover: string
  images: ProjectImage[]
  gallery: GalleryItem[]
}

interface ManifestGroup {
  group: ProjectImage[]
  caption?: string
  date?: string
}

interface ProjectManifest {
  title: string
  category: Category
  organization?: string
  kind: string
  tags?: string[]
  description?: string[]
  order?: number
  date?: string
  cover?: string
  images?: (ProjectImage | ManifestGroup)[]
}

const manifests = import.meta.glob<ProjectManifest>(
  '../projects/*/manifest.json',
  { eager: true, import: 'default' },
)

const images = optimizedKeys()

interface Folder {
  slug: string
  manifest: ProjectManifest
  images: Map<string, string>
}

const folders: Folder[] = Object.keys(manifests).map((path) => {
  const slug = path.split('/')[2]
  const manifest = manifests[path]
  const folderPrefix = `../generated/projects/${slug}/`
  const folderImages = new Map<string, string>()

  for (const imagePath of images) {
    if (imagePath.startsWith(folderPrefix)) {
      const filename = imagePath.slice(folderPrefix.length).normalize('NFC')
      const url = optimizedUrl(imagePath)
      if (url) folderImages.set(filename, url)
    }
  }

  return { slug, manifest, images: folderImages }
})

function basename(filename: string): string {
  const dot = filename.lastIndexOf('.')
  return (dot === -1 ? filename : filename.slice(0, dot)).normalize('NFC')
}

function resolveSrc(folder: Folder, filename: string): string {
  return folder.images.get(basename(filename)) ?? ''
}

export function isImageGroup(item: GalleryItem): item is ImageGroup {
  return Array.isArray((item as ImageGroup).images)
}

function isManifestGroup(
  item: ProjectImage | ManifestGroup,
): item is ManifestGroup {
  return Array.isArray((item as ManifestGroup).group)
}

function resolveImage(
  folder: Folder,
  image: ProjectImage,
): ProjectImage {
  return {
    src: resolveSrc(folder, image.src),
    caption: image.caption,
    date: image.date,
  }
}

function resolveImages(
  folder: Folder,
  cover?: string,
  manifestImages?: ProjectManifest['images'],
): { images: ProjectImage[]; gallery: GalleryItem[]; cover: string } {
  const gallery: GalleryItem[] = manifestImages
    ? manifestImages.map((item) =>
        isManifestGroup(item)
          ? {
              images: item.group.map((image) => resolveImage(folder, image)),
              caption: item.caption,
              date: item.date,
            }
          : resolveImage(folder, item),
      )
    : [...folder.images.keys()]
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
        .map((filename) => ({ src: folder.images.get(filename) as string }))

  const images = gallery.flatMap((item) =>
    isImageGroup(item) ? item.images : [item],
  )

  const coverSrc = cover ? resolveSrc(folder, cover) : images[0]?.src
  return { images, gallery, cover: coverSrc ?? '' }
}

function buildProject(folder: Folder): Project {
  const { manifest } = folder
  const { images, gallery, cover } = resolveImages(
    folder,
    manifest.cover,
    manifest.images,
  )

  return {
    slug: folder.slug,
    title: manifest.title,
    category: manifest.category,
    organization: manifest.organization,
    kind: manifest.kind,
    tags: manifest.tags ?? [],
    description: manifest.description ?? [],
    date: manifest.date,
    cover,
    images,
    gallery,
  }
}

const sortValue = (folder: Folder) =>
  folder.manifest.order ?? Number.MAX_SAFE_INTEGER

export const projects: Project[] = folders
  .filter((folder) => folder.manifest.category === 'pro' || folder.manifest.category === 'perso')
  .sort(
    (a, b) =>
      sortValue(a) - sortValue(b) || a.manifest.title.localeCompare(b.manifest.title),
  )
  .map(buildProject)

export const categoryMeta: Record<
  Category,
  { label: string; path: string; intro: string }
> = {
  pro: {
    label: 'Projets professionnels',
    path: '/projets-professionnels',
    intro:
      'Projets menés en contexte professionnel, du print au digital : identités visuelles, supports de communication et contenus interactifs.',
  },
  perso: {
    label: 'Projets personnels',
    path: '/projets-perso',
    intro:
      'Projets personnels et de cours : identités visuelles, édition et campagnes de sensibilisation.',
  },
}

export function getProjects(category: Category): Project[] {
  return projects.filter((p) => p.category === category)
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
