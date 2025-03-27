import { prisma } from '@/src/lib/prisma'
import { AddWeekForm } from '../adminWeek/AddWeekForm/AddWeekForm'
import { DeleteWeekButton } from '../adminWeek/DeleteWeekButton'
import { UpdateDispoButton } from '../adminWeek/UpdateDispoButton/UpdateDispoButton'
import './AdminPriceTable.scss'

export async function AdminPriceTable({ seasonId }) {
  const season = await prisma.season.findUnique({
    where: {
      id: seasonId,
    },
  })

  const weeks = await prisma.week.findMany({
    where: {
      seasonId: seasonId,
    },
    orderBy: {
      entryDate: 'asc',
    },
  })

  return (
    <>
      <div className="admin-table-container">
        <div className="admin-table-title">
          <h2>{season.name}</h2>
          <button>Modifier</button>
          <button>Supprimer</button>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              {['Arrivée', 'Départ', 'Prix (€)', 'Dispo ?', 'Supprimer'].map(
                (header, index) => (
                  <th key={index}>{header}</th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {weeks?.map((week) => (
              <tr key={week.id}>
                <td>
                  {week.entryDate.toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                  })}
                </td>

                <td>
                  {week.exitDate.toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                  })}
                </td>

                <td>{week.price}</td>

                <td>
                  <UpdateDispoButton 
                  week={week} isChecked={week.disponibility} />
                </td>
                <td>
                  <DeleteWeekButton 
                  week={week.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <AddWeekForm season={seasonId} />
      </div>
    </>
  )
}
