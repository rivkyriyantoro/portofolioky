"use client"

import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"

export function ChatBackground() {
  const [cursor, setCursor] = useState({ x: -1000, y: -1000 })
  const [hue, setHue] = useState(240)

  const onMouseMove = useCallback((e: MouseEvent) => {
    setCursor({ x: e.clientX, y: e.clientY })
    // X → hue: 190 (cyan-blue) to 320 (magenta) as cursor moves right
    // Y → shift hue slightly: brighter at top, deeper at bottom
    const h = 190 + (e.clientX / window.innerWidth) * 130
    setHue(Math.round(h))
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMouseMove)
  }, [onMouseMove])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#07070e]">
      {/* Cursor-following primary glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(650px circle at ${cursor.x}px ${cursor.y}px, hsla(${hue}, 85%, 32%, 0.28) 0%, transparent 70%)`,
          transition: "background 120ms ease-out",
        }}
      />

      {/* Soft secondary halo offset from cursor */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(900px circle at ${cursor.x + 120}px ${cursor.y - 80}px, hsla(${hue + 45}, 75%, 25%, 0.14) 0%, transparent 65%)`,
          transition: "background 250ms ease-out",
        }}
      />

      {/* Ambient orb 1 — top-left */}
      <motion.div
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-[100px]"
        style={{ background: `hsla(${hue}, 70%, 28%, 0.22)` }}
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Ambient orb 2 — bottom-right */}
      <motion.div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-[120px]"
        style={{ background: `hsla(${hue + 55}, 65%, 22%, 0.2)` }}
        animate={{ x: [0, -70, 40, 0], y: [0, 50, -60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Ambient orb 3 — center-top */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[380px] h-[380px] rounded-full blur-[90px]"
        style={{ background: `hsla(${hue + 25}, 60%, 20%, 0.15)` }}
        animate={{ scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#07070e_100%)]" />
    </div>
  )
}
