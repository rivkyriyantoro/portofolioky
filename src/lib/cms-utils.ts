import { WorkExperience, FeaturedProject, ProjectCategory, ProjectStatus } from "@/types/cms"
import { cmsContent } from "@/data/cms-content"

// Work Experience utilities
export function getAllWorkExperiences(): WorkExperience[] {
  return cmsContent.workExperiences.sort((a, b) => {
    // Sort by current position first, then by start date (most recent first)
    if (a.isCurrentPosition && !b.isCurrentPosition) return -1
    if (!a.isCurrentPosition && b.isCurrentPosition) return 1
    
    // Extract year from period (assuming format like "2022 - Present" or "2020 - 2022")
    const getStartYear = (period: string) => {
      const match = period.match(/(\d{4})/)
      return match ? parseInt(match[1]) : 0
    }
    
    return getStartYear(b.period) - getStartYear(a.period)
  })
}

export function getWorkExperienceById(id: string): WorkExperience | undefined {
  return cmsContent.workExperiences.find(exp => exp.id === id)
}

export function getCurrentWorkExperience(): WorkExperience | undefined {
  return cmsContent.workExperiences.find(exp => exp.isCurrentPosition)
}

export function getWorkExperiencesByTechnology(technology: string): WorkExperience[] {
  return cmsContent.workExperiences.filter(exp => 
    exp.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  )
}

// Featured Projects utilities
export function getAllFeaturedProjects(): FeaturedProject[] {
  return cmsContent.featuredProjects.sort((a, b) => {
    // Sort by featured first, then by start date (most recent first)
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  })
}

export function getFeaturedProjectsOnly(): FeaturedProject[] {
  return cmsContent.featuredProjects
    .filter(project => project.featured)
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
}

export function getProjectById(id: string): FeaturedProject | undefined {
  return cmsContent.featuredProjects.find(project => project.id === id)
}

export function getProjectsByCategory(category: ProjectCategory): FeaturedProject[] {
  return cmsContent.featuredProjects
    .filter(project => project.category === category)
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
}

export function getProjectsByStatus(status: ProjectStatus): FeaturedProject[] {
  return cmsContent.featuredProjects
    .filter(project => project.status === status)
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
}

export function getProjectsByTechnology(technology: string): FeaturedProject[] {
  return cmsContent.featuredProjects.filter(project => 
    project.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  )
}

export function getProjectCategories(): ProjectCategory[] {
  const categories = new Set(cmsContent.featuredProjects.map(project => project.category))
  return Array.from(categories).sort()
}

export function getAllTechnologies(): string[] {
  const technologies = new Set<string>()
  
  // Add technologies from work experiences
  cmsContent.workExperiences.forEach(exp => {
    exp.technologies.forEach(tech => technologies.add(tech))
  })
  
  // Add technologies from projects
  cmsContent.featuredProjects.forEach(project => {
    project.technologies.forEach(tech => technologies.add(tech))
  })
  
  return Array.from(technologies).sort()
}

export function getTechnologyUsageCount(technology: string): number {
  let count = 0
  
  // Count from work experiences
  cmsContent.workExperiences.forEach(exp => {
    if (exp.technologies.some(tech => 
      tech.toLowerCase() === technology.toLowerCase()
    )) {
      count++
    }
  })
  
  // Count from projects
  cmsContent.featuredProjects.forEach(project => {
    if (project.technologies.some(tech => 
      tech.toLowerCase() === technology.toLowerCase()
    )) {
      count++
    }
  })
  
  return count
}

// Search utilities
export function searchContent(query: string): {
  workExperiences: WorkExperience[]
  projects: FeaturedProject[]
} {
  const lowerQuery = query.toLowerCase()
  
  const workExperiences = cmsContent.workExperiences.filter(exp =>
    exp.title.toLowerCase().includes(lowerQuery) ||
    exp.company.toLowerCase().includes(lowerQuery) ||
    exp.description.toLowerCase().includes(lowerQuery) ||
    exp.technologies.some(tech => tech.toLowerCase().includes(lowerQuery))
  )
  
  const projects = cmsContent.featuredProjects.filter(project =>
    project.title.toLowerCase().includes(lowerQuery) ||
    project.description.toLowerCase().includes(lowerQuery) ||
    project.technologies.some(tech => tech.toLowerCase().includes(lowerQuery))
  )
  
  return { workExperiences, projects }
}

// Statistics utilities
export function getCMSStats() {
  return {
    totalWorkExperiences: cmsContent.workExperiences.length,
    totalProjects: cmsContent.featuredProjects.length,
    featuredProjects: cmsContent.featuredProjects.filter(p => p.featured).length,
    completedProjects: cmsContent.featuredProjects.filter(p => p.status === 'completed').length,
    inProgressProjects: cmsContent.featuredProjects.filter(p => p.status === 'in-progress').length,
    totalTechnologies: getAllTechnologies().length,
    lastUpdated: cmsContent.lastUpdated,
    version: cmsContent.version
  }
}

export function getYearsOfExperience(): number {
  const experiences = cmsContent.workExperiences
  if (experiences.length === 0) return 0
  
  // Find the earliest start year
  const startYears = experiences.map(exp => {
    const match = exp.period.match(/(\d{4})/)
    return match ? parseInt(match[1]) : new Date().getFullYear()
  })
  
  const earliestYear = Math.min(...startYears)
  const currentYear = new Date().getFullYear()
  
  return currentYear - earliestYear
}