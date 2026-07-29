export type Intent =
  | "greeting"
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "certifications"
  | "contact"
  | "cv"
  | "unknown"

export type ContentType =
  | "experiences"
  | "projects"
  | "skills"
  | "certifications"
  | "contact"
  | "cv"

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
  "🙋 About Rivky",
  "💼 Work Experience",
  "📁 Portfolio Projects",
  "🛠️ Skills & Tools",
  "🏆 Certifications",
  "📄 Download CV",
  "📬 Get in Touch",
]

const intentMap: Record<string, Intent> = {
  // greetings
  hello: "greeting", hi: "greeting", hey: "greeting", halo: "greeting", hai: "greeting",
  // about
  about: "about", who: "about", bio: "about", profile: "about",
  rivky: "about", siapa: "about", tentang: "about",
  // experience
  experience: "experience", work: "experience", career: "experience",
  job: "experience", jobs: "experience",
  pengalaman: "experience", kerja: "experience", riwayat: "experience",
  // projects
  project: "projects", projects: "projects", portfolio: "projects",
  proyek: "projects", projek: "projects",
  // skills
  skill: "skills", skills: "skills", tools: "skills",
  tech: "skills", technologies: "skills", technology: "skills",
  keahlian: "skills", kemampuan: "skills", teknologi: "skills",
  // certifications
  cert: "certifications", certs: "certifications",
  certification: "certifications", certifications: "certifications",
  sertifikat: "certifications", sertifikasi: "certifications",
  // contact
  contact: "contact", email: "contact", reach: "contact",
  hire: "contact", touch: "contact", kontak: "contact", hubungi: "contact",
  // cv / role
  cv: "cv", resume: "cv", download: "cv",
  role: "cv", roles: "cv",
}

export function detectIntent(input: string): Intent {
  // Strip emoji before matching
  const clean = input.replace(/\p{Emoji}/gu, "").toLowerCase().trim()
  const words = clean.split(/\s+/)
  for (const word of words) {
    if (intentMap[word]) return intentMap[word]
  }
  return "unknown"
}

export function generateResponse(intent: Intent): BotResponse {
  switch (intent) {
    case "greeting":
      return {
        text: "Hey! 👋 Good to have you here.\n\nI'm Rivky's little corner of the internet — ask me anything, or just tap one of the topics below to get started! ✨",
        suggestions: DEFAULT_SUGGESTIONS,
      }
    case "about":
      return {
        text: "So, Rivky is a **QA Engineer & Systems Analyst** who splits time between Jakarta and Yogyakarta. 📍\n\nGraduated *cum laude* from **Muhammadiyah University of Yogyakarta** (GPA 3.72) 🎓 and has been deep in the world of software quality, UI/UX design, and frontend dev ever since. Right now actively working at **Bank Sinarmas** and **LAYANA.ID**. 🚀",
        suggestions: ["💼 Work Experience", "📁 Portfolio Projects", "🛠️ Skills & Tools", "📄 Download CV", "📬 Get in Touch"],
      }
    case "experience":
      return {
        text: "Here's where Rivky has worked — quite a journey! 🗺️",
        contentType: "experiences",
        suggestions: ["📁 Portfolio Projects", "🛠️ Skills & Tools", "📄 Download CV"],
      }
    case "projects":
      return {
        text: "These are some of the things Rivky has shipped — from airline systems to IoT platforms. Take a look! 👇",
        contentType: "projects",
        suggestions: ["💼 Work Experience", "🛠️ Skills & Tools", "📄 Download CV"],
      }
    case "skills":
      return {
        text: "Here's the toolkit — testing frameworks, design tools, frontend tech and more. 🛠️",
        contentType: "skills",
        suggestions: ["🏆 Certifications", "📁 Portfolio Projects", "📄 Download CV"],
      }
    case "certifications":
      return {
        text: "A few certifications worth mentioning — BNSP certified and counting! 🏆",
        contentType: "certifications",
        suggestions: ["🛠️ Skills & Tools", "💼 Work Experience", "📄 Download CV"],
      }
    case "contact":
      return {
        text: "Want to collaborate or just say hi? Here's how to reach Rivky 📬",
        contentType: "contact",
        suggestions: ["🙋 About Rivky", "📁 Portfolio Projects", "📄 Download CV"],
      }
    case "cv":
      return {
        text: "There's a tailored CV for each role — just pick whichever fits what you're looking for! ⬇️",
        contentType: "cv",
        suggestions: ["💼 Work Experience", "📁 Portfolio Projects", "📬 Get in Touch"],
      }
    default:
      return {
        text: "Hmm, not quite sure what you mean — but no worries! Try one of the topics below or rephrase it a bit 😊",
        suggestions: DEFAULT_SUGGESTIONS,
      }
  }
}
