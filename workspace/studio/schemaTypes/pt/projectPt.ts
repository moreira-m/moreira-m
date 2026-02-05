import { defineType } from 'sanity'

export default defineType({
    name: 'projectPt',
    title: '🇧🇷 Project (PT)',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Título do Projeto',
            type: 'string',
            description: 'Nome do projeto',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Identificador amigável para URL (clique em Gerar)',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'summary',
            title: 'Descrição Curta',
            type: 'text',
            description: 'Breve descrição para o card do projeto (1-2 frases)',
            rows: 3,
            validation: (Rule) => Rule.required().max(200),
        },
        {
            name: 'thumbnail',
            title: 'Imagem Miniatura',
            type: 'image',
            description: 'Imagem principal mostrada na grid de projetos',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Texto Alternativo',
                    type: 'string',
                    description: 'Descreva a imagem para acessibilidade',
                },
            ],
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'content',
            title: 'Conteúdo do Projeto',
            type: 'array',
            description: 'Descrição detalhada do projeto',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Citação', value: 'blockquote' },
                    ],
                    lists: [
                        { title: 'Bullets', value: 'bullet' },
                        { title: 'Numerada', value: 'number' },
                    ],
                    marks: {
                        decorators: [
                            { title: 'Negrito', value: 'strong' },
                            { title: 'Itálico', value: 'em' },
                            { title: 'Código', value: 'code' },
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link Externo',
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
                    title: 'Imagem',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            title: 'Texto Alternativo',
                            type: 'string',
                        },
                        {
                            name: 'caption',
                            title: 'Legenda',
                            type: 'string',
                        },
                    ],
                },
            ],
        },
        {
            name: 'tags',
            title: 'Tecnologias/Tags',
            type: 'array',
            description: 'Tecnologias usadas neste projeto',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        },
        {
            name: 'projectUrl',
            title: 'URL do Projeto Online',
            type: 'url',
            description: 'Link para o projeto ao vivo (opcional)',
        },
        {
            name: 'githubUrl',
            title: 'URL do GitHub',
            type: 'url',
            description: 'Link para o repositório GitHub (opcional)',
        },
        {
            name: 'featured',
            title: 'Projeto em Destaque',
            type: 'boolean',
            description: 'Mostrar este projeto na homepage',
            initialValue: false,
        },
        {
            name: 'order',
            title: 'Ordem de Exibição',
            type: 'number',
            description: 'Números menores aparecem primeiro',
            initialValue: 0,
        },
        {
            name: 'publishedAt',
            title: 'Data de Publicação',
            type: 'datetime',
            description: 'Quando este projeto foi concluído/publicado',
        },
    ],
    orderings: [
        {
            title: 'Ordem de Exibição',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
        {
            title: 'Data de Publicação, Recente',
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
