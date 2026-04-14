import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function GetInvolved() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    
    const name = formData.get('name') || form.querySelector('input[type="text"]')?.value
    const email = formData.get('email') || form.querySelector('input[type="email"]')?.value
    const message = form.querySelector('textarea')?.value
    
    const mailtoLink = `mailto:banatpower2@gmail.com?subject=${encodeURIComponent('Volunteer Application from ' + (name || 'Unknown'))}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nWhy I want to join:\n${message}`)}`
    
    window.location.href = mailtoLink
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    setSubscribed(true)
    setTimeout(() => setSubscribed(false), 5000)
  }
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <main className="pt-24 pb-20">
        <section className="relative px-6 py-16 md:py-24 max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <span className="inline-block py-1 px-4 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label text-xs font-bold mb-6 tracking-wider uppercase">Join the Movement</span>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] mb-8 tracking-tight">
                Be part of <span className="text-primary">empowering</span> the next generation.
              </h1>
              <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed mb-10">
                At Banat Power, we believe every South Sudanese girl holds the potential to lead. Your time, voice, and commitment can catalyze change across communities in Juba and beyond.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/get-involved#signup" className="bg-primary text-on-primary px-8 py-4 rounded-full font-label font-bold text-base hover:shadow-lg transition-all">Become a Volunteer</Link>
                <Link to="/programs" className="flex items-center gap-2 text-on-surface font-label font-bold px-8 py-4 rounded-full border border-outline-variant hover:bg-surface-container-low transition-all">
                  View Programs
                  <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-0">
                <img alt="Youth empowerment" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX4soDnYfk2f1mdnPzVAaP9rGyYO0CzVsVG3zaTxwYM0FWP5gVWoxqcWjxE6MPW4wQL54JGIWKVhJ0mBi7herYmyhkuWVU5pQSCUP7gM7FVP--H4DcvpLLvv6A_MVE9zo4x0ee4xSdabQPAR6gHLqI3Qu4iKitW8FMWHgS85tPJxPMVj2l_4AAIPrqEY8t0arE_gwBuTiDTmfZEAhsaIgqLEtmlqoqlKdjfy-gVlTY0qpvOv5JSPqRM-89LdeJQblG7OIobMjYJA" />
              </div>
              <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 glass-card p-6 md:p-8 rounded-2xl shadow-xl max-w-[280px] z-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-tertiary-container rounded-full flex items-center justify-center text-white">
                    <span className="material-symbols-outlined" data-icon="volunteer_activism">volunteer_activism</span>
                  </div>
                  <h3 className="font-headline font-bold text-on-surface">Community First</h3>
                </div>
                <p className="text-sm text-on-surface-variant font-body leading-snug">"Volunteering here changed my perspective on what's possible for our youth."</p>
                <p className="mt-3 text-xs font-bold text-primary">— Nyabol, Program Mentor</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Ways you can impact lives</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-sm group cursor-pointer hover:shadow-md transition-all h-[400px]"
              >
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMgXWS98PD33vpCGNDOjIX-Od1muTZ8wcEMfkX8SfgBV-WvqPRlcsaU43sqjbi8ngK1N89nUd6eOg_BNx3LAgR954Oxn7ItDnF7DWqMl5N0LtLr3W4U8YxUr5z2QMqfnoQrf3Ca8v8sVDrv06doEQSi_l2v6FktqWFxEtWxHm0I9riFCHKIkb2Ulf3Yoj8ZdVJO_TZ81-9E6E6oMs1OekynllvXBTBdPF_BZ4dRbSsqcrMV8G1PrMzmU6L61CPnPMLJjWcIn8Bpw" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="bg-primary-fixed/90 backdrop-blur-sm w-14 h-14 rounded-2xl flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined text-3xl" data-icon="school">school</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-white mb-2">Educational Mentorship</h3>
                  <p className="text-white/80 leading-relaxed">Guide students through their academic journeys, provide tutoring, or share specialized skills in STEM, arts, and leadership.</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative rounded-2xl overflow-hidden shadow-sm group cursor-pointer transition-all h-[400px]"
              >
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgQXUjui42WixMJeojDaxuMVGgOluEypralXjv183kjD19-vaT0kxiGozZ9Fmb12eSqme7iLI_d5kdPJIvlJx7qnRvWBWi97Q9XHJnCHhrCgVtrN4XeWJZ9qvQbpw2Drv1rRRbJtVY_KJi2zMadzXgSCzRIy2YYg3lCrSyecT92LexbON3Xyjslp7YqaU7V-Mm6yuISvIpSSFpjEGJo1Cife1kvd6DXPnCjKMoGF3rnwOlLC2pkEPukrj4-jViUQiCk2u-xQ_hWQ" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-2xl" data-icon="campaign">campaign</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-white mb-2">Advocacy & Outreach</h3>
                  <p className="text-white/80 text-sm leading-relaxed">Help us spread the word about girls' education and women's rights in the community.</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden shadow-sm group cursor-pointer transition-all h-[400px]"
              >
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJHBVj7buWCi05IZ_pjjv66sPTkbf1CE33jJGjcK0oih3Ccd9RrkY8YWdPA3ybMuFlU39dE9b-IAOoJMUC9OZVTYmiyNsFMjkpKh87Ry5YDHZyNwmiMpIkip52fVwThkLxXT1Z-jSkSJWCxkr3-hBnhPKyd29XdAYfHqBgpkGRUhWj1XbA0jSw4aehpGE67R4ujOtJG-eWUBdmLuJL5nFjx_oEtL0S6DQaUCb9YRkXSQ9p88LGIUlJIrIEjJpwMIV2KBPI7NfFQg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/30 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-2xl" data-icon="event">event</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-white mb-2">Event Planning</h3>
                  <p className="text-white/80 text-sm leading-relaxed">Support our annual summits, workshops, and graduation ceremonies.</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="md:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-sm flex flex-col md:flex-row gap-8 items-center border border-outline-variant/10"
              >
                <div className="flex-1">
                  <h3 className="font-headline text-2xl font-bold mb-4">Resource Support</h3>
                  <p className="text-on-surface-variant leading-relaxed">Don't have time but want to help? Donating resources like books, laptops, or stationery makes a massive difference in our learning centers.</p>
                  <Link to="/support" className="mt-6 text-primary font-bold underline underline-offset-4 decoration-2">Donate Supplies</Link>
                </div>
                <div className="w-full md:w-48 h-48 rounded-xl overflow-hidden flex-shrink-0">
                  <img alt="Donation supplies" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNil30plb4NcoretUhqG_EGH1ayMf_CxTa5iTUU08pJGXDlyRlhQDTPIULn95ZZ8cBRX2JPPyDHM3RVB57_06Gb5GviLHaZAGgqe5FmL2TlgOhJK4L_8HKJRxjW549EoeXCIdM1Ql_kLxdUfLgBPmiXlsGTmEbOih9GS1Om38VGusdjRimtTZyPkzibPFBkpYkfYQX0aazNMU97xXDWMp5RLVZ1gsfLYdoCByIE7CUGFDR_puOqCObzUZPNjDJedqME0BJ-pay9Q" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 max-w-5xl mx-auto" id="signup">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-2">
              <h2 className="font-headline text-4xl font-bold text-on-surface mb-6">Ready to start?</h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                Fill out this brief form and our volunteer coordinator will reach out to you within 48 hours for a friendly introductory chat.
              </p>
              <div className="space-y-6">
                {[
                  { icon: 'check_circle', title: 'Flexible Hours', desc: 'We work around your schedule.' },
                  { icon: 'check_circle', title: 'Training Provided', desc: 'No prior experience needed.' },
                  { icon: 'check_circle', title: 'Direct Impact', desc: 'See the change you create.' }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-primary">
                      <span className="material-symbols-outlined" data-icon={item.icon}>{item.icon}</span>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">{item.title}</p>
                      <p className="text-sm text-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              {formSubmitted ? (
                <div className="bg-surface-container-lowest p-12 rounded-2xl shadow-sm border border-outline-variant/10 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-green-600 text-4xl">check_circle</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-green-600 mb-4">Application Sent!</h3>
                  <p className="text-on-surface-variant mb-6">Thank you for your interest in volunteering. Our coordinator will reach out within 48 hours.</p>
                </div>
              ) : (
                <form className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-sm border border-outline-variant/10" onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label className="block font-label text-sm font-bold text-on-surface mb-2">Full Name</label>
                      <input name="name" className="w-full px-5 py-4 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-surface-bright" placeholder="E.g. Ayen Deng" type="text" required/>
                    </div>
                    <div>
                      <label className="block font-label text-sm font-bold text-on-surface mb-2">Email Address</label>
                      <input name="email" className="w-full px-5 py-4 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-surface-bright" placeholder="ayen@example.com" type="email" required/>
                    </div>
                    <div>
                      <label className="block font-label text-sm font-bold text-on-surface mb-2">Why do you want to join us?</label>
                      <textarea name="message" className="w-full px-5 py-4 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-surface-bright" placeholder="Tell us a bit about your interests and availability..." rows="4" required></textarea>
                    </div>
                    <button className="w-full bg-primary text-on-primary font-label font-bold py-5 rounded-full hover:opacity-90 shadow-md hover:shadow-lg transition-all text-lg mt-4" type="submit">
                      Send Application
                    </button>
                    <p className="text-center text-xs text-on-surface-variant">By submitting, you agree to our volunteer privacy policy.</p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 bg-primary-fixed rounded-[2rem] mx-6 max-w-7xl md:mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            {subscribed ? (
              <>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-green-600 text-3xl">check_circle</span>
                </div>
                <h2 className="font-headline text-3xl md:text-5xl font-black text-on-primary-fixed mb-4">You're Subscribed!</h2>
                <p className="text-on-primary-fixed-variant text-lg">Check your inbox for a welcome email.</p>
              </>
            ) : (
              <>
                <h2 className="font-headline text-3xl md:text-5xl font-black text-on-primary-fixed mb-8">Stay updated on our journey</h2>
                <p className="text-on-primary-fixed-variant mb-10 text-lg">Receive impact stories and event invites directly in your inbox.</p>
                <form className="flex flex-col md:flex-row gap-3 max-w-md mx-auto" onSubmit={handleSubscribe}>
                  <input className="flex-grow px-6 py-4 rounded-full border-none focus:ring-2 focus:ring-primary outline-none" placeholder="Your email" type="email" required/>
                  <button type="submit" className="bg-primary text-on-primary px-8 py-4 rounded-full font-label font-bold">Subscribe</button>
                </form>
              </>
            )}
          </div>
        </section>
      </main>
    </motion.div>
  )
}