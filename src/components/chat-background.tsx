"use client"

import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"

const PARTICLES = [
  { left: "5%",  top: "12%", size: 1.5, duration: 14, delay: 0   },
  { left: "15%", top: "68%", size: 2,   duration: 18, delay: 1.5 },
  { left: "28%", top: "35%", size: 1,   duration: 12, delay: 3   },
  { left: "38%", top: "82%", size: 2.5, duration: 20, delay: 0.5 },
  { left: "52%", top: "18%", size: 1.5, duration: 16, delay: 2   },
  { left: "63%", top: "55%", size: 1,   duration: 11, delay: 4   },
  { left: "72%", top: "28%", size: 2,   duration: 17, delay: 1   },
  { left: "82%", top: "72%", size: 1.5, duration: 13, delay: 2.5 },
  { left: "91%", top: "42%", size: 2.5, duration: 19, delay: 0   },
  { left: "45%", top: "62%", size: 1,   duration: 15, delay: 3.5 },
  { left: "20%", top: "90%", size: 2,   duration: 22, delay: 1   },
  { left: "75%", top: "8%",  size: 1.5, duration: 14, delay: 4.5 },
  { left: "90%", top: "85%", size: 1,   duration: 16, delay: 2   },
  { left: "35%", top: "20%", size: 2,   duration: 18, delay: 0.5 },
  { left: "58%", top: "78%", size: 1.5, duration: 21, delay: 3   },
  { left: "10%", top: "50%", size: 1,   duration: 13, delay: 1.5 },
  { left: "68%", top: "92%", size: 2,   duration: 17, delay: 2.5 },
  { left: "85%", top: "22%", size: 1.5, duration: 15, delay: 0.8 },
]

export function ChatBackground() {
  const [cursor, setCursor] = useState({ x: -1000, y: -1000 })
  const [hue, setHue] = useState(240)

  const onMouseMove = useCallback((e: MouseEvent) => {
    setCursor({ x: e.clientX, y: e.clientY })
    setHue(Math.round(190 + (e.clientX / window.innerWidth) * 130))
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMouseMove)
  }, [onMouseMove])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#07070e]">
      {/* Cursor glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(650px circle at ${cursor.x}px ${cursor.y}px, hsla(${hue}, 85%, 32%, 0.28) 0%, transparent 70%)`,
          transition: "background 120ms ease-out",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(900px circle at ${cursor.x + 120}px ${cursor.y - 80}px, hsla(${hue + 45}, 75%, 25%, 0.14) 0%, transparent 65%)`,
          transition: "background 250ms ease-out",
        }}
      />

      {/* Ambient orbs */}
      <motion.div
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-[100px]"
        style={{ background: `hsla(${hue}, 70%, 28%, 0.22)` }}
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-[120px]"
        style={{ background: `hsla(${hue + 55}, 65%, 22%, 0.2)` }}
        animate={{ x: [0, -70, 40, 0], y: [0, 50, -60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[380px] h-[380px] rounded-full blur-[90px]"
        style={{ background: `hsla(${hue + 25}, 60%, 20%, 0.15)` }}
        animate={{ scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [-12, 12, -12],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "160px 160px",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#07070e_100%)]" />
    </div>
  )
}
