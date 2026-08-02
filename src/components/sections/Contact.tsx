import { siteConfig } from '../../config/site.config'
import { Button } from '../ui/Button'

export function Contact() {
  const { contact } = siteConfig

  return (
    <section id="contact" className="pb-[56px]">
      <div className="rounded-patch bg-accent2-100 px-[clamp(24px,4vw,64px)] py-[56px]">
        <h3 className="m-0 font-heading text-[26px] leading-8 font-black">{contact.heading}</h3>
        <p className="mt-[14px] w-full text-[15.5px] leading-7 text-text/78">
          {contact.description}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          {contact.actions.map((action) => (
            <Button key={action.label} {...action} />
          ))}
        </div>
      </div>
    </section>
  )
}
