import { FC } from 'react'

interface ISkipToMain {
  content?: string
}

const SkipToMain: FC<ISkipToMain> = ({ content = '0' }) => {
  return (
    <div>
      <a
        aria-label="Skip navigation and go to main content"
        className="supports-backdrop-blur:bg-popover/60 focus-visible:active font-bricolage-grotesque absolute left-[-999px] top-auto  z-[9999999] h-[1px] w-[1px] overflow-hidden rounded-br-md border border-border bg-popover px-4 py-2 text-center text-lg font-semibold text-muted-foreground outline-none backdrop-blur focus:outline-none focus:ring-0 focus-visible:left-auto focus-visible:h-auto focus-visible:w-auto focus-visible:overflow-auto focus-visible:bg-popover/40 active:bg-popover/40"
        href={`#${content}`}
      >
        Skip to main content
      </a>
    </div>
  )
}

export default SkipToMain
