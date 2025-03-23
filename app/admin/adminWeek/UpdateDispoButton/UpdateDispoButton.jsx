'use client'

import { updateDisponibility } from '@/app/actions/prisma_weeks'
import './UpdateDispoButton.scss'

export function UpdateDispoButton({ week, isChecked }) {
  const handleCheck = async () => {
    await updateDisponibility(week.id, !isChecked)
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

