import { Gauge, Network, Cpu, Shield } from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: 'FPS Boost Engine',
    desc: 'Driver tuning, background task pruning, and in‑game config optimization for higher, steadier frames.'
  },
  {
    icon: Network,
    title: 'Ping & Latency Optimization',
    desc: 'Smart route selection, DNS tuning, and QoS presets to shave precious milliseconds from your connection.'
  },
  {
    icon: Cpu,
    title: 'Hardware Consultancy',
    desc: 'Personalized upgrade paths and thermals analysis to get the most from your rig on any budget.'
  },
  {
    icon: Shield,
    title: 'Safe, Reversible',
    desc: 'All changes are logged and reversible with one click. Your system, your control.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for competitive edge</h2>
          <p className="mt-3 text-slate-300">Sharper frames, cleaner routes, smarter hardware — in one agent.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6 hover:border-cyan-400/40 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-600/20 border border-white/10 grid place-items-center mb-4">
                <f.icon className="w-6 h-6 text-cyan-300" />
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="text-slate-300/90 text-sm mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
