import { Disclaimer } from "@/components/ui/Disclaimer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { MetricCard } from "@/components/primitives/MetricCard"
import { SectionReveal, StaggeredList } from "@/components/primitives/SectionReveal"
import { StatusBadge } from "@/components/primitives/StatusBadge"
import { PROJECT } from "@/data/project"
import { formatRange } from "@/lib/utils"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Proyecto",
  description: "Descripción completa del proyecto: visión, estrategia de escalabilidad LED, métricas clave y cronograma.",
}

export default function ProyectoPage() {
  const { ledRoadmap, keyMetrics } = PROJECT

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="01 / Proyecto"
          title={PROJECT.fullName}
          description={PROJECT.summary}
        />
      </SectionReveal>

      {/* Status row */}
      <SectionReveal delay={0.05}>
        <div className="mb-12 flex flex-wrap gap-6 rounded-lg border border-border bg-bg-card px-6 py-4">
          <div>
            <p className="font-mono text-xs text-text-muted mb-1">Estado actual</p>
            <StatusBadge status="in_progress" />
          </div>
          <div>
            <p className="font-mono text-xs text-text-muted mb-1">Ubicación</p>
            <p className="text-sm text-text-primary">{PROJECT.location}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-text-muted mb-1">Inicio estimado</p>
            <p className="font-mono text-sm text-text-primary">{PROJECT.startDate}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-text-muted mb-1">Operación estimada</p>
            <p className="font-mono text-sm text-text-primary">{PROJECT.operationalTarget}</p>
          </div>
        </div>
      </SectionReveal>

      {/* Key metrics */}
      <SectionReveal delay={0.08}>
        <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <MetricCard label="Altura" value={keyMetrics.heightMeters} unit="m" />
          <MetricCard label="Área por cara" value={keyMetrics.faceAreaM2} unit="m²" />
          <MetricCard label="Área doble cara" value={keyMetrics.doubleFaceAreaM2} unit="m²" />
          <MetricCard label="Pendiente" value={`~${keyMetrics.slopeAngleDeg}`} unit="°" />
          <MetricCard
            label="Inversión estimada"
            value={formatRange(keyMetrics.investmentMin, keyMetrics.investmentMax)}
            accent
          />
          <MetricCard
            label="Retorno mensual est."
            value={`Q ${keyMetrics.projectedMonthlyRevenue.toLocaleString("es-GT")}`}
            unit="base"
            accent
          />
        </div>
      </SectionReveal>

      {/* Vision */}
      <SectionReveal>
        <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">Visión</p>
            <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
              Estrategia de largo plazo
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">{PROJECT.vision}</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {PROJECT.locationDetail}
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
              Ventajas clave
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {PROJECT.highlights.map((h, i) => (
                <div
                  key={h}
                  style={{
                    display: "flex",
                    gap: 16,
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.07)",
                    background: "var(--bg-card)",
                    padding: "12px 16px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    className="font-mono"
                    style={{ fontSize: 10.5, color: "var(--text-muted)", flexShrink: 0, marginTop: 2, minWidth: 20 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.55, margin: 0 }}>
                    {h}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* LED Roadmap */}
      <SectionReveal>
        <div className="rounded-lg border border-border bg-bg-elevated p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
            Escalabilidad futura
          </p>
          <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
            Plan LED-Ready
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">{ledRoadmap.summary}</p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-6">
            <div className="rounded-md border border-border bg-bg-card p-4">
              <p className="font-mono text-xs text-text-muted mb-2">Fase actual</p>
              <p className="text-sm text-text-primary">{ledRoadmap.currentPhase}</p>
            </div>
            <div className="rounded-md border border-accent/20 bg-accent-glow p-4">
              <p className="font-mono text-xs text-text-muted mb-2">Fase futura (año 3+)</p>
              <p className="text-sm text-text-primary">{ledRoadmap.futurePhase}</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="font-mono text-xs text-text-muted mb-3">Componentes ya preparados</p>
            <div className="space-y-2">
              {ledRoadmap.preparedComponents.map((c) => (
                <div key={c} className="flex gap-2 text-sm text-text-secondary">
                  <span className="text-success-text shrink-0">✓</span>
                  {c}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between rounded-md border border-border bg-bg-card px-4 py-3">
            <span className="text-sm text-text-secondary">Costo estimado de conversión futura</span>
            <span className="font-mono text-sm font-medium text-text-primary">
              {formatRange(
                ledRoadmap.estimatedConversionCost.min,
                ledRoadmap.estimatedConversionCost.max,
                ledRoadmap.estimatedConversionCost.currency
              )}
            </span>
          </div>

          <div className="mt-4 text-right">
            <Link
              href="/futuro"
              className="font-mono text-xs uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors"
            >
              Ver plan completo →
            </Link>
          </div>
        </div>
      </SectionReveal>
    </div>
  )
}
