import { Description } from '@/components/ui/description'
import { Heading } from '@/components/ui/heading'
import BackButton from '@/components/back-button'
import { Section } from '@/components/common/section'
import ContactForm from '@/components/contact-form'
import ContactInformation from '@/components/contact-information'
import ContactShare from '@/components/contact-share'

export default function Page() {
  return (
    <Section>
      <div className="container relative grid gap-4 lg:grid-cols-2">
        <div className="absolute left-0 top-20 z-[-1] aspect-square w-[130px] rounded-full bg-secondary blur-[60px] lg:-right-32 lg:bottom-4 lg:left-auto lg:top-auto lg:w-[350px] lg:opacity-50" />
        <ContactInformation />
        <div className="lg:rounded-md lg:bg-[#ffffff08] lg:p-12 lg:shadow-xl">
          <BackButton />
          <Heading level={1} className="mb-4 !text-xl font-semibold text-primary">
            Questions or need <br /> assistance? <br className="md:hidden" />
            Let us know about it
          </Heading>
          <Description className="text-xs max468:mr-20">Email us below to any question related to our event</Description>
          <ContactForm />
          <ContactShare className="lg:hidden" />
        </div>
      </div>
    </Section>
  )
}
