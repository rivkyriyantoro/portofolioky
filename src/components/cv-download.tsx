"use client"

import { useState, useRef, useEffect } from "react"
import { Download } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const cvOptions = [
  { label: "QA Engineer", file: "/cv/cv-qa-engineer.pdf", emoji: "🧪" },
  { label: "Frontend Developer", file: "/cv/cv-frontend-developer.pdf", emoji: "💻" },
  { label: "UI/UX Designer", file: "/cv/cv-uiux-designer.pdf", emoji: "🎨" },
]

export function CvDownload() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/60 hover:bg-indigo-500/20 hover:border-indigo-500/40 hover:text-white transition-all"
      >
        <Download className="w-3 h-3" />
        Download CV
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-[#10101e] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 w-52"
          >
            <p className="text-white/30 text-[10px] uppercase tracking-wider px-4 pt-3 pb-1.5">
              Select role
            </p>
            {cvOptions.map((opt) => (
              <a
                key={opt.label}
                href={opt.file}
                download
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-white/65 hover:bg-white/6 hover:text-white transition-colors"
              >
                <span>{opt.emoji}</span>
                {opt.label}
              </a>
            ))}
            <div className="h-2" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
