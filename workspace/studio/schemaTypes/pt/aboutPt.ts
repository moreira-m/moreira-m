import { defineType } from 'sanity'

export default defineType({
    name: 'aboutPt',
    title: '🇧🇷 About (PT)',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Título da Seção',
            type: 'string',
            description: 'Título para a seção Sobre',
            initialValue: 'Sobre Mim',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'content',
            title: 'Conteúdo',
            type: 'array',
            description: 'Sua bio estendida e histórico profissional',
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
                            { title: 'Negrito', value: 'strong' },
                            { title: 'Itálico', value: 'em' },
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
            title: 'Anos de Experiência',
            type: 'number',
            description: 'Quantos anos de experiência profissional',
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
})
