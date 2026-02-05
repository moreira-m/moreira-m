import { PortableTextBlock } from '@portabletext/react'
import type { Image } from 'sanity'

export type SanityImage = Image

export interface Profile {
    _id: string
    name: string
    title: string
    bio: string
    image: SanityImage
    ctaText: string
    ctaLink: string
    resumeUrl?: string
}

export interface About {
    _id: string
    title: string
    content: PortableTextBlock[]
    yearsOfExperience?: number
}

export interface Project {
    _id: string
    title: string
    slug: {
        current: string
    }
    summary: string
    content?: PortableTextBlock[]
    thumbnail: SanityImage
    tags: string[]
    projectUrl?: string
    githubUrl?: string
    featured?: boolean
    publishedAt?: string
}

export interface Skill {
    _id: string
    name: string
    icon: SanityImage
    category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'other'
    proficiency: number
}

export interface SocialLink {
    _id: string
    platform: string
    url: string
}

export interface SiteSettings {
    _id: string
    siteTitle: string
    siteDescription: string
    contactEmail: string
    logo?: SanityImage
    favicon?: SanityImage
}

export interface HomepageData {
    profile: Profile
    about: About
    projects: Project[]
    skills: Skill[]
    socialLinks: SocialLink[]
    siteSettings: SiteSettings
}
