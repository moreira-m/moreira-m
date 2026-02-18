'use client'

import { useActionState } from 'react'
import { sendEmail } from '@/actions/contact'
import { useLanguage } from '@/contexts/LanguageContext'
import Button from '@/components/UI/Button'
import styles from './Contact.module.scss'

export default function Contact() {
    const { t } = useLanguage()
    const [state, formAction, isPending] = useActionState(sendEmail, { success: false, message: '' })

    return (
        <section className={styles.contact} id="contact">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t.contact.title}</h2>
                    <p className={styles.subtitle}>
                        {t.contact.subtitle}
                    </p>
                </div>

                <form className={styles.form} action={formAction}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>
                            {t.contact.nameLabel}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={styles.input}
                            placeholder={t.contact.namePlaceholder}
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
                            name="email"
                            className={styles.input}
                            placeholder={t.contact.emailPlaceholder}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.label}>
                            {t.contact.messageLabel}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className={styles.textarea}
                            placeholder={t.contact.messagePlaceholder}
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        size="large"
                        disabled={isPending}
                        className={styles.submitButton}
                    >
                        {isPending ? t.contact.sending : t.contact.sendButton}
                    </Button>

                    {state.success && (
                        <div className={`${styles.message} ${styles.success}`}>
                            {t.contact.successMessage}
                        </div>
                    )}

                    {!state.success && state.message === 'error' && (
                        <div className={`${styles.message} ${styles.error}`}>
                            {t.contact.errorMessage}
                        </div>
                    )}
                </form>
            </div>
        </section>
    )
}
