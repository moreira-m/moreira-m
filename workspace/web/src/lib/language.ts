import { cookies } from 'next/headers'

export type Language = 'pt' | 'en'

/**
 * Get the current language from cookies (server-side)
 * Falls back to 'pt' (Portuguese) if no language is set
 */
export async function getServerLanguage(): Promise<Language> {
    const cookieStore = await cookies()
    const lang = cookieStore.get('language')?.value as Language | undefined
    return lang || 'pt' // fallback to Portuguese
}

/**
 * Set language cookie (to be called from client components or server actions)
 */
export function setLanguageCookie(language: Language) {
    // This would typically be done via a Server Action
    // For now, we'll rely on client-side localStorage and sync with cookies
    document.cookie = `language=${language}; path=/; max-age=31536000` // 1 year
}
