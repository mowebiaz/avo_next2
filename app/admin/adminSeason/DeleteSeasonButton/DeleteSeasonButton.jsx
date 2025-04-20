'use client'

import { useRef } from 'react'
import { deleteSeason } from '@/app/actions/prisma_seasons'
import { toast } from 'sonner'
import { FaTrashAlt } from 'react-icons/fa'
import './DeleteSeasonButton.scss'

export function DeleteSeasonButton({ season }) {
  const refDialog = useRef(null)

  const handleClick = async () => {
    const result = await deleteSeason(season.id)
    if (result?.error) {
      toast.error(result.error)
    } else {
      toast.success('Saison supprimée')
    }
  }

  return (
    <>
      <button
        onClick={() => refDialog.current.showModal()}
        title="Supprimer la saison"
      >
        <FaTrashAlt />
      </button>

      <dialog
        ref={refDialog}
        className="confirm-dialog"
      >
        <form method="dialog">
          <p>
            Supprimer la saison <span>{season.name}</span> et toutes ses
            semaines ?
          </p>
          <div>
            <button
              type="button"
              onClick={() => refDialog.current.close()}
            >
              Non
            </button>
            <button
              type="submit"
              onClick={handleClick}
            >
              Oui
            </button>
          </div>
        </form>
      </dialog>
    </>
  )
}
