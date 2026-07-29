import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const contacts = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "rivkyriyant@gmail.com",
    href: "mailto:rivkyriyant@gmail.com",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "rivky-riyantoro",
    href: "https://www.linkedin.com/in/rivky-riyantoro/",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "rivkyriyantoro",
    href: "https://github.com/rivkyriyantoro",
    color: "from-gray-400 to-gray-600",
  },
]

export function ContentContact() {
  return (
    <div className="mt-2 w-full space-y-2">
      {contacts.map((c) => (
        <a
          key={c.label}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-indigo-500/30 hover:bg-white/8 transition-all group"
        >
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${c.color} flex items-center justify-center shrink-0`}>
            <c.icon className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-white/50 text-xs">{c.label}</p>
            <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">
              {c.value}
            </p>
          </div>
        </a>
      ))}
    </div>
  )
}
