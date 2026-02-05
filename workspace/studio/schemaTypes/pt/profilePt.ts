import { defineType } from 'sanity'

export default defineType({
    name: 'profilePt',
    title: '🇧🇷 Profile (PT)',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Nome',
            type: 'string',
            description: 'Seu nome completo',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'title',
            title: 'Título Profissional',
            type: 'string',
            description: 'ex: "Desenvolvedor Full Stack", "Engenheiro Frontend"',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'bio',
            title: 'Bio Curta',
            type: 'text',
            description: 'Breve introdução para a seção hero (2-3 frases)',
            rows: 3,
        },
        {
            name: 'image',
            title: 'Imagem de Perfil',
            type: 'image',
            description: 'Sua foto de perfil ou imagem hero',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Texto Alternativo',
                    type: 'string',
                    description: 'Importante para acessibilidade e SEO',
                },
            ],
        },
        {
            name: 'ctaText',
            title: 'Texto do Botão CTA',
            type: 'string',
            description: 'Texto para o botão de call-to-action',
            initialValue: 'Entre em contato',
        },
        {
            name: 'ctaLink',
            title: 'Link do Botão CTA',
            type: 'string',
            description: 'Link para o botão CTA (ex: #contact, mailto:, etc.)',
            initialValue: '#contact',
        },
        {
            name: 'resumeFile',
            title: 'Arquivo de Currículo',
            type: 'file',
            description: 'Upload do seu currículo (PDF)',
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
