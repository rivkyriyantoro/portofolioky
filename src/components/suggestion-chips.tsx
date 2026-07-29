"use client"

import { motion, AnimatePresence } from "framer-motion"

interface Props {
  suggestions: string[]
  onSelect: (text: string) => void
}

export function SuggestionChips({ suggestions, onSelect }: Props) {
  return (
    <AnimatePresence>
      {suggestions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          className="flex flex-wrap gap-2"
        >
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => onSelect(s)}
              className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/70 hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-white transition-all duration-200 cursor-pointer"
            >
              {s}
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
