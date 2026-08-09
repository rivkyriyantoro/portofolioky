"use client"

import { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Send } from "lucide-react"
import { ChatBackground } from "./chat-background"
import { SplashCursor } from "./splash-cursor"
import { AnimatedLocation } from "./animated-location"
import { SplineAvatar } from "./spline-avatar"
import { ProfileCard } from "./profile-card"
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
  text: "Hey! 👋 Good to have you here.\n\nI'm Rivky's little corner of the internet — ask me anything, or just tap one of the topics below to get started!",
  timestamp: new Date(),
}

const PLACEHOLDERS = [
  "Ask about Rivky's skills...",
  "Curious about any projects?",
  "Ask about work experience...",
  "Want to download the CV?",
  "How to get in touch?",
]

export function ChatInterface() {
  const [messages, setMessages] = useState<ChatMessageType[]>([WELCOME])
  const [isTyping, setIsTyping] = useState(false)
  const [suggestions, setSuggestions] = useState(DEFAULT_SUGGESTIONS)
  const [input, setInput] = useState("")
  const [phIndex, setPhIndex] = useState(0)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  useEffect(() => {
    const t = setInterval(() => setPhIndex((i) => (i + 1) % PLACEHOLDERS.length), 3200)
    return () => clearInterval(t)
  }, [])

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
    <div className="relative h-screen overflow-hidden flex items-center justify-center px-4 py-4 gap-5">
      <ChatBackground />
      <SplashCursor DENSITY_DISSIPATION={2.8} VELOCITY_DISSIPATION={1.6} CURL={5} />

      {/* ── Profile Card — desktop only (hidden on mobile) ── */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative z-10 hidden lg:block shrink-0 self-center"
      >
        <ProfileCard
          avatarUrl="/avatar.png"
          miniAvatarUrl="/avatar.png"
          name="Rivky Riyantoro"
          title="QA Engineer · Frontend Dev · UI/UX Designer"
          handle="rivkyriyantoro"
          status="Open to Opportunities ✨"
          contactText="Get in Touch"
          onContactClick={() => window.open("mailto:hrhcorporation@gmail.com")}
          behindGlowColor="rgba(99, 102, 241, 0.45)"
          behindGlowSize="48%"
        />
      </motion.div>

      {/* ── Right side: mobile avatar (shown <lg) + chat ── */}
      <div className="relative z-10 flex flex-col flex-1 min-w-0 max-w-2xl h-full min-h-0 gap-3">

        {/* Mobile avatar + identity — hidden on lg */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:hidden flex flex-col items-center gap-2 shrink-0"
        >
          <SplineAvatar />
          <div className="text-center space-y-1">
            <h1 className="text-white font-bold text-[17px] tracking-tight leading-none">
              Rivky{" "}
              <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Riyantoro
              </span>
            </h1>
            <AnimatedLocation />
          </div>
        </motion.div>

        {/* Chat window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="flex-1 flex flex-col min-h-0 rounded-3xl overflow-hidden shadow-[0_8px_60px_rgba(99,102,241,0.12),0_0_0_1px_rgba(255,255,255,0.06)]"
          style={{ background: "rgba(8, 8, 20, 0.72)", backdropFilter: "blur(28px)" }}
        >
          {/* Messages with scroll-fade mask */}
          <div
            className="flex-1 overflow-y-auto px-4 py-5 space-y-4 scrollbar-thin"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, black 7%, black 93%, transparent 100%)",
            }}
          >
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}
            </AnimatePresence>
            {isTyping && <TypingIndicator />}
            <div ref={bottomRef} />
          </div>

          <div className="h-px bg-white/[0.06] shrink-0" />

          {/* Input area */}
          <div className="px-4 pt-3 pb-4 space-y-2.5 shrink-0">
            <SuggestionChips suggestions={suggestions} onSelect={handleSend} />

            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
                  placeholder=""
                  className="w-full bg-white/[0.05] border border-white/[0.08] rounded-2xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all"
                />
                {!input && (
                  <div className="absolute inset-0 flex items-center px-4 pointer-events-none">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={phIndex}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.25 }}
                        className="text-sm text-white/25 truncate"
                      >
                        {PLACEHOLDERS[phIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.93 }}
                onClick={() => handleSend(input)}
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 disabled:cursor-not-allowed rounded-2xl flex items-center justify-center transition-colors shrink-0"
              >
                <Send className="w-3.5 h-3.5 text-white" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
