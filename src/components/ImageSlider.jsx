import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const heroImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBnor-sBXTG7535aiMs0XCRo_D7WzVqrwb0dYlF2hOSGG4kCo9ETF4r6yABzTiSStD-Uk2riu67EYT8EPngglQE4r5Av4sxDWcJ5xHOnrlZg0LZqmwBM1xTzr4BtGTuv67blL9yMPV8K5xNj97mxa6KiMT3HX1cHv2Pn66xvK8Zfmo_j0m9xiPTwzM7-paPd6WuFk6Oqx1NUojUZpB8MaghSeg2vKpyWq-921J0oBvUCTzwBQpVsE45hJ8KUG-n0dj3TJYzA-xaww',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAX4soDnYfk2f1mdnPzVAaP9rGyYO0CzVsVG3zaTxwYM0FWP5gVWoxqcWjxE6MPW4wQL54JGIWKVhJ0mBi7herYmyhkuWVU5pQSCUP7gM7FVP--H4DcvpLLvv6A_MVE9zo4x0ee4xSdabQPAR6gHLqI3Qu4iKitW8FMWHgS85tPJxPMVj2l_4AAIPrqEY8t0arE_gwBuTiDTmfZEAhsaIgqLEtmlqoqlKdjfy-gVlTY0qpvOv5JSPqRM-89LdeJQblG7OIobMjYJA',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDhFn1TWcFke8Kqlr1U_p6VC0-FUr6NcFA-wA7jH5rXgKL5mvDw6lkQ0yRWhOSIYJs6UCKtXfegj7fsMpYO9KTGXaK9adOxWHwByCA-e7qDMUyJsXcxGxyu-fuw9-qZ6I5Ua3vBGeHXkWfm-H9ExRudX-Tv0C1BQrFwuouo1tgnybdyGhfFc35LRIF4nl5lvxga3CYyC1l-rM_h46ZjB_Bczq9i5Pj43AQrl5Xz7MEeGi8KHzgyjhs-D1BC6Nev1Pfmedwv0PjUVA',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCMgXWS98PD33vpCGNDOjIX-Od1muTZ8wcEMfkX8SfgBV-WvqPRlcsaU43sqjbi8ngK1N89nUd6eOg_BNx3LAgR954Oxn7ItDnF7DWqMl5N0LtLr3W4U8YxUr5z2QMqfnoQrf3Ca8v8sVDrv06doEQSi_l2v6FktqWFxEtWxHm0I9riFCHKIkb2Ulf3Yoj8ZdVJO_TZ81-9E6E6oMs1OekynllvXBTBdPF_BZ4dRbSsqcrMV8G1PrMzmU6L61CPnPMLJjWcIn8Bpw',
]

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="absolute inset-0 z-0">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={heroImages[currentIndex]}
          alt="Hero"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-r from-on-surface/80 via-on-surface/40 to-transparent"></div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index === currentIndex 
                ? 'bg-white w-8' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}