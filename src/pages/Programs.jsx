import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Programs() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <main className="pt-32 pb-24">
        <header className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary font-label font-bold tracking-widest uppercase text-sm mb-4 block"
              >
                Building Futures
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-7xl font-headline font-black text-on-surface leading-[1.1] tracking-tight mb-8"
              >
                Empowering the <span className="text-primary">Leaders</span> of Tomorrow.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-on-surface-variant max-w-xl leading-relaxed"
              >
                Our programs are designed to ignite potential and foster resilience in South Sudanese girls through mentorship, leadership training, and creative visioning.
              </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <motion.div 
                whileHover={{ rotate: 2 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl overflow-hidden editorial-shadow"
              >
                <img alt="Young women collaborating" className="w-full h-[500px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS1pkUoGh14terfh3xY3P4mlG1aH7YA9n7Z5sQR_d3FToeVkzeDGzA1wszD4NXzh3SSCSg30EiMLjy6daAbamxggMqGbX6B_GZGEkdVcZ1zkOAFDydTcbUhLo3SAsYJhvAERJlCKDlk7Pr1xQKVlALHQfiyrnumOvO5sT7uDsQYcjZeC3z_kD-Sd6QGre9s3mRtbqZf01ojnHJHdUljKYKbrs-x8c4nQ1BuV0UEgoT1EN02p6z6DHpGM_JFCsLjpiLWJAkMA5Xsw" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-8 rounded-2xl editorial-shadow max-w-[280px]"
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="material-symbols-outlined text-primary text-4xl" data-icon="auto_awesome">auto_awesome</span>
                  <span className="text-3xl font-headline font-black text-primary">500+</span>
                </div>
                <p className="text-sm font-label text-on-surface-variant font-semibold">Lives impacted through our specialized mentorship initiatives.</p>
              </motion.div>
            </motion.div>
          </div>
        </header>

        <section className="bg-surface-container-low py-24 rounded-2xl mx-4 md:mx-12 lg:mx-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
            >
              <div>
                <h2 className="text-4xl font-headline font-extrabold mb-4">Upcoming Events</h2>
                <p className="text-on-surface-variant max-w-md">Join our vibrant community events designed to inspire, connect, and empower.</p>
              </div>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
                </button>
                <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
                </button>
              </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { 
                  date: 'Oct 18, 2024',
                  title: 'Girls Vision for the Future',
                  desc: 'An intensive workshop focused on strategic goal setting and creative visualization.',
                  location: 'Main Campus Auditorium',
                  icon: 'calendar_today',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo8wT4w8D3lDM1E0SiROs2oqciDkqwWaNMg4oAVzU1g2LB7EnKyRK504hWIl8_nKcDVK9FBN3-RTxG7281NlSlB1EYqmclbm_ZplhpKPSvxb6XL7cJoUGxgTmPmfMw0eVwZbkg_Ks8DRaL-gSMwKXZS83ZVZlR1oDKS0VmOJyylQZs2fXloYchl-rEv7KIKS-0i2jZ5EP5kipOZieZAOXw8IfY9uWWQA4hSl1O2Hd-nLjd-eRs0Xts_XbxHYorOxDLjf4WA5qVTg'
                },
                { 
                  date: 'Nov 18, 2025',
                  title: 'BanatRise Mentorship Program',
                  desc: 'Our signature leadership initiative connecting emerging talent with seasoned professionals.',
                  location: 'Community Innovation Hub',
                  icon: 'diversity_3',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRngEEXXihktEzpxQv-L77PH9zHFTtAKxfluOK8YfW3G1kfspf3_5y1XfYFs2gRl58odRxElcZP4pSb-ILN8sWUYDOOffD25cjq5MzMi13f7j2kSp1OFXy4wGiIlwkbuffmIPoXOwTPDYV5HpzjfU4THcBqEufhyJKeMzYHAt_j_eFLljGD_yzE2Ms7noPhl3LNxmdIvhMRCjx6sMnaSkRRvhviTkuiZA9wn837nPLe16UIrAL6-iIDtMwkMljhHYU0ewfOcTwmA'
                }
              ].map((event, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group bg-surface-container-lowest rounded-2xl overflow-hidden editorial-shadow transition-transform hover:-translate-y-2 duration-500 cursor-pointer"
                >
                  <div className="h-80 overflow-hidden relative">
                    <img alt={event.title} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700" src={event.img} />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm">
                      <span className="text-primary font-bold font-label text-sm tracking-tight">{event.date}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="material-symbols-outlined text-primary text-lg" data-icon={event.icon}>{event.icon}</span>
                      <span className="text-on-surface-variant font-label text-sm">{event.location}</span>
                    </div>
                    <h3 className="text-2xl font-headline font-bold mb-4 group-hover:text-primary transition-colors">{event.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed mb-8">{event.desc}</p>
                    <button className="w-full bg-primary text-on-primary py-4 rounded-full font-label font-bold hover:bg-primary-container transition-colors flex items-center justify-center gap-2">
                      Reserve Your Spot
                      <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-secondary p-12 md:p-20 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[300px]" data-icon="volunteer_activism">volunteer_activism</span>
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-headline font-black text-white mb-6">Invest in Her Impact.</h2>
              <p className="text-white/90 text-lg mb-10 leading-relaxed">Your support enables us to provide world-class training and mentorship to young women in South Sudan.</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/support" className="bg-white text-primary px-8 py-4 rounded-full font-label font-bold hover:bg-white/90 transition-all">Support the Initiative</Link>
                <Link to="/get-involved" className="bg-primary-container/20 text-white border border-white/30 backdrop-blur-sm px-8 py-4 rounded-full font-label font-bold hover:bg-white/10 transition-all">Volunteer With Us</Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </motion.div>
  )
}