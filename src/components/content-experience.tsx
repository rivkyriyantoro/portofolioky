import { workExperiences } from "@/data/cms-content"

export function ContentExperience() {
  return (
    <div className="space-y-2 mt-2 w-full">
      {workExperiences.map((exp) => (
        <div
          key={exp.id}
          className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-indigo-500/30 transition-colors"
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-white font-semibold text-sm">{exp.title}</p>
              <p className="text-indigo-400 text-xs mt-0.5">{exp.company} · {exp.location}</p>
            </div>
            {exp.isCurrentPosition && (
              <span className="shrink-0 text-xs bg-green-500/15 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full">
                Current
              </span>
            )}
          </div>
          <p className="text-white/40 text-xs mt-1">{exp.period}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {exp.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-xs bg-white/5 text-white/50 px-2 py-0.5 rounded-full border border-white/10"
              >
                {tech}
              </span>
            ))}
            {exp.technologies.length > 5 && (
              <span className="text-xs text-white/30 self-center">
                +{exp.technologies.length - 5} more
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
