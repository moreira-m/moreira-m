'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { SocialLink } from '@/lib/sanity.types'
import styles from './Footer.module.scss'

interface FooterProps {
    socialLinks: SocialLink[]
}

// Map platform names to emoji icons
const platformIcons: Record<string, string> = {
    github: '💻',
    linkedin: '💼',
    twitter: '🐦',
    instagram: '📷',
    dribbble: '🎨',
    behance: '🎭',
    codepen: '✏️',
    devto: '📝',
    medium: '📰',
    youtube: '📹',
    email: '✉️',
    other: '🔗',
}

export default function Footer({ socialLinks }: FooterProps) {
    const { t } = useLanguage()

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.branding}>
                        <div className={styles.logo}>
                            <span>&lt;</span>Portfolio<span>/&gt;</span>
                        </div>
                        <p className={styles.tagline}>{t.footer.tagline}</p>
                    </div>

                    {socialLinks && socialLinks.length > 0 && (
                        <div className={styles.socialLinks}>
                            <h3 className={styles.socialTitle}>{t.footer.connect}</h3>
                            <div className={styles.socialIcons}>
                                {socialLinks.map((link) => (
                                    <a
                                        key={link._id}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialIcon}
                                        aria-label={link.platform}
                                    >
                                        {platformIcons[link.platform] || platformIcons.other}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className={styles.divider} />

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} {t.footer.copyright}
                    </p>
                    <p className={styles.credit}>
                        {t.footer.builtWith} <a href="https://nextjs.org">Next.js</a> &{' '}
                        <a href="https://sanity.io">Sanity</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
