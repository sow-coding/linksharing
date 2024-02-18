import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://linkshare.fr',
      priority: 0.2,
    },
    {
      url: 'https://linkshare.fr/linksharing',
      priority: 1,
    }
  ]
}