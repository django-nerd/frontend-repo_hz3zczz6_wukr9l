export default function Subscribe() {
  const tiers = [
    { name: 'Starter', price: '$12/mo', desc: 'Great for casual players', perks: ['Basic FPS & Ping packs', 'Monthly reports', 'Email support'] },
    { name: 'Pro', price: '$24/mo', desc: 'For ranked grinders', perks: ['All optimization modules', 'Weekly tuning', 'Priority chat support'] },
    { name: 'Elite', price: '$39/mo', desc: 'Esports ready', perks: ['Dedicated agent', 'Custom scripts', '24/7 response'] },
  ]

  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white">Subscriptions</h1>
          <p className="mt-3 text-slate-300">Flexible plans that scale with your grind.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="text-slate-300 text-sm">{t.name}</div>
              <div className="text-4xl font-bold text-white mt-1">{t.price}</div>
              <p className="text-slate-300/90 mt-2">{t.desc}</p>
              <ul className="mt-4 space-y-2 text-slate-300/90 text-sm list-disc list-inside">
                {t.perks.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <a href="#" className="mt-5 inline-flex px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-sm">Start Now</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
