import { auth } from "@/auth"
import { LogoutButton } from '../../src/components/auth/LogoutButton/LogoutButton'
import { AdminPriceTable } from './AdminPriceTable/AdminPriceTable'
import { AddSeasonForm } from './adminSeason/AddSeasonForm/AddSeasonForm'
import { getSortedSeasonsByEntryDate } from '@/src/lib/utils/getSortedSeasonsByEntryDate'
import { ButtonLink } from '@/src/components/ButtonLink/ButtonLink'
import './page.scss'

export default async function Admin() {
  const seasons = await getSortedSeasonsByEntryDate()

  const session = await auth()

  if (!session?.user?.email || session.user.email !== process.env.ADMIN_EMAIL) {
    return (
      <main className="admin-unauthorized">
        <h1>Vous devez être connecté pour accéder à cette page</h1>
        <ButtonLink href="/login" className="button-link-router">Se connecter</ButtonLink>
      </main>
    )
  }

  return (
    <main className="admin">
      <LogoutButton />
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
