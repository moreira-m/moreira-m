import { defineType } from 'sanity'

export default defineType({
    name: 'skillPt',
    title: '🇧🇷 Skill (PT)',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Nome da Habilidade',
            type: 'string',
            description: 'Nome da tecnologia/habilidade',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'icon',
            title: 'Ícone/Logo',
            type: 'image',
            description: 'Logo ou ícone da tecnologia',
            options: {
                hotspot: false,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Texto Alternativo',
                    type: 'string',
                },
            ],
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'category',
            title: 'Categoria',
            type: 'string',
            description: 'Agrupe habilidades por categoria',
            options: {
                list: [
                    { title: 'Frontend', value: 'frontend' },
                    { title: 'Backend', value: 'backend' },
                    { title: 'Banco de Dados', value: 'database' },
                    { title: 'DevOps', value: 'devops' },
                    { title: 'Ferramentas', value: 'tools' },
                    { title: 'Outro', value: 'other' },
                ],
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'proficiency',
            title: 'Nível de Proficiência',
            type: 'number',
            description: 'Avalie seu nível de habilidade (1-5)',
            validation: (Rule) => Rule.required().min(1).max(5),
            initialValue: 3,
        },
        {
            name: 'order',
            title: 'Ordem de Exibição',
            type: 'number',
            description: 'Ordem em que as habilidades aparecem (números menores primeiro)',
            initialValue: 0,
        },
    ],
    orderings: [
        {
            title: 'Ordem de Exibição',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
        {
            title: 'Categoria',
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
