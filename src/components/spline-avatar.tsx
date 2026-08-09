"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

// Place your claymation image at /public/avatar.png
// (export from ChatGPT, remove bg at remove.bg for best result)
const AVATAR_SRC = "/avatar.png"

function useCursorTilt() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const cfg = { stiffness: 110, damping: 18 }
  const sx  = useSpring(mx, cfg)
  const sy  = useSpring(my, cfg)
  const rotateY = useTransform(sx, [-1, 1], [-20, 20])
  const rotateX = useTransform(sy, [-1, 1], [14, -14])
  return { mx, my, rotateX, rotateY }
}

export function SplineAvatar() {
  const ref = useRef<HTMLDivElement>(null)
  const { mx, my, rotateX, rotateY } = useCursorTilt()
  const [imgOk, setImgOk] = useState<boolean | null>(null)

  // Probe for image on mount — avoid hydration mismatch
  useEffect(() => {
    const img = new window.Image()
    img.src = AVATAR_SRC
    img.onload  = () => setImgOk(true)
    img.onerror = () => setImgOk(false)
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth)  * 2 - 1)
      my.set((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [mx, my])

  return (
    <div
      ref={ref}
      className="relative w-32 h-32"
      style={{ perspective: "600px" }}
    >
      {/* Breathing ambient glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/60 to-purple-600/60 blur-2xl"
        animate={{ scale: [1.1, 1.5, 1.1], opacity: [0.4, 0.15, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 3-D tilt + float */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full h-full"
      >
        {imgOk === true ? (
          /* ── Real claymation image ── */
          <div className="w-full h-full rounded-full overflow-hidden shadow-2xl ring-1 ring-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={AVATAR_SRC}
              alt="Rivky"
              className="w-full h-full object-cover object-center scale-[1.08]"
              draggable={false}
            />
          </div>
        ) : imgOk === false ? (
          /* ── SVG fallback while image is missing ── */
          <FallbackSvg />
        ) : null /* loading — avoid flash */}
      </motion.div>
    </div>
  )
}

/* ── Fallback SVG (shows until /public/avatar.png is placed) ── */
function FallbackSvg() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <radialGradient id="fb-face" cx="40%" cy="30%" r="68%">
          <stop offset="0%"   stopColor="#f7ddb8" />
          <stop offset="28%"  stopColor="#edc490" />
          <stop offset="65%"  stopColor="#c98c5a" />
          <stop offset="100%" stopColor="#8a5228" />
        </radialGradient>
        <radialGradient id="fb-ao" cx="50%" cy="50%" r="50%">
          <stop offset="60%"  stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.26)" />
        </radialGradient>
        <radialGradient id="fb-hair" cx="38%" cy="26%" r="68%">
          <stop offset="0%"  stopColor="#2e1f5e" />
          <stop offset="60%" stopColor="#160e36" />
          <stop offset="100%" stopColor="#070310" />
        </radialGradient>
      </defs>

      <ellipse cx="100" cy="70"  rx="70" ry="62" fill="url(#fb-hair)" />
      <rect   x="80"  y="174" width="40" height="24" rx="15" fill="#c98c5a" />
      <ellipse cx="28"  cy="116" rx="13" ry="18" fill="#c98c5a" />
      <ellipse cx="172" cy="116" rx="13" ry="18" fill="#c98c5a" />
      <ellipse cx="100" cy="112" rx="72" ry="74" fill="url(#fb-face)" />
      <ellipse cx="100" cy="112" rx="72" ry="74" fill="url(#fb-ao)"  />
      <path d="M 32 96 Q 30 36 100 26 Q 170 36 168 96 Q 160 48 100 42 Q 40 48 32 96 Z" fill="url(#fb-hair)" />
      <ellipse cx="72"  cy="108" rx="20" ry="18" fill="white" />
      <circle  cx="72"  cy="108" r="8"   fill="#3730a3" />
      <circle  cx="72"  cy="108" r="5"   fill="#040110" />
      <circle  cx="75"  cy="105" r="2"   fill="white" opacity="0.9" />
      <ellipse cx="128" cy="108" rx="20" ry="18" fill="white" />
      <circle  cx="128" cy="108" r="8"   fill="#3730a3" />
      <circle  cx="128" cy="108" r="5"   fill="#040110" />
      <circle  cx="131" cy="105" r="2"   fill="white" opacity="0.9" />
      <path d="M 50 86 Q 66 79 84 83" fill="none" stroke="#160c32" strokeWidth="6.5" strokeLinecap="round" />
      <path d="M 116 83 Q 134 79 150 86" fill="none" stroke="#160c32" strokeWidth="6.5" strokeLinecap="round" />
      <ellipse cx="91"  cy="148" rx="8" ry="6.5" fill="#c28050" />
      <ellipse cx="109" cy="148" rx="8" ry="6.5" fill="#c28050" />
      <path d="M 80 162 Q 100 178 120 162" fill="none" stroke="rgba(65,30,12,0.45)" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="40"  cy="134" rx="16" ry="10" fill="rgba(255,110,90,0.17)" />
      <ellipse cx="160" cy="134" rx="16" ry="10" fill="rgba(255,110,90,0.17)" />
      <circle cx="162" cy="182" r="9"   fill="#0c1020" />
      <circle cx="162" cy="182" r="6.5" fill="#10b981" />
      <circle cx="162" cy="182" r="4"   fill="#34d399" />

      {/* "Add avatar.png" hint */}
      <text x="100" y="196" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.3)" fontFamily="sans-serif">
        add avatar.png
      </text>
    </svg>
  )
}
