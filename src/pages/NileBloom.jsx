import { motion } from 'framer-motion'

const colors = [
  { name: 'Primary', hex: '#b80049', usage: 'Core brand moments, high-level CTAs' },
  { name: 'Primary Container', hex: '#e2165f', usage: 'Secondary actions, large-scale power blocks' },
  { name: 'Secondary', hex: '#a82d68', usage: 'Deeper plum-pink for refined accents' },
  { name: 'Primary Fixed', hex: '#ffd9de', usage: 'Backgrounds for pink accents' },
  { name: 'Secondary Fixed', hex: '#ffd9e4', usage: 'Subtle pink surface backgrounds' },
]

const typography = [
  { font: 'Epilogue', usage: 'Display & Headlines', weight: 'Black 900' },
  { font: 'Inter', usage: 'Body text & Titles', weight: 'Regular 400' },
  { font: 'Manrope', usage: 'Labels & Buttons', weight: 'SemiBold 600' },
]

export default function NileBloom() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-headline font-black text-on-surface leading-tight mb-6"
          >
            The <span className="text-primary italic">Radiant Narrative</span> Design System
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-on-surface-variant max-w-2xl"
          >
            A design system that rejects the "corporate template" aesthetic in favor of editorial sophistication and organic warmth.
          </motion.p>
        </header>

        {/* Color Palette */}
        <section className="mb-20">
          <h2 className="text-3xl font-headline font-bold mb-8">Color Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {colors.map((color, index) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm"
              >
                <div 
                  className="w-full h-24 rounded-xl mb-4" 
                  style={{ backgroundColor: color.hex }}
                />
                <h3 className="font-headline font-bold mb-1">{color.name}</h3>
                <p className="text-sm text-on-surface-variant uppercase">{color.hex}</p>
                <p className="text-xs text-on-surface-variant mt-2">{color.usage}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-20">
          <h2 className="text-3xl font-headline font-bold mb-8">Typography</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {typography.map((type, index) => (
              <motion.div
                key={type.font}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface-container-lowest rounded-2xl p-8"
              >
                <p 
                  className="text-4xl mb-4" 
                  style={{ fontFamily: type.font.includes('Epilogue') ? 'Epilogue' : type.font.includes('Inter') ? 'Inter' : 'Manrope' }}
                >
                  Aa
                </p>
                <h3 className="font-headline font-bold text-xl mb-2">{type.font}</h3>
                <p className="text-on-surface-variant text-sm">{type.usage}</p>
                <p className="text-xs text-on-surface-variant mt-1">{type.weight}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Components */}
        <section className="mb-20">
          <h2 className="text-3xl font-headline font-bold mb-8">Components</h2>
          
          {/* Impact Counter */}
          <div className="mb-12">
            <h3 className="text-lg font-label font-bold mb-4 text-on-surface-variant uppercase">Impact Counter (Pulse)</h3>
            <div className="flex gap-12">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-fixed/20 rounded-full"></div>
                <span className="font-headline text-7xl font-black text-primary">500+</span>
                <p className="font-label text-sm uppercase tracking-widest text-on-surface-variant">Girls Empowered</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-12">
            <h3 className="text-lg font-label font-bold mb-4 text-on-surface-variant uppercase">Buttons</h3>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-label font-bold hover:bg-primary-container transition-colors">
                Primary Button
              </button>
              <button className="bg-surface-container-lowest border border-primary/20 text-primary px-8 py-3 rounded-full font-label font-bold hover:bg-primary hover:text-white transition-colors">
                Secondary Button
              </button>
              <button className="bg-white text-primary px-8 py-3 rounded-full font-label font-bold border border-outline-variant hover:border-primary transition-colors">
                Ghost Button
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-12">
            <h3 className="text-lg font-label font-bold mb-4 text-on-surface-variant uppercase">Program Card</h3>
            <div className="max-w-md bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm">
              <div className="h-48 bg-surface-container">
                <div className="w-full h-full flex items-center justify-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-4xl">school</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="font-headline text-xl font-bold mb-2">Digital Literacy</h4>
                <p className="text-on-surface-variant">Equipping girls with essential technology skills.</p>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="mb-12">
            <h3 className="text-lg font-label font-bold mb-4 text-on-surface-variant uppercase">Glass Input</h3>
            <input 
              className="w-full max-w-md px-6 py-4 rounded-full glass-input border border-primary/20 focus:ring-2 focus:ring-primary outline-none" 
              placeholder="Enter your email..."
            />
          </div>
        </section>

        {/* Design Principles */}
        <section>
          <h2 className="text-3xl font-headline font-bold mb-8">Design Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'No-Line Rule', desc: 'Boundaries defined through color shifts, not borders.' },
              { title: 'Tonal Layering', desc: 'Create depth through subtle hex value shifts.' },
              { title: 'Intentional Asymmetry', desc: 'Images overlap containers for editorial feel.' },
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface-container-lowest p-8 rounded-2xl"
              >
                <h3 className="font-headline font-bold text-xl mb-2">{principle.title}</h3>
                <p className="text-on-surface-variant">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </motion.div>
  )
}