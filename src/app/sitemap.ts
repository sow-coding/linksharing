import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://linkshare.fr',
      priority: 1,
    },
    {
      url: 'https://linkshare.fr/login',
      priority: 0.2,
    }
  ]
}