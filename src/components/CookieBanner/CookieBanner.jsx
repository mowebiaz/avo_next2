'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { Button, Link } from 'react-aria-components'
import { getConsent, saveConsent } from './cookies'
import { CookiePreferences } from './CookiePreferences'
import './CookieBanner.scss'

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [consent, setConsent] = useState(null)

  // Vérifie lors du montage si un choix a déjà été enregistré
  useEffect(() => {
    const storedConsent = getConsent()
    // On considère qu'un choix a été fait si une date de consentement est présente
    if (!storedConsent.consentedAt) {
      setShowBanner(true)
    }
    setConsent(storedConsent)
  }, [])

  // Dès que le consentement est disponible et pour le cas Analytics, on met à jour le Consent Mode v2
  useEffect(() => {
    if (consent && consent.analytics) {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          ad_storage: consent.marketing ? 'granted' : 'denied',
          analytics_storage: 'granted',
          ad_user_data: consent.marketing ? 'granted' : 'denied',
          ad_personalization: consent.marketing ? 'granted' : 'denied',
        })
      }
    }
  }, [consent])


  // Fonction pour gérer le choix de l'utilisateur
  const handleConsent = (newConsent) => {
    const updatedConsent = { ...newConsent, consentedAt: new Date().toISOString() }
    saveConsent(updatedConsent)
    setConsent(updatedConsent)
    setShowBanner(false)
    setShowPreferences(false)
  }

  return (
    <>
      <Script
        id="consent-mode-init"
        strategy="beforeInteractive"
      >
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
      'ad_storage': 'denied',
      'analytics_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied'
    });
  `}
      </Script>

       {/* Si le consentement pour analytics est activé, on charge Google Analytics */}
       {consent && consent.analytics && (
        <>
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-R8XF1ZDVGT"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R8XF1ZDVGT', { page_path: window.location.pathname });
            `}
          </Script>
        </>
      )}

      {showBanner && (
        <div className="cookie-banner">
          <p>
            Ce site utilise des cookies pour vous fournir une meilleure
            expérience de navigation. En continuant à utiliser ce site, vous
            acceptez l&apos;utilisation de cookies. Voir notre{' '}
            <Link
              href="/politique-de-confidentialite"
              className="link"
            >
              politique de confidentialité
            </Link>
            .
          </p>
          <div className="buttons">
            <Button
              onPress={() =>
                handleConsent({
                  essential: true,
                  analytics: true,
                  marketing: true,
                })
              }
            >
              Tout Accepter
            </Button>
            <Button
              onPress={() =>
                handleConsent({
                  essential: true,
                  analytics: false,
                  marketing: false,
                })
              }
            >
              Tout Refuser
            </Button>
            <Button onPress={() => setShowPreferences(true)}>
              Personnaliser
            </Button>
          </div>
          {showPreferences && (
        <CookiePreferences
          initialConsent={
            consent || { essential: true, analytics: false, marketing: false }
          }
          onSave={(updatedConsent) => handleConsent(updatedConsent)}
          onCancel={() => setShowPreferences(false)}
        />
      )}
        </div>
      )}
    </>
  )
}
