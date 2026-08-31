import Container from '../components/Container.tsx'
import PageHeading from '../components/PageHeading.tsx'
import Section from '../components/Section.tsx'
import SectionHeader from '../components/SectionHeader.tsx'
import {
  Asterisk,
  Blob,
  Flower,
  Sparkle,
} from '../components/Decorative.tsx'
import {
  MotionIcon,
  PaletteIcon,
  PencilIcon,
  PlayIcon,
  PosterIcon,
  ScreenIcon,
} from '../components/Icons.tsx'
import BrandIcon from '../components/BrandIcons.tsx'
import type { BrandName } from '../data/brandIcons.ts'
import { cn } from '../components/cn.ts'
import { optimizedAsset } from '../data/optimizedImages.ts'

const paragraphs = [
  "Je suis Manon Arteta, graphiste diplômée d'une licence en design graphique et actuellement à la recherche d'une alternance pour mon Master Direction Artistique Communication 360 à LISAA Paris.",
  "J'ai réalisé deux années d'alternance chez OXYPHARM, où j'ai pu travailler sur des projets variés en print et en digital : identité visuelle, supports de communication, réseaux sociaux, newsletters, projets web et contenus interactifs.",
  "Cette expérience m'a permis de développer mon autonomie, ma créativité et ma capacité à m'adapter à différents projets et demandes. J'aime particulièrement pouvoir toucher à plusieurs domaines et découvrir de nouvelles façons de créer.",
]

const skillIcons = {
  pencil: PencilIcon,
  play: PlayIcon,
  screen: ScreenIcon,
  poster: PosterIcon,
  motion: MotionIcon,
  palette: PaletteIcon,
} as const

interface SkillItem {
  label: string
  brand?: BrandName
}

interface SkillGroup {
  title: string
  icon: keyof typeof skillIcons
  items: SkillItem[]
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Dessin & illustration',
    icon: 'pencil',
    items: [
      { label: 'Procreate', brand: 'procreate' },
      { label: 'Photoshop', brand: 'photoshop' },
      { label: 'Illustration' },
      { label: 'Croquis' },
      { label: 'Character design' },
    ],
  },
  {
    title: 'Montage vidéo',
    icon: 'play',
    items: [
      { label: 'Premiere Pro', brand: 'premierepro' },
      { label: 'CapCut', brand: 'capcut' },
      { label: 'After Effects', brand: 'aftereffects' },
    ],
  },
  {
    title: 'Web & UI/UX',
    icon: 'screen',
    items: [
      { label: 'Figma', brand: 'figma' },
      { label: 'Framer', brand: 'framer' },
      { label: 'HTML5', brand: 'html5' },
      { label: 'CSS3', brand: 'css3' },
      { label: 'Stripo', brand: 'stripo' },
    ],
  },
  {
    title: 'Maquette & édition',
    icon: 'poster',
    items: [
      { label: 'InDesign', brand: 'indesign' },
      { label: 'Illustrator', brand: 'illustrator' },
      { label: 'Mise en page' },
      { label: 'Print' },
    ],
  },
  {
    title: 'Animation & motion',
    icon: 'motion',
    items: [
      { label: 'After Effects', brand: 'aftereffects' },
      { label: 'Motion design' },
      { label: 'Animation' },
    ],
  },
  {
    title: 'Direction artistique',
    icon: 'palette',
    items: [
      { label: 'Identité visuelle' },
      { label: 'Concept' },
      { label: 'Storytelling' },
      { label: 'Stratégie de marque' },
    ],
  },
]

function About() {
  const characterSrc = optimizedAsset('character2')

  return (
    <section className="min-h-[55vh]">
      <Container className="py-12 md:py-24">
        <div className="mb-12 grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div>
            <PageHeading title="À propos" />

            <p className="mb-8 max-w-[65ch] border-l-[3px] border-accent pl-6 text-base leading-[1.6]">
              Curieuse, réactive et toujours intéressée par de nouveaux projets, je
              souhaite aujourd'hui continuer à développer mes compétences en
              direction artistique et explorer davantage le digital, la vidéo,
              l'animation et la création de contenus.
            </p>

            <div className="flex max-w-[70ch] flex-col gap-5">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-base leading-[1.6]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {characterSrc ? (
            <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
              <Blob className="absolute -inset-6 -z-10 animate-breathe bg-accent-soft" />
              <Sparkle className="absolute -top-4 -right-2 h-8 w-8 animate-twinkle text-accent" />
              <Asterisk className="absolute -bottom-4 -left-4 h-10 w-10 animate-spin-slow text-accent-deep" />
              <Flower className="absolute top-1/2 -right-7 h-8 w-8 animate-float text-accent" />
              <img
                src={characterSrc}
                alt="Illustration de Manon Arteta"
                className="w-full rounded-[var(--radius-card)] border border-border"
              />
            </div>
          ) : null}
        </div>
      </Container>

      <Section tone="green">
        <Container>
          <SectionHeader
            tone="green"
            title="Mes compétences"
            intro="Des outils aux disciplines, ce que j'utilise et ce que j'aime créer au quotidien."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = skillIcons[group.icon]
              return (
                <div
                  key={group.title}
                  className="flex flex-col gap-3 rounded-[var(--radius-card)] border border-surface/20 bg-white/10 p-6 transition-colors hover:border-surface/50"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface/20 text-surface">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-lg font-bold uppercase tracking-[-0.01em]">
                    {group.title}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item.label}
                        className={cn(
                          'flex items-center gap-2 rounded-full border border-surface/20 bg-surface/10 py-1 text-sm text-surface/90',
                          item.brand ? 'pl-1.5 pr-4' : 'px-4',
                        )}
                      >
                        {item.brand ? (
                          <BrandIcon name={item.brand} variant="color" />
                        ) : null}
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>
    </section>
  )
}

export default About
