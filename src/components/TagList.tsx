import { cn } from './cn.ts'

interface TagListProps {
  tags: string[]
  className?: string
}

function TagList({ tags, className }: TagListProps) {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-border px-4 py-1.5 text-[13px] uppercase tracking-wide text-muted"
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}

export default TagList
