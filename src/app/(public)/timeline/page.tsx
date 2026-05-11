import { SectionHeader } from "@/components/ui/SectionHeader"
import { SectionReveal } from "@/components/primitives/SectionReveal"
import { StatusBadge } from "@/components/primitives/StatusBadge"
import { TIMELINE } from "@/data/timeline"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Timeline" }

export default function TimelinePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="08 / Timeline"
          title="Cronograma del Proyecto"
          description="Fases de planificación, construcción y operación. Las fechas son estimadas y sujetas a ajuste según avance real del proyecto."
        />
      </SectionReveal>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-0">
          {TIMELINE.map((phase, i) => {
            const isLast = i === TIMELINE.length - 1
            return (
              <SectionReveal key={phase.id} delay={i * 0.07}>
                <div className={`relative flex gap-8 ${isLast ? "" : "pb-10"}`}>
                  {/* Dot */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-bg-base">
                    <span
                      className={`h-3 w-3 rounded-full ${
                        phase.status === "completed"
                          ? "bg-success-text"
                          : phase.status === "in_progress"
                            ? "bg-accent"
                            : "bg-border-dim"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-mono text-xs text-text-muted">
                            Fase {String(phase.order).padStart(2, "0")}
                          </span>
                          <StatusBadge status={phase.status} />
                        </div>
                        <h3 className="font-display text-xl font-bold text-text-primary">
                          {phase.name}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-text-muted bg-bg-elevated border border-border rounded px-2 py-1 shrink-0">
                        {phase.period}
                      </span>
                    </div>

                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {phase.description}
                    </p>

                    <div className="space-y-1.5">
                      {phase.milestones.map((m) => (
                        <div key={m} className="flex gap-2 text-sm">
                          <span
                            className={`shrink-0 text-xs mt-0.5 ${
                              phase.status === "completed" ? "text-success-text" : "text-text-muted"
                            }`}
                          >
                            {phase.status === "completed" ? "✓" : "·"}
                          </span>
                          <span
                            className={
                              phase.status === "completed"
                                ? "text-text-secondary"
                                : "text-text-muted"
                            }
                          >
                            {m}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </div>
  )
}
