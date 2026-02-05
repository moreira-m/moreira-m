'use client'

import Image from 'next/image'
import { Skill } from '@/lib/sanity.types'
import { urlFor } from '@/lib/sanity.client'
import { useLanguage } from '@/contexts/LanguageContext'
import styles from './Skills.module.scss'

interface SkillsProps {
    skills: Skill[]
}

export default function Skills({ skills }: SkillsProps) {
    const { t } = useLanguage()

    return (
        <section className={styles.skills} id="skills">
            <div className={styles.container}>
                <h2 className={styles.title}>{t.skills.title}</h2>

                <div className={styles.grid}>
                    {skills.map((skill) => {
                        const iconUrl = skill.icon ? urlFor(skill.icon).width(80).height(80).url() : null

                        return (
                            <div key={skill._id} className={styles.skillCard}>
                                <div className={styles.iconWrapper}>
                                    {iconUrl ? (
                                        <Image
                                            src={iconUrl}
                                            alt={skill.name}
                                            width={70}
                                            height={70}
                                            className={styles.icon}
                                        />
                                    ) : (
                                        <div>⚡</div>
                                    )}
                                </div>
                                <span className={styles.skillName}>{skill.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
