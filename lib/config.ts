export type SiteConfig = typeof siteConfig

const siteURL = 'stevee.vercel.app'
const name = 'Steve Denkinger'

export const siteConfig = {
  name,
  description: 'This a painting of retired baseball players. Click on the faces to see more information.',
  url: siteURL,
  manifestFile: `${siteURL}/site.webmanifest`,
  ogImage: {
    image: `${siteURL}/og.png`,
    width: 1800,
    height: 945,
  },
  keywords: [name, 'Base ball', 'Team', 'Player'],
}
