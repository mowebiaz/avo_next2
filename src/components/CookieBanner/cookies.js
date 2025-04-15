import { getCookie, setCookie } from 'cookies-next'

const COOKIE_NAME = 'cookieConsent'

/** 
 * Gets the current consent from the cookie.
 *
 * If the cookie is not set, it assumes that the user has not yet given consent
 * and returns a default consent object where only essential cookies are allowed.
 *
 * If the cookie is invalid, it returns a default consent object where only
 * essential cookies are allowed.
 *
 * @returns {Object} The consent object.
 * @property {boolean} essential - If true, essential cookies are allowed.
 * @property {boolean} analytics - If true, analytics cookies are allowed.
 * @property {boolean} marketing - If true, marketing cookies are allowed.
 */
export function getConsent() {
  const raw = getCookie(COOKIE_NAME)
  if (!raw) {
    return {
      essential: true,
      analytics: false,
      marketing: false,
    }
  }

  try {
    return JSON.parse(raw)
  } catch {
    return {
      essential: true,
      analytics: false,
      marketing: false,
    }
  }
}


export function saveConsent(consent) {
  setCookie(COOKIE_NAME, JSON.stringify(consent), {
    maxAge: 180 * 24 * 60 * 60, // 6 mois
  })
}
