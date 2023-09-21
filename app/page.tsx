import Criteria from '@/components/home/criteria'
import Faq from '@/components/home/faq'
import Hero from '@/components/home/hero'
import Introduction from '@/components/home/introduction'
import Rules from '@/components/home/rules'

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Rules />
      <Criteria />
      <Faq />
    </>
  )
}
