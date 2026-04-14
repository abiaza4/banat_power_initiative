import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import GetInvolved from './pages/GetInvolved'
import ImpactGallery from './pages/ImpactGallery'
import Leadership from './pages/Leadership'
import Programs from './pages/Programs'
import Support from './pages/Support'
import NileBloom from './pages/NileBloom'

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="get-involved" element={<GetInvolved />} />
            <Route path="impact" element={<ImpactGallery />} />
            <Route path="leadership" element={<Leadership />} />
            <Route path="programs" element={<Programs />} />
            <Route path="support" element={<Support />} />
            <Route path="nile-bloom" element={<NileBloom />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  )
}

export default App