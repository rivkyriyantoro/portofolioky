"use client"

import { useState, useRef, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { Send } from "lucide-react"
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
  text: "Halo! Saya adalah asisten AI **Rivky Riyantoro** 👋\n\nTanyakan apa saja tentang Rivky — pengalaman kerja, proyek, skill, sertifikasi, atau cara menghubunginya. Pilih topik di bawah atau ketik langsung!",
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
    <div className="flex flex-col h-screen bg-[#08080f]">
      {/* Header */}
      <div className="shrink-0 flex items-center gap-3 px-5 py-3.5 border-b border-white/8 bg-[#0d0d18]/80 backdrop-blur-sm">
        <div className="relative">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
            RR
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#0d0d18]" />
        </div>
        <div>
          <p className="text-white font-semibold text-sm leading-none">Rivky AI</p>
          <p className="text-emerald-400 text-xs mt-0.5">Online</p>
        </div>
        <div className="ml-auto text-right hidden sm:block">
          <p className="text-white/30 text-xs">QA Engineer · Frontend Dev · UI/UX Designer</p>
          <p className="text-white/20 text-xs">Yogyakarta, Indonesia</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
        </AnimatePresence>
        {isTyping && <TypingIndicator />}
        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <div className="shrink-0 px-4 pb-5 pt-3 border-t border-white/8 bg-[#0d0d18]/80 backdrop-blur-sm space-y-3">
        <SuggestionChips suggestions={suggestions} onSelect={handleSend} />
        <div className="flex gap-2">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
            placeholder="Ketik pertanyaan tentang Rivky..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-indigo-500/60 focus:bg-white/7 transition-all"
          />
          <button
            onClick={() => handleSend(input)}
            disabled={!input.trim() || isTyping}
            className="w-11 h-11 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 disabled:cursor-not-allowed rounded-xl flex items-center justify-center transition-all shrink-0"
          >
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
