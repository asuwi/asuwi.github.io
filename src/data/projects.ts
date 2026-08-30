export type Category = 'pro' | 'fictif'

export interface Project {
  slug: string
  title: string
  category: Category
  client?: string
  kind: string
  tags: string[]
  description: string[]
}

export const categoryMeta: Record<
  Category,
  { label: string; path: string; intro: string }
> = {
  pro: {
    label: 'Projets professionnels',
    path: '/projets-professionnels',
    intro:
      "Réalisations menées au sein de l'entreprise OXYPHARM et de ses marques, du print au digital.",
  },
  fictif: {
    label: 'Projets fictifs',
    path: '/projets-fictifs',
    intro:
      "Projets personnels et de cours : identités visuelles, édition et campagnes de sensibilisation.",
  },
}

export const projects: Project[] = [
  {
    slug: 'oxypharm',
    title: 'Oxypharm',
    category: 'pro',
    client: 'Oxypharm',
    kind: 'Identité visuelle',
    tags: ['Identité visuelle', 'Logo', 'Typographie', 'Direction artistique'],
    description: [
      "J'ai eu l'opportunité de participer à la création du logo et de l'identité visuelle de la nouvelle entreprise Oxypharm, née de la fusion de Pharmat et d'Oxypharm.",
      "J'ai contribué aux différentes étapes de conception, notamment à la recherche de la nouvelle palette de couleurs, au choix des typographies et à la création du logo. L'objectif était de proposer une identité moderne, cohérente et adaptée aux attentes de la direction, tout en réunissant l'image des deux entreprises au sein d'une marque commune.",
      "Ce projet d'envergure a représenté une véritable opportunité dans mon parcours de graphiste. Il m'a permis de développer mon organisation, ma capacité de recherche, ma patience ainsi que mon aptitude à prendre en compte les demandes et les retours afin d'aboutir à un résultat pertinent et professionnel.",
    ],
  },
  {
    slug: 'affiche-informative-refonte',
    title: 'Affiche informative & Refonte graphique',
    category: 'pro',
    client: 'Oxypharm',
    kind: 'Affiche & refonte',
    tags: ['Print', 'Affiche', 'Refonte', 'Identité visuelle'],
    description: [
      "Conception d'une affiche informative à partir d'une première proposition générée par IA, qui m'avait été fournie comme base de travail. Ne souhaitant pas conserver une réalisation entièrement générée par IA, j'ai proposé de reprendre l'affiche de A à Z afin de créer une composition plus personnelle et adaptée aux besoins de l'entreprise.",
      "À la suite de sa fusion, j'ai également décliné l'affiche selon la nouvelle identité visuelle, en retravaillant les couleurs, la typographie et la mise en page.",
    ],
  },
  {
    slug: 'la-fresque',
    title: 'La Fresque',
    category: 'pro',
    client: 'Oxypharm',
    kind: 'Fresque grand format',
    tags: ['Grand format', 'Fresque', 'Identité visuelle', 'Signalétique'],
    description: [
      "À la suite de la confiance que mon entreprise m'a accordée pour la création du nouveau logo et de la nouvelle identité visuelle, réalisés en collaboration avec ma collègue, j'ai eu l'opportunité de concevoir la fresque installée au sein du siège principal d'OXYPHARM.",
      "Ce projet m'a permis de prolonger l'univers graphique de la nouvelle identité à travers une réalisation grand format, pensée pour s'intégrer naturellement dans les espaces de l'entreprise.",
    ],
  },
  {
    slug: 'planning-formation',
    title: 'Planning de formation',
    category: 'pro',
    client: 'MasterPharm',
    kind: 'Planning de formation',
    tags: ['Print', 'Mise en page', 'Édition'],
    description: [
      "Conception d'un planning de formation pour MasterPharm, pensé sur un format A3 plié en deux.",
      "La mise en page a été conçue pour rester facilement ajustable, permettant d'adapter les contenus et les informations en fonction des différentes formations.",
    ],
  },
  {
    slug: 'pacha',
    title: 'Pacha',
    category: 'fictif',
    client: 'SPA',
    kind: 'Identité visuelle & Édition',
    tags: ['Identité visuelle', 'Éditorial', 'Illustration', 'Branding'],
    description: [
      "Pacha est un projet qui me tient particulièrement à cœur. Bien qu'il soit fictif, il a été imaginé comme une marque directement développée par la SPA : une chaîne de cafés à chats permettant de rencontrer et d'adopter des animaux recueillis par les refuges.",
      "L'objectif de Pacha n'est pas de présenter les chats comme une simple attraction, mais de placer l'adoption responsable au centre de l'expérience et de la communication. Le projet est né d'un constat personnel : la communication de la SPA peut parfois être perçue comme culpabilisante, tandis que l'environnement des refuges, marqué par les cages, le bruit et le stress, ne facilite pas toujours une rencontre douce et progressive entre le visiteur et l'animal.",
      "Les refuges étant également souvent situés en périphérie des villes, leur accès peut être difficile pour les étudiants, les personnes sans véhicule ou les habitants des centres-villes. Pacha propose donc un lieu plus accessible, chaleureux et apaisant, dans lequel chacun peut prendre le temps de créer un véritable lien avec un chat avant d'envisager son adoption.",
      "L'identité visuelle de Pacha repose principalement sur une approche éditoriale. Les compositions jouent avec la hiérarchie des informations, le rythme des mises en page et l'association entre textes et illustrations. Une typographie expressive, épaisse et impactante est utilisée pour capter immédiatement le regard, donner du caractère à la marque et créer une identité facilement reconnaissable.",
      "Cet univers graphique mêle une esthétique rétro et actuelle, accompagnée de couleurs vintage choisies pour créer une ambiance chaleureuse et mémorable. L'illustration occupe également une place centrale dans les supports de communication. Son aspect fait main permet d'humaniser la marque, de rassurer les futurs adoptants et de transmettre les valeurs de douceur, de proximité et de bienveillance portées par Pacha.",
      "À travers cette identité soignée et sensible, Pacha souhaite montrer que l'attention portée à la marque reflète également celle accordée au bien-être des chats.",
    ],
  },
  {
    slug: 'hors-ondes',
    title: 'Hors Ondes',
    category: 'fictif',
    kind: 'Magazine — Design éditorial',
    tags: ['Éditorial', 'Magazine', 'Mise en page', 'Typographie'],
    description: [
      "Dans le cadre d'un projet de cours, j'ai conçu Hors Ondes, un magazine consacré à la nouvelle scène du rap français.",
      "Ce projet m'a permis de travailler la mise en page, le design éditorial, la retouche photographique ainsi que la typographie. J'ai notamment développé la hiérarchisation des contenus, le rythme des compositions et l'adaptation des images en fonction de leur disposition.",
      "Passionnée par le graphisme éditorial, cette réalisation m'a permis d'approfondir mes compétences tout en explorant un univers visuel qui me correspond.",
    ],
  },
  {
    slug: 'emily-in-paris',
    title: 'Emily in Paris',
    category: 'fictif',
    kind: 'Affiche promotionnelle',
    tags: ['Affiche', 'Photoshop', 'Retouche', 'Typographie'],
    description: [
      "Dans le cadre de ce projet, j'ai réalisé une affiche promotionnelle destinée à annoncer la sortie d'une série Netflix.",
      "Cette création m'a permis d'approfondir ma maîtrise de Photoshop à travers différentes techniques : retouche photographique, incrustation d'images, détourage, masques d'écrêtage, travail typographique et ajout d'ombres portées. L'objectif était de construire une composition immersive et cohérente, proche des codes visuels utilisés pour la promotion des séries.",
      "Ce projet m'a demandé de la patience et de la détermination, notamment face aux difficultés techniques rencontrées. Il m'a néanmoins permis de progresser et d'aboutir à un résultat final convaincant.",
    ],
  },
  {
    slug: 'tourn3sol',
    title: 'Tourn3sol',
    category: 'fictif',
    kind: "Pochette d'album",
    tags: ['Direction artistique', 'Photographie', 'Pochette', 'Typographie'],
    description: [
      "Dans le cadre d'un workshop consacré à la photographie, nous devions imaginer un projet autour de l'affiche cinématographique ou de la pochette d'album.",
      "Passionnée par la musique et par l'univers visuel des covers, j'ai choisi de concevoir une pochette inspirée du rock et du rap français actuel. Ce projet m'a permis de développer une direction artistique complète, de la création de la scénographie à la prise de vue, en passant par la retouche photographique et le travail typographique.",
      "J'ai particulièrement apprécié cette réalisation, car elle m'a permis de maîtriser chaque étape de conception afin d'aboutir à un véritable visuel de cover.",
    ],
  },
  {
    slug: 'les-tca-ne-sont-pas-des-caprices',
    title: 'Les TCA ne sont pas des caprices',
    category: 'fictif',
    kind: 'Campagne de sensibilisation',
    tags: ['Campagne', 'Sensibilisation', 'Illustration', 'Affiche'],
    description: [
      "Dans le cadre d'un projet de sensibilisation consacré aux troubles psychologiques et mentaux, j'ai choisi de travailler sur les troubles du comportement alimentaire.",
      "L'objectif était de rendre l'information accessible au plus grand nombre, quels que soient l'âge ou les éventuelles difficultés de lecture. J'ai donc privilégié un langage visuel simple et direct, fondé sur l'illustration, afin de faciliter la compréhension du message et de renforcer l'impact de la campagne. Le travail typographique repose également sur la mise en valeur de certains mots-clés grâce au soulignement, permettant une lecture rapide et une meilleure hiérarchisation de l'information.",
      "Cette campagne se décline à travers une affiche institutionnelle inspirée des communications du ministère de la Santé, ainsi qu'une publication destinée aux réseaux sociaux, notamment Instagram.",
    ],
  },
]

export function getProjects(category: Category): Project[] {
  return projects.filter((p) => p.category === category)
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
