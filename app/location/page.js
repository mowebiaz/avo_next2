import { LocationContent } from './LocationContent/LocationContent'

export const metadata = {
  title: 'Location',
  description:
    'Les tarifs et disponibilités de notre studio à Avoriaz. Accédez à des informations pratiques pour faciliter votre séjour en toute sérénité.',
    
  alternates: {
    canonical: 'https://avoriazloc.fr/location',
  },
}

export default function Location() {
  return (
    <main className="location">
      <LocationContent />
    </main>
  )
}
