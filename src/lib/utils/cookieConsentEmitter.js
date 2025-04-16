const listeners = [];

//Function to add a listener
// returns a function to unsubscribe
export function subscribeCookieConsentChange(callback) {
  listeners.push(callback);
  return () => {
    const index = listeners.indexOf(callback);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
  };
}

export function notifyCookieConsentChange(newConsent) {
  listeners.forEach((callback) => callback(newConsent));
}