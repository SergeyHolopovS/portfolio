import { siteConfig } from '../../config/site.config'
import { Kicker } from '../ui/Kicker'

export function Experience() {
  return (
    <section id="experience" className="pt-[70px] pb-[42px]">
      <Kicker className="mb-7">Опыт</Kicker>
      <div className="flex flex-col gap-14">
        {siteConfig.experience.map((job) => (
          <div
            key={job.company}
            className="grid grid-cols-1 items-start gap-x-[clamp(24px,4vw,72px)] gap-y-7 md:grid-cols-[minmax(0,420px)_minmax(0,1fr)]"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex flex-col">
                <h2 className="font-heading text-[32px] leading-[42px] font-black">
                  {job.company}
                </h2>
                <p className="mt-[14px] text-[15.5px] leading-7 text-text/78">{job.role}</p>
                {job.link && (
                  <p className="text-[15.5px] leading-7">
                    <a href={job.link.href} target="_blank" rel="noopener">
                      {job.link.label}
                    </a>
                  </p>
                )}
              </div>
              <div className="mt-7 aspect-video w-full overflow-hidden rounded-md border border-neutral-300 shadow-sm">
                <img
                  src="/experience.png"
                  alt={`Скриншот сайта ${job.company}`}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
            <div>
              <p className="max-w-[52ch] text-[15.5px] leading-7 text-text/78">{job.description}</p>
              <ul className="mt-7 flex max-w-[52ch] list-none flex-col gap-[14px] p-0">
                {job.highlights.map((highlight) => (
                  <li key={highlight} className="relative pl-7 text-[15.5px] leading-7">
                    <span className="absolute top-2.5 left-0 h-[10px] w-[10px] rounded-full bg-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
