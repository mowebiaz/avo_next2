'use client'

import { updateDisponibility } from '@/app/actions/prisma_weeks'
import { toast } from 'sonner'
import './UpdateDispoButton.scss'

export function UpdateDispoButton({ week, isChecked }) {
  const handleCheck = async () => {
    const result = await updateDisponibility(week.id, !isChecked)
    if (result?.error) {
      console.log(result.error)
      toast.error(result.error)
    } else {
      toast.success('Dispo mise à jour')
    }
  } 

  return (
    <label
      htmlFor={week.id}
      className="btn-switch"
    >
      <input
        type="checkbox"
        role="switch"
        /*name={id}*/
        id={week.id}
        checked={isChecked}
        onChange={handleCheck}
      />
      {isChecked ? (
        <span className="on">oui</span>
      ) : (
        <span className="off">non</span>
      )}
    </label>
  )
}

