import { Header } from '@/src/components/Header/Header'
import { Footer } from '@/src/components/Footer/Footer'
import { ReactAriaRouter } from '@/src/context/ReactAriaRouter'
import { CookieBanner } from '@/src/components/CookieBanner/CookieBanner'
import { Toaster } from 'sonner'
import { merienda, raleway } from '@/src/styles/fonts'
import '@/src/styles/globals.scss'

export const metadata = {
  title: {
    template: 'AvoriazLoc | %s',
    default: 'AvoriazLoc', // a default is required when creating a template
  },
  description:
    'Location de studio à Avoriaz - Studio confortable au pied des pistes',
  openGraph: {
    type: 'website',
    siteName: 'AvoriazLoc',
    url: 'https://avoriazloc.fr',
  },
  alternates: {
    canonical: 'https://avoriazloc.fr',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${merienda.variable} ${raleway.variable}`}>
        <ReactAriaRouter>
          <Header />
          {children}
          <Footer />
          <CookieBanner />
        </ReactAriaRouter>
        <Toaster />
      </body>
    </html>
  )
}
