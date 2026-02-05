'use client'

import { Project } from '@/lib/sanity.types'
import { useLanguage } from '@/contexts/LanguageContext'
import ProjectCard from '@/components/UI/ProjectCard'
import Button from '@/components/UI/Button'
import styles from './Projects.module.scss'

interface ProjectsProps {
    projects: Project[]
    showViewAll?: boolean
}

export default function Projects({ projects, showViewAll = true }: ProjectsProps) {
    const { t } = useLanguage()

    return (
        <section className={styles.projects} id="projects">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t.projects.title}</h2>
                    <p className={styles.subtitle}>{t.projects.subtitle}</p>
                </div>

                <div className={styles.grid}>
                    {projects.map((project) => (
                        <ProjectCard key={project._id} project={project} />
                    ))}
                </div>

                {showViewAll && (
                    <div className={styles.viewAll}>
                        <Button href="/projects" variant="secondary" size="large">
                            {t.projects.viewAll}
                        </Button>
                    </div>
                )}
            </div>
        </section>
    )
}
