'use client'

import { GoogleMapsEmbed } from '@next/third-parties/google'
import { getConsent } from '../CookieBanner/cookies'
import { useEffect, useState } from 'react'
import { CookieSettingsButton } from '../CookieSettingsButton/CookieSettingsButton'
import { subscribeCookieConsentChange } from '../../lib/utils/cookieConsentEmitter'
import { GoogleMapsIcon } from '@/public/icons/GoogleMapsIcon'
import './mapGoogle.scss'

export function MapGoogle() {
  const [consent, setConsent] = useState(getConsent())

  useEffect(() => {
    const unsubscribe = subscribeCookieConsentChange((newConsent) => {
      setConsent(newConsent)
    })
    return () => unsubscribe()
  }, [])

  if (!consent || !consent.marketing) {
    return (
      <div className="no-map">
        <GoogleMapsIcon />
        <p>
          Afin de voir la carte, vous devez accepter les cookies marketing/tiers:
        </p>
        <CookieSettingsButton />
      </div>
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
