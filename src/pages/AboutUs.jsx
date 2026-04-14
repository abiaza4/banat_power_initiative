import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function AboutUs() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative px-6 py-20 md:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-block py-1 px-4 rounded-full bg-primary-fixed text-on-primary-fixed font-label text-sm font-bold mb-6"
              >
                EST. 2024 IN JUBA
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-headline font-black text-on-background leading-tight mb-8 tracking-tighter"
              >
                Empowering <span className="text-primary">Generations</span> of Leaders.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-on-surface-variant leading-relaxed max-w-lg mb-10"
              >
                We are a community-driven initiative in South Sudan dedicated to dismantling barriers and creating pathways for girls to thrive in education, leadership, and tech.
              </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-fixed rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <motion.div 
                whileHover={{ scale: 1.02, rotate: 2 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl transform md:rotate-3"
              >
                <img alt="Portrait of empowered girl" className="w-full h-[500px] object-cover" data-alt="Close-up portrait of a confident young South Sudanese woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdRNl23xpzZcvITkxFslDXzQtDmDYppGizdQJIFOb97ToIT7riSo6aTHcZawbTjB81EdART_hLEZK2xq2AzQl09sys2A6sfKz7QXMvZngxGyYWgZs9BVrJ_npBwwWVAJNL5IpYZVoIwZ3bPGhETQaJrA1lUpt7ucq9AqnOOryQ_CgSiz7XiJZ6M3886j-WOYEZ8bMSn_LeNMDOSyqy-Qm2npeRVdd493iMNRul-danDSLXn1Fx27tKdiTbFo1ub9GEbqOfbXx-jQ" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="bg-surface-container-low py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-12 gap-12 items-end mb-16"
            >
              <div className="md:col-span-7">
                <motion.h3 variants={fadeInUp} className="text-zinc-400 font-label font-bold tracking-widest uppercase text-sm mb-4">WHO WE ARE</motion.h3>
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-headline font-bold text-on-background leading-none">A Radiant Narrative of Resilience</motion.h2>
              </div>
              <div className="md:col-span-5">
                <p className="text-on-surface-variant text-lg">Based in the heart of Juba, Banat Power Initiative is more than an NGO—it is a movement born from the lived experiences of South Sudanese women.</p>
              </div>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: '500+', title: 'Mentorship Hours', desc: 'Direct one-on-one sessions between industry leaders and young pioneers in Juba.' },
                { number: '12', title: 'Active Programs', desc: 'Covering digital literacy, entrepreneurship, and reproductive health rights.' },
                { number: '10k+', title: 'Lives Impacted', desc: 'Reaching communities across the Central Equatoria region through outreach.' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm group hover:bg-primary transition-colors duration-500 cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-headline font-black text-primary group-hover:text-on-primary">{item.number}</span>
                    <div className="w-12 h-1 bg-primary-fixed group-hover:bg-on-primary/30"></div>
                  </div>
                  <h4 className="text-xl font-headline font-bold mb-3 group-hover:text-on-primary">{item.title}</h4>
                  <p className="text-on-surface-variant group-hover:text-on-primary/80">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative grid md:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 md:order-1 relative"
              >
                <img alt="Community gathering" className="rounded-2xl shadow-xl editorial-mask transform -rotate-2 w-full h-[600px] object-cover" data-alt="Group of diverse young women sitting together" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7s5zdf2aQxyHt0MHAM6e4T0DzVGtGL7_2AUXri5MjALgQFPeuReUlXL9wxUMhpMw80MLfgCwZa8CDuv6lvUPJMkxetoAK4KPCQswlk8Lj0iG4t6l5srpMUjhvBZd6QWQsxTyZBB8p0hKnqeuejQwN6yuuC2jL6ZrIGrcncOhTnI76bsR8eDwxwKVmEdASNNlH8Z3ietl4fp693K_-gxZVTqfUlakMPoHbKgLRI4yF8rIn379Bv6LCpdQTJgT_FPjQmH4SNulmXw" />
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-lg max-w-xs border border-surface-container"
                >
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">format_quote</span>
                  <p className="italic text-on-surface-variant">"When we empower a girl, we don't just change a life; we rewire the future of our nation."</p>
                </motion.div>
              </motion.div>
              <div className="order-1 md:order-2">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-16"
                >
                  <h3 className="text-primary font-headline font-black text-6xl mb-6 opacity-20">MISSION</h3>
                  <h2 className="text-3xl font-headline font-bold mb-4">Sparking the Catalyst</h2>
                  <p className="text-lg text-on-surface-variant leading-relaxed">To provide South Sudanese girls with the digital tools, educational resources, and emotional support needed to break the cycle of poverty and lead with confidence.</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-secondary font-headline font-black text-6xl mb-6 opacity-20">VISION</h3>
                  <h2 className="text-3xl font-headline font-bold mb-4">A Future Reimagined</h2>
                  <p className="text-lg text-on-surface-variant leading-relaxed">A South Sudan where every young woman has the agency to define her own path, contributing to a prosperous, equitable, and peaceful society.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-primary rounded-2xl p-12 md:p-20 text-center relative overflow-hidden"
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 right-0 w-96 h-96 bg-primary-container rounded-full -mr-48 -mt-48 opacity-50"
            ></motion.div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-headline font-black text-on-primary mb-8 leading-tight">Be Part of the Power.</h2>
              <p className="text-xl text-on-primary/90 mb-12 max-w-2xl mx-auto">Whether through mentorship, donations, or volunteering, your support fuels the radiant narrative of South Sudan's future.</p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link to="/get-involved" className="bg-surface-container-lowest text-primary px-10 py-4 rounded-full font-label font-bold hover:shadow-xl transition-all">Join the Initiative</Link>
                <button className="border-2 border-white text-white px-10 py-4 rounded-full font-label font-bold hover:bg-white/10 transition-all">Download 2024 Report</button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </motion.div>
  )
}