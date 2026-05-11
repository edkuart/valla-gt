interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ eyebrow, title, description, className = "" }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <p
        className="font-mono"
        style={{
          fontSize: 10.5,
          textTransform: "uppercase",
          letterSpacing: "0.22em",
          color: "var(--text-muted)",
          marginBottom: 14,
        }}
      >
        {eyebrow}
      </p>
      <h1
        className="font-display"
        style={{
          fontSize: 44,
          fontWeight: 700,
          letterSpacing: "-0.025em",
          lineHeight: 1.08,
          color: "var(--text-primary)",
          margin: 0,
        }}
      >
        {title}
      </h1>
      {description && (
        <p
          style={{
            marginTop: 18,
            color: "var(--text-secondary)",
            lineHeight: 1.65,
            maxWidth: 640,
            fontSize: 15,
          }}
        >
          {description}
        </p>
      )}
    </div>
  )
}
