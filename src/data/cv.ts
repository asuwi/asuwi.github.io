export interface Experience {
  title: string
  company: string
  location?: string
  start: string
  end?: string
  months?: number
  bullets: string[]
}

export interface Education {
  degree: string
  school: string
  location?: string
  start: string
  end?: string
  details?: string
  result?: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Language {
  name: string
  level: string
}

export interface Cv {
  name: string
  title: string
  summary: string
  email: string
  phone?: string
  location?: string
  website: string
  linkedin?: string
  experiences: Experience[]
  education: Education[]
  skills: SkillGroup[]
  languages: Language[]
  interests?: string[]
}

export const cv: Cv = {
  name: 'Manon ARTETA',
  title: 'Graphiste & Direction artistique',
  summary:
    "Graphiste diplômée d'une licence en design graphique. À la recherche d'une alternance afin de poursuivre mes études en Master Direction Artistique Communication 360 à LISAA Paris.\n Autonome, créative et polyvalente, je maîtrise la suite Adobe ainsi que Figma, Framer, la vidéo et la création de contenus.",
  email: 'manon.arteta@gmail.com',
  website: 'https://manonart.fr',
  experiences: [
    {
      title: 'Graphiste - Alternance',
      company: 'OXYPHARM',
      location: 'Montpellier',
      start: '2024',
      end: '2026',
      bullets: [
        "Création de l'identité visuelle (logo, palette, typographies, déclinaison) suite à la fusion Pharmat / Oxypharm",
        'Conception de la fresque murale du siège principal',
        'Réalisation de supports print et digitaux : affiches, brochures, roll-up, invitations',
        'Gestion des réseaux sociaux, newsletters et contenus interactifs',
        "Conception d'un planning de formation (format A3) pour MasterPharm",
      ],
    },
    {
      title: 'Graphiste - Stage',
      company: 'Mairie de Meudon',
      location: 'Meudon',
      start: '2022',
      end: '2022',
      months: 2,
      bullets: [
        "Réalisation d'un roll-up et d'une affiche pour l'exposition Maria Papa",
        "Conception d’une brochure et d’un flyer publicitaire pour le centre social",
      ],
    },
    {
      title: 'Graphiste - Stage',
      company: 'Projet Cartylion',
      location: 'Meudon',
      start: '2022',
      end: '2022',
      months: 1,
      bullets: [
        "Infographie et Community management pour la marque de jeux de société Cartylion",
        "Création de contenus pour les réseaux sociaux",
        "Gestion des réseaux sociaux"
      ]
    },
  ],
  education: [
    {
      degree: 'Master Direction Artistique Communication 360',
      school: 'LISAA',
      location: 'Paris',
      start: '2026',
      end: 'Aujourd\'hui',
      details: "En recherche d'alternance",
    },
    {
      degree: 'Licence Design Graphique',
      school: 'ESDAC',
      location: 'Montpellier',
      start: '2024',
      end: '2026',
      details: 'Formation en alternance axée sur la créativité, la réflexion et la conception de projets print et digitaux.',
      result: 'Obtenue',
    },
    {
      degree: 'Bac. Professionnel - RPIP Production Graphique',
      school: 'Lycée Claude-Garamont',
      location: 'Paris',
      start: '2019',
      end: '2022',
      details: 'Formation axée sur les techniques de production graphique, la mise en page et les bases du design print.',
      result: 'Mention Bien',
    },
  ],
  skills: [
    {
      category: 'Design & illustration',
      items: ['Photoshop', 'Illustrator', 'Procreate', 'Illustration', 'Character design'],
    },
    {
      category: 'Maquette & édition',
      items: ['InDesign', 'Canva', 'Mise en page', 'Print', 'Design éditorial'],
    },
    {
      category: 'Web & UI/UX',
      items: ['Figma', 'Framer', 'HTML5', 'CSS3', 'Stripo', 'Création de maquettes'],
    },
    {
      category: 'Vidéo & motion',
      items: ['After Effects', 'Premiere Pro', 'CapCut', 'Motion design'],
    },
    {
      category: 'Direction artistique',
      items: ['Identité visuelle', 'Concept', 'Storytelling', 'Typographie', 'Stratégie de marque'],
    },
    {
      category: 'Réseaux sociaux',
      items: ['Community management', 'Création de contenus', 'Newsletters'],
    },
    {
      category: 'Bureautique',
      items: ['Word', 'Excel', 'PowerPoint'],
    },
  ],
  languages: [
    { name: 'Français', level: 'Langue maternelle' },
    { name: 'Anglais', level: 'Compréhension écrite et orale, expression écrite' },
  ],
  interests: ["Animaux de compagnie", 'Art', 'Cinéma', 'Design', "Musique", 'Photographie', 'Voyages'],
}
