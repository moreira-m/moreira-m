import { defineType } from 'sanity'

export default defineType({
    name: 'projectEn',
    title: '🇺🇸 Project (EN)',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Project Title',
            type: 'string',
            description: 'Name of the project',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'URL-friendly identifier (click Generate)',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'summary',
            title: 'Short Description',
            type: 'text',
            description: 'Brief description for the project card (1-2 sentences)',
            rows: 3,
            validation: (Rule) => Rule.required().max(200),
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail Image',
            type: 'image',
            description: 'Main image shown in the project grid',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    description: 'Describe the image for accessibility',
                },
            ],
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'content',
            title: 'Project Content',
            type: 'array',
            description: 'Detailed project description',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' },
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Numbered', value: 'number' },
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' },
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'External Link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        title: 'URL',
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: 'image',
                    name: 'projectImage',
                    title: 'Image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alternative Text',
                            type: 'string',
                        },
                        {
                            name: 'caption',
                            title: 'Caption',
                            type: 'string',
                        },
                    ],
                },
            ],
        },
        {
            name: 'tags',
            title: 'Technologies/Tags',
            type: 'array',
            description: 'Technologies used in this project',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        },
        {
            name: 'projectUrl',
            title: 'Live Project URL',
            type: 'url',
            description: 'Link to the live project (optional)',
        },
        {
            name: 'githubUrl',
            title: 'GitHub URL',
            type: 'url',
            description: 'Link to the GitHub repository (optional)',
        },
        {
            name: 'featured',
            title: 'Featured Project',
            type: 'boolean',
            description: 'Show this project on the homepage',
            initialValue: false,
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first',
            initialValue: 0,
        },
        {
            name: 'publishedAt',
            title: 'Published Date',
            type: 'datetime',
            description: 'When was this project completed/published',
        },
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
        {
            title: 'Published Date, New',
            name: 'publishedAtDesc',
            by: [{ field: 'publishedAt', direction: 'desc' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'summary',
            media: 'thumbnail',
            featured: 'featured',
        },
        prepare({ title, subtitle, media, featured }) {
            return {
                title: featured ? `⭐ ${title}` : title,
                subtitle,
                media,
            }
        },
    },
})
