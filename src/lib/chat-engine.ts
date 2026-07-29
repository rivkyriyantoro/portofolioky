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
  "Tentang Rivky",
  "Pengalaman Kerja",
  "Proyek Portfolio",
  "Skill & Tools",
  "Sertifikasi",
  "Cara Menghubungi",
]

const intentMap: Record<string, Intent> = {
  halo: "greeting", hi: "greeting", hello: "greeting", hay: "greeting",
  hey: "greeting", hai: "greeting", selamat: "greeting",
  tentang: "about", about: "about", siapa: "about", who: "about",
  rivky: "about", bio: "about", profil: "about",
  pengalaman: "experience", experience: "experience", kerja: "experience",
  riwayat: "experience", karir: "experience", career: "experience",
  pekerjaan: "experience", job: "experience", work: "experience",
  proyek: "projects", project: "projects", portfolio: "projects",
  karya: "projects", projek: "projects",
  skill: "skills", keahlian: "skills", kemampuan: "skills",
  tools: "skills", teknologi: "skills", tech: "skills", dikuasai: "skills",
  sertifikat: "certifications", sertifikasi: "certifications",
  cert: "certifications", certification: "certifications", lisensi: "certifications",
  kontak: "contact", contact: "contact", hubungi: "contact",
  email: "contact", reach: "contact", hire: "contact", rekrut: "contact",
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
        text: "Halo! Senang bertemu denganmu 👋 Saya adalah asisten AI Rivky. Ada yang ingin kamu ketahui? Pilih topik di bawah atau ketik langsung!",
        suggestions: DEFAULT_SUGGESTIONS,
      }
    case "about":
      return {
        text: "Rivky Riyantoro adalah seorang **Quality Assurance Engineer & Systems Analyst** berbasis di Yogyakarta, Indonesia.\n\nLulusan **Universitas Muhammadiyah Yogyakarta** jurusan Informatika dengan IPK 3.72 *(Cum Laude)*. Saat ini aktif bekerja di **Bank Sinarmas** dan **LAYANA.ID** sebagai QA Engineer, dengan pengalaman luas di software testing, UI/UX design, dan frontend development.",
        suggestions: ["Pengalaman Kerja", "Proyek Portfolio", "Skill & Tools", "Cara Menghubungi"],
      }
    case "experience":
      return {
        text: "Berikut riwayat pengalaman kerja Rivky:",
        contentType: "experiences",
        suggestions: ["Proyek Portfolio", "Skill & Tools", "Sertifikasi"],
      }
    case "projects":
      return {
        text: "Berikut proyek-proyek yang telah dikerjakan Rivky:",
        contentType: "projects",
        suggestions: ["Pengalaman Kerja", "Skill & Tools", "Cara Menghubungi"],
      }
    case "skills":
      return {
        text: "Berikut skill dan tools yang dikuasai Rivky:",
        contentType: "skills",
        suggestions: ["Sertifikasi", "Proyek Portfolio", "Cara Menghubungi"],
      }
    case "certifications":
      return {
        text: "Berikut sertifikasi yang dimiliki Rivky:",
        contentType: "certifications",
        suggestions: ["Skill & Tools", "Pengalaman Kerja", "Cara Menghubungi"],
      }
    case "contact":
      return {
        text: "Tertarik untuk berkolaborasi dengan Rivky? Berikut cara menghubunginya:",
        contentType: "contact",
        suggestions: ["Tentang Rivky", "Proyek Portfolio", "Pengalaman Kerja"],
      }
    default:
      return {
        text: "Hmm, saya kurang memahami pertanyaanmu. Coba pilih salah satu topik berikut, atau ketik dengan kata kunci yang berbeda!",
        suggestions: DEFAULT_SUGGESTIONS,
      }
  }
}
