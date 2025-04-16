'use client'

import { useState } from 'react'
import { Button, Checkbox } from 'react-aria-components'
import './CookiePreferences.scss'

export function CookiePreferences({ initialConsent, onSave, onCancel }) {
  const [consent, setConsent] = useState(initialConsent)

  return (
    <div className="cookie-modal">
      <p className="title">Préférences de cookies</p>

      <div>
        <label>
          <input
            type="checkbox"
            checked
            disabled
          />
          Essentiels (toujours activés)
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={consent.analytics}
            onChange={(e) =>
              setConsent({ ...consent, analytics: e.target.checked })
            }
          />
          Statistiques (ex: Google Analytics)
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={consent.marketing}
            onChange={(e) =>
              setConsent({ ...consent, marketing: e.target.checked })
            }
          />
          Marketing / tiers (ex: Google Maps)
        </label>
      </div>

      <div className="buttons-container">
        <Button onPress={() => onSave(consent)}>Enregistrer mes choix</Button>
        <Button onPress={onCancel}>Annuler</Button>
      </div>
    </div>
  )
}
