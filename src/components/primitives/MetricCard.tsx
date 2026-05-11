import { AnimatedCounter } from "./AnimatedCounter"

interface MetricCardProps {
  label: string
  value: string | number
  unit?: string
  description?: string
  accent?: boolean
}

export function MetricCard({ label, value, unit, description, accent = false }: MetricCardProps) {
  return (
    <div
      className={`rounded-lg border p-5 transition-colors ${
        accent
          ? "border-accent/30 bg-accent-glow"
          : "border-border bg-bg-card hover:border-border-dim"
      }`}
    >
      <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-3">{label}</p>
      <div className="flex items-baseline gap-1.5">
        <span className="font-display text-3xl font-bold text-text-primary">
          {typeof value === "number" ? <AnimatedCounter value={value} /> : value}
        </span>
        {unit && <span className="font-mono text-sm text-text-secondary">{unit}</span>}
      </div>
      {description && (
        <p className="mt-2 text-xs text-text-secondary leading-relaxed">{description}</p>
      )}
    </div>
  )
}
