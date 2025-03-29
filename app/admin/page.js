import { AdminPriceTable } from './AdminPriceTable/AdminPriceTable'
import { ButtonLogout } from './ButtonLogout/ButtonLogout'
import { AddSeasonForm } from './adminSeason/AddSeasonForm/AddSeasonForm'
import { getSortedSeasonsByEntryDate } from '@/src/lib/utils/getSortedSeasonsByEntryDate'

export default async function Admin() {
  const seasons = await getSortedSeasonsByEntryDate()

  return (
    <main className="admin">
      <ButtonLogout />
      <h1>Gestion des réservations</h1>
      {seasons.map((season) => (
        <AdminPriceTable
          key={season.id}
          seasonId={season.id}
        />
      ))}
      <AddSeasonForm />
    </main>
  )
}
