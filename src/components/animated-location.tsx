"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin } from "lucide-react"

const cities = ["Jakarta", "Jogja"]

export function AnimatedLocation() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % cities.length)
    }, 2400)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center justify-center gap-1.5 select-none">
      <MapPin className="w-2.5 h-2.5 text-indigo-400/50 shrink-0" />

      {/* City — animated */}
      <div className="relative h-[18px] overflow-hidden flex items-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ y: 14, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -14, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="text-[11px] font-semibold tracking-wide bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent absolute whitespace-nowrap"
          >
            {cities[index]}
          </motion.span>
        </AnimatePresence>
        {/* Reserve width based on longest city name */}
        <span className="text-[11px] font-semibold tracking-wide invisible whitespace-nowrap">
          {cities.reduce((a, b) => (a.length >= b.length ? a : b))}
        </span>
      </div>

      {/* Separator */}
      <span className="text-white/20 text-[10px] font-light">/</span>

      {/* Indonesia — static */}
      <span className="text-[11px] font-light tracking-[0.12em] text-white/35 uppercase">
        Indonesia
      </span>
    </div>
  )
}
