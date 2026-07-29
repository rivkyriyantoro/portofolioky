"use client"

import { motion } from "framer-motion"
import type { ChatMessage as ChatMessageType } from "@/lib/chat-engine"
import { ContentExperience } from "./content-experience"
import { ContentProjects } from "./content-projects"
import { ContentSkills } from "./content-skills"
import { ContentCertifications } from "./content-certifications"
import { ContentContact } from "./content-contact"
import { ContentCv } from "./content-cv"

interface Props {
  message: ChatMessageType
}

export function ChatMessage({ message }: Props) {
  const isBot = message.role === "bot"

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`flex gap-3 ${isBot ? "justify-start" : "justify-end"}`}
    >
      {isBot && (
        <div className="w-8 h-8 shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs mt-1">
          RR
        </div>
      )}

      <div className={`space-y-2 ${isBot ? "max-w-[85%]" : "max-w-[70%]"}`}>
        <div
          className={`rounded-3xl px-4 py-3 text-[13.5px] leading-[1.65] ${
            isBot
              ? "bg-white/6 text-white/85 rounded-tl-md"
              : "bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-tr-md shadow-lg shadow-indigo-900/30"
          }`}
        >
          <FormattedText text={message.text} />
        </div>

        {message.contentType && (
          <div className="w-full">
            {message.contentType === "experiences" && <ContentExperience />}
            {message.contentType === "projects" && <ContentProjects />}
            {message.contentType === "skills" && <ContentSkills />}
            {message.contentType === "certifications" && <ContentCertifications />}
            {message.contentType === "contact" && <ContentContact />}
            {message.contentType === "cv" && <ContentCv />}
          </div>
        )}
      </div>
    </motion.div>
  )
}

function FormattedText({ text }: { text: string }) {
  const lines = text.split("\n")
  return (
    <>
      {lines.map((line, i) => {
        const parts = line.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/)
        return (
          <span key={i}>
            {parts.map((part, j) => {
              if (part.startsWith("**") && part.endsWith("**"))
                return <strong key={j}>{part.slice(2, -2)}</strong>
              if (part.startsWith("*") && part.endsWith("*"))
                return <em key={j}>{part.slice(1, -1)}</em>
              return <span key={j}>{part}</span>
            })}
            {i < lines.length - 1 && <br />}
          </span>
        )
      })}
    </>
  )
}
