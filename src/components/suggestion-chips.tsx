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
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: 6 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="flex flex-wrap gap-2"
        >
          {suggestions.map((s) => (
            <motion.button
              key={s}
              variants={{
                hidden: { opacity: 0, y: 8, scale: 0.92 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onSelect(s)}
              className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/12 text-white/60 hover:bg-indigo-500/20 hover:border-indigo-500/40 hover:text-white/90 transition-colors duration-200 cursor-pointer"
            >
              {s}
            </motion.button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
