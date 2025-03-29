import { prisma } from '@/src/lib/prisma'
import { AddWeekForm } from '../adminWeek/AddWeekForm/AddWeekForm'
import { DeleteWeekButton } from '../adminWeek/DeleteWeekButton'
import { UpdateDispoButton } from '../adminWeek/UpdateDispoButton/UpdateDispoButton'
import { EditableSeasonTitle } from '../adminSeason/EditableSeasonTitle'
import { DeleteSeasonButton } from '../adminSeason/DeleteSeasonButton/DeleteSeasonButton'
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
        <div className='admin-table-title'>
        <EditableSeasonTitle seasonId={season.id} initialTitle={season.name}/>
        <DeleteSeasonButton season={season} />
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              {['Arrivée', 'Départ', 'Prix (€)', 'Dispo ?', ''].map(
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
