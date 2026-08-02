import { siteConfig } from '../../config/site.config'
import { Kicker } from '../ui/Kicker'

export function Learning() {
  const { learning } = siteConfig

  return (
    <section id="learning" className="pt-[70px] pb-[42px]">
      <Kicker className="mb-[14px]">{learning.kicker}</Kicker>
      <p className="mb-[42px] max-w-[52ch] text-[15.5px] leading-7 text-text/78">
        {learning.description}
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-x-[clamp(24px,4vw,72px)] gap-y-[14px]">
        {learning.items.map((item) => (
          <div
            key={item.name}
            className="flex items-baseline gap-3 border-b border-neutral-200 py-[10px]"
          >
            <a href={item.href} target="_blank" rel="noopener" className="font-semibold">
              {item.name}
            </a>
            <span className="text-[14.5px] leading-6 text-text/70">{item.description}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
