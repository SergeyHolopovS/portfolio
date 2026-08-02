import { useState } from 'react'
import { siteConfig } from '../config/site.config'
import { Button } from './ui/Button'
import { clsx } from 'clsx'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="relative flex items-center gap-4 py-4 px-[max(clamp(20px,5vw,72px),calc((100%-1200px)/2+clamp(20px,5vw,72px)))]">
      <span className="mr-auto shrink-0 font-heading text-lg font-black whitespace-nowrap">
        {siteConfig.brand}
      </span>
      {siteConfig.nav.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="hidden shrink-0 text-sm whitespace-nowrap text-neutral-600 no-underline hover:text-accent-600 sm:inline px-3 py-1 rounded-full border border-accent-600/0 hover:border-accent-600 font-medium duration-200"
        >
          {link.label}
        </a>
      ))}
      <div className="hidden shrink-0 sm:block">
        <Button {...siteConfig.navCta} className="whitespace-nowrap" />
      </div>
      <button
        type="button"
        aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="relative cursor-pointer flex items-center justify-center size-9 shrink-0 rounded-full border border-neutral-300 duration-200 hover:border-accent-600 sm:hidden"
      >
        <div className="relative size-4">
          <div
            className={clsx(
              'absolute h-px w-full left-0 bg-black duration-200 origin-center',
              open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'top-0.5',
            )}
          ></div>
          <div className={clsx("absolute h-0.5 w-full left-0 top-1/2 -translate-y-1/2 bg-black duration-200", open && "opacity-0")}></div>
          <div
            className={clsx(
              'absolute h-px w-full left-0 bg-black duration-200 origin-center',
              open ? 'bottom-1/2 -translate-y-[calc(50%-1px)] rotate-45' : 'bottom-0.5',
            )}
          ></div>
        </div>
      </button>

      {open && (
        <div className="absolute top-full right-[clamp(20px,5vw,72px)] left-[clamp(20px,5vw,72px)] z-20 mt-2 flex flex-col rounded-2xl border border-neutral-300 bg-surface p-2 shadow-md sm:hidden">
          {siteConfig.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 text-[15px] font-medium text-neutral-700 no-underline hover:bg-black/5"
            >
              {link.label}
            </a>
          ))}
          <Button {...siteConfig.navCta} className="mt-1 w-full" onClick={() => setOpen(false)} />
        </div>
      )}
    </nav>
  )
}
