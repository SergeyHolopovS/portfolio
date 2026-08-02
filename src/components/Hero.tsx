import { siteConfig } from '../config/site.config'
import { Button } from './ui/Button'

export function Hero() {
  const { hero } = siteConfig

  return (
    <section className="relative pt-[112px] pb-[84px]">
      <div className="pointer-events-none absolute right-0 top-[-220px] -z-10 h-[420px] w-[420px] rounded-full bg-accent2-200" />

      <h1 className="ml-[-0.028em] font-heading text-[clamp(40px,5.8vw,76px)] leading-[clamp(43px,6.26vw,82px)] font-black">
        {hero.lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>

      <p className="mt-9 max-w-[58ch] text-[17px] leading-7">{hero.description}</p>

      <div className="mt-7 flex flex-wrap gap-3">
        {hero.actions.map((action) => (
          <Button key={action.label} {...action} />
        ))}
      </div>
    </section>
  )
}
