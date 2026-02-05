import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config()

const client = createClient({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
    dataset: process.env.SANITY_STUDIO_DATASET!,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN, // You'll need to add this
    apiVersion: '2024-01-01',
})

async function createSampleContent() {
    console.log('Creating sample content...\n')

    try {
        // 1. Create Profile
        const profile = await client.create({
            _type: 'profile',
            name: 'John Doe',
            title: 'Full Stack Developer',
            bio: 'Passionate developer focused on creating amazing web experiences. I build modern, responsive applications using the latest technologies.',
            ctaText: 'Get in Touch',
            ctaLink: '#contact',
        })
        console.log('✅ Profile created')

        // 2. Create About
        const about = await client.create({
            _type: 'about',
            title: 'About me',
            yearsOfExperience: 5,
            content: [
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: "I'm a full stack web developer with a passion for creating beautiful, functional websites and applications. I specialize in modern JavaScript frameworks and have experience working with both frontend and backend technologies.",
                        },
                    ],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'Throughout my career, I\'ve worked on diverse projects ranging from e-commerce platforms to content management systems, always focusing on delivering high-quality, maintainable code and exceptional user experiences.',
                        },
                    ],
                },
            ],
        })
        console.log('✅ About created')

        // 3. Create Skills
        const skills = [
            { name: 'JavaScript', category: 'frontend', proficiency: 5, order: 1 },
            { name: 'TypeScript', category: 'frontend', proficiency: 5, order: 2 },
            { name: 'React', category: 'frontend', proficiency: 5, order: 3 },
            { name: 'Node.js', category: 'backend', proficiency: 4, order: 4 },
            { name: 'Next.js', category: 'frontend', proficiency: 5, order: 5 },
            { name: 'PostgreSQL', category: 'database', proficiency: 4, order: 6 },
            { name: 'Docker', category: 'devops', proficiency: 3, order: 7 },
            { name: 'Git', category: 'tools', proficiency: 5, order: 8 },
        ]

        for (const skill of skills) {
            await client.create({
                _type: 'skill',
                ...skill,
            })
        }
        console.log('✅ Skills created (8)')

        // 4. Create Projects
        const projects = [
            {
                _type: 'project',
                title: 'E-Commerce Platform',
                slug: { _type: 'slug', current: 'ecommerce-platform' },
                summary: 'A full-featured online shopping platform with payment integration and admin dashboard.',
                tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
                featured: true,
                order: 1,
                publishedAt: new Date().toISOString(),
                content: [
                    {
                        _type: 'block',
                        style: 'normal',
                        children: [
                            {
                                _type: 'span',
                                text: 'Built a complete e-commerce solution with product management, cart functionality, and secure payment processing.',
                            },
                        ],
                    },
                ],
            },
            {
                _type: 'project',
                title: 'Task Management App',
                slug: { _type: 'slug', current: 'task-management-app' },
                summary: 'Collaborative task management tool with real-time updates and team features.',
                tags: ['React', 'Firebase', 'Material-UI'],
                featured: true,
                order: 2,
                publishedAt: new Date().toISOString(),
                content: [
                    {
                        _type: 'block',
                        style: 'normal',
                        children: [
                            {
                                _type: 'span',
                                text: 'Developed a productivity application with drag-and-drop functionality and real-time collaboration.',
                            },
                        ],
                    },
                ],
            },
            {
                _type: 'project',
                title: 'Portfolio CMS',
                slug: { _type: 'slug', current: 'portfolio-cms' },
                summary: 'Content management system for creative professionals to showcase their work.',
                tags: ['Sanity', 'Next.js', 'SCSS'],
                featured: true,
                order: 3,
                publishedAt: new Date().toISOString(),
                content: [
                    {
                        _type: 'block',
                        style: 'normal',
                        children: [
                            {
                                _type: 'span',
                                text: 'Created a flexible CMS with visual editing capabilities and responsive design.',
                            },
                        ],
                    },
                ],
            },
        ]

        for (const project of projects) {
            await client.create(project)
        }
        console.log('✅ Projects created (3)')

        // 5. Create Social Links
        const socialLinks = [
            { _type: 'socialLink', platform: 'github', url: 'https://github.com', order: 1 },
            { _type: 'socialLink', platform: 'linkedin', url: 'https://linkedin.com', order: 2 },
            { _type: 'socialLink', platform: 'twitter', url: 'https://twitter.com', order: 3 },
        ]

        for (const link of socialLinks) {
            await client.create(link)
        }
        console.log('✅ Social Links created (3)')

        // 6. Create Site Settings
        await client.create({
            _type: 'siteSettings',
            _id: 'siteSettings',
            siteTitle: 'John Doe - Developer Portfolio',
            siteDescription: 'Full Stack Developer portfolio showcasing projects and skills',
            contactEmail: 'john@example.com',
        })
        console.log('✅ Site Settings created')

        console.log('\n🎉 Sample content created successfully!')
        console.log('📝 You can now edit this content in Sanity Studio at http://localhost:3333')
    } catch (error) {
        console.error('Error creating sample content:', error)
    }
}

createSampleContent()
