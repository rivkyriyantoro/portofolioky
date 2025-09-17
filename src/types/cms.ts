export interface WorkExperience {
  id: string
  title: string
  company: string
  location: string
  period: string
  description: string
  technologies: string[]
  isCurrentPosition?: boolean
  companyUrl?: string
  achievements?: string[]
  responsibilities?: string[]
}

export interface FeaturedProject {
  id: string
  title: string
  description: string
  shortDescription?: string
  image: string
  technologies: string[]
  category: ProjectCategory
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  status: ProjectStatus
  startDate: string
  endDate?: string
  highlights?: string[]
  challenges?: string[]
  learnings?: string[]
}

export type ProjectCategory = 
  | "Full Stack" 
  | "Frontend" 
  | "Backend" 
  | "Mobile" 
  | "DevOps" 
  | "Machine Learning"
  | "Design"
  | "QA Testing"
  | "UI/UX Design"
  | "Web Development"
  | "Project Management"

export type ProjectStatus = 
  | "completed" 
  | "in-progress" 
  | "planning" 
  | "archived"

export interface CMSContent {
  workExperiences: WorkExperience[]
  featuredProjects: FeaturedProject[]
  lastUpdated: string
  version: string
}