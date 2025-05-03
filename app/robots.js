export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/login/', '/admin/', '/mentions-legales', '/politique-de-confidentialite']
    },
    sitemap: 'https://avoriazloc.fr/sitemap.xml',
  }
}