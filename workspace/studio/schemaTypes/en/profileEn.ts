import { defineType } from 'sanity'

export default defineType({
    name: 'profileEn',
    title: '🇺🇸 Profile (EN)',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Your full name',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'title',
            title: 'Professional Title',
            type: 'string',
            description: 'e.g., "Full Stack Developer", "Frontend Engineer"',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'bio',
            title: 'Short Bio',
            type: 'text',
            description: 'Brief introduction for the hero section (2-3 sentences)',
            rows: 3,
        },
        {
            name: 'image',
            title: 'Profile Image',
            type: 'image',
            description: 'Your profile photo or hero image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    description: 'Important for accessibility and SEO',
                },
            ],
        },
        {
            name: 'ctaText',
            title: 'CTA Button Text',
            type: 'string',
            description: 'Text for the call-to-action button',
            initialValue: 'Contact me',
        },
        {
            name: 'ctaLink',
            title: 'CTA Button Link',
            type: 'string',
            description: 'Link for the CTA button (e.g., #contact, mailto:, etc.)',
            initialValue: '#contact',
        },
        {
            name: 'resumeFile',
            title: 'Resume/CV File',
            type: 'file',
            description: 'Upload your resume (PDF)',
            options: {
                accept: '.pdf',
            },
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'title',
            media: 'image',
        },
    },
})
