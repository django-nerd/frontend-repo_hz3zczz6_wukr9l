export default function About() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8">
          <h1 className="text-4xl font-extrabold text-white">About</h1>
          <p className="mt-4 text-slate-300">
            AetherCore is a gaming optimization agent engineered for competitive consistency. We blend system tuning, network intelligence, and hardware guidance into one seamless experience. Our goal: remove bottlenecks so your skill shines.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-white">3</div>
              <div className="text-slate-300/80">Core Modules</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">12k+</div>
              <div className="text-slate-300/80">Optimizations Applied</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">98.7%</div>
              <div className="text-slate-300/80">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
