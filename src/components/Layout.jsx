import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Services from './Services'
import Subscribe from './Subscribe'
import About from './About'
import Contact from './Contact'
import Home from '../App'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative">
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute -top-40 -left-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-40 -right-10 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
