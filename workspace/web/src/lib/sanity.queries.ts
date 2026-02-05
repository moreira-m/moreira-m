import { client } from './sanity.client'

// Helper function to get schema name based on language
function getSchemaName(baseName: string, language: 'pt' | 'en'): string {
  const suffix = language.charAt(0).toUpperCase() + language.slice(1) // 'Pt' or 'En'
  return `${baseName}${suffix}`
}

// Profile query
export async function getProfile(language: 'pt' | 'en' = 'en') {
  const schemaType = getSchemaName('profile', language)
  console.log(`[QUERY] Fetching profile for schema: ${schemaType}`)
  return client.fetch(
    `*[_type == "${schemaType}"][0]{
      _id,
      name,
      title,
      bio,
      image,
      ctaText,
      ctaLink,
      "resumeUrl": resumeFile.asset->url
    }`,
    {},
    {
      next: { revalidate: 0 } // Disable cache for debugging
    }
  )
}

// About query
export async function getAbout(language: 'pt' | 'en' = 'en') {
  const schemaType = getSchemaName('about', language)
  return client.fetch(
    `*[_type == "${schemaType}"][0]{
      _id,
      title,
      content,
      yearsOfExperience
    }`
  )
}

// Featured projects query  
export async function getFeaturedProjects(language: 'pt' | 'en' = 'en') {
  const schemaType = getSchemaName('project', language)
  return client.fetch(
    `*[_type == "${schemaType}" && featured == true] | order(order asc, publishedAt desc){
      _id,
      title,
      slug,
      summary,
      thumbnail,
      tags,
      projectUrl,
      githubUrl
    }[0...6]`
  )
}

// All projects query
export async function getAllProjects(language: 'pt' | 'en' = 'en') {
  const schemaType = getSchemaName('project', language)
  return client.fetch(
    `*[_type == "${schemaType}"] | order(order asc, publishedAt desc){
      _id,
      title,
      slug,
      summary,
      thumbnail,
      tags,
      projectUrl,
      githubUrl,
      featured,
      publishedAt
    }`
  )
}

// Single project query
export async function getProjectBySlug(slug: string, language: 'pt' | 'en' = 'en') {
  const schemaType = getSchemaName('project', language)
  return client.fetch(
    `*[_type == "${schemaType}" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      summary,
      content,
      thumbnail,
      tags,
      projectUrl,
      githubUrl,
      publishedAt
    }`,
    { slug }
  )
}

// Skills query
export async function getSkills(language: 'pt' | 'en' = 'en') {
  const schemaType = getSchemaName('skill', language)
  return client.fetch(
    `*[_type == "${schemaType}"] | order(order asc){
      _id,
      name,
      icon,
      category,
      proficiency
    }`
  )
}

// Social links query (não muda com o idioma)
export async function getSocialLinks() {
  return client.fetch(
    `*[_type == "socialLink"] | order(order asc){
      _id,
      platform,
      url
    }`
  )
}

// Site settings query (não muda com o idioma)
export async function getSiteSettings() {
  return client.fetch(
    `*[_type == "siteSettings"][0]{
      _id,
      siteTitle,
      siteDescription,
      contactEmail,
      logo,
      favicon
    }`
  )
}

// Homepage data query (all data at once)
export async function getHomepageData(language: 'pt' | 'en' = 'en') {
  const profileType = getSchemaName('profile', language)
  const aboutType = getSchemaName('about', language)
  const projectType = getSchemaName('project', language)
  const skillType = getSchemaName('skill', language)

  console.log(`[QUERY] getHomepageData called with language: ${language}`)
  console.log(`[QUERY] Schema types: profile=${profileType}, about=${aboutType}, project=${projectType}, skill=${skillType}`)

  // Debug query to check if documents exist
  const checkDocs = await client.fetch(`{
    "profileCount": count(*[_type == "${profileType}"]),
    "aboutCount": count(*[_type == "${aboutType}"]),
    "projectCount": count(*[_type == "${projectType}"]),
    "skillCount": count(*[_type == "${skillType}"])
  }`, {}, { next: { revalidate: 0 } })
  console.log(`[QUERY] Document counts for ${language}:`, checkDocs)

  return client.fetch(
    `{
      "profile": *[_type == "${profileType}"][0]{
        _id,
        name,
        title,
        bio,
        image,
        ctaText,
        ctaLink,
        "resumeUrl": resumeFile.asset->url
      },
      "about": *[_type == "${aboutType}"][0]{
        _id,
        title,
        content,
        yearsOfExperience
      },
      "projects": *[_type == "${projectType}" && featured == true] | order(order asc, publishedAt desc){
        _id,
        title,
        slug,
        summary,
        thumbnail,
        tags,
        projectUrl,
        githubUrl
      }[0...6],
      "skills": *[_type == "${skillType}"] | order(order asc){
        _id,
        name,
        icon,
        category,
        proficiency
      },
      "socialLinks": *[_type == "socialLink"] | order(order asc){
        _id,
        platform,
        url
      },
      "siteSettings": *[_type == "siteSettings"][0]{
        _id,
        siteTitle,
        siteDescription,
        contactEmail,
        logo,
        favicon
      }
    }`,
    {},
    {
      next: { revalidate: 0 } // Disable cache for debugging
    }
  )
}
