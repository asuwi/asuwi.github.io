import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const MAX_DIMENSION = 2048
const WEBP_QUALITY = 82

const SOURCE_ROOTS = ['src/projects', 'src/assets']
const OUTPUT_ROOT = 'src/generated'
const EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp']

interface Entry {
  input: string
  before: number
  after: number
}

function collectImages(root: string): string[] {
  if (!existsSync(root)) return []
  return readdirSync(root, { recursive: true })
    .filter((file): file is string => typeof file === 'string')
    .map((file) => join(root, file))
    .filter((file) => EXTENSIONS.includes(file.slice(file.lastIndexOf('.')).toLowerCase()))
}

function outputPath(input: string): string {
  const rel = relative('src', input)
  const withoutExt = rel.slice(0, rel.lastIndexOf('.'))
  return join(OUTPUT_ROOT, `${withoutExt}.webp`)
}

async function optimizeImage(input: string): Promise<Entry> {
  const before = statSync(input).size
  const buffer = readFileSync(input)

  const { width, height } = await new Bun.Image(buffer).metadata()

  let image = new Bun.Image(buffer)
  if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
    image = image.resize(MAX_DIMENSION, MAX_DIMENSION, {
      fit: 'inside',
      withoutEnlargement: true,
    })
  }

  const bytes = await image.webp({ quality: WEBP_QUALITY }).bytes()

  const output = outputPath(input)
  mkdirSync(join(output, '..'), { recursive: true })
  writeFileSync(output, bytes)

  return { input, before, after: bytes.length }
}

function formatBytes(bytes: number): string {
  return `${(bytes / 1024).toFixed(0)} Ko`
}

async function main() {
  const images = SOURCE_ROOTS.flatMap(collectImages)

  if (images.length === 0) {
    console.log('Aucune image trouvée.')
    return
  }

  rmSync(OUTPUT_ROOT, { recursive: true, force: true })

  const results: Entry[] = []
  for (const input of images) {
    results.push(await optimizeImage(input))
  }

  results.sort((a, b) => a.input.localeCompare(b.input))

  const totalBefore = results.reduce((sum, r) => sum + r.before, 0)
  const totalAfter = results.reduce((sum, r) => sum + r.after, 0)

  console.log('Image'.padEnd(60), 'Avant'.padStart(9), 'Après'.padStart(9), 'Gain'.padStart(8))
  console.log('-'.repeat(90))
  for (const r of results) {
    const ratio = r.before > 0 ? Math.round((1 - r.after / r.before) * 100) : 0
    console.log(
      r.input.padEnd(60),
      formatBytes(r.before).padStart(9),
      formatBytes(r.after).padStart(9),
      `${ratio}%`.padStart(8),
    )
  }
  console.log('-'.repeat(90))
  const totalRatio = totalBefore > 0 ? Math.round((1 - totalAfter / totalBefore) * 100) : 0
  console.log(
    `${results.length} images`.padEnd(60),
    formatBytes(totalBefore).padStart(9),
    formatBytes(totalAfter).padStart(9),
    `${totalRatio}%`.padStart(8),
  )
}

await main()
