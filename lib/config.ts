export type SiteConfig = typeof siteConfig

const siteURL = 'https://get-linked-zia.vercel.app'
const name = 'GetLinked'

export const siteConfig = {
  name,
  description:
    'Step into a world of endless possibilities at Getlinked , An AI powered platform dedicated to connecting exceptional talents with forward-thinking employers, creating a harmonious synergy that breeds success.',
  url: siteURL,
  ogImage: {
    image: `${siteURL}/og.png`,
    width: 1800,
    height: 945,
  },
  keywords: [name, 'AI', 'Solutions', 'link', 'network'],
}
