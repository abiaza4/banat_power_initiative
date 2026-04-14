import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-2xl">women</span>
              </div>
              <div>
                <span className="text-xl font-black text-pink-500 font-headline">Banat Power</span>
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest">Initiative</p>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Empowering the next generation of female leaders in South Sudan through education, mentorship, and digital literacy.
            </p>
            <div className="flex gap-3">
              <a href="mailto:banatpower2@gmail.com" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-white transition-all" title="Email">
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
              <a href="#facebook" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-blue-600 hover:text-white transition-all" title="Facebook">
                <span className="material-symbols-outlined text-lg">public</span>
              </a>
              <a href="#instagram" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-pink-600 hover:text-white transition-all" title="Instagram">
                <span className="material-symbols-outlined text-lg">photo_camera</span>
              </a>
              <a href="#twitter" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all" title="Twitter/X">
                <span className="material-symbols-outlined text-lg">close</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-zinc-400 hover:text-pink-500 transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-zinc-400 hover:text-pink-500 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/impact" className="text-zinc-400 hover:text-pink-500 transition-colors text-sm">Our Impact</Link></li>
              <li><Link to="/programs" className="text-zinc-400 hover:text-pink-500 transition-colors text-sm">Programs</Link></li>
              <li><Link to="/leadership" className="text-zinc-400 hover:text-pink-500 transition-colors text-sm">Leadership</Link></li>
            </ul>
          </div>
          
          {/* Get Involved */}
          <div>
            <h4 className="font-bold text-white mb-6">Get Involved</h4>
            <ul className="space-y-3">
              <li><Link to="/get-involved" className="text-zinc-400 hover:text-pink-500 transition-colors text-sm">Volunteer</Link></li>
              <li><Link to="/support" className="text-zinc-400 hover:text-pink-500 transition-colors text-sm">Donate</Link></li>
              <li><Link to="/contact" className="text-zinc-400 hover:text-pink-500 transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/nile-bloom" className="text-zinc-400 hover:text-pink-500 transition-colors text-sm">Design System</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-pink-500 mt-0.5">location_on</span>
                <span className="text-zinc-400 text-sm">Juba, South Sudan</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-pink-500">call</span>
                <a href="tel:+211921768811" className="text-zinc-400 hover:text-pink-500 text-sm">+211 921 768 811</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-pink-500">mail</span>
                <a href="mailto:banatpower2@gmail.com" className="text-zinc-400 hover:text-pink-500 text-sm">banatpower2@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">© 2024 Banat Power Initiative. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="text-zinc-500 hover:text-pink-500 text-sm transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-zinc-500 hover:text-pink-500 text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}