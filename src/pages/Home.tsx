import { Link } from 'react-router-dom'
import character1 from '../assets/character1.png'
import portrait from '../assets/portrait.png'
import Container from '../components/Container.tsx'
import ProjectSection from '../components/ProjectSection.tsx'
import Section from '../components/Section.tsx'
import SectionHeader from '../components/SectionHeader.tsx'
import ServiceCard from '../components/ServiceCard.tsx'
import StatCard from '../components/StatCard.tsx'
import TestimonialCard from '../components/TestimonialCard.tsx'
import {
  Asterisk,
  Blob,
  Flower,
  Sparkle,
  Squiggle,
} from '../components/Decorative.tsx'
import { categoryMeta, getProjects } from '../data/projects.ts'
import site from '../data/site.ts'

const expertise = [
  'Identité visuelle',
  'Édition & print',
  'Web & UI/UX',
  'Réseaux sociaux',
  'Direction artistique',
  'Vidéo & animation',
]

const statIcons = [
  <Sparkle key="sparkle" className="h-6 w-6 animate-twinkle" />,
  <Asterisk key="asterisk" className="h-7 w-7 animate-spin-slow" />,
  <Flower key="flower" className="h-6 w-6 animate-float" />,
  <Squiggle key="squiggle" className="h-4 w-20 animate-breathe" />,
]

function Home() {
  const pro = getProjects('pro')
  const perso = getProjects('perso')

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <Container className="py-16 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">
                {site.role}
              </p>
              <h1 className="font-display text-[clamp(3rem,9vw,7rem)] font-black uppercase leading-[0.9] tracking-[-0.03em] text-accent-deep">
                Graphisme
                <br />
                &amp; direction
                <br />
                <span className="font-script font-semibold normal-case tracking-normal text-accent">
                  artistique
                </span>
              </h1>
              <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted">
                Graphiste diplômée, je conçois des identités visuelles, des
                éditions et des contenus digitaux qui captent le regard et
                créent du lien.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/projets-professionnels"
                  className="rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-surface transition-colors hover:bg-accent-deep"
                >
                  Voir mes projets →
                </Link>
                <Link
                  to="/a-propos"
                  className="rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-surface transition-colors hover:bg-accent-deep"
                >
                  À propos
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
              <Blob className="absolute -inset-6 -z-10 animate-breathe bg-accent-soft" />
              <Sparkle className="absolute -top-4 -right-2 h-8 w-8 animate-twinkle text-accent" />
              <Asterisk className="absolute -bottom-4 -left-4 h-10 w-10 animate-spin-slow text-accent-deep" />
              <Flower className="absolute top-1/2 -right-7 h-8 w-8 animate-float text-accent" />
              <img
                src={portrait}
                alt={`Portrait de ${site.name}`}
                className="w-full rounded-[var(--radius-card)] border border-border"
              />
            </div>
          </div>
        </Container>
      </section>

      <Section tone="green">
        <Container>
          <div className="relative grid gap-12 md:grid-cols-3 md:items-start">
            <div className="relative mx-auto w-full max-w-sm">
              <Blob className="absolute -inset-5 -z-10 animate-breathe bg-surface/15" />
              <Sparkle className="absolute -top-4 -left-4 h-8 w-8 animate-twinkle text-surface" />
              <Flower className="absolute -bottom-4 -right-4 h-8 w-8 animate-float text-surface" />
              <img
                src={character1}
                alt={`Illustration de ${site.name}`}
                className="w-full rounded-[var(--radius-card)] border border-white/30"
              />
            </div>
            <div className="relative md:-ml-6 lg:-ml-20">
              <Asterisk className="absolute -top-2 right-56 h-9 w-9 animate-spin-slow text-surface/60" />
              <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold uppercase tracking-[-0.02em] text-surface">
                Bonjour, je suis
                <span className="mt-6 flex items-center gap-2 font-script text-3xl font-semibold normal-case tracking-normal text-surface">
                  Manon
                  <span className="text-surface/80">♡</span>
                </span>
              </h2>
              <Squiggle className="mt-3 text-surface/60" />
              <p className="mt-5 max-w-md text-base leading-relaxed text-surface/80">
                J’accompagne les marques dans leur développement avec un design
                stratégique, des visuels affirmés et des expériences qui
                marquent les esprits. Le design, c’est avant tout ce que votre
                marque fait ressentir.
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {expertise.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-full border border-surface/20 bg-surface/10 px-5 py-2.5 text-sm font-medium text-surface transition-colors hover:bg-surface/20"
                >
                  <span className="text-surface/70">✿</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader title="En quelques chiffres" />
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-border">
            {site.stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                stat={stat}
                icon={statIcons[index]}
              />
            ))}
          </div>
        </Container>
      </Section>

      <ProjectSection
        title={categoryMeta.pro.label}
        intro={categoryMeta.pro.intro}
        moreLink={categoryMeta.pro.path}
        projects={pro}
        tone='green'
      />

      <ProjectSection
        title={categoryMeta.perso.label}
        intro={categoryMeta.perso.intro}
        moreLink={categoryMeta.perso.path}
        projects={perso}
      />

      <Section tone="green">
        <Container>
          <SectionHeader
            tone='green'
            title="Services"
            intro="De l’idée au visuel final, j’accompagne vos projets de bout en bout."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.services.map((service) => (
              <ServiceCard key={service.title} service={service} tone='green' />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Ils en parlent"
            intro="Quelques retours de celles et ceux avec qui j’ai collaboré."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {site.testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}

export default Home
