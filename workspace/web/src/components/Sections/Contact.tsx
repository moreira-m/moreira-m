'use client'

import { useState, FormEvent } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import Button from '@/components/UI/Button'
import styles from './Contact.module.scss'

export default function Contact() {
    const { t } = useLanguage()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setStatus('loading')

        // Here you would typically send the form data to an API endpoint
        // For now, we'll just simulate a successful submission
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000))

            setStatus('success')
            setFormData({ name: '', email: '', message: '' })

            // Reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000)
        } catch (error) {
            setStatus('error')
        }
    }

    return (
        <section className={styles.contact} id="contact">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t.contact.title}</h2>
                    <p className={styles.subtitle}>
                        {t.contact.subtitle}
                    </p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>
                            {t.contact.nameLabel}
                        </label>
                        <input
                            type="text"
                            id="name"
                            className={styles.input}
                            placeholder={t.contact.namePlaceholder}
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>
                            {t.contact.emailLabel}
                        </label>
                        <input
                            type="email"
                            id="email"
                            className={styles.input}
                            placeholder={t.contact.emailPlaceholder}
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.label}>
                            {t.contact.messageLabel}
                        </label>
                        <textarea
                            id="message"
                            className={styles.textarea}
                            placeholder={t.contact.messagePlaceholder}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        size="large"
                        disabled={status === 'loading'}
                        className={styles.submitButton}
                    >
                        {status === 'loading' ? t.contact.sending : t.contact.sendButton}
                    </Button>

                    {status === 'success' && (
                        <div className={`${styles.message} ${styles.success}`}>
                            {t.contact.successMessage}
                        </div>
                    )}

                    {status === 'error' && (
                        <div className={`${styles.message} ${styles.error}`}>
                            {t.contact.errorMessage}
                        </div>
                    )}
                </form>
            </div>
        </section>
    )
}
