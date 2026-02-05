'use client'

import Image from 'next/image'
import { Profile } from '@/lib/sanity.types'
import { urlFor } from '@/lib/sanity.client'
import { useLanguage } from '@/contexts/LanguageContext'
import Button from '@/components/UI/Button'
import styles from './Hero.module.scss'

interface HeroProps {
    profile: Profile
}

export default function Hero({ profile }: HeroProps) {
    const { t } = useLanguage()
    const imageUrl = profile.image ? urlFor(profile.image).width(500).height(500).url() : null

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.textContent}>
                        <p className={styles.greeting}>{t.hero.greeting}</p>
                        <h1 className={styles.name}>{profile.name}</h1>
                        <h2 className={styles.title}>{profile.title}</h2>
                        <p className={styles.bio}>{profile.bio}</p>
                        <div>
                            <Button href={profile.ctaLink} size="large">
                                {profile.ctaText}
                            </Button>
                        </div>
                    </div>

                    <div className={styles.imageWrapper}>
                        {imageUrl ? (
                            <Image
                                src={imageUrl}
                                alt={profile.name}
                                width={450}
                                height={450}
                                className={styles.image}
                                priority
                            />
                        ) : (
                            <div className={styles.illustrationPlaceholder}>👨‍💻</div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
