import ContactShare from './contact-share'
import { Heading } from './ui/heading'

export default function ContactInformation() {
  return (
    <div className="ml-16 flex flex-col justify-center gap-4">
      <Heading level={1} className="text-left !text-4xl text-primary">
        Get in Touch
      </Heading>

      <div className="space-y-8">
        <div className="space-y-4 text-white">
          <span>
            Contact <br /> Information
          </span>
          <address>
            27,Alara Street
            <br />
            Yaba 100012
            <br />
            Lagos State
            <br />
          </address>
          <div>
            <span>Call Us:</span>{' '}
            <a href="tel:07067981819" target="_blank" className="hover:underline hover:underline-offset-4">
              07067981819
            </a>
          </div>
          <div>we are open from Monday-Friday 08:00am - 05:00pm</div>
        </div>
        <ContactShare className="items-start gap-2 maxLg:hidden" />
      </div>
    </div>
  )
}
