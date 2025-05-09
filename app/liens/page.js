import { FilterByCategories } from './FilterByCategories/FilterByCategories'

export const metadata = {
  title: 'Liens',
  description: 'Planifiez votre séjour à Avoriaz avec des liens utiles sur le ski, les trajets et les activités locales. Filtrez par catégorie pour une expérience sur mesure.',
  alternates: {
    canonical: 'https://avoriazloc.fr/liens',
  },
}

export default function Liens() {
  return (
    <main className="links">
      <h1>Liens utiles pour votre séjour à Avoriaz</h1>
      <FilterByCategories />
    </main>
  )
}
