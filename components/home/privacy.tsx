import Image from 'next/image'

import { Section } from '../common/section'
import Star from '../elements/star'
import { Slide } from '../Slide'
import { Button } from '../ui/button'
import { Description } from '../ui/description'
import { Heading } from '../ui/heading'

export default function Privacy() {
  return (
    <Section>
      <div className="container relative grid items-center gap-12 lg:grid-cols-2">
        <div className="absolute left-0 top-0 z-[-1] aspect-square w-[200px] rounded-full bg-secondary blur-[60px] lg:-bottom-24 lg:-left-24 lg:top-auto lg:w-[350px] lg:opacity-50" />
        <Star className="bottom-12 left-8 lg:hidden" />
        <Star dim className="right-8 top-96 lg:left-72 lg:top-32" />
        <Star className="bottom-0 right-8 lg:bottom-32 lg:left-1/2" />
        <Star colored className="right-8 top-0 lg:bottom-32 lg:left-2/3" />

        <Slide>
          <div className="space-y-4">
            <Heading level={2} className="maxLg:text-center">
              Privacy Policy and
              <br /> <span className="text-primary">Terms</span>
            </Heading>
            <Description className="maxLg:text-center">Last updated on September 12, 2023</Description>
            <Description className="maxLg:text-center">Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</Description>
            <div className="!mt-20 space-y-4 rounded-md border border-primary bg-[#D9D9D9]/5 p-6 md:p-16 maxMd:text-center">
              <Description>
                At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and
                safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.
              </Description>
              <Heading level={3} className="text-lg text-primary">
                Licensing Policy
              </Heading>
              <Description className="space-y-4">
                <strong>Here are terms of our Standard License:</strong>
                <div className="flex items-start gap-2">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                    <path d="M5 8L7 10.5L13.5 6" stroke="white" strokeWidth="2" />
                  </svg>
                  <span>The Standard License grants you a non-exclusive right to navigate and register for our event</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                    <path d="M5 8L7 10.5L13.5 6" stroke="white" strokeWidth="2" />
                  </svg>
                  <span>You are licensed to use the item available at any free source sites, for your project developement</span>
                </div>
              </Description>

              <Button className="mx-auto flex h-auto py-4">Read More</Button>
            </div>
          </div>
        </Slide>

        <Slide delay={0.25}>
          <picture>
            <Image src="/imgs/privacy.png" alt="person standing on a lock" width={800} height={800} />
          </picture>
        </Slide>
      </div>
    </Section>
  )
}
