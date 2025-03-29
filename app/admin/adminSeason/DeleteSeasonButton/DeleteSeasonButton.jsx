'use client'

import { useRef } from 'react'
import { deleteSeason } from '@/app/actions/prisma_seasons'
import { FaTrashAlt } from 'react-icons/fa'
import './DeleteSeasonButton.scss'

export function DeleteSeasonButton({ season }) {
  const refDialog = useRef(null)

  const handleClick = async () => {
    await deleteSeason(season.id)
    //alert('saison supprimée')
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
          <p>Supprimer la saison <span>{season.name}</span>  et toutes ses semaines ?</p>
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
