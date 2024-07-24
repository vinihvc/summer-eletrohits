import { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://eletrohits.vini.one',
    sitemap: 'https://eletrohits.vini.one/sitemap.xml',
  }
}

export default robots
