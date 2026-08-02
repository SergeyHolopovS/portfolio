import type { ReactNode } from 'react'

export function Container({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto max-w-[1200px] px-[clamp(20px,5vw,72px)] ${className}`}>
      {children}
    </div>
  )
}
