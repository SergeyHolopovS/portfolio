import { siteConfig } from '../config/site.config'

export function Footer() {
  return (
    <footer className="pb-[56px] text-[13px] leading-7 text-text/70">{siteConfig.footer}</footer>
  )
}
