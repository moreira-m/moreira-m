'use server'

import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

type Language = 'pt' | 'en'

export async function setLanguage(language: Language) {
    const cookieStore = await cookies()

    // Set the cookie
    cookieStore.set('language', language, {
        path: '/',
        maxAge: 31536000, // 1 year
        sameSite: 'lax',
    })

    // Revalidate all pages to reflect the language change immediately
    revalidatePath('/', 'layout')
}
