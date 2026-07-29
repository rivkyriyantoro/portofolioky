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
  "About Rivky",
  "Work Experience",
  "Portfolio Projects",
  "Skills & Tools",
  "Certifications",
  "Download CV",
  "Get in Touch",
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
        text: "Hey there! I'm **Rivky Riyantoro's** AI assistant 👋\n\nFeel free to ask anything — work experience, projects, skills, certifications, or how to get in touch. Pick a topic below or just type away!",
        suggestions: DEFAULT_SUGGESTIONS,
      }
    case "about":
      return {
        text: "Rivky Riyantoro is a **Quality Assurance Engineer & Systems Analyst** based in Jakarta / Yogyakarta, Indonesia.\n\nGraduated from **Muhammadiyah University of Yogyakarta** in Information Technology with a GPA of 3.72 *(Cum Laude)*. Currently working at **Bank Sinarmas** and **LAYANA.ID** as a QA Engineer, with extensive experience in software testing, UI/UX design, and frontend development.",
        suggestions: ["Work Experience", "Portfolio Projects", "Skills & Tools", "Download CV", "Get in Touch"],
      }
    case "experience":
      return {
        text: "Here's an overview of Rivky's work experience:",
        contentType: "experiences",
        suggestions: ["Portfolio Projects", "Skills & Tools", "Download CV"],
      }
    case "projects":
      return {
        text: "Here are the projects Rivky has worked on:",
        contentType: "projects",
        suggestions: ["Work Experience", "Skills & Tools", "Download CV"],
      }
    case "skills":
      return {
        text: "Here are the skills and tools Rivky is proficient in:",
        contentType: "skills",
        suggestions: ["Certifications", "Portfolio Projects", "Download CV"],
      }
    case "certifications":
      return {
        text: "Here are Rivky's professional certifications:",
        contentType: "certifications",
        suggestions: ["Skills & Tools", "Work Experience", "Download CV"],
      }
    case "contact":
      return {
        text: "Interested in working with Rivky? Here's how to get in touch:",
        contentType: "contact",
        suggestions: ["About Rivky", "Portfolio Projects", "Download CV"],
      }
    case "cv":
      return {
        text: "Rivky has tailored CVs for each role. Select the one that fits what you're looking for:",
        contentType: "cv",
        suggestions: ["Work Experience", "Portfolio Projects", "Get in Touch"],
      }
    default:
      return {
        text: "Hmm, I didn't quite catch that. Try picking a topic below or rephrase your question!",
        suggestions: DEFAULT_SUGGESTIONS,
      }
  }
}
