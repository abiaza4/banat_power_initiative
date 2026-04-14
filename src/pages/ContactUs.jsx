import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactUs() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    
    const name = formData.get('name') || form.querySelector('input[type="text"]')?.value
    const email = formData.get('email') || form.querySelector('input[type="email"]')?.value
    const subject = form.querySelector('select')?.value
    const message = form.querySelector('textarea')?.value
    
    const mailtoLink = `mailto:banatpower2@gmail.com?subject=${encodeURIComponent(subject || 'Contact Form')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
    
    window.location.href = mailtoLink
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <main className="pt-24">
        <section className="relative px-6 py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-headline text-5xl md:text-7xl font-black text-on-surface leading-tight tracking-tighter mb-6"
                >
                  Let's Build <span className="text-primary italic">Power</span> Together.
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-on-surface-variant max-w-xl leading-relaxed mb-8"
                >
                  Whether you're looking to partner, mentor, or simply learn more about our impact in South Sudan, we are here to connect.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-12 mt-12"
                >
                  <div className="relative">
                    <div className="absolute -top-2 -right-4 w-12 h-12 bg-primary-fixed opacity-40 rounded-full"></div>
                    <div className="relative">
                      <span className="font-headline text-4xl font-bold text-primary block">24h</span>
                      <span className="font-label text-sm uppercase tracking-wider text-on-surface-variant">Response Time</span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -top-2 -right-4 w-12 h-12 bg-primary-fixed opacity-40 rounded-full"></div>
                    <div className="relative">
                      <span className="font-headline text-4xl font-bold text-primary block">Juba</span>
                      <span className="font-label text-sm uppercase tracking-wider text-on-surface-variant">Global Hub</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <motion.div 
                  whileHover={{ rotate: 2 }}
                  transition={{ duration: 0.5 }}
                  className="aspect-square rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img alt="Young South Sudanese women collaborating" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLaih7USB_PV6mjiwjscSbV2C2ye0kywH15QpFKge3pgBZtcYFD-06OWbVLogjU5SRBP2-T1liOG2rAvS_dnEyyFPLjnf6BOkOkz4Ae8t9RXR4od_qRfYg_zddnASK3Ze6L1BkRmCKZh9PUmxeUrWlQCDyDO1BSvMwgWYr3gq6g3_-_N08pkPBIm9z6bfHB64N_lRM93oV0U09TGmYZz-YD54HwF4gvhT9RMleCNvBE3W2jBX7kcK3u17vhwge_E2CitfM27o8_g" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl shadow-xl max-w-xs border border-outline-variant/20"
                >
                  <p className="font-body text-sm italic text-on-surface">"Empowering a girl is empowering the entire nation of South Sudan."</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low px-6 py-24 rounded-t-[3rem]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] shadow-sm"
              >
                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="material-symbols-outlined text-green-600 text-4xl">check_circle</span>
                    </div>
                    <h3 className="font-headline text-2xl font-bold text-green-600 mb-4">Message Sent!</h3>
                    <p className="text-on-surface-variant">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-headline text-3xl font-bold mb-8">Send a Message</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="font-label text-sm font-semibold text-on-surface-variant ml-2">Full Name</label>
                          <input name="name" className="w-full px-6 py-4 rounded-full glass-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Adut Deng" type="text" required/>
                        </div>
                        <div className="space-y-2">
                          <label className="font-label text-sm font-semibold text-on-surface-variant ml-2">Email Address</label>
                          <input name="email" className="w-full px-6 py-4 rounded-full glass-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="name@example.com" type="email" required/>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="font-label text-sm font-semibold text-on-surface-variant ml-2">Subject</label>
                        <select className="w-full px-6 py-4 rounded-full glass-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none">
                          <option>Partnership Inquiry</option>
                          <option>Mentorship Program</option>
                          <option>General Support</option>
                          <option>Media & Press</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="font-label text-sm font-semibold text-on-surface-variant ml-2">Your Message</label>
                        <textarea className="w-full px-6 py-6 rounded-[1.5rem] glass-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="How can we empower together?" rows="5" required></textarea>
                      </div>
                      <button className="w-full md:w-auto px-10 py-4 bg-primary text-on-primary rounded-full font-label font-bold hover:bg-primary-container transition-colors shadow-lg shadow-primary/10" type="submit">
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-5 flex flex-col gap-8"
              >
                <div className="bg-primary text-on-primary p-10 rounded-[2rem] shadow-xl relative overflow-hidden group">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform"
                  ></motion.div>
                  <h3 className="font-headline text-2xl font-bold mb-8 relative z-10">Direct Contact</h3>
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined mt-1" data-icon="call">call</span>
                      <div>
                        <p className="font-label text-xs uppercase opacity-70 tracking-widest">Call Us</p>
                        <p className="text-lg font-medium">+211 921 768 811</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined mt-1" data-icon="mail">mail</span>
                      <div>
                        <p className="font-label text-xs uppercase opacity-70 tracking-widest">Email Us</p>
                        <p className="text-lg font-medium">banatpower2@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined mt-1" data-icon="location_on">location_on</span>
                      <div>
                        <p className="font-label text-xs uppercase opacity-70 tracking-widest">Our HQ</p>
                        <p className="text-lg font-medium leading-snug">Juba, South Sudan<br/>Central Equatoria State</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined mt-1" data-icon="schedule">schedule</span>
                      <div>
                        <p className="font-label text-xs uppercase opacity-70 tracking-widest">Working Hours</p>
                        <p className="text-lg font-medium">Mon - Fri, 9:00 - 17:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl font-bold mb-4"
          >
            Follow Our Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant mb-12 max-w-2xl mx-auto"
          >
            Stay updated with our latest workshops, success stories, and mentorship opportunities across South Sudan.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-6"
          >
            <Link to="/contact" className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300">
              <span className="material-symbols-outlined" data-icon="public">public</span>
            </Link>
            <Link to="/contact" className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300">
              <span className="material-symbols-outlined" data-icon="diversity_3">diversity_3</span>
            </Link>
            <Link to="/contact" className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300">
              <span className="material-symbols-outlined" data-icon="photo_camera">photo_camera</span>
            </Link>
          </motion.div>
        </section>
      </main>
    </motion.div>
  )
}