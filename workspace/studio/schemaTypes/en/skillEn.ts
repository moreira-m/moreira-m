import { defineType } from 'sanity'

export default defineType({
    name: 'skillEn',
    title: '🇺🇸 Skill (EN)',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Skill Name',
            type: 'string',
            description: 'Name of the technology/skill',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'icon',
            title: 'Icon/Logo',
            type: 'image',
            description: 'Technology logo or icon',
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
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            description: 'Group skills by category',
            options: {
                list: [
                    { title: 'Frontend', value: 'frontend' },
                    { title: 'Backend', value: 'backend' },
                    { title: 'Database', value: 'database' },
                    { title: 'DevOps', value: 'devops' },
                    { title: 'Tools', value: 'tools' },
                    { title: 'Other', value: 'other' },
                ],
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'proficiency',
            title: 'Proficiency Level',
            type: 'number',
            description: 'Rate your skill level (1-5)',
            validation: (Rule) => Rule.required().min(1).max(5),
            initialValue: 3,
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Order in which skills appear (lower numbers first)',
            initialValue: 0,
        },
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
        {
            title: 'Category',
            name: 'categoryAsc',
            by: [{ field: 'category', direction: 'asc' }],
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'category',
            media: 'icon',
            proficiency: 'proficiency',
        },
        prepare({ title, subtitle, media, proficiency }) {
            return {
                title,
                subtitle: `${subtitle} - ${proficiency}/5`,
                media,
            }
        },
    },
})
