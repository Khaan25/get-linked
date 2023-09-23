import { Description } from '@/components/ui/description'
import { Heading } from '@/components/ui/heading'
import { Section } from '@/components/common/section'
import ContactForm from '@/components/contact-form'

export default function Page() {
  return (
    <Section>
      <div className="container relative space-y-4">
        <div className="absolute left-0 top-0 z-[-1] aspect-square w-[200px] rounded-full bg-secondary blur-[60px] lg:left-28 lg:top-28 lg:w-[350px] lg:opacity-50" />
        <div>
          <Heading level={1} className="mb-4 !text-xl font-semibold text-primary">
            Questions or need <br /> assistance? <br className="md:hidden" />
            Let us know about it
          </Heading>
          <Description className="text-xs max468:mr-20">Email us below to any question related to our event</Description>
        </div>

        <ContactForm />
      </div>
    </Section>
  )
}
