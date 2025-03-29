'use client'

import { FaTrashAlt } from 'react-icons/fa'
import { deleteWeek } from '@/app/actions/prisma_weeks'

export function DeleteWeekButton({week})  {
const handleClick = async () => {
  await deleteWeek(week)
  //alert('semaine supprimée')
} 

  return (
      <button onClick={handleClick} title='Supprimer la semaine'>
        <FaTrashAlt />
      </button>
  )
}
