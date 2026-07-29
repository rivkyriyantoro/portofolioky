"use client"

import { useState } from "react"
import { featuredProjects } from "@/data/cms-content"

const categories = ["All", "QA Testing", "UI/UX Design", "Web Development", "Project Management"]

export function ContentProjects() {
  const [active, setActive] = useState("Semua")

  const filtered =
    active === "All"
      ? featuredProjects.filter((p) => p.featured)
      : featuredProjects.filter((p) => p.category === active)

  return (
    <div className="mt-2 w-full space-y-3">
      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-xs px-3 py-1 rounded-full border transition-all ${
              active === cat
                ? "bg-indigo-600 border-indigo-500 text-white"
                : "bg-white/5 border-white/10 text-white/50 hover:border-white/30 hover:text-white/70"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {filtered.map((proj) => (
          <div
            key={proj.id}
            className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-indigo-500/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-white font-semibold text-sm">{proj.title}</p>
              <span className="shrink-0 text-xs bg-indigo-500/15 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded-full">
                {proj.category}
              </span>
            </div>
            <p className="text-white/50 text-xs mt-1.5 leading-relaxed line-clamp-2">
              {proj.shortDescription}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {proj.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-white/5 text-white/50 px-2 py-0.5 rounded-full border border-white/10"
                >
                  {tech}
                </span>
              ))}
              {proj.technologies.length > 4 && (
                <span className="text-xs text-white/30 self-center">
                  +{proj.technologies.length - 4}
                </span>
              )}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-white/30 text-sm text-center py-4">
            No projects in this category.
          </p>
        )}
      </div>
    </div>
  )
}
