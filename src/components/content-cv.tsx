import { Download } from "lucide-react"

const cvOptions = [
  {
    label: "QA Engineer",
    description: "Software testing, automation & quality assurance",
    file: "/cv/cv-qa-engineer.pdf",
    emoji: "🧪",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/20",
  },
  {
    label: "Frontend Developer",
    description: "React, Next.js, TypeScript & UI implementation",
    file: "/cv/cv-frontend-developer.pdf",
    emoji: "💻",
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/20",
  },
  {
    label: "UI/UX Designer",
    description: "User research, prototyping & design systems",
    file: "/cv/cv-uiux-designer.pdf",
    emoji: "🎨",
    color: "from-purple-500/20 to-pink-500/20 border-purple-500/20",
  },
]

export function ContentCv() {
  return (
    <div className="mt-2 w-full space-y-2">
      {cvOptions.map((opt) => (
        <a
          key={opt.label}
          href={opt.file}
          download
          className={`flex items-center gap-3 bg-gradient-to-r ${opt.color} border rounded-xl p-4 hover:brightness-125 transition-all group`}
        >
          <span className="text-2xl shrink-0">{opt.emoji}</span>
          <div className="flex-1 min-w-0">
            <p className="text-white font-medium text-sm">{opt.label}</p>
            <p className="text-white/45 text-xs mt-0.5 truncate">{opt.description}</p>
          </div>
          <Download className="w-4 h-4 text-white/40 group-hover:text-white transition-colors shrink-0" />
        </a>
      ))}
    </div>
  )
}
