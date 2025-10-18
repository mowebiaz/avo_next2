export default function robots() {
  const isProd = process.env.VERCEL_ENV === 'production'
  if (!isProd) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/login/',
        '/admin/',
        '/mentions-legales',
        '/politique-de-confidentialite',
      ],
    },
    sitemap: 'https://avoriazloc.fr/sitemap.xml',
  }
}
