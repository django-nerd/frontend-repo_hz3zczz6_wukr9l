export default function Contact() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <h1 className="text-3xl font-extrabold text-white">Contact</h1>
            <p className="mt-3 text-slate-300">Questions, feedback, or partnership ideas? Drop us a line.</p>
            <form className="mt-6 grid gap-4">
              <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Your name" />
              <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Email" />
              <textarea rows="5" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Message" />
              <button type="button" className="rounded-xl px-4 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white">Send</button>
            </form>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white">Support</h2>
            <p className="mt-2 text-slate-300">We respond within 24 hours on business days.</p>
            <ul className="mt-4 space-y-2 text-slate-300/90">
              <li>Email: support@aethercore.gg</li>
              <li>Discord: /aethercore</li>
              <li>Twitter: @aethercore</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
