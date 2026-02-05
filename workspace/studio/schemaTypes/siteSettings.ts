import { defineType } from 'sanity'

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        {
            name: 'siteTitle',
            title: 'Site Title',
            type: 'string',
            description: 'Used in browser tab and SEO',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'siteDescription',
            title: 'Site Description',
            type: 'text',
            description: 'Brief description for SEO and social media',
            rows: 3,
            validation: (Rule) => Rule.required().max(160),
        },
        {
            name: 'contactEmail',
            title: 'Contact Email',
            type: 'string',
            description: 'Your contact email address',
            validation: (Rule) =>
                Rule.required().regex(
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    'Must be a valid email address'
                ),
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            description: 'Site logo (optional)',
            options: {
                hotspot: false,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                },
            ],
        },
        {
            name: 'favicon',
            title: 'Favicon',
            type: 'image',
            description: 'Browser tab icon (optional, square image recommended)',
            options: {
                hotspot: false,
            },
        },
    ],
    preview: {
        select: {
            title: 'siteTitle',
            subtitle: 'contactEmail',
        },
    },
})
