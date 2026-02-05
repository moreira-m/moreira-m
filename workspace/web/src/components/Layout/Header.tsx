'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import LanguageSelector from '@/components/LanguageSelector/LanguageSelector'
import styles from './Header.module.scss'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { t } = useLanguage()

    const navLinks = [
        { href: '/#about', label: t.nav.about },
        { href: '/#projects', label: t.nav.projects },
        { href: '/#skills', label: t.nav.skills },
        { href: '/#contact', label: t.nav.contact },
    ]

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span>&lt;</span>Portfolio<span>/&gt;</span>
                </Link>

                <nav className={styles.nav}>
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className={styles.navLink}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className={styles.controls}>
                    <ThemeToggle />
                    <LanguageSelector />

                    <button
                        className={`${styles.mobileMenuButton} ${mobileMenuOpen ? styles.open : ''}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>
                </div>
            </div>

            <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
                <nav className={styles.mobileNav}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={styles.navLink}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}
