import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />

      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-slate-400">
          © {new Date().getFullYear()} AetherCore. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Home
