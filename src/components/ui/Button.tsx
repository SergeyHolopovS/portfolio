import type { ReactNode } from 'react'
import type { ActionLink } from '../../config/types'

const VARIANT_CLASSES: Record<ActionLink['variant'], string> = {
  primary: 'bg-accent-600 text-white! hover:text-accent-600! hover:bg-accent-600/0 outline-2 outline-accent-600 active:bg-accent-700',
  secondary: 'border border-divider hover:bg-black/5 active:bg-black/10',
  ghost: 'px-2! text-accent hover:bg-accent/10 active:bg-accent/18',
}

interface ButtonProps extends ActionLink {
  children?: ReactNode
  className?: string
  onClick?: () => void
}

export function Button({
  href,
  variant,
  external,
  label,
  children,
  className = '',
  onClick,
}: ButtonProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener' : undefined}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 font-heading text-sm font-black leading-tight text-text no-underline transition-colors ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children ?? label}
    </a>
  )
}
