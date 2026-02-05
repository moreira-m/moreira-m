import { defineType } from 'sanity'

export default defineType({
    name: 'aboutEn',
    title: '🇺🇸 About (EN)',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Section Title',
            type: 'string',
            description: 'Title for the About section',
            initialValue: 'About Me',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            description: 'Your extended bio and professional background',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
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
            ],
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'yearsOfExperience',
            title: 'Years of Experience',
            type: 'number',
            description: 'How many years of professional experience',
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
})
