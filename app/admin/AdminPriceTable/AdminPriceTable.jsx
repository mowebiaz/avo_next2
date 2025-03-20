
import { ButtonSwitch } from '@/src/components/ButtonSwitch/ButtonSwitch'
import { FaTrashAlt } from 'react-icons/fa'
import './AdminPriceTable.scss'

export function AdminPriceTable() {

/*   const toggleDispo = (id, newDispo) => {
    updateDispo(id, newDispo)
  } */

  return (
    <>
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              {['Arrivée', 'Départ', 'Prix (€)', 'Dispo ?'].map(
                (header, index) => (
                  <th key={index}>{header}</th>
                )
              )}
              <th key="btn-delete">
                {/* <button onClick={deleteWeeks} disabled={weeksToDelete.length === 0}> */}
                <button>
                  <FaTrashAlt />
                </button>
              </th>
            </tr>
          </thead>
{/*           <tbody>
            {weekList.map((week) => (
              <tr key={week.id}>
                <td>
                  {week.entryDate.toDate().toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                  })}
                </td>
                <td>{addDaysToDate(week.entryDate.toDate())}</td>
                <td>{week.price}</td>

                <td>
                  <ButtonSwitch
                    id={'btn-dispo-' + week.id}
                    isChecked={week.dispo}
                    onToggle={(newDispo) => toggleDispo(week.id, newDispo)}
                  />
                </td>
                <td>
                  <label htmlFor={'btn-delete-' + week.id}>
                    <input
                      type="checkbox"
                      name={'btn-delete-' + week.id}
                      id={'btn-delete-' + week.id}
                      onChange={() => handleCheck(week.id)}
                    />
                  </label>
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    </>
  )
}
