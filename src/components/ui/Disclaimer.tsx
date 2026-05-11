interface DisclaimerProps {
  text: string
  className?: string
}

export function Disclaimer({ text, className = "" }: DisclaimerProps) {
  return (
    <div
      className={`flex gap-3 rounded-md border border-warning/30 bg-warning/10 px-4 py-3 ${className}`}
    >
      <span className="font-mono text-xs text-warning-text mt-0.5 shrink-0">⚠</span>
      <p className="text-xs text-warning-text leading-relaxed">{text}</p>
    </div>
  )
}
