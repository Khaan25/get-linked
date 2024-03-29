import Criteria from '@/components/home/criteria'
import Faq from '@/components/home/faq'
import Hero from '@/components/home/hero'
import Introduction from '@/components/home/introduction'
import Partners from '@/components/home/partners'
import Privacy from '@/components/home/privacy'
import Prize from '@/components/home/prize'
import Rules from '@/components/home/rules'
import Timeline from '@/components/home/timeline'

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Rules />
      <Criteria />
      <Faq />
      <Timeline />
      <Prize />
      <Partners />
      <Privacy />
    </>
  )
}
