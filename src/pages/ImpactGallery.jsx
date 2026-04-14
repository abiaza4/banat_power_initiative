import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const galleryImages = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMgXWS98PD33vpCGNDOjIX-Od1muTZ8wcEMfkX8SfgBV-WvqPRlcsaU43sqjbi8ngK1N89nUd6eOg_BNx3LAgR954Oxn7ItDnF7DWqMl5N0LtLr3W4U8YxUr5z2QMqfnoQrf3Ca8v8sVDrv06doEQSi_l2v6FktqWFxEtWxHm0I9riFCHKIkb2Ulf3Yoj8ZdVJO_TZ81-9E6E6oMs1OekynllvXBTBdPF_BZ4dRbSsqcrMV8G1PrMzmU6L61CPnPMLJjWcIn8Bpw", alt: "Weekly Circle", title: "Safe Space & Storytelling" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKXjkKbduRvtTYRb5na0Lh6R4l9jXq2F_UaQWrjbRXcXnhtTCb1IlZicDdPn4eDzNaKAFoQcIrbIgXmLv6cJQ_gvj70DIxKAGD-PC3B8PnY8iyS_sLft3fGCpSFPgQ0DDW1e0_PV3j5SqdQlzROPhv6xu4qCmHjn2Br66qi8sROTjriCv-kJMzOS4zWhoW0wkmro5-7t5IuJIlHXMLDhf6gItcsmHEOu8FX5j6512kzDw5kEVEtTHY9SwM5jQg32OLt5CeYM8k-A", alt: "Portrait", isTall: true },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgxyuSjn723OFFVIhnr_oFtghZDvfb3fqHxJTqzszdWXiYjUVjqN1lSWkfK9nGMM0097MMUPV3_btEzBWTLJSgatfe3hq4csNyCPW_7lQcz0X6V_fsAxPgNy_oAbzeOyodIPYeveUECbxLpT4cw0TavUY_A-aR5r6US25UkeliXm7Q0hx82v2YPPtycwWWpWDVHj_zKoTDyuNmwFhgGjeCNnUFVNqmkrmH4rDGCXKDyoCufTtJgTpTIxwqSsOQnyLxQj3ilpCx4Q", alt: "Workshop", hasBadge: true, icon: "lightbulb" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgQXUjui42WixMJeojDaxuMVGgOluEypralXjv183kjD19-vaT0kxiGozZ9Fmb12eSqme7iLI_d5kdPJIvlJx7qnRvWBWi97Q9XHJnCHhrCgVtrN4XeWJZ9qvQbpw2Drv1rRRbJtVY_KJi2zMadzXgSCzRIy2YYg3lCrSyecT92LexbON3Xyjslp7YqaU7V-Mm6yuISvIpSSFpjEGJo1Cife1kvd6DXPnCjKMoGF3rnwOlLC2pkEPukrj4-jViUQiCk2u-xQ_hWQ", alt: "Festival" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa7e8u7jeUK5BEbfaD7InxcgM6U2Q0-xhvhj1PTs46xnTb-icclKiy3hVn4LGJ8jAEGcFX55IBAoGjFPbgkzQVpRDc7jsNnTXu09XggkE0WPCN-_580Up9X714wwzutQC-IoZhNS0G54bmttDac6o06BXLBvMMREGX-rpDCl9mbyulbG2WhVnYfwijtw4NgAOO6i0Nb5MZD5rcHcCz2w4ae8pNKEjYhuGrMjJyzJxN2zQO4AFVH8uXlqjHSMlEkJFxzTRFSkGbUQ", alt: "Tech Summit", hasOverlay: true },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6UqJ1mStezATDDOPMy6KKL2l_5X_WAYPxf_NlNir6yWk7Or-X1HedkzWyijr3FEpKql9fvfibRVL8EfExD8b_3RP5czBO3clkbG5rQToI6E8UxlWjtPVDESQ2x7CAmIssHXyFjhIUZMCnYxFLjGqVYdE6Lj6woWPUEiJHho7gKjXnyD_vLsxBZZWFuaQXthvmvQ7ekakrfcM4DAwWgcpMOnZ633v--CqE70HKbRu29KMt8WZ5RaetTGQdMA2OVu3g4H4Vu4lYgg", alt: "Hug" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJHBVj7buWCi05IZ_pjjv66sPTkbf1CE33jJGjcK0oih3Ccd9RrkY8YWdPA3ybMuFlU39dE9b-IAOoJMUC9OZVTYmiyNsFMjkpKh87Ry5YDHZyNwmiMpIkip52fVwThkLxXT1Z-jSkSJWCxkr3-hBnhPKyd29XdAYfHqBgpkGRUhWj1XbA0jSw4aehpGE67R4ujOtJG-eWUBdmLuJL5nFjx_oEtL0S6DQaUCb9YRkXSQ9p88LGIUlJIrIEjJpwMIV2KBPI7NfFQg", alt: "Graduation", hasTag: true, tag: "Graduation Day 2024" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7k6mxpXFH601t_Pkx2FGy0dZiUgZ53LPUOsH8K1V051JU4FH342-ajlRzyuHW_mbXpylK7q7WoLjZgJsGB0xMoe6pbHGO86lrYNstm7VZz4viOqyKy63y6r99Y5LGf8MjKRxdR58zF2lEK78xqo6WM6gW9tp6SHrzt2h5OpjYSf8qLseap14rMTlYTOoteVXpZztlyH7WEOfW-glDKOVNCsVrojz0w8RFsPgynL1JmojkrOSSng-BkjfdebpgGbFbDM7cQ3yRGw", alt: "Speaking", isTall: true, showCaption: true, caption: "Youth Advocacy Forum" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWbqz-X8IxJvHs1mHCTca_wi1KGwAihNgvZCOWALTkOYzUK5DhIFfs_y3nP1eiMnFIUOc5oaLtCIDT2UIZzOAX8ug3HBSMBzDPOE9OuBJqOCTQnT06_7TOpa5AvGmNfBQzbJ_aVY9zRy5-kKZJNnZmH-wqgKytgyeRdAaz94vRRew73Q5bpGqw8qqYJG3aL9TmYAsWvFr-QfyINEtcjsmop48tSAoHrLoyCoYu9r8svEDydU3jmuMyBRD1dRrkct9RP87C1pTp1A", alt: "Clapping", grayscale: true },
]

