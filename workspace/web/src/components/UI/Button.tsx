import Link from 'next/link'
import styles from './Button.module.scss'

interface ButtonProps {
    children: React.ReactNode
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'small' | 'medium' | 'large'
    href?: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    className?: string
}

export default function Button({
    children,
    variant = 'primary',
    size = 'medium',
    href,
    onClick,
    type = 'button',
    disabled = false,
    className = '',
}: ButtonProps) {
    const buttonClass = `${styles.button} ${styles[variant]} ${size !== 'medium' ? styles[size] : ''
        } ${className}`.trim()

    if (href) {
        // External link
        if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
            return (
                <a href={href} className={buttonClass}>
                    {children}
                </a>
            )
        }

        // Internal link
        return (
            <Link href={href} className={buttonClass}>
                {children}
            </Link>
        )
    }

    return (
        <button type={type} onClick={onClick} disabled={disabled} className={buttonClass}>
            {children}
        </button>
    )
}
