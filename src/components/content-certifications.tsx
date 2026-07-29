const certifications = [
  { name: "Certified System Analyst", issuer: "BNSP", badge: "🏛️" },
  { name: "QA Engineering", issuer: "Digital Skola", badge: "🎓" },
  { name: "Quality Assurance", issuer: "Myskill", badge: "✅" },
  { name: "API Testing Path", issuer: "Postman Academy", badge: "🔌" },
  { name: "Java Development Fundamentals", issuer: "Oracle", badge: "☕" },
]

export function ContentCertifications() {
  return (
    <div className="mt-2 w-full space-y-2">
      {certifications.map((cert) => (
        <div
          key={cert.name}
          className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-indigo-500/30 transition-colors"
        >
          <span className="text-2xl shrink-0">{cert.badge}</span>
          <div>
            <p className="text-white text-sm font-medium">{cert.name}</p>
            <p className="text-white/40 text-xs mt-0.5">{cert.issuer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