export default function ImpactGallery() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <header className="mb-20 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-black font-headline text-on-surface leading-none tracking-tighter mb-6">
            Voices of <span className="text-primary italic">Radiance</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="max-w-2xl text-lg text-on-surface-variant font-medium leading-relaxed">
              A visual anthology of resilience, growth, and the unbreakable bond of sisterhood in Juba. Witness the transformation of young South Sudanese women as they claim their future.
            </p>
            <div className="flex gap-2">
              <span className="bg-primary-fixed text-on-primary-fixed-variant px-4 py-1.5 rounded-full text-xs font-label font-bold uppercase tracking-wider">Engagement</span>
              <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-4 py-1.5 rounded-full text-xs font-label font-bold uppercase tracking-wider">2024 Events</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-6 h-auto md:h-[1200px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`relative group overflow-hidden rounded-xl bg-surface-container-low shadow-sm transition-all duration-500 hover:shadow-2xl ${
                img.isTall ? 'md:col-span-1 md:row-span-2' :
                index === 0 ? 'md:col-span-2 md:row-span-2' :
                index === 3 || index === 5 ? 'md:col-span-1 md:row-span-1' :
                index === 4 || index === 6 ? 'md:col-span-2 md:row-span-1' :
                'md:col-span-1 md:row-span-1'
              }`}
            >
              <img 
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${img.grayscale ? 'grayscale group-hover:grayscale-0' : ''}`} 
                src={img.src} 
                alt={img.alt} 
              />
              {(index === 0 || img.showCaption) && (
                <div className={`absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 ${!img.showCaption ? '' : 'bg-white/90 backdrop-blur-xl p-4 transform translate-y-full group-hover:translate-y-0'}`}>
                  <div>
                    <span className="text-white/80 text-sm font-label mb-2 block">{img.alt}</span>
                    {img.title && <h3 className="text-white text-3xl font-headline font-bold">{img.title}</h3>}
                    {img.caption && <p className="text-primary font-bold text-sm">{img.caption}</p>}
                  </div>
                </div>
              )}
              {img.hasBadge && (
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm">
                  <span className="material-symbols-outlined text-primary text-sm align-middle" data-icon={img.icon}>{img.icon}</span>
                </div>
              )}
              {img.hasOverlay && (
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-white font-headline text-2xl font-bold">{img.alt}</p>
                </div>
              )}
              {img.hasTag && (
                <div className="absolute top-6 left-6 bg-primary-container/90 backdrop-blur-md px-4 py-2 rounded-full">
                  <span className="text-on-primary-container text-xs font-bold font-label uppercase">{img.tag}</span>
                </div>
              )}
              {index === 1 && (
                <div className="absolute inset-4 border border-white/20 rounded-lg pointer-events-none group-hover:border-white/60 transition-all duration-500"></div>
              )}
            </motion.div>
          ))}
        </div>

        <section className="mt-32 grid md:grid-cols-2 gap-12 items-center bg-surface-container-low p-12 rounded-xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div>
            <h3 className="text-4xl font-headline font-black mb-6 leading-tight">Every Frame <br/>Tells a Story of <span className="text-primary">Power.</span></h3>
            <p className="text-on-surface-variant font-medium mb-8">Behind every smile is a journey of courage. Our gallery isn't just about events; it's a testament to the changing narrative of women's leadership in South Sudan.</p>
            <button className="bg-primary text-on-primary rounded-full px-8 py-3 font-label font-bold flex items-center gap-2 hover:bg-primary-container transition-all">
              Share Our Story
              <span className="material-symbols-outlined text-lg" data-icon="share">share</span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-8 bg-white rounded-xl shadow-sm border-b-4 border-primary">
              <div className="relative inline-block mb-2">
                <div className="absolute -top-2 -right-4 w-10 h-10 bg-primary-fixed opacity-30 rounded-full"></div>
                <span className="text-5xl font-headline font-black text-primary relative z-10">450+</span>
              </div>
              <p className="text-xs font-label font-bold uppercase text-on-surface-variant">Active Mentors</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-sm border-b-4 border-secondary">
              <div className="relative inline-block mb-2">
                <div className="absolute -top-2 -right-4 w-10 h-10 bg-secondary-fixed opacity-30 rounded-full"></div>
                <span className="text-5xl font-headline font-black text-secondary relative z-10">12k</span>
              </div>
              <p className="text-xs font-label font-bold uppercase text-on-surface-variant">Lives Impacted</p>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  )
}