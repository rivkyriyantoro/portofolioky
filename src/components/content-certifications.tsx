interface CertificationItem {
  name: string
  issuer: string
  date: string
  credentialId?: string
  badge: string
}

const certifications: CertificationItem[] = [
  {
    name: "Certified System Analyst (CSA)",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "Sep 2024 - Sep 2027",
    credentialId: "62029 2511 24893 2023",
    badge: "🏛️",
  },
  {
    name: "Certificate of Completion Mini Bootcamp : QA Engineering",
    issuer: "Digital Skola",
    date: "Sep 2024",
    credentialId: "012/MB/CPN/XXX/VII/2024",
    badge: "🎓",
  },
  {
    name: "API Testing Learning Path Certificate",
    issuer: "Postman",
    date: "Aug 2024",
    credentialId: "qotm5tooup25",
    badge: "🔌",
  },
  {
    name: "Belajar Machine Learning untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Sep 2026 - Sep 2029",
    credentialId: "JLX1KW5WGP72",
    badge: "🤖",
  },
  {
    name: "Spec-Driven Development dengan Kiro",
    issuer: "Dicoding Indonesia",
    date: "Jul 2026 - Jul 2029",
    credentialId: "4EXGJ470EXRL",
    badge: "⚙️",
  },
  {
    name: "Software Quality Assurance",
    issuer: "MySkill",
    date: "Apr 2024",
    credentialId: "MS-15/3/2025-Exc073zTpdphs6luH2gK",
    badge: "✅",
  },
  {
    name: "Software Development Fundamental With Java Virtual Bootcamp",
    issuer: "PT. Inixindo Persada Rekayasa Komputer",
    date: "Jun 2021",
    credentialId: "2xWYTMq6vP",
    badge: "☕",
  },
  {
    name: "Web Application Development Fundamental With C# Virtual Bootcamp",
    issuer: "PT. Inixindo Persada Rekayasa Komputer",
    date: "Jun 2021",
    credentialId: "7gohmdiCSw",
    badge: "🌐",
  },
  {
    name: "Software Development Fundamental With C# Virtual Bootcamp",
    issuer: "PT. Inixindo Persada Rekayasa Komputer",
    date: "Jun 2021",
    credentialId: "aeljPa5ebO",
    badge: "💻",
  },
  {
    name: "8th International Conference on Computing & Informatics (ICOCI2021)",
    issuer: "Universiti Utara Malaysia",
    date: "Mar 2021",
    credentialId: "rivky_ICOCI2021",
    badge: "📜",
  },
  {
    name: "HTML Dasar",
    issuer: "Skilvul",
    date: "Nov 2022",
    credentialId: "8NsJelpfQhyXSgsSCTFvuw",
    badge: "🧱",
  },
]

export function ContentCertifications() {
  return (
    <div className="mt-2 w-full space-y-2">
      {certifications.map((cert) => (
        <div
          key={cert.name + cert.issuer}
          className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-indigo-500/30 transition-colors"
        >
          <span className="text-2xl shrink-0 mt-0.5">{cert.badge}</span>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium">{cert.name}</p>
            <p className="text-white/60 text-xs mt-0.5">{cert.issuer}</p>
            <div className="flex flex-wrap gap-x-3 text-[11px] text-white/40 mt-1.5">
              <span>{cert.date}</span>
              {cert.credentialId && (
                <span>ID: {cert.credentialId}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
