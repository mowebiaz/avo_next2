import { createSeason } from '@/app/actions/prisma_seasons'
import './AddSeasonForm.scss'

export function AddSeasonForm() {
  return (
    <>
    <p className="form-addSeason-title">Ajouter une saison:</p>
    <form
      action={createSeason}
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
