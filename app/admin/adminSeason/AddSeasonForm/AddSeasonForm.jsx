'use client'

import { createSeason } from '@/app/actions/prisma_seasons'
import { toast } from 'sonner'
import './AddSeasonForm.scss'

export function AddSeasonForm() {
  async function handleSubmit(formData) {
    const result = await createSeason(formData)
    if (result?.error) {
      toast.error(result.error)
    } else {
      toast.success('Saison ajoutée')
    }
  }

  return (
    <>
      <p className="form-addSeason-title">Ajouter une saison:</p>
      <form
        action={handleSubmit}
        className="form-addSeason"
      >
        <div className="new-season">
          <div>
            <label htmlFor="name">Nom de la saison</label>
            <input
              type="text"
              id="name"
              name="name"
            />
          </div>
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </>
  )
}
