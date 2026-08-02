export type Tone = 'accent' | 'accent2' | 'neutral' | 'outline'

export interface NavLink {
  label: string
  href: string
}

export interface ActionLink {
  label: string
  href: string
  variant: 'primary' | 'secondary' | 'ghost'
  external?: boolean
}

export interface StatItem {
  value: string
  label: string
  /** CSS `clamp()` expression controlling the circle's diameter. */
  width: string
  /** CSS `clamp()` expression controlling the number's font size. */
  numberSize: string
  /** Inner padding in px. */
  padding: number
  /** Tailwind color token suffix, e.g. "accent-100" -> bg-accent-100. */
  bg: string
  /** Tailwind color token suffix, e.g. "accent-700" -> text-accent-700. */
  fg: string
  /** Vertical offset in px, positive = down. */
  offsetY?: number
}

export interface SkillTag {
  label: string
  tone: Tone
}

export interface SkillGroup {
  title: string
  skills: SkillTag[]
}

export interface ExperienceItem {
  company: string
  role: string
  link?: { label: string; href: string }
  description: string
  highlights: string[]
}

export interface ProjectItem {
  kicker: string
  title: string
  description: string
  tags: SkillTag[]
  link: { label: string; href: string }
}

export interface LearningItem {
  name: string
  description: string
  href: string
}

export type SectionKey =
  | 'stats'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'learning'
  | 'quote'
  | 'contact'

export interface SiteConfig {
  meta: {
    title: string
    description: string
  }
  brand: string
  nav: NavLink[]
  navCta: ActionLink
  hero: {
    lines: string[]
    description: string
    actions: ActionLink[]
  }
  stats: StatItem[]
  skills: SkillGroup[]
  experience: ExperienceItem[]
  projects: {
    kicker: string
    title: string
    items: ProjectItem[]
  }
  learning: {
    kicker: string
    description: string
    items: LearningItem[]
  }
  quote: {
    text: string
    author: string
  }
  contact: {
    heading: string
    description: string
    actions: ActionLink[]
  }
  footer: string
  /** Toggle any section on/off without touching component code. */
  sectionVisibility: Record<SectionKey, boolean>
  /** Reorder sections by editing this array. */
  sectionOrder: SectionKey[]
}
