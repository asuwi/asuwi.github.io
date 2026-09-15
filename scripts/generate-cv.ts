import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { createServer } from 'vite'

const HOST = '127.0.0.1'
const PORT = 4173
const CV_URL = `http://${HOST}:${PORT}/#/cv-html`
const PDF_OUTPUT = 'src/assets/cv-ats.pdf'

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
].filter((p): p is string => Boolean(p))

function findChrome(): string | undefined {
  return CHROME_CANDIDATES.find((candidate) => existsSync(candidate))
}

async function printToPdf(pdfPath: string): Promise<void> {
  const chrome = findChrome()
  if (!chrome) {
    throw new Error(
      'Chrome/Edge introuvable. Installe Chrome ou définissez la variable CHROME_PATH.',
    )
  }

  const outPdf = resolve(pdfPath).replace(/\\/g, '/')

  const proc = Bun.spawn(
    [
      chrome,
      '--headless=new',
      '--disable-gpu',
      '--no-pdf-header-footer',
      '--virtual-time-budget=5000',
      `--print-to-pdf=${outPdf}`,
      CV_URL,
    ],
    { stdout: 'pipe', stderr: 'pipe' },
  )

  const [exitCode, stderr] = await Promise.all([
    proc.exited,
    new Response(proc.stderr).text(),
  ])

  if (exitCode !== 0) {
    throw new Error(`Échec de la génération PDF (${exitCode}) : ${stderr}`)
  }
}

async function main() {
  const server = await createServer({
    server: { host: HOST, port: PORT, strictPort: true },
    logLevel: 'error',
  })

  try {
    await server.listen()
    await printToPdf(PDF_OUTPUT)
    console.log(`PDF généré : ${PDF_OUTPUT}`)
  } finally {
    await server.close()
  }
}

await main()
