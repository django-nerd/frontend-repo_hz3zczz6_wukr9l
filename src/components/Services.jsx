import { Gauge, Network, Cpu } from 'lucide-react'

const plans = [
  {
    title: 'FPS Boost',
    icon: Gauge,
    tiers: [
      { name: 'Starter', price: '$7/mo', features: ['Driver cleanup & updates', 'Process debloat preset', 'In‑game config profile'] },
      { name: 'Pro', price: '$14/mo', features: ['Everything in Starter', 'Dynamic FPS stabilizer', 'Thermals & fan curves'] }
    ]
  },
  {
    title: 'Ping & Latency',
    icon: Network,
    tiers: [
      { name: 'Starter', price: '$6/mo', features: ['DNS & route tuning', 'Wi‑Fi / Ethernet presets', 'Packet loss checks'] },
      { name: 'Pro', price: '$12/mo', features: ['Everything in Starter', 'Game‑aware routing', 'QoS & bufferbloat fixes'] }
    ]
  },
  {
    title: 'Hardware Consultant',
    icon: Cpu,
    tiers: [
      { name: 'One‑off', price: '$19', features: ['Build review', 'Upgrade path', 'Thermals & airflow map'] },
      { name: 'VIP', price: '$29/mo', features: ['Quarterly tune‑ups', 'Live parts picking', 'Priority responses'] }
    ]
  }
]

export default function Services() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white">Services</h1>
          <p className="mt-3 text-slate-300">Choose what you need — or bundle for full performance uplift.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden">
              <div className="p-6 border-b border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-600/20 border border-white/10 grid place-items-center">
                  <p.icon className="w-6 h-6 text-cyan-300" />
                </div>
                <h3 className="text-white font-semibold">{p.title}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                {p.tiers.map((t) => (
                  <div key={t.name} className="p-6">
                    <div className="text-slate-300 text-sm">{t.name}</div>
                    <div className="text-3xl font-bold text-white mt-1">{t.price}</div>
                    <ul className="mt-4 space-y-2 text-slate-300/90 text-sm list-disc list-inside">
                      {t.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    <a href="/subscribe" className="mt-5 inline-flex px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-sm">
                      Choose
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
