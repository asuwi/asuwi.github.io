export interface SocialLink {
  label: string
  href: string
}

export interface Service {
  title: string
  description: string
  icon: string
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
      icon: '✳',
    },
    {
      title: 'Édition',
      description: 'Magazines, mises en page et supports print',
      icon: '❋',
    },
    {
      title: 'Web & UI/UX',
      description: 'Interfaces modernes, responsives et centrées utilisateur',
      icon: '◎',
    },
    {
      title: 'Réseaux sociaux',
      description: 'Contenus qui captent le regard et engagent',
      icon: '✿',
    },
    {
      title: 'Direction artistique',
      description: 'Grandes idées, art direction et visuels de campagne',
      icon: '✦',
    },
    {
      title: 'Vidéo & animation',
      description: 'Montage, motion et contenus animés',
      icon: '▶',
    },
  ] as Service[],
  stats: [
    { value: '2+', label: 'années d’alternance' },
    { value: '9', label: 'projets réalisés' },
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
