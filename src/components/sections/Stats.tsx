import { siteConfig } from '../../config/site.config'

export function Stats() {
  return (
    <section
      aria-label="Коротко о себе"
      className="flex flex-wrap items-center justify-start gap-x-[14px] gap-y-7 pt-[42px] pb-[70px]"
    >
      {siteConfig.stats.map((stat) => (
        <div
          key={stat.label}
          className="box-border grid aspect-square place-content-center rounded-full text-center"
          style={{
            width: stat.width,
            padding: stat.padding,
            background: `var(--color-${stat.bg})`,
            transform: stat.offsetY ? `translateY(${stat.offsetY}px)` : undefined,
          }}
        >
          <p
            className="m-0 font-heading leading-[56px] font-black"
            style={{ fontSize: stat.numberSize, color: `var(--color-${stat.fg})` }}
          >
            {stat.value}
          </p>
          <p className="mt-[14px] max-w-[17ch] text-[13px] leading-[14px] font-semibold tracking-[0.06em] text-balance text-text/70 uppercase">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  )
}
