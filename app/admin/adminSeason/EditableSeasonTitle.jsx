'use client'

import { useState, useTransition } from 'react'
import { updateSeason } from '../../actions/prisma_seasons'
import { toast } from 'sonner'
import { FaRegPenToSquare } from 'react-icons/fa6'

export function EditableSeasonTitle({ seasonId, initialTitle }) {
  const [title, setTitle] = useState(initialTitle)
  const [isEditing, setIsEditing] = useState(false)
  const [tempTitle, setTempTitle] = useState(initialTitle)
  const [isPending, startTransition] = useTransition()

  const handleBlur = () => {
    if (tempTitle === title) {
      setIsEditing(false)
      return
    }

    startTransition(async () => {
      const result = await updateSeason(seasonId, tempTitle)

      if (result?.error) {
        toast.error(result.error)
        setTempTitle(title) // rollback
      } else {
        setTitle(tempTitle)
        toast.success('Titre mis à jour !')
      }
    })

    setIsEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur() // déclenche handleBlur
    } else if (e.key === 'Escape') {
      setTempTitle(title)
      setIsEditing(false)
    }
  }

  return (
    <>
      {isEditing ? (
        <input
          type="text"
          value={tempTitle}
          onChange={(e) => setTempTitle(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          disabled={isPending}
        />
      ) : (
        <>
          <h2>{title}</h2>
          <button
            onClick={() => setIsEditing(true)}
            title='Modifier le titre'
            aria-label="Modifier le titre"
          >
            <FaRegPenToSquare />
          </button>
        </>
      )}
      </>
  )
}
