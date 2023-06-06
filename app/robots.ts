import { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://eletrohits.viniciusvicentini.com',
    sitemap: 'https://eletrohits.viniciusvicentini.com/sitemap.xml',
  }
}

export default robots
