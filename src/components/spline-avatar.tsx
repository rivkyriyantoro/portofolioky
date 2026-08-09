"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"

// ─── Paste your Spline scene URL here ───────────────────────────────────────
const SPLINE_SCENE_URL = ""
// ────────────────────────────────────────────────────────────────────────────

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <FallbackAvatar />,
})

export function SplineAvatar() {
  if (!SPLINE_SCENE_URL) return <FallbackAvatar />

  return (
    <div className="relative w-[200px] h-[200px]">
      {/* Breathing glow behind scene */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 blur-2xl opacity-30"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.15, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <Spline
        scene={SPLINE_SCENE_URL}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      />
    </div>
  )
}

function FallbackAvatar() {
  return (
    <div className="relative">
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 blur-xl"
        animate={{ scale: [1.1, 1.5, 1.1], opacity: [0.45, 0.2, 0.45] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2px] shadow-2xl">
        <div className="w-full h-full rounded-full bg-[#07070e] flex items-center justify-center">
          <span className="text-white font-bold text-xl tracking-tight">RR</span>
        </div>
      </div>
      <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-[#07070e]" />
    </div>
  )
}
