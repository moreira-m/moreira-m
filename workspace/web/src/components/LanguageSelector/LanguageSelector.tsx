'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import styles from './LanguageSelector.module.scss'

export default function LanguageSelector() {
    const { language, setLanguage } = useLanguage()

    return (
        <div className={styles.languageSelector}>
            <button
                className={`${styles.langButton} ${language === 'en' ? styles.active : ''}`}
                onClick={() => setLanguage('en')}
                aria-label="Switch to English"
                title="English"
            >
                EN
            </button>
            <span className={styles.divider}>/</span>
            <button
                className={`${styles.langButton} ${language === 'pt' ? styles.active : ''}`}
                onClick={() => setLanguage('pt')}
                aria-label="Mudar para Português"
                title="Português"
            >
                PT
            </button>
        </div>
    )
}
