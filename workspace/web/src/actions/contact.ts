'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface SendEmailState {
    success: boolean
    message: string
}

export async function sendEmail(prevState: SendEmailState, formData: FormData): Promise<SendEmailState> {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    if (!name || !email || !message) {
        return {
            success: false,
            message: 'missing_fields'
        }
    }

    try {
        await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'matheussmoreira0612@gmail.com',
            subject: `New contact from ${name}`,
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px;">
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p style="background: #f4f4f4; padding: 15px; border-radius: 5px;">${message}</p>
                </div>
            `
        })

        return {
            success: true,
            message: 'success'
        }
    } catch (error) {
        return {
            success: false,
            message: 'error'
        }
    }
}
