import { Header } from '@/src/components/Header/Header'
import { Footer } from '@/src/components/Footer/Footer'
import { ReactAriaRouter } from '@/src/context/ReactAriaRouter'
import { CookieBanner } from '@/src/components/CookieBanner/CookieBanner'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'sonner'
import { merienda, raleway } from '@/src/styles/fonts'
import '@/src/styles/globals.scss'

export const metadata = {
  title: {
    template: 'AvoriazLoc | %s',
    default: 'AvoriazLoc', // a default is required when creating a template
  },
  description:
    'Découvrez notre studio à louer à Avoriaz, idéal pour vos vacances en montagne. Vue imprenable et accès direct aux pistes vous attendent !',
  openGraph: {
    type: 'website',
    siteName: 'AvoriazLoc',
    url: 'https://avoriazloc.fr',
  },
  alternates: {
    canonical: 'https://avoriazloc.fr',
  },
}

const jsonLd = {
  '@context': 'http://schema.org/',
  '@type': 'WebSite',
  url: 'https://avoriazloc.fr',
  name: 'AvoriazLoc',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${merienda.variable} ${raleway.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SessionProvider>
          <ReactAriaRouter>
            <Header />
            {children}
            <Footer />
            <CookieBanner />
          </ReactAriaRouter>
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  )
}
