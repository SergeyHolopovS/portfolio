import { siteConfig } from '../config/site.config'
import { Button } from './ui/Button'

export function Navbar() {
  return (
    <nav className="flex items-center gap-4 py-4 px-[max(clamp(20px,5vw,72px),calc((100%-1200px)/2+clamp(20px,5vw,72px)))]">
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
      <Button
        {...siteConfig.navCta}
        className="shrink-0 whitespace-nowrap"
      />
    </nav>
  )
}
