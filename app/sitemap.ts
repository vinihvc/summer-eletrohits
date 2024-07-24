import { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: 'https://eletrohits.vini.one',
      lastModified: new Date(),
    },
    {
      url: 'https://eletrohits.vini.one/library',
      lastModified: new Date(),
    },
    {
      url: 'https://eletrohits.vini.one/party',
      lastModified: new Date(),
    },
    {
      url: 'https://eletrohits.vini.one/queue',
      lastModified: new Date(),
    },
    ...Array.from({ length: 16 }, (_, i) => ({
      url: `https://eletrohits.vini.one/albums/${i + 1}`,
      lastModified: new Date(),
    })),
  ]
}

export default sitemap
