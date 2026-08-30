import { projects } from './projects'

export interface SocialLink {
  label: string
  href: string
}

export type ServiceIcon =
  | 'poster'
  | 'pencil'
  | 'screen'
  | 'link'
  | 'palette'
  | 'play'

export interface Service {
  title: string
  description: string
  icon: ServiceIcon
}

export interface Stat {
  value: string
  label: string
}

export interface Testimonial {
  quote: string
  name: string
    role: string
}

const site = {
  name: 'Manon Arteta',
  role: 'Graphiste & Direction artistique',
  location: undefined as string | undefined,
  email: undefined as string | undefined,//'manon.arteta@gmail.com',
  emailHref: 'mailto:manon.arteta@example.com',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/' },
    { label: 'Behance', href: 'https://behance.net/' },
  ] as SocialLink[],
  services: [
    {
      title: 'Identité visuelle',
      description: 'Logo, système visuel et stratégie de marque',
      icon: 'poster',
    },
    {
      title: 'Édition',
      description: 'Magazines, mises en page et supports print',
      icon: 'pencil',
    },
    {
      title: 'Web & UI/UX',
      description: 'Interfaces modernes, responsives et centrées utilisateur',
      icon: 'screen',
    },
    {
      title: 'Réseaux sociaux',
      description: 'Contenus qui captent le regard et engagent',
      icon: 'link',
    },
    {
      title: 'Direction artistique',
      description: 'Grandes idées, art direction et visuels de campagne',
      icon: 'palette',
    },
    {
      title: 'Vidéo & animation',
      description: 'Montage, motion et contenus animés',
      icon: 'play',
    },
  ] as Service[],
  stats: [
    { value: '2+', label: 'années d’alternance' },
    { value: String(projects.length), label: 'projets réalisés' },
    { value: '6', label: 'domaines créatifs' },
    { value: '100%', label: 'curieuse & réactive' },
  ] as Stat[],
  testimonials: [
    {
      quote: 'Manon a su donner une vraie cohérence à notre identité, du print au digital.',
      name: 'Équipe OXYPHARM',
      role: 'Entreprise d’alternance',
    },
    {
      quote: 'Une graphiste à l’écoute, créative et toujours force de proposition.',
      name: 'Enseignants LISAA',
      role: 'École de design',
    },
    {
      quote: 'Le souci du détail et la qualité de ses propositions font la différence.',
      name: 'MasterPharm',
      role: 'Client print',
    },
  ] as Testimonial[],
}

export default site
