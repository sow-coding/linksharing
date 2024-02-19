import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://linkshare.fr',
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },
    {
      url: 'https://linkshare.fr/login',
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.2,
    }
  ]
}