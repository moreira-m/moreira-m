import { defineType } from 'sanity'

export default defineType({
    name: 'socialLink',
    title: 'Social Link',
    type: 'document',
    fields: [
        {
            name: 'platform',
            title: 'Platform',
            type: 'string',
            description: 'Social media platform name',
            options: {
                list: [
                    { title: 'GitHub', value: 'github' },
                    { title: 'LinkedIn', value: 'linkedin' },
                    { title: 'Twitter/X', value: 'twitter' },
                    { title: 'Instagram', value: 'instagram' },
                    { title: 'Dribbble', value: 'dribbble' },
                    { title: 'Behance', value: 'behance' },
                    { title: 'CodePen', value: 'codepen' },
                    { title: 'Dev.to', value: 'devto' },
                    { title: 'Medium', value: 'medium' },
                    { title: 'YouTube', value: 'youtube' },
                    { title: 'Email', value: 'email' },
                    { title: 'Other', value: 'other' },
                ],
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
            description: 'Link to your profile (e.g., https://github.com/username)',
            validation: (Rule) =>
                Rule.required().uri({
                    scheme: ['http', 'https', 'mailto'],
                }),
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Order in which links appear',
            initialValue: 0,
        },
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
    preview: {
        select: {
            title: 'platform',
            subtitle: 'url',
        },
    },
})
