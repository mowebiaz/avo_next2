'use client'

import { FaTrashAlt } from 'react-icons/fa'
import { deleteWeek } from '@/app/actions/prisma_weeks'

export function DeleteWeekButton({weekId})  {
const handleClick = async () => {
  await deleteWeek(weekId)
  alert('semaine supprimée')
}

  return (
      <button onClick={handleClick}>
        <FaTrashAlt />
      </button>
  )
}
