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
  role: '',
  location: undefined as string | undefined,
  email: undefined as string | undefined,
  emailHref: 'mailto:manon.arteta@gmail.com?subject=Demande%20de%20contact',
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/manon-arteta' },
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
      quote: 'Si vous cherchez une graphiste créative, motivée et super agréable à côtoyer, je vous recommande vivement Manon, toujours pleine d’idées, à l’écoute, réactive et avec un vrai sens du détail et toujours avec le sourire.',
      name: 'Salomé ETHEVE',
      role: 'Équipe OXYPHARM',
    },
    {
      quote: 'Manon possède un véritable œil artistique, qu’elle met au service de projets variés avec une grande justesse. Elle sait allier esthétique et efficacité, tout en restant à l’écoute des besoins du client ou de l’équipe.',
      name: 'Raphaël LEMEYEUR',
      role: 'Équipe OXYPHARM',
    }
  ] as Testimonial[],
}

export default site
