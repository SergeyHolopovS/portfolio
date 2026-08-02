import { siteConfig } from '../../config/site.config'

export function Quote() {
  const { quote } = siteConfig

  return (
    <section className="pt-[70px] pb-[84px]">
      <figure className="m-0 w-full flex flex-col items-center gap-8">
        <blockquote className="m-0 max-w-[32ch] indent-[-0.559em] font-heading text-[clamp(24px,2.6vw,32px)] leading-[42px] font-black">
          «{quote.text}»
        </blockquote>
        <figcaption className="indent-[-1.347em] text-[15.5px] leading-7 text-text/70">
          {quote.author}
        </figcaption>
      </figure>
    </section>
  )
}
