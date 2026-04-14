import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/impact', label: 'Impact' },
    { to: '/programs', label: 'Programs' },
    { to: '/leadership', label: 'Leadership' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]
  
  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Top Header Bar */}
      <div className="bg-primary text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-wrap items-center justify-center md:justify-between gap-2 md:gap-0">
          {/* Phone - Center */}
          <a href="tel:+211921768811" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
            <span className="material-symbols-outlined text-sm">call</span>
            <span>+211 921 768 811</span>
          </a>
          
          {/* Email */}
          <a href="mailto:banatpower2@gmail.com" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
            <span className="material-symbols-outlined text-sm">email</span>
            <span>banatpower2@gmail.com</span>
          </a>
          
          {/* Location */}
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm">location_on</span>
            <span>Juba, South Sudan</span>
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Left */}
            <Link to="/" className="flex items-center gap-3">
              <img src="/banat.jpg" alt="Banat Power Initiative" className="w-10 h-10 object-cover rounded-full" />
              <span className="text-lg md:text-xl font-black text-pink-700 font-headline tracking-tight">Banat Power Initiative</span>
            </Link>
            
            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.to) 
                      ? 'text-pink-700 font-bold' 
                      : 'text-zinc-600 hover:text-pink-600 hover:bg-pink-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            {/* Donate Button - Right */}
            <Link to="/support" className="hidden lg:flex bg-primary text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-primary-container transition-all">
              Donate Now
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-pink-700"
            >
              <span className="material-symbols-outlined text-2xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="px-4 py-4 space-y-1">
                {/* Contact Info in Mobile Menu */}
                <div className="py-3 px-4 space-y-2 border-b mb-2">
                  <a href="tel:+211921768811" className="flex items-center gap-2 text-zinc-600">
                    <span className="material-symbols-outlined text-sm">call</span>
                    <span>+211 921 768 811</span>
                  </a>
                  <a href="mailto:banatpower2@gmail.com" className="flex items-center gap-2 text-zinc-600">
                    <span className="material-symbols-outlined text-sm">email</span>
                    <span>banatpower2@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-2 text-zinc-600">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span>Juba, South Sudan</span>
                  </div>
                </div>
                
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block py-3 px-4 font-medium rounded-lg ${
                      isActive(link.to) 
                        ? 'bg-primary-fixed text-primary font-bold' 
                        : 'text-zinc-600 hover:bg-surface-container-low'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/support"
                  className="block py-3 px-4 mt-4 bg-primary text-white text-center rounded-lg font-bold"
                >
                  Donate Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}