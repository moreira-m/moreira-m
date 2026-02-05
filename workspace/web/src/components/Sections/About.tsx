'use client'

import { PortableText } from '@portabletext/react'
import { About as AboutType } from '@/lib/sanity.types'
import { useLanguage } from '@/contexts/LanguageContext'
import styles from './About.module.scss'

interface AboutProps {
    about: AboutType
}

export default function About({ about }: AboutProps) {
    const { t } = useLanguage()

    return (
        <section className={styles.about} id="about">
            <div className={styles.container}>
                <h2 className={styles.title}>{about.title}</h2>
                <div className={styles.content}>
                    <PortableText value={about.content} />
                </div>
                {about.yearsOfExperience && (
                    <div className={styles.experience}>
                        <div className={styles.experienceNumber}>{about.yearsOfExperience}+</div>
                        <div className={styles.experienceText}>{t.about.yearsOfExperience}</div>
                    </div>
                )}
            </div>
        </section>
    )
}
