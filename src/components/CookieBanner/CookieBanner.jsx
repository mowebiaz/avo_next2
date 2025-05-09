'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { Button, Link } from 'react-aria-components'
import { getConsent, saveConsent } from './cookies'
import { CookiePreferences } from '../CookiePreferences/CookiePreferences'
import {
  notifyCookieConsentChange,
  subscribeCookieConsentChange,
} from '../../lib/utils/cookieConsentEmitter'
import './CookieBanner.scss'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [consent, setConsent] = useState(null)

  useEffect(() => {
    const storedConsent = getConsent()
    if (!storedConsent.consentedAt) {
      setShowBanner(true)
    }
    setConsent(storedConsent)
  }, [])

  // Subscribe to consent changes to update banner display
  useEffect(() => {
    const unsubscribe = subscribeCookieConsentChange((newConsent) => {
      setConsent(newConsent)
      if (newConsent && newConsent.consentedAt) {
        setShowBanner(false)
      } else {
        setShowBanner(true)
      }
    })
    return () => unsubscribe()
  }, [])

  // As soon as consent is available and for Analytics, update Consent Mode v2
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

  const handleConsent = (newConsent) => {
    const updatedConsent = {
      ...newConsent,
      consentedAt: new Date().toISOString(),
    }
    saveConsent(updatedConsent)
    setConsent(updatedConsent)
    notifyCookieConsentChange(updatedConsent)
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

      {/* If analytics consent is enabled, Google Analytics is loaded. */}
      {consent && consent.analytics && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
          >
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { page_path: window.location.pathname });
            `}
          </Script>
        </>
      )}

      {showBanner && (
        <div className="cookie-banner">
          <p>
            Glissez sans accroc sur notre site : ce dernier utilise des cookies
            essentiels pour fonctionner, des cookies de statistiques pour
            analyser votre parcours et des cookies marketing pour vous proposer
            les meilleures descentes. Vous pouvez tout accepter, tout refuser ou
            personnaliser vos préférences. Voir notre{' '}
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
          </div>
          {showPreferences && (
            <CookiePreferences
              initialConsent={
                consent || {
                  essential: true,
                  analytics: false,
                  marketing: false,
                }
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
