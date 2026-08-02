import { siteConfig } from '../../config/site.config'
import { Kicker } from '../ui/Kicker'
import { Tag } from '../ui/Tag'

export function Projects() {
  const { projects } = siteConfig

  return (
    <section id="projects" className="pt-[70px] pb-[42px]">
      <Kicker className="mb-[14px]">{projects.kicker}</Kicker>
      <h2 className="mb-[42px] max-w-[20ch] ml-[-0.028em] font-heading text-[clamp(30px,3.4vw,44px)] leading-[1.08] font-black">
        {projects.title}
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-7">
        {projects.items.map((project) => (
          <article
            key={project.title}
            className="flex flex-col gap-[14px] rounded-card bg-surface px-4 py-5 shadow-sm"
          >
            <span className="text-[10px] tracking-widest text-accent uppercase">
              {project.kicker}
            </span>
            <h3 className="m-0 font-heading text-[26px] leading-8 font-black">{project.title}</h3>
            <p className="m-0 text-[15.5px] leading-7 opacity-80">{project.description}</p>
            <div className="mt-auto flex flex-wrap gap-2 pt-[14px]">
              {project.tags.map((tag) => (
                <Tag key={tag.label} label={tag.label} tone={tag.tone} />
              ))}
            </div>
            <p className="mt-[14px] text-[11px] text-text/50">
              <a href={project.link.href} target="_blank" rel="noopener">
                {project.link.label}
              </a>
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
