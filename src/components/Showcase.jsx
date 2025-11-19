import { motion } from 'framer-motion'
import { Cpu, Gauge, Network, ShieldCheck } from 'lucide-react'

const items = [
  {
    icon: Gauge,
    title: 'Real‑time FPS Telemetry',
    desc: 'Live overlays and post‑match reports to track your improvement round by round.'
  },
  {
    icon: Network,
    title: 'Adaptive Route AI',
    desc: 'Auto‑switch routing paths mid‑match to keep your ping consistent under pressure.'
  },
  {
    icon: Cpu,
    title: 'Per‑Title Optimizations',
    desc: 'Game‑specific profiles crafted for engines like Source, Unreal, and Unity.'
  },
  {
    icon: ShieldCheck,
    title: 'Rollback Safety',
    desc: 'One‑tap restore points ensure any change is reversible in seconds.'
  }
]

export default function Showcase() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Engineered for performance</h2>
          <p className="mt-3 text-slate-300">Precision tuning backed by telemetry and safety.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.4 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6"
            >
              <div className="absolute -inset-16 bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-transparent blur-3xl" />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-600/20 border border-white/10 grid place-items-center mb-4">
                  <it.icon className="w-6 h-6 text-cyan-300" />
                </div>
                <h3 className="text-white font-semibold">{it.title}</h3>
                <p className="text-slate-300/90 text-sm mt-2">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
