'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { setLanguage as setLanguageAction } from '@/app/actions'
import LoadingOverlay from '@/components/UI/LoadingOverlay'

// Definir o idioma suportado
type Language = 'pt' | 'en'

// Traduções
import pt from '@/locales/pt.json'
import en from '@/locales/en.json'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: typeof pt
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('pt') // Default to pt initially to match server fallback
    const [isClient, setIsClient] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsClient(true)
        const savedLanguage = localStorage.getItem('language') as Language | null

        const cookieLanguage = document.cookie
            .split('; ')
            .find(row => row.startsWith('language='))
            ?.split('=')[1] as Language | undefined

        if (cookieLanguage === 'pt' || cookieLanguage === 'en') {
            setLanguageState(cookieLanguage)
        } else if (savedLanguage === 'pt' || savedLanguage === 'en') {
            setLanguageState(savedLanguage)
            setLanguageAction(savedLanguage)
        }
    }, [])

    const handleSetLanguage = async (newLang: Language) => {
        setIsLoading(true)
        try {
            setLanguageState(newLang)
            localStorage.setItem('language', newLang)
            await setLanguageAction(newLang)
        } finally {
            setIsLoading(false)
        }
    }

    const translations = { pt, en }
    const t = translations[language]

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {isLoading && <LoadingOverlay />}
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
