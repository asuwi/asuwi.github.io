interface PageHeadingProps {
  title: string
  intro?: string
}

function PageHeading({ title, intro }: PageHeadingProps) {
  return (
    <header className="mb-12">
      <h1 className="font-display text-[clamp(2.75rem,9vw,8rem)] font-black uppercase leading-[0.9] tracking-[-0.03em]">
        {title}
      </h1>
      {intro ? (
        <p className="mt-6 max-w-[60ch] text-lg text-muted">{intro}</p>
      ) : null}
    </header>
  )
}

export default PageHeading
