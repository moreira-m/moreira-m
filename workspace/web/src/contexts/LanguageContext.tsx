'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { setLanguage as setLanguageAction } from '@/app/actions'

// Definir o idioma suportado
type Language = 'pt' | 'en'

// Traduções
import pt from '@/locales/pt.json'
import en from '@/locales/en.json'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: typeof pt // todas as traduções têm a mesma estrutura
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('pt') // Default to pt initially to match server fallback
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
        // Check localStorage and cookies on mount
        const savedLanguage = localStorage.getItem('language') as Language | null

        const cookieLanguage = document.cookie
            .split('; ')
            .find(row => row.startsWith('language='))
            ?.split('=')[1] as Language | undefined

        // Precedence: Cookie > LocalStorage (because Server matches Cookie)
        if (cookieLanguage === 'pt' || cookieLanguage === 'en') {
            setLanguageState(cookieLanguage)
        } else if (savedLanguage === 'pt' || savedLanguage === 'en') {
            setLanguageState(savedLanguage)
            // Sync cookie if missing using Server Action
            setLanguageAction(savedLanguage)
        }
    }, [])

    const handleSetLanguage = async (newLang: Language) => {
        setLanguageState(newLang)
        localStorage.setItem('language', newLang)
        await setLanguageAction(newLang)
    }

    const translations = { pt, en }
    const t = translations[language]

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
