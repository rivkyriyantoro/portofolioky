"use client"

import { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Send } from "lucide-react"
import { ChatBackground } from "./chat-background"
import { CvDownload } from "./cv-download"
import { ChatMessage } from "./chat-message"
import { SuggestionChips } from "./suggestion-chips"
import { TypingIndicator } from "./typing-indicator"
import {
  detectIntent,
  generateResponse,
  DEFAULT_SUGGESTIONS,
  type ChatMessage as ChatMessageType,
} from "@/lib/chat-engine"

const WELCOME: ChatMessageType = {
  id: "0",
  role: "bot",
  text: "Hey there! I'm **Rivky Riyantoro's** AI assistant 👋\n\nFeel free to ask anything — work experience, projects, skills, certifications, or how to get in touch. Pick a topic below or just type away!",
  timestamp: new Date(),
}

export function ChatInterface() {
  const [messages, setMessages] = useState<ChatMessageType[]>([WELCOME])
  const [isTyping, setIsTyping] = useState(false)
  const [suggestions, setSuggestions] = useState(DEFAULT_SUGGESTIONS)
  const [input, setInput] = useState("")
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  const handleSend = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || isTyping) return

    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role: "user", text: trimmed, timestamp: new Date() },
    ])
    setInput("")
    setSuggestions([])
    setIsTyping(true)

    await new Promise((r) => setTimeout(r, 700 + Math.random() * 500))

    const response = generateResponse(detectIntent(trimmed))
    setIsTyping(false)
    setMessages((prev) => [
      ...prev,
      {
        id: (Date.now() + 1).toString(),
        role: "bot",
        text: response.text,
        contentType: response.contentType,
        timestamp: new Date(),
      },
    ])
    setSuggestions(response.suggestions)
  }

  return (
    <div className="relative h-screen overflow-hidden flex flex-col items-center px-4 pt-6 pb-4">
      <ChatBackground />

      {/* Avatar + Identity */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-2 mb-4 shrink-0"
      >
        {/* Avatar ring glow */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 blur-lg opacity-50 scale-110" />
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2px] shadow-2xl">
            <div className="w-full h-full rounded-full bg-[#07070e] flex items-center justify-center">
              <span className="text-white font-bold text-xl tracking-tight">RR</span>
            </div>
          </div>
          <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-[#07070e]" />
        </div>

        <div className="text-center">
          <h1 className="text-white font-semibold text-base leading-tight">Rivky Riyantoro</h1>
          <p className="text-white/35 text-xs mt-0.5">Jakarta / Jogja, Indonesia</p>
        </div>
        <CvDownload />
      </motion.div>

      {/* Chat window */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl flex-1 flex flex-col min-h-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        style={{ background: "rgba(10, 10, 20, 0.65)", backdropFilter: "blur(24px)" }}
      >
        {/* Messages area */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
          </AnimatePresence>
          {isTyping && <TypingIndicator />}
          <div ref={bottomRef} />
        </div>

        {/* Divider */}
        <div className="h-px bg-white/8 shrink-0" />

        {/* Input area */}
        <div className="px-4 pt-3 pb-4 space-y-2.5 shrink-0">
          <SuggestionChips suggestions={suggestions} onSelect={handleSend} />
          <div className="flex gap-2">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
              placeholder="Ask something about Rivky..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-indigo-500/60 focus:bg-white/7 transition-all"
            />
            <button
              onClick={() => handleSend(input)}
              disabled={!input.trim() || isTyping}
              className="w-10 h-10 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 disabled:cursor-not-allowed rounded-xl flex items-center justify-center transition-all shrink-0"
            >
              <Send className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
