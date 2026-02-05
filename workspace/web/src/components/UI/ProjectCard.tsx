'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/lib/sanity.types'
import { urlFor } from '@/lib/sanity.client'
import { useLanguage } from '@/contexts/LanguageContext'
import styles from './ProjectCard.module.scss'

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const { t } = useLanguage()
    const imageUrl = project.thumbnail
        ? urlFor(project.thumbnail).width(600).height(400).url()
        : null

    return (
        <article className={styles.projectCard}>
            <Link href={`/projects/${project.slug.current}`} className={styles.imageWrapper}>
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={project.title}
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                ) : (
                    <div className={styles.imagePlaceholder}>📱</div>
                )}
            </Link>

            <div className={styles.content}>
                <Link href={`/projects/${project.slug.current}`}>
                    <h3 className={styles.title}>{project.title}</h3>
                </Link>
                <p className={styles.summary}>{project.summary}</p>

                {project.tags && project.tags.length > 0 && (
                    <div className={styles.tags}>
                        {project.tags.map((tag) => (
                            <span key={tag} className={styles.tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <div className={styles.links}>
                    {project.projectUrl && (
                        <a
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            {t.projects.viewLive} →
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            {t.projects.github} →
                        </a>
                    )}
                </div>
            </div>
        </article>
    )
}
