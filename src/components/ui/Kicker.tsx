import type { ReactNode } from 'react'

export function Kicker({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`block text-[13px] leading-[14px] font-semibold tracking-[0.06em] text-accent-700 uppercase ${className}`}
    >
      {children}
    </span>
  )
}
