'use client'

import { updateDisponibility } from '@/app/actions/prisma_weeks'
import { useOptimistic, useTransition } from 'react'
import { toast } from 'sonner'
import './UpdateDispoButton.scss'

export function UpdateDispoButton({ week, isChecked }) {
  const [optimisticChecked, setOptimisticChecked] = useOptimistic(
    isChecked,
    (_current, newValue) => newValue,
  )
  const [isPending, startTransition] = useTransition()

  const handleCheck = () => {
    setOptimisticChecked(!optimisticChecked)
    startTransition(async () => {
      const result = await updateDisponibility(week.id, !optimisticChecked)
      if (result?.error) {
        setOptimisticChecked(isChecked)
        console.log(result.error)
        toast.error(result.error)
      } else {
        toast.success('Dispo mise à jour')
      }
    })
  }

  return (
    <label
      htmlFor={week.id}
      className={`btn-switch ${isPending ? 'btn-switch--pending' : ''}`}
    >
      <input
        type="checkbox"
        role="switch"
        /*name={id}*/
        id={week.id}
        checked={optimisticChecked}
        onChange={handleCheck}
        disabled={isPending}
      />

      {isPending ? (
        <span className="loading"></span>
      ) : optimisticChecked ? (
        <span className="on">oui</span>
      ) : (
        <span className="off">non</span>
      )}
    </label>
  )
}
