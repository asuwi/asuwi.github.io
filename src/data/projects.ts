import { optimizedKeys, optimizedUrl } from './optimizedImages.ts'

export type Category = 'pro' | 'perso'

export interface ProjectImage {
  src: string
  caption?: string
}

export interface Project {
  slug: string
  title: string
  category: Category
  client?: string
  kind: string
  tags: string[]
  description: string[]
  cover: string
  images: ProjectImage[]
}

interface ProjectManifest {
  title: string
  category: Category
  client?: string
  kind: string
  tags?: string[]
  description?: string[]
  order?: number
  cover?: string
  captions?: Record<string, string>
  exclude?: string[]
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
      const filename = imagePath.slice(folderPrefix.length)
      const url = optimizedUrl(imagePath)
      if (url) folderImages.set(filename, url)
    }
  }

  return { slug, manifest, images: folderImages }
})

function basename(filename: string): string {
  const dot = filename.lastIndexOf('.')
  return dot === -1 ? filename : filename.slice(0, dot)
}

function resolveSrc(folder: Folder, filename: string): string {
  return folder.images.get(basename(filename)) ?? ''
}

function resolveImages(
  folder: Folder,
  cover?: string,
  captions?: Record<string, string>,
  exclude?: string[],
): { images: ProjectImage[]; cover: string } {
  const captionByBasename = new Map<string, string>()
  for (const [name, caption] of Object.entries(captions ?? {})) {
    captionByBasename.set(basename(name), caption)
  }

  const excluded = new Set((exclude ?? []).map(basename))

  const sorted = [...folder.images.keys()]
    .filter((filename) => !excluded.has(filename))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

  const images = sorted.map((filename) => ({
    src: folder.images.get(filename) as string,
    caption: captionByBasename.get(filename),
  }))

  const coverSrc = cover ? resolveSrc(folder, cover) : images[0]?.src
  return { images, cover: coverSrc ?? '' }
}

function buildProject(folder: Folder): Project {
  const { manifest } = folder
  const { images: resolvedImages, cover } = resolveImages(
    folder,
    manifest.cover,
    manifest.captions,
    manifest.exclude,
  )

  return {
    slug: folder.slug,
    title: manifest.title,
    category: manifest.category,
    client: manifest.client,
    kind: manifest.kind,
    tags: manifest.tags ?? [],
    description: manifest.description ?? [],
    cover,
    images: resolvedImages,
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
