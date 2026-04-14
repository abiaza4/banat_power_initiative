import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setTimeout(() => setShowBanner(true), 2000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setAccepted(true)
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && !accepted && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-zinc-200 p-4"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-zinc-700">
                We use cookies to improve your experience. By continuing to visit this site you agree to our use of cookies.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={declineCookies}
                className="px-4 py-2 text-sm text-zinc-600 hover:text-zinc-800 transition-colors"
              >
                No Thanks
              </button>
              <button
                onClick={acceptCookies}
                className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary-container transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}