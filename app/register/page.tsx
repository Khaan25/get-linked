import Image from 'next/image'

import { Description } from '@/components/ui/description'
import { Heading } from '@/components/ui/heading'
import BackButton from '@/components/back-button'
import { Icons } from '@/components/common/icons'
import { Section } from '@/components/common/section'
import RegisterForm from '@/components/register-form'

export default function Page() {
  return (
    <Section>
      <div className="container relative grid gap-4 lg:grid-cols-2">
        <div className="absolute left-0 top-20 z-[-1] aspect-square w-[130px] rounded-full bg-secondary blur-[60px] lg:-right-32 lg:bottom-4 lg:left-auto lg:top-auto lg:w-[350px] lg:opacity-50" />
        <picture>
          <Image src="/imgs/register.png" alt="Person sitting on chair" width={800} height={800} />
        </picture>
        <div className="lg:rounded-md lg:bg-[#ffffff08] lg:p-12 lg:shadow-xl">
          <BackButton />
          <Heading level={1} className="mb-4 !text-xl font-semibold text-primary">
            Register
          </Heading>
          <Description className="flex flex-wrap items-baseline gap-4 text-xs max468:mr-20">
            Be part of this movement! <Icons.register />
          </Description>
          <Heading level={2} className="mb-4 !text-xl font-semibold uppercase text-white">
            Create your account
          </Heading>
          <RegisterForm />
        </div>
      </div>
    </Section>
  )
}
