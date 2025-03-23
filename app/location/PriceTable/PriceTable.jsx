import { prisma } from '@/src/lib/prisma'
import './PriceTable.scss'

export async function PriceTable({ seasonId }) {
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
    <div>
      <h3>{season.name}</h3> 
      <div className="legend">
        <div className="legend-item">
          <span className="square free"></span>
          <p>disponible</p>
        </div>
        <div className="legend-item">
          <span className="square booked"></span>
          <p>déjà réservée</p>
        </div>
      </div>
      <table className="price-table">
        <thead>
          <tr>
            {['Arrivée', 'Départ', 'Prix'].map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks?.map((week) => (
            <tr
              key={week.id}
              className={week.disponibility ? '' : 'booked'}
            >
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
              <td>{week.price}€</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
