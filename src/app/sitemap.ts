import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://linkshare.fr',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://linkshare.fr/login',
      lastModified: new Date(),
      priority: 0.2,
    }
  ]
}