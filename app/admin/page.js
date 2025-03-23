import { prisma } from '@/src/lib/prisma'
import { AdminPriceTable } from './AdminPriceTable/AdminPriceTable'
import { ButtonLogout } from './ButtonLogout/ButtonLogout'
import { AddSeasonForm } from './adminSeason/AddSeasonForm'

export default async function Admin() {
const seasons = await prisma.season.findMany()

  return (
    <main className="admin">
      <ButtonLogout />
      <h1>Gestion des réservations</h1>
      {seasons.map((season) => (
        <AdminPriceTable key={season.id} seasonId={season.id} />
      ))}
      <AddSeasonForm />
    </main>
  )
}
