import { notFound } from 'next/navigation'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { getProjectBySlug, getAllProjects } from '@/lib/sanity.queries'
import { getServerLanguage } from '@/lib/language'
import { urlFor } from '@/lib/sanity.client'
import { Project } from '@/lib/sanity.types'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import Button from '@/components/UI/Button'
import ProjectCard from '@/components/UI/ProjectCard'
import styles from './page.module.scss'

interface ProjectPageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    // Generate paths for both languages
    const projectsPt = await getAllProjects('pt')
    const projectsEn = await getAllProjects('en')
    const allProjects = [...projectsPt, ...projectsEn]

    // Remove duplicates by slug
    const uniqueProjects = allProjects.filter(
        (project, index, self) =>
            index === self.findIndex(p => p.slug.current === project.slug.current)
    )

    return uniqueProjects.map((project: { slug: { current: string } }) => ({
        slug: project.slug.current,
    }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params
    const language = await getServerLanguage()
    const project = await getProjectBySlug(slug, language)

    if (!project) {
        notFound()
    }

    const thumbnailUrl = project.thumbnail
        ? urlFor(project.thumbnail).width(1200).height(675).url()
        : null

    // Get related projects (same tags, excluding current)
    const allProjects = await getAllProjects(language)
    const relatedProjects = allProjects
        .filter((p: Project) => p.slug.current !== slug && p.tags?.some((tag: string) => project.tags?.includes(tag)))
        .slice(0, 2)

    return (
        <>
            <Header />
            <main className={styles.projectPage}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <a href="/#projects" className={styles.backLink}>
                            ← Back to Projects
                        </a>

                        <h1 className={styles.title}>{project.title}</h1>

                        {project.publishedAt && (
                            <div className={styles.meta}>
                                <span className={styles.metaItem}>
                                    📅 {new Date(project.publishedAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                    })}
                                </span>
                            </div>
                        )}

                        <p className={styles.summary}>{project.summary}</p>

                        {thumbnailUrl && (
                            <Image
                                src={thumbnailUrl}
                                alt={project.title}
                                width={1200}
                                height={675}
                                className={styles.thumbnail}
                                priority
                            />
                        )}

                        {project.tags && project.tags.length > 0 && (
                            <div className={styles.tags}>
                                {project.tags.map((tag: string) => (
                                    <span key={tag} className={styles.tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {(project.projectUrl || project.githubUrl) && (
                            <div className={styles.links}>
                                {project.projectUrl && (
                                    <Button href={project.projectUrl} variant="primary">
                                        View Live Project →
                                    </Button>
                                )}
                                {project.githubUrl && (
                                    <Button href={project.githubUrl} variant="secondary">
                                        View on GitHub →
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>

                    {project.content && (
                        <div className={styles.content}>
                            <PortableText value={project.content} />
                        </div>
                    )}

                    {relatedProjects.length > 0 && (
                        <>
                            <div className={styles.divider} />
                            <div className={styles.relatedProjects}>
                                <h2>Related Projects</h2>
                                <div className={styles.grid}>
                                    {relatedProjects.map((relatedProject: Project) => (
                                        <ProjectCard key={relatedProject._id} project={relatedProject} />
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </main>
            <Footer socialLinks={[]} />
        </>
    )
}
