import { Link, NavLink } from 'react-router-dom'
import { Menu, Gamepad2, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/subscribe', label: 'Subscriptions' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 shadow-lg">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-[2px]">
                <div className="w-full h-full rounded-[10px] bg-slate-900 grid place-items-center">
                  <Gamepad2 className="w-5 h-5 text-cyan-300" />
                </div>
              </div>
              <span className="font-semibold text-white tracking-tight">AetherCore</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className={({ isActive }) => `px-4 py-2 rounded-xl text-sm transition-colors ${isActive ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/10'}`}
                >
                  {n.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:block">
              <Link to="/subscribe" className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-sm font-medium shadow-lg shadow-cyan-500/20">
                Get Started
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <button className="md:hidden text-white/80" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="grid gap-2">
                {navItems.map((n) => (
                  <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className={({ isActive }) => `px-3 py-2 rounded-lg ${isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white hover:bg-white/10'}`}>
                    {n.label}
                  </NavLink>
                ))}
                <Link to="/subscribe" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-center">
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
