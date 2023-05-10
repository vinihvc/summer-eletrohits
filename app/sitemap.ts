import { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: 'https://eletrohits.viniciusvicentini.com',
      lastModified: new Date(),
    },
    {
      url: 'https://eletrohits.viniciusvicentini.com/library',
      lastModified: new Date(),
    },
    {
      url: 'https://eletrohits.viniciusvicentini.com/party',
      lastModified: new Date(),
    },
    {
      url: 'https://eletrohits.viniciusvicentini.com/queue',
      lastModified: new Date(),
    },
    ...Array.from({ length: 16 }, (_, i) => ({
      url: `https://eletrohits.viniciusvicentini.com/albums/${i + 1}`,
      lastModified: new Date(),
    })),
  ]
}

export default sitemap
