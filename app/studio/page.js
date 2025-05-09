import { StudioContent } from './StudioContent/StudioContent'

export const metadata = {
  title: "Studio",
  description: "Découvrez notre studio à louer à Avoriaz, idéalement situé au pied des pistes: photos et équipements.",
  alternates: {
    canonical: 'https://avoriazloc.fr/studio',
  }
}

export default function Studio() {
  return (
    <main className="studio">
      <StudioContent />
    </main>
  )
}