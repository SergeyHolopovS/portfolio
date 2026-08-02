import type { Tone } from '../../config/types'

const TONE_CLASSES: Record<Tone, string> = {
  accent: 'bg-accent-100 text-accent-800 outline outline-accent-800/0 hover:outline-accent-800/50 duration-200',
  accent2: 'bg-accent2-100 text-accent2-800 outline outline-accent2-800/0 hover:outline-accent2-800/50 duration-200',
  neutral: 'bg-neutral-100 text-neutral-800 outline outline-neutral-800/0 hover:outline-neutral-800/50 duration-200',
  outline: 'outline outline-accent text-accent hover:bg-accent hover:text-neutral-100 duration-200',
}

interface TagProps {
  label: string
  tone: Tone
}

export function Tag({ label, tone }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] tracking-[0.02em] ${TONE_CLASSES[tone]}`}
    >
      {label}
    </span>
  )
}
