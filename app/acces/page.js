import { ButtonsContainer } from '@/app/acces/ButtonsContainer/ButtonsContainer'
import { AccesContent } from '@/app/acces/AccesContent/AccesContent'

export const metadata = {
  title: 'Accès',
  description:
    'Comment accéder au studio et à Avoriaz. Informations sur les transports, carte, horaires des téléphériques et parkings disponibles',

  alternates: {
    canonical: 'https://avoriazloc.fr/acces',
  },
}

export default function Acces() {
  return (
    <main className="acces">
      <h1>Accès à la Station d&apos;Avoriaz et au Studio</h1>
      <ButtonsContainer />
      <AccesContent />
    </main>
  )
}
