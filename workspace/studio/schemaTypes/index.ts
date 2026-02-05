// Portuguese Schemas
import profilePt from './pt/profilePt'
import aboutPt from './pt/aboutPt'
import projectPt from './pt/projectPt'
import skillPt from './pt/skillPt'

// English Schemas
import profileEn from './en/profileEn'
import aboutEn from './en/aboutEn'
import projectEn from './en/projectEn'
import skillEn from './en/skillEn'

// Settings & Shared (não mudam com idioma)
import socialLink from './socialLink'
import siteSettings from './siteSettings'

export const schemaTypes = [
    // 🇧🇷 PORTUGUÊS (PT-BR)
    profilePt,
    aboutPt,
    projectPt,
    skillPt,

    // 🇺🇸 ENGLISH (EN)
    profileEn,
    aboutEn,
    projectEn,
    skillEn,

    // ⚙️ CONFIGURAÇÕES
    siteSettings,
    socialLink,
]
