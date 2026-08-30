export interface SocialLink {
  label: string
  href: string
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
}

export default site
