const skillCategories = [
  {
    name: "QA Testing",
    emoji: "🧪",
    skills: ["Playwright", "Appium", "Selenium", "K6", "Katalon", "Postman", "Swagger", "JIRA", "DBeaver", "Manual Testing", "API Testing"],
  },
  {
    name: "Frontend",
    emoji: "💻",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    name: "UI/UX Design",
    emoji: "🎨",
    skills: ["Figma", "Adobe XD", "Adobe Creative Suite", "Prototyping", "Wireframing", "User Research"],
  },
  {
    name: "Backend & DevOps",
    emoji: "⚙️",
    skills: ["Laravel", "PHP", "MySQL", "PostgreSQL", "Git", "GitHub Actions", "Bitbucket", "CI/CD"],
  },
]

export function ContentSkills() {
  return (
    <div className="mt-2 w-full space-y-3">
      {skillCategories.map((cat) => (
        <div key={cat.name} className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-white/80 text-xs font-semibold mb-3">
            {cat.emoji} {cat.name}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {cat.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs bg-white/5 text-white/60 px-2.5 py-1 rounded-full border border-white/10 hover:border-indigo-500/40 hover:text-indigo-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
