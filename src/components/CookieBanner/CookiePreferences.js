'use client'

import { useState } from 'react'
import { Button } from 'react-aria-components'

export function CookiePreferences({ initialConsent, onSave, onCancel }) {
  const [consent, setConsent] = useState(initialConsent)

  return (
    <div className="cookie-modal">
      <h2>Préférences de cookies</h2>

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
          Cookies de statistiques (ex: Google Analytics)
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
          Cookies marketing / tiers (ex: Google Maps)
        </label>
      </div>

      <div className="buttons">
        <Button onPress={() => onSave(consent)}>Enregistrer mes choix</Button>
        <Button onPress={onCancel}>Annuler</Button>
      </div>
    </div>
  )
}
