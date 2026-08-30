import Container from '../components/Container.tsx'
import PageHeading from '../components/PageHeading.tsx'
import portrait from '../assets/portrait.png'

const paragraphs = [
  "Je suis Manon Arteta, graphiste diplômée d'une licence en design graphique et actuellement à la recherche d'une alternance pour mon Master Direction Artistique Communication 360 à LISAA Paris.",
  "J'ai réalisé deux années d'alternance chez OXYPHARM, où j'ai pu travailler sur des projets variés en print et en digital : identité visuelle, supports de communication, réseaux sociaux, newsletters, projets web et contenus interactifs.",
  "Cette expérience m'a permis de développer mon autonomie, ma créativité et ma capacité à m'adapter à différents projets et demandes. J'aime particulièrement pouvoir toucher à plusieurs domaines et découvrir de nouvelles façons de créer.",
]

const skills = [
  {
    title: 'Suite Adobe',
    items: ['InDesign', 'Illustrator', 'Photoshop', 'After Effects', 'Premiere Pro'],
  },
  {
    title: 'Autres outils',
    items: ['Figma', 'Framer', 'CapCut', 'Stripo'],
  },
]

function About() {
  return (
    <section className="min-h-[55vh]">
      <Container className="py-12 md:py-24">
        <PageHeading title="À propos" />

        <div className="mb-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div className="flex max-w-[65ch] flex-col gap-5">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-lg leading-[1.7]">
                {paragraph}
              </p>
            ))}
          </div>

          <img
            src={portrait}
            alt="Portrait de Manon Arteta"
            className="w-64 rounded-2xl border border-border md:w-80"
          />
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {skills.map((group) => (
            <div key={group.title}>
              <h2 className="mb-3 font-display text-lg font-bold uppercase">
                {group.title}
              </h2>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-4 py-1.5 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="max-w-[65ch] border-l-[3px] border-accent pl-6 text-lg leading-[1.7]">
          Curieuse, réactive et toujours intéressée par de nouveaux projets, je
          souhaite aujourd'hui continuer à développer mes compétences en
          direction artistique et explorer davantage le digital, la vidéo,
          l'animation et la création de contenus.
        </p>
      </Container>
    </section>
  )
}

export default About
