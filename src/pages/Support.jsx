import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Support() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <main className="pt-24 pb-20">
        <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-16">
          <div className="order-2 md:order-1">
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter leading-tight mb-6">
              Invest in a <span className="text-primary italic">Radiant</span> Future.
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-lg mb-8">
              Your support helps transform lives. We provide South Sudanese girls with the tools, mentorship, and education to lead their communities.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuDyLxrr_4g1bVa6ZVvXevJTJsnvL3Z4fJi1pnkT1zCgfkjlxUyfTGD72mIduaK_QCaIToKk2Khh8VT2i27StoCbCJhMoBQdGX8eGTSjwJlFSxgkO-dp6PfOcMXAeUufBL-EM2dwzwbgMQ-IaZr-Uwnopu-gi-LqvsMaz1viYg68cz1UyzrvDG7rg_UW16D73cfS23Fp4aUXynB4eyyMxC81f5mSvZ0ke-sWpL9cCDxV_rfybt1NAkc0PIwxPOQIdNw2iwLzipNR5Q',
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuAXFWkVOYi4E8xnBEssE9MDcBcU9jXSWimjdDDgxCRvmnrpQOUAIqXX-DnB2nJXzJaqPS9R51tteBdvmVEtZq21uxCyV7P1z-pDABDcFcskzmATpdXbrkf4f3BCNdumAnk0XQndn7oj_K_K8medNZXiTh1uHTZZyAW48VEstUOGqtmwEt8DoaVY_P0Mz2jITud1rGP78Koqb-bCT7RGf2eKh41wtw6NdlcWR5ANMPbPNf_ES-5wnLlf99qxK9wSo0ayh9lOIdwmuw',
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuDokFRrOv8kfUWk1j-pUQsQlv6bTK-S6d2rCEcwVJZ4hE7JoWrprrS41cgRGV6i8kmKBWs3fnCi5ffXHw0cg6gB8Z9Cfccf2fvj6paQPFSSUHYyk2I0M8z-dU7DunLwdaFgsZuEfHN1-v2Rqs5fZlQY2YiYsx5gG99FHIhf0q7579RZ-mVRyMx41-7qxAt5xhW2Oh20pk-gMStbhJBepNcP7NQmQD_K0ckID5HCUBJyAUQSPx_ohj5MFiOM16WirCBA0WLy-6vcfg'
                ].map((src, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <img className="w-full h-full object-cover" src={src} alt="" />
                  </div>
                ))}
              </div>
              <span className="text-sm font-label font-semibold text-on-surface-variant">Joined by 1,200+ Supporters</span>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="aspect-square rounded-xxl overflow-hidden editorial-shadow bg-surface-container-low">
              <img className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700" data-alt="vibrant photo of a group of empowered young African women" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhFn1TWcFke8Kqlr1U_p6VC0-FUr6NcFA-wA7jH5rXgKL5mvDw6lkQ0yRWhOSIYJs6UCKtXfegj7fsMpYO9KTGXaK9adOxWHwByCA-e7qDMUyJsXcxGxyu-fuw9-qZ6I5Ua3vBGeHXkWfm-H9ExRudX-Tv0C1BQrFwuouo1tgnybdyGhfFc35LRIF4nl5lvxga3CYyC1l-rM_h46ZjB_Bczq9i5Pj43AQrl5Xz7MEeGi8KHzgyjhs-D1BC6Nev1Pfmedwv0PjUVA" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary-container p-8 rounded-xxl text-on-primary-container editorial-shadow max-w-[240px]">
              <span className="material-symbols-outlined text-4xl mb-2" data-icon="favorite">favorite</span>
              <p className="font-headline font-bold text-lg leading-snug">Every donation sparks a new narrative.</p>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { number: '450+', label: 'Girls Mentored' },
                { number: '12', label: 'Active Programs' },
                { number: '85%', label: 'Career Growth' },
                { number: '3k+', label: 'Lives Impacted' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -top-4 -right-2 w-16 h-16 bg-primary-fixed opacity-30 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
                  <p className="font-headline text-5xl font-black text-primary relative z-10">{stat.number}</p>
                  <p className="font-label text-sm font-bold text-on-surface-variant mt-2 uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 flex flex-col gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-surface-container-lowest rounded-xxl editorial-shadow"
              >
                <h3 className="font-headline text-2xl font-bold mb-4">Why it matters?</h3>
                <div className="space-y-6">
                  {[
                    { icon: 'school', title: 'Tertiary Scholarships', desc: 'Covering tuition for girls in STEM and leadership tracks.' },
                    { icon: 'psychology', title: 'Mentorship Circles', desc: 'Connecting students with South Sudanese professionals globally.' },
                    { icon: 'rocket_launch', title: 'Innovation Hubs', desc: 'Safe spaces for digital literacy and creative problem solving.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="bg-primary-fixed w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-primary" data-icon={item.icon}>{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className="text-on-surface-variant text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative rounded-xxl overflow-hidden h-64 bg-primary p-8 flex flex-col justify-end"
              >
                <img className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsy8_y3DssYubpHZTcxH6fuxCsLrBOyKUW4zjBJU9p-e7Y3L9CzKa8zjYpvYw9jRpVuUcd4WiPrSekr3OF_iDVk0q8AzsGK8NrmsN7c-Wg1XQERsqErRGwHOaMg0N4MraVNI5pL5mSIrcQhsYh6I1kZHbt_zF00yRyOwKDtErhBEuSL-pT_GpMFn-pE0ygAcrQ84E2CP6GujFU479p4FkYJaxG5DyJkbq1elTg39wzAdr2clql2ijSnYzSaELHGDT_p7okSRvLyA" />
                <blockquote className="relative z-10 text-on-primary italic font-headline text-xl">
                  "Banat Power gave me the courage to believe that my voice can change the world."
                </blockquote>
                <cite className="relative z-10 text-on-primary-container text-sm font-bold mt-4 block">— Aluel, Program Alumna</cite>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-primary rounded-xxl p-8 md:p-12 text-on-primary relative overflow-hidden editorial-shadow"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h2 className="font-headline text-3xl font-black mb-2">Secure Giving</h2>
                <p className="mb-10 text-primary-fixed opacity-90">Every dollar is transparently tracked and directed to our impact programs.</p>
                <form className="space-y-8">
                  <div>
                    <label className="block font-label font-bold text-xs uppercase tracking-widest mb-4 opacity-80">Choose Amount (USD)</label>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                      {['$25', '$50', '$100', 'Other'].map((amt, i) => (
                        <button key={amt} type="button" className={`py-3 px-2 rounded-full border border-white/20 bg-white/10 hover:bg-white text-on-primary hover:text-primary font-bold transition-all ${i === 2 ? 'border-2 border-white bg-white text-primary shadow-lg' : ''}`}>
                          {amt}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-label text-sm font-bold mb-2">Full Name</label>
                      <input className="w-full glass-input border-0 rounded-xl px-4 py-3 placeholder:text-white/40 focus:ring-2 focus:ring-white transition-all text-white" placeholder="Sarah Deng" type="text"/>
                    </div>
                    <div>
                      <label className="block font-label text-sm font-bold mb-2">Email Address</label>
                      <input className="w-full glass-input border-0 rounded-xl px-4 py-3 placeholder:text-white/40 focus:ring-2 focus:ring-white transition-all text-white" placeholder="sarah@example.com" type="email"/>
                    </div>
                  </div>
                  <div>
                    <label className="block font-label text-sm font-bold mb-4">Payment Method</label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-4 p-4 rounded-xl glass-input border-2 border-white/40 cursor-pointer hover:bg-white/20 transition-all">
                        <span className="material-symbols-outlined" data-icon="credit_card">credit_card</span>
                        <div>
                          <p className="font-bold text-sm">Debit/Credit Card</p>
                          <p className="text-xs opacity-60">Visa, Mastercard</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 rounded-xl glass-input border border-white/10 cursor-pointer hover:bg-white/20 transition-all">
                        <span className="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
                        <div>
                          <p className="font-bold text-sm">Mobile Money</p>
                          <p className="text-xs opacity-60">M-Pesa, MTN MoMo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-white text-primary py-4 rounded-full font-headline font-black text-lg hover:bg-primary-fixed transition-colors shadow-xl">
                    Complete Donation
                  </button>
                  <p className="text-center text-xs opacity-60 font-medium">
                    Secured by SSL. You will be redirected to our payment partner to complete your transaction safely.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="bg-surface-container-low rounded-xxl p-12 text-center">
            <h3 className="font-headline text-3xl font-extrabold mb-4">A Commitment to Transparency</h3>
            <p className="text-on-surface-variant max-w-2xl mx-auto mb-10">We believe in radical accountability. 92% of all donations go directly to program delivery in Juba and beyond.</p>
            <div className="flex flex-wrap justify-center gap-12 grayscale opacity-60">
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-4xl" data-icon="verified_user">verified_user</span>
                <span className="text-xs font-bold uppercase tracking-widest">Tax Exempt (501c3)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-4xl" data-icon="analytics">analytics</span>
                <span className="text-xs font-bold uppercase tracking-widest">Annual Audits</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-4xl" data-icon="lock">lock</span>
                <span className="text-xs font-bold uppercase tracking-widest">End-to-End Encryption</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  )
}