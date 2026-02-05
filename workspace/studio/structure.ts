import { StructureBuilder } from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
    S.list()
        .title('Content')
        .items([
            // 🇧🇷 PORTUGUÊS Folder
            S.listItem()
                .title('🇧🇷 Português (PT)')
                .child(
                    S.list()
                        .title('Conteúdo em Português')
                        .items([
                            S.documentTypeListItem('profilePt').title('Profile'),
                            S.documentTypeListItem('aboutPt').title('About'),
                            S.documentTypeListItem('projectPt').title('Projects'),
                            S.documentTypeListItem('skillPt').title('Skills'),
                        ])
                ),

            // 🇺🇸 ENGLISH Folder
            S.listItem()
                .title('🇺🇸 English (EN)')
                .child(
                    S.list()
                        .title('English Content')
                        .items([
                            S.documentTypeListItem('profileEn').title('Profile'),
                            S.documentTypeListItem('aboutEn').title('About'),
                            S.documentTypeListItem('projectEn').title('Projects'),
                            S.documentTypeListItem('skillEn').title('Skills'),
                        ])
                ),

            // Divider
            S.divider(),

            // ⚙️ SETTINGS Folder
            S.listItem()
                .title('⚙️ Settings')
                .child(
                    S.list()
                        .title('Site Settings')
                        .items([
                            S.documentTypeListItem('siteSettings').title('Site Settings'),
                            S.documentTypeListItem('socialLink').title('Social Links'),
                        ])
                ),
        ])
