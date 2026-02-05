import { getAllProjects } from '@/lib/sanity.queries'
import { Project } from '@/lib/sanity.types'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import ProjectCard from '@/components/UI/ProjectCard'
import styles from './page.module.scss'

export const metadata = {
    title: 'All Projects',
    description: 'Browse all of my projects and work',
}

export const revalidate = 60

export default async function ProjectsPage() {
    const projects = await getAllProjects()

    return (
        <>
            <Header />
            <main className={styles.projectsPage}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>All Projects</h1>
                        <p className={styles.subtitle}>
                            Explore my complete portfolio of work
                        </p>
                    </div>

                    <div className={styles.grid}>
                        {projects.map((project: Project) => (
                            <ProjectCard key={project._id} project={project} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer socialLinks={[]} />
        </>
    )
}
