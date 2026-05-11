interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ eyebrow, title, description, className = "" }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">{eyebrow}</p>
      <h1 className="font-display text-4xl font-bold text-text-primary leading-tight">{title}</h1>
      {description && (
        <p className="mt-4 text-text-secondary leading-relaxed max-w-2xl">{description}</p>
      )}
    </div>
  )
}
