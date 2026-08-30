const generated = import.meta.glob<string>('../generated/**/*.webp', {
  eager: true,
  import: 'default',
})

function stem(path: string): string {
  return path.replaceAll('\\', '/').replace(/\.webp$/, '')
}

const index = new Map<string, string>()
for (const [path, url] of Object.entries(generated)) {
  index.set(stem(path), url)
}

export function optimizedUrl(key: string): string | undefined {
  return index.get(stem(key))
}

export function optimizedKeys(): string[] {
  return [...index.keys()]
}

export function optimizedAsset(basename: string): string | undefined {
  return optimizedUrl(`../generated/assets/${basename}.webp`)
}
