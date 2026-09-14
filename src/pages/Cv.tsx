import { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { cv } from '../data/cv.ts'
import type { Education, Experience, SkillGroup } from '../data/cv.ts'
import { cn } from '../components/cn.ts'
import portrait from '../assets/portrait.png'

const PAGE_HEIGHT_MM = 281

const HEADING_CLASS =
  'text-accent mt-[12pt] mb-[5pt] break-after-avoid border-b border-[#999] pb-[2pt] text-[11pt] font-bold uppercase tracking-[0.04em]'
const ENTRY_CLASS = 'mb-[8pt] break-inside-avoid'
const ENTRY_TITLE_CLASS = 'text-[10.5pt] font-bold'
const ENTRY_COMPANY_CLASS = 'text-[10.5pt] font-bold text-[#555]'
const META_CLASS = 'mt-[1pt] text-[9.5pt] text-[#555]'

function dateRange(start: string, end?: string): string {
  if (!start) return ''
  if (!end || end === start) return start
  return `${start} – ${end}`
}

function dateDuration(start: string, end?: string): string {
  if (!end) return ''
  const startDate = new Date(start)
  const endDate = new Date(end)
  const years = endDate.getFullYear() - startDate.getFullYear()
  const months = endDate.getMonth() - startDate.getMonth()
  const totalMonths = years * 12 + months
  if (totalMonths < 12) return `${totalMonths} mois`
  const displayYears = Math.floor(totalMonths / 12)
  const displayMonths = totalMonths % 12
  return `${displayYears} an${displayYears > 1 ? 's' : ''}${displayMonths > 0 ? ` ${displayMonths} mois` : ''}`
}

function ExperienceEntry({ exp }: { exp: Experience }) {
  const duration = exp.months
    ? `${exp.months} mois`
    : dateDuration(exp.start, exp.end)
  const meta = [dateRange(exp.start, exp.end), duration]
    .filter(Boolean)
    .join(' · ')

  return (
    <div className={ENTRY_CLASS}>
      <div className="flex items-baseline justify-between">
        <div className="flex items-baseline gap-[6pt]">
          <h3 className={ENTRY_COMPANY_CLASS}>{exp.company}{exp.location ? ` - ${exp.location}` : ''}</h3>
          <h3 className={ENTRY_TITLE_CLASS}>{exp.title}</h3>
        </div>
        {meta ? <p className={META_CLASS}>{meta}</p> : null}
      </div>
      <ul className="mt-[3pt] list-disc pl-[14pt]">
        {exp.bullets.map((bullet, index) => (
          <li key={index} className="mb-[1.5pt]">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  )
}

function EducationEntry({ edu }: { edu: Education }) {
  const meta = [edu.result, dateRange(edu.start, edu.end)]
    .filter(Boolean)
    .join(' · ')

  return (
    <div className={ENTRY_CLASS}>
      <div className="flex items-baseline justify-between">
        <div className="flex items-baseline gap-[6pt]">
          <h3 className={ENTRY_COMPANY_CLASS}>{edu.school}{edu.location ? ` - ${edu.location}` : ''}</h3>
          <h3 className={ENTRY_TITLE_CLASS}>{edu.degree}</h3>
        </div>
        {meta ? <p className={META_CLASS}>{meta}</p> : null}
      </div>
      {edu.details ? <p className={ENTRY_CLASS}>{edu.details}</p> : null}
    </div>
  )
}

function SkillGroupItem({ group }: { group: SkillGroup }) {
  return (
    <div className={ENTRY_CLASS}>
      <div className="flex items-baseline gap-[6pt]">
        <h3 className={ENTRY_TITLE_CLASS}>{group.category}</h3>
        <p>{group.items.join(', ')}</p>
      </div>
    </div>
  )
}

function ContactLink({ href, children }: { href: string; children: ReactNode }) {
  return <a className="text-accent hover:underline" href={href}>{children}</a>
}

function LanguageEntry({ name, level }: { name: string; level: string }) {
  return (
    <span className="break-inside-avoid">
      <span className="font-bold">{name}</span>
      <span className="text-[#555]"> ({level})</span>
    </span>
  )
}

function PageBox({ children, isLast }: { children: ReactNode; isLast: boolean }) {
  return (
    <div
      className={cn(
        'relative w-[210mm] min-h-[297mm] border border-gray-300 bg-white p-[8mm]',
        'print:w-auto print:min-h-0 print:border-0 print:p-0',
        !isLast && 'break-after-page',
      )}
    >
      {children}
    </div>
  )
}

function measurePageHeightPx(): number {
  const el = document.createElement('div')
  el.style.height = `${PAGE_HEIGHT_MM}mm`
  el.style.position = 'absolute'
  el.style.visibility = 'hidden'
  document.body.appendChild(el)
  const px = el.offsetHeight
  el.remove()
  return px
}

function paginate(container: HTMLElement, pageHeight: number): number[][] {
  const children = Array.from(container.children) as HTMLElement[]
  const pages: number[][] = [[]]

  for (let i = 0; i < children.length; i++) {
    const top = children[i].offsetTop
    const height = children[i].offsetHeight
    let pageIndex = Math.floor(top / pageHeight)
    if (Math.floor((top + height - 1) / pageHeight) !== pageIndex) {
      pageIndex += 1
    }
    while (pages.length <= pageIndex) pages.push([])
    pages[pageIndex].push(i)
  }

  return pages.filter((page) => page.length > 0)
}

function Cv() {
  useEffect(() => {
    document.title = `CV — ${cv.name}`
  }, [])

  const contact: ReactNode[] = []
  const push = (node: ReactNode) => {
    if (contact.length > 0) contact.push(' · ')
    contact.push(node)
  }
  if (cv.email) {
    push(<ContactLink href={`mailto:${cv.email}`}>{cv.email}</ContactLink>)
  }
  if (cv.phone) {
    push(<ContactLink href={`tel:${cv.phone}`}>{cv.phone}</ContactLink>)
  }
  if (cv.location) push(cv.location)
  if (cv.website) {
    push(<ContactLink href={cv.website}>
      {cv.website
        .replaceAll('https://', '')
        .replaceAll('www.', '')
      }
    </ContactLink>
    )
  }
  if (cv.linkedin) {
    push(<ContactLink href={cv.linkedin}>LinkedIn</ContactLink>)
  }

  const blocks: ReactNode[] = [
    <div key="header" className="flex items-start gap-[12pt] break-inside-avoid">
      <img
        src={portrait}
        alt={`Photo de ${cv.name}`}
        className="mt-[2pt] h-[37mm] w-[37mm] shrink-0 rounded-full object-cover"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between border-b border-[#999] pb-[4pt]">
          <div>
            <h1 className="text-[16pt] font-bold text-accent">{cv.name}</h1>
            <p className="mt-[2pt] text-[11pt] text-[#333]">{cv.title}</p>
          </div>
          <p className="text-[9.5pt] text-[#444]">{contact}</p>
        </div>
        <p className="mt-[8pt]">
          {cv.summary.split('\n').map((line, index, lines) => (
            <Fragment key={index}>
              {line.trim()}
              {index < lines.length - 1 ? <br /> : null}
            </Fragment>
          ))}
        </p>
      </div>
    </div>,

    <h2 key="exp-heading" className={HEADING_CLASS}>
      Expérience professionnelle
    </h2>,
    ...cv.experiences.map((exp, index) => (
      <ExperienceEntry key={`exp-${index}`} exp={exp} />
    )),

    <h2 key="edu-heading" className={HEADING_CLASS}>
      Formation
    </h2>,
    ...cv.education.map((edu, index) => (
      <EducationEntry key={`edu-${index}`} edu={edu} />
    )),

    <h2 key="skills-heading" className={HEADING_CLASS}>
      Compétences
    </h2>,
    ...cv.skills.map((group, index) => (
      <SkillGroupItem key={`skills-${index}`} group={group} />
    )),

    <h2 key="lang-heading" className={HEADING_CLASS}>
      Langues
    </h2>,
    <div key="lang-list" className="break-inside-avoid">
      {cv.languages.map((lang, index) => (
        <Fragment key={`lang-${index}`}>
          {index > 0 ? ', ' : null}
          <LanguageEntry name={lang.name} level={lang.level} />
        </Fragment>
      ))}
    </div>,

    cv.interests && cv.interests.length > 0 ? (
      <>
        <h2 key="interests-heading" className={HEADING_CLASS}>
          Centres d’intérêt
        </h2>
        <p key="interests-content">{cv.interests.join(' · ')}</p>
      </>
    ) : null,
  ]

  const containerRef = useRef<HTMLDivElement>(null)
  const [pages, setPages] = useState<number[][]>([])

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return
    setPages(paginate(container, measurePageHeightPx()))
  }, [])

  return (
    <div className="cv-document min-h-screen bg-white text-[9.5pt] leading-[1.45] print:min-h-0">
      <style>{`
        @page { size: A4; margin: 8mm; }
        html,
        body {
          background-color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
          color: #111;
        }
        .cv-document { font-family: Arial, Helvetica, sans-serif; color: #111; }
      `}</style>

      {pages.length === 0 ? (
        <div
          ref={containerRef}
          aria-hidden="true"
          className="invisible absolute left-0 top-0 w-[194mm]"
        >
          {blocks}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-10 py-10 print:block print:py-0">
          {pages.map((indices, pageIndex) => (
            <PageBox key={pageIndex} isLast={pageIndex === pages.length - 1}>
              {indices.map((blockIndex) => blocks[blockIndex])}
            </PageBox>
          ))}
        </div>
      )}
    </div>
  )
}

export default Cv
