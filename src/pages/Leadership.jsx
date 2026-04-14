import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Leadership() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <main className="pt-32 pb-24">
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-end gap-8 mb-16"
          >
            <div className="flex-1">
              <h1 className="text-5xl md:text-7xl font-headline font-black text-on-surface leading-[1.1] tracking-tight mb-6">
                The Hearts Behind <span className="text-primary italic">Our Mission.</span>
              </h1>
              <p className="text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed">
                Dedicated leaders and passionate volunteers working together to empower the next generation of women in South Sudan.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-primary to-transparent w-full opacity-10 origin-left"
          ></motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-12 h-[2px] bg-primary"></div>
            <h2 className="text-sm font-label font-bold uppercase tracking-[0.2em] text-primary">Executive Leadership</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { 
                name: 'Emma Kwaje', 
                role: 'FOUNDER & DIRECTOR', 
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKXjkKbduRvtTYRb5na0Lh6R4l9jXq2F_UaQWrjbRXcXnhtTCb1IlZicDdPn4eDzNaKAFoQcIrbIgXmLv6cJQ_gvj70DIxKAGD-PC3B8PnY8iyS_sLft3fGCpSFPgQ0DDW1e0_PV3j5SqdQlzROPhv6xu4qCmHjn2Br66qi8sROTjriCv-kJMzOS4zWhoW0wkmro5-7t5IuJIlHXMLDhf6gItcsmHEOu8FX5j6512kzDw5kEVEtTHY9SwM5jQg32OLt5CeYM8k-A',
                desc: "Driven by a vision of equality, Emma established Banat Power to provide mentorship and resources for girls in Juba and beyond.",
                email: 'emma.kwaje@banatpower.org',
                facebook: 'https://facebook.com/emmakwaje',
                linkedin: 'https://linkedin.com/in/emmakwaje',
                whatsapp: 'https://wa.me/211123456789'
              },
              { 
                name: 'Michael Julius', 
                role: 'PROGRAM COORDINATOR', 
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyGeV6duGw49qwVaWLXGiIDhAuiDCyFL7MWlEitleK5wB0q4gzYjpPohBFrjKfD1bmE7faxcP3lFXYBQNAkyKdQY7knjYOnLUo5z0-n7pERJ2c1Gdj-piFQYXT70uvcBPycxVwfoj1L_P4eC7QWxOUIUnmzTVTl4qMdRuZz_aZkRnwotsAVpU6hCgGs-CAfvsIODnsi_Ij6Hddr2gYm3VlYsH8c_Qb_009vr_CfgU4KnwQZy8QUXK6LsiuoKYXSgrAZizAHlSd4g',
                desc: "Expert in community mobilization and educational outreach, Michael ensures our programs deliver measurable local impact.",
                email: 'michael.julius@banatpower.org',
                facebook: 'https://facebook.com/michaeljulius',
                linkedin: 'https://linkedin.com/in/michaeljulius',
                whatsapp: 'https://wa.me/211987654321'
              }
            ].map((leader, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-surface-container-lowest rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center transition-all duration-500 hover:shadow-xl cursor-pointer"
              >
                <div className="w-48 h-48 flex-shrink-0 squircle-mask bg-surface-container overflow-hidden">
                  <img alt={leader.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" src={leader.img} />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <span className="inline-block px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold rounded-full mb-4 font-label">{leader.role}</span>
                  <h3 className="text-3xl font-headline font-bold text-on-surface mb-2">{leader.name}</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-6">{leader.desc}</p>
                  <div className="flex justify-center md:justify-start gap-3">
                    <a href={`mailto:${leader.email || 'banatpower2@gmail.com'}`} className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-zinc-600 hover:bg-primary hover:text-white transition-all">
                      <span className="material-symbols-outlined text-lg">mail</span>
                    </a>
                    <a href={leader.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-zinc-600 hover:bg-blue-600 hover:text-white transition-all">
                      <span className="material-symbols-outlined text-lg">call</span>
                    </a>
                    <a href={leader.whatsapp || '#'} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-zinc-600 hover:bg-green-500 hover:text-white transition-all">
                      <span className="material-symbols-outlined text-lg">chat</span>
                    </a>
                    <a href={leader.facebook || '#'} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-zinc-600 hover:bg-blue-700 hover:text-white transition-all">
                      <span className="material-symbols-outlined text-lg">public</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6"
            >
              <div>
                <h2 className="text-4xl font-headline font-bold mb-4">Our Dedicated <span className="text-primary">Volunteers.</span></h2>
                <p className="text-on-surface-variant max-w-xl">The boots on the ground making change happen every single day across our target regions.</p>
              </div>
              <Link to="/get-involved" className="bg-surface-container-lowest border-2 border-primary/20 text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-on-primary transition-all font-label">Join Our Team</Link>
            </motion.div>
            <motion.div 
              variants={{
                animate: { transition: { staggerChildren: 0.1 } }
              }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { name: 'Mary Akot', role: 'STEM Mentor', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAu95Sbb-oE6BrSSxjpBuqXnPhvZJI6QBOeCVkE0YBxM1mW1oCQ8s2SDCR0q-YPwcXaKZ0vEcQMuVdABIP23hKKKMX28TzYiB2dgU-O2jVPfE2OQNWLm9AbRsOIl1ngo-YRpOlrMj9fC_RRtuVwLKJoGWgYggSocUh71n4aZgczrqTcWGqSAkJWUHSGVCrc0Bt3h7Gl_FA5mzw5X5hQBm0dBE3xyh_f9hLxnZSaORRIB1kmehZJNctG-5gG6Z7HLOhuCYS9xmcNJg' },
                { name: 'James Lual', role: 'Operations Support', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyGeV6duGw49qwVaWLXGiIDhAuiDCyFL7MWlEitleK5wB0q4gzYjpPohBFrjKfD1bmE7faxcP3lFXYBQNAkyKdQY7knjYOnLUo5z0-n7pERJ2c1Gdj-piFQYXT70uvcBPycxVwfoj1L_P4eC7QWxOUIUnmzTVTl4qMdRuZz_aZkRnwotsAVpU6hCgGs-CAfvsIODnsi_Ij6Hddr2gYm3VlYsH8c_Qb_009vr_CfgU4KnwQZy8QUXK6LsiuoKYXSgrAZizAHlSd4g' },
                { name: 'Rebecca Nyandeng', role: 'Lead Mentor', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5nZ7SStGd8VRuCO7Q0ei8BuqPlCVIEWYc9qdd-vUgTh39Go4XiNVl3Ryobpg26Fy5l83rvxstmqBnfAeZQ8AupON4J15sd6AdL6jq7Eiq2LXl3oCvA2JHiiga9WGcqEA5oxB8-NbhckxBZM5afte1lcVvObqKpfsTOfDIPCWsFDkH9wT9uym-TSWfN8zmGvR2glzfDIT3Lwa_7x5JdxAP-0Qcwzc2SkgBemTgAgZzC1gOLbjBRIuqlLbBaJt_0ZsdQGTpkoWtGQ' },
                { name: 'Emmanuel Kenyi', role: 'Tech Facilitator', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwxaeNOv1TOwI17u6Yac0f5fy_SLc51MzKUj-WnN-OVS0Yy9wFho-9WxG76kXEtGOOYbaeonsAqEhiMOXVxOkzi9meRvfvHFSLg00t0dT0iJJGmfxYiochDVJ3_X7qA_yCTTbeU1JqEp0zmtBAfPihCVwwo_-OcMqAKpUyE-CF6mk_avrAuhKBzIuH2nEhM-qGous6KTHmyVB8P3VRd6mrebdg2L_DRCm1L6Gkwd1Oii0CYA1UuLnNcthlI3e94k6SCaOJW3uifQ' }
              ].map((volunteer, index) => (
                <motion.div 
                  key={index}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -8 }}
                  className="bg-surface-container-lowest rounded-xl overflow-hidden transition-transform hover:-translate-y-2"
                >
                  <div className="aspect-[4/5] w-full relative overflow-hidden group">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={volunteer.img} alt={volunteer.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-bold text-lg">{volunteer.name}</h4>
                      <p className="text-sm opacity-80">{volunteer.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
          >
            {[
              { number: '15+', label: 'Active Mentors' },
              { number: '3', label: 'Global Hubs' },
              { number: '500+', label: 'Lives Touched' },
              { number: '100%', label: 'Commitment' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/10 rounded-full"></div>
                <div className="text-5xl font-black font-headline text-primary mb-2">{stat.number}</div>
                <div className="text-sm font-label font-bold text-on-surface-variant uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
    </motion.div>
  )
}