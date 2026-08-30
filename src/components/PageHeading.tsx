interface PageHeadingProps {
  title: string
  intro?: string
}

function PageHeading({ title, intro }: PageHeadingProps) {
  return (
    <header className="mb-12">
      <h1 className="font-display text-[clamp(2rem,6vw,4rem)] font-black uppercase leading-[0.9] tracking-[-0.03em] text-accent-deep">
        {title}
      </h1>
      {intro ? (
        <p className="mt-6 max-w-[60ch] text-base text-muted">{intro}</p>
      ) : null}
    </header>
  )
}

export default PageHeading
