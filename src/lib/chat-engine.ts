export type Intent =
  | "greeting"
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "certifications"
  | "contact"
  | "unknown"

export type ContentType =
  | "experiences"
  | "projects"
  | "skills"
  | "certifications"
  | "contact"

export interface ChatMessage {
  id: string
  role: "user" | "bot"
  text: string
  contentType?: ContentType
  timestamp: Date
}

export interface BotResponse {
  text: string
  contentType?: ContentType
  suggestions: string[]
}

export const DEFAULT_SUGGESTIONS = [
  "About Rivky",
  "Work Experience",
  "Portfolio Projects",
  "Skills & Tools",
  "Certifications",
  "Get in Touch",
]

const intentMap: Record<string, Intent> = {
  // English
  about: "about", who: "about", bio: "about", profile: "about",
  experience: "experience", work: "experience", career: "experience", job: "experience",
  project: "projects", projects: "projects", portfolio: "projects",
  skill: "skills", skills: "skills", tools: "skills", tech: "skills", technologies: "skills",
  cert: "certifications", certs: "certifications", certification: "certifications", certifications: "certifications",
  contact: "contact", email: "contact", reach: "contact", hire: "contact", touch: "contact",
  hello: "greeting", hi: "greeting", hey: "greeting",
  // Indonesian fallback
  tentang: "about", siapa: "about", rivky: "about",
  pengalaman: "experience", kerja: "experience", riwayat: "experience", karir: "experience",
  proyek: "projects", projek: "projects",
  keahlian: "skills", kemampuan: "skills", teknologi: "skills",
  sertifikat: "certifications", sertifikasi: "certifications",
  kontak: "contact", hubungi: "contact",
  halo: "greeting", hai: "greeting",
}

export function detectIntent(input: string): Intent {
  const words = input.toLowerCase().split(/\s+/)
  for (const word of words) {
    if (intentMap[word]) return intentMap[word]
  }
  return "unknown"
}

export function generateResponse(intent: Intent): BotResponse {
  switch (intent) {
    case "greeting":
      return {
        text: "Hey there! Great to meet you 👋 I'm Rivky's AI assistant. Ask me anything about Rivky, or pick a topic below to get started!",
        suggestions: DEFAULT_SUGGESTIONS,
      }
    case "about":
      return {
        text: "Rivky Riyantoro is a **Quality Assurance Engineer & Systems Analyst** based in Jakarta / Yogyakarta, Indonesia.\n\nGraduated from **Muhammadiyah University of Yogyakarta** in Information Technology with a GPA of 3.72 *(Cum Laude)*. Currently working at **Bank Sinarmas** and **LAYANA.ID** as a QA Engineer, with extensive experience in software testing, UI/UX design, and frontend development.",
        suggestions: ["Work Experience", "Portfolio Projects", "Skills & Tools", "Get in Touch"],
      }
    case "experience":
      return {
        text: "Here's an overview of Rivky's work experience:",
        contentType: "experiences",
        suggestions: ["Portfolio Projects", "Skills & Tools", "Certifications"],
      }
    case "projects":
      return {
        text: "Here are the projects Rivky has worked on:",
        contentType: "projects",
        suggestions: ["Work Experience", "Skills & Tools", "Get in Touch"],
      }
    case "skills":
      return {
        text: "Here are the skills and tools Rivky is proficient in:",
        contentType: "skills",
        suggestions: ["Certifications", "Portfolio Projects", "Get in Touch"],
      }
    case "certifications":
      return {
        text: "Here are Rivky's professional certifications:",
        contentType: "certifications",
        suggestions: ["Skills & Tools", "Work Experience", "Get in Touch"],
      }
    case "contact":
      return {
        text: "Interested in working with Rivky? Here's how to get in touch:",
        contentType: "contact",
        suggestions: ["About Rivky", "Portfolio Projects", "Work Experience"],
      }
    default:
      return {
        text: "Hmm, I didn't quite catch that. Try picking a topic below or rephrase your question!",
        suggestions: DEFAULT_SUGGESTIONS,
      }
  }
}
