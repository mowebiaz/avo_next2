'use client'

import { useState } from "react"
import { getConsent, saveConsent } from "../CookieBanner/cookies"
import { CookiePreferences } from "../CookiePreferences/CookiePreferences"
import { Button } from "react-aria-components"
import { notifyCookieConsentChange } from "../../lib/utils/cookieConsentEmitter"
import "./CookieSettingsButton.scss"

export function CookieSettingsButton() {
  const [showPreferences, setShowPreferences] = useState(false)
  const [consent, setConsent] = useState(getConsent())

  const handleConsent = (newConsent) => {
    const updatedConsent = { ...newConsent, consentedAt: new Date().toISOString() }
    saveConsent(updatedConsent)
    setConsent(updatedConsent)
    notifyCookieConsentChange(updatedConsent)
    setShowPreferences(false)
  }

  return (
    <>
      <Button className="cookie-settings-button" onPress={() => setShowPreferences(true)}>
        Gérer mes cookies
      </Button>

      {showPreferences && (
        <CookiePreferences
          initialConsent={consent}
          onSave={handleConsent}
          onCancel={() => setShowPreferences(false)}
        />
      )}
    </>
  )
}
