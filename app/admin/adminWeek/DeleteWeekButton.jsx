'use client'

import { deleteWeek } from '@/app/actions/prisma_weeks'
import { toast } from 'sonner'
import { FaTrashAlt } from 'react-icons/fa'

export function DeleteWeekButton({week})  {
const handleClick = async () => {
  const result = await deleteWeek(week)
  if (result?.error) {
    console.log(result.error)
    toast.error(result.error)
  } else {
    toast.success('Semaine supprimée')
  }
} 

  return (
      <button onClick={handleClick} title='Supprimer la semaine'>
        <FaTrashAlt />
      </button>
  )
}
