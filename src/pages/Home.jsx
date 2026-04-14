import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ImageSlider from '../components/ImageSlider'

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
      staggerChildren: 0.15
    }
  }
}

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <main className="pt-20">
        {/* Hero Section with Slider */}
        <section className="relative min-h-[795px] flex items-center overflow-hidden px-6 lg:px-12">
          <ImageSlider />
          
          <div className="relative z-10 max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-container text-on-primary-container font-label text-sm font-bold tracking-wide uppercase"
            >
              Future Leaders of South Sudan
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-headline text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter"
            >
              Empowering Girls, <br/>Building Futures
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-body max-w-xl"
            >
              Cultivating a new generation of women leaders through education, mentorship, and community-driven advocacy.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/get-involved" className="bg-primary text-on-primary px-8 py-4 rounded-full font-label font-bold text-lg hover:scale-105 transition-transform">
                Join Us
              </Link>
              <Link to="/support" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-label font-bold text-lg hover:bg-white/20 transition-all">
                Support Our Mission
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Pulse Section (Impact Counters) */}
        <section className="py-24 bg-surface px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
            >
              {[
                { number: '500+', label: 'Girls Empowered' },
                { number: '20+', label: 'Programs Conducted' },
                { number: '10k+', label: 'Community Reach' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="relative group"
                >
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-fixed/20 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
                  <h2 className="font-headline text-6xl md:text-7xl font-black text-primary mb-2">{item.number}</h2>
                  <p className="font-label text-lg font-bold text-on-surface-variant uppercase tracking-widest">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Programs */}
        <section className="py-24 bg-surface-container-low px-6 rounded-2xl mx-4 lg:mx-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="font-headline text-4xl md:text-5xl font-black text-on-surface mb-6 leading-tight">Changing the Narrative, <br/>One Program at a Time.</h2>
                <p className="text-lg text-on-surface-variant font-body">Our initiatives are designed to break barriers and create sustainable pathways for growth.</p>
              </div>
              <Link to="/programs" className="flex items-center gap-2 text-primary font-label font-bold hover:gap-4 transition-all">
                View All Programs <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Large Feature Card */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:col-span-7 bg-surface-container-lowest rounded-2xl overflow-hidden group shadow-sm"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Young African girls in a classroom setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGetIlRpJmGDfanfBGvTouPkHIsuIUJWLNaeJFL1HmOPBbJxzizniKnwY6p6fANsREMJXZX0YQwybem0YnTSXkLK2xuK4CvX6ScsL400jqm4i9hvhB81M3JcP1QlyySkA_XxmaZH7v_EF5TQYbKKeTnoxH8bOjvn5NSr2wCQcS11U6spZILVkmU84Ih9samnxgDOeqRrYepSRRGSlVZA7mbrZFWSlh2yaGhpJwQAg5d_ePxeMd1_nSbSyVEu33wMFpUS9snLf9OQ" />
                </div>
                <div className="p-10">
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Digital Literacy for All</h3>
                  <p className="text-on-surface-variant font-body leading-relaxed mb-6">Equipping girls with essential technology skills to thrive in the modern global economy.</p>
                  <Link to="/programs" className="px-6 py-2 rounded-full border border-primary/20 text-primary font-label font-bold hover:bg-primary hover:text-white transition-colors">
                    Learn More
                  </Link>
                </div>
              </motion.div>
              {/* Side Grid */}
              <div className="md:col-span-5 flex flex-col gap-8">
                {[
                  { icon: 'diversity_3', title: 'Sisterhood Mentorship', desc: 'Connecting young girls with successful professionals for lifelong guidance.' },
                  { icon: 'school', title: 'Education Grants', desc: 'Reducing financial barriers to ensure every girl stays in the classroom.' },
                  { icon: 'campaign', title: 'Voice & Advocacy', desc: 'Training girls to be bold advocates for their rights and communities.' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm flex items-start gap-6 group"
                  >
                    <div className="bg-primary-fixed p-4 rounded-2xl">
                      <span className="material-symbols-outlined text-primary text-3xl" data-icon={item.icon}>{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-on-surface-variant text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
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
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <img className="w-full h-full object-cover" data-alt="Subtle textured background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHeBhX71B18Iyay_v5c1cajPH9soIXmz5ASwtiOojhzt8wY_7creu4gjC4EjSEfVOqMLUnS3nhWYbC9C8JmdtZLATNE11E75p2TJoElPby4F7YhvELCkvWwVa0ngRpWULKIr4GqEmqMcXgzbchQCdiCV-XDvQzVGu4Yjwgo8BCGoUmBL4TlL-J1YLX2D-tuJrbcNTB2Orek0XC2yP4FWvVyaxSwuIhIE1LXkOz_jeDt9ywTcZfedPwucVoih6pxVfAO93Bq1gCQQ" />
            </div>
            <div className="relative z-10">
              <h2 className="font-headline text-4xl md:text-5xl font-black mb-8 leading-tight">Become a Catalyst for Change</h2>
              <p className="text-xl mb-12 opacity-90 font-body max-w-2xl mx-auto">Your contribution provides the tools, resources, and support system needed to transform lives.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/support" className="bg-white text-primary px-10 py-4 rounded-full font-label font-black text-lg hover:bg-primary-fixed transition-colors">
                  Make a Donation
                </Link>
                <Link to="/get-involved" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-label font-black text-lg hover:bg-white/10 transition-all">
                  Volunteer With Us
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </motion.div>
  )
}