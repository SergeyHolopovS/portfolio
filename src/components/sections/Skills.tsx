import { siteConfig } from '../../config/site.config'
import { Kicker } from '../ui/Kicker'
import { Tag } from '../ui/Tag'

export function Skills() {
  return (
    <section id="skills" className="pt-14 pb-[42px]">
      <Kicker className="mb-7">Ключевые навыки</Kicker>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-x-[clamp(24px,4vw,64px)] gap-y-7">
        {siteConfig.skills.map((group) => (
          <div key={group.title}>
            <h3 className="mb-[14px] font-heading text-[22px] leading-7 font-black">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Tag key={skill.label} label={skill.label} tone={skill.tone} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
