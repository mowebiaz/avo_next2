import { createSeason } from '../../actions/prisma_seasons'

export function AddSeasonForm() {
  return (
    <form action={createSeason}>
      <p>Ajouter une saison:</p>
      <div className="new-week">
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
  )
}
