import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useMemo } from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 20, mass: 0.2 })

  // Subtle parallax + rotation tied to scroll
  const y = useTransform(smooth, [0, 1], [0, -120])
  const rotate = useTransform(smooth, [0, 1], [0, 12])
  const scale = useTransform(smooth, [0, 1], [1, 1.05])

  const sceneUrl = useMemo(() => {
    // Prefer an env override so you can swap scenes without code changes
    const envUrl = import.meta.env.VITE_SPLINE_CONTROLLER_URL
    // Fallback: controller-themed scene (replace with your preferred controller scene as needed)
    const fallback = 'https://prod.spline.design/uvrY5n4m4v3iT3uT/scene.splinecode'
    return envUrl || fallback
  }, [])

  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_10%,rgba(56,189,248,0.25),transparent),radial-gradient(400px_160px_at_80%_10%,rgba(99,102,241,0.25),transparent)] pointer-events-none" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/30 text-cyan-200/90 text-xs mb-5 bg-slate-900/50">
              Next‑Gen Gaming Agent
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Optimize your play. Dominate every lobby.
            </h1>
            <p className="mt-5 text-slate-300 max-w-xl">
              AetherCore is your AI‑powered gaming ops team: FPS boosting, latency tuning, and hardware guidance — all wrapped in sleek automation.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="/subscribe" className="inline-flex justify-center items-center rounded-xl px-5 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium shadow-lg shadow-cyan-500/20">
                Start Free Trial
              </a>
              <a href="#features" className="inline-flex justify-center items-center rounded-xl px-5 py-3 bg-white/10 text-white font-medium hover:bg-white/15">
                Explore Features
              </a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center text-slate-300/80 text-sm">
              <div><span className="text-white font-semibold">+25%</span><br/>Average FPS</div>
              <div><span className="text-white font-semibold">-40ms</span><br/>Latency</div>
              <div><span className="text-white font-semibold">24/7</span><br/>Agent Support</div>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[600px]">
            {/* Make the 3D element sticky on large screens so it moves along the page */}
            <motion.div
              className="absolute inset-0 rounded-[24px] overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-sm lg:sticky lg:top-24"
              style={{ y, rotate, scale }}
            >
              <div className="absolute -inset-10 bg-gradient-to-br from-cyan-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none" />
              <Spline scene={sceneUrl} style={{ width: '100%', height: '100%' }} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
