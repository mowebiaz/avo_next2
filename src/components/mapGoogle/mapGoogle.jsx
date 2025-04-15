'use client'

import { GoogleMapsEmbed } from '@next/third-parties/google'
import { GoogleMapsIcon } from '@/public/icons/GoogleMapsIcon'
import { getConsent } from '../CookieBanner/cookies'
import { useEffect, useState } from 'react'
import './mapGoogle.scss'

export function MapGoogle() {
  const [consent, setConsent] = useState(null)

  useEffect(() => {
    const consentStatus = getConsent()
    setConsent(consentStatus)
  }, [])

  if (!consent || !consent.marketing) {
    return (
      <p>Il faut accepter les cookies marketing/tiers avant de voir la carte</p>
    )
  }

  return (
    <div className="map-google">
      <GoogleMapsEmbed
        apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}
        mode="place"
        q="159 Cor des Hauts Forts, 74110 Avoriaz, France"
        zoom="16"
        width="100%"
        style={{ display: 'flex', justifyContent: 'center' }}
      />
    </div>
  )
}
