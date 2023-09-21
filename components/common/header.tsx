import Navigation from './navigation'

export default function Header() {
  return (
    <header aria-label="Header" className="paddingX relative z-50 border-b border-border/20 py-4 md:py-6">
      <div className="container">
        <div className="absolute left-0 top-20 aspect-square w-[200px] rounded-full bg-secondary opacity-50 blur-[60px] md:left-80 md:top-0 md:w-[350px] md:blur-[100px]" />

        <Navigation />
      </div>
    </header>
  )
}
