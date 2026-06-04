export const dynamic = 'force-static'

export default function sitemap() {
  const baseUrl = 'https://remotedosimetrist.com'

  const routes = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${baseUrl}/about`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/areas`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/plans`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/process`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/systems`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/how-it-works`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/faq`, priority: 0.75, changeFrequency: 'monthly' },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${baseUrl}/contact`, priority: 0.85, changeFrequency: 'monthly' },
  ]

  return routes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
