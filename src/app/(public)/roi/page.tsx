import { Disclaimer } from "@/components/ui/Disclaimer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { MetricCard } from "@/components/primitives/MetricCard"
import { SectionReveal } from "@/components/primitives/SectionReveal"
import { ROIChart } from "@/components/sections/roi/ROIChart"
import { ROI_SCENARIOS, ROI_DISCLAIMER, ROI_CONTEXT } from "@/data/roi"
import { calculateROI } from "@/lib/roi-calculator"
import { formatCurrency } from "@/lib/utils"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ROI / Accionistas",
  description: "Proyecciones financieras en tres escenarios: conservador, base y optimista. NPV, IRR, payback y flujo de caja mensual.",
}

function fmt(n: number) {
  return n > 0 ? `+${n.toFixed(1)}%` : `${n.toFixed(1)}%`
}

export default function ROIPage() {
  const results = ROI_SCENARIOS.map((s) => ({
    ...s,
    outputs: calculateROI(s.inputs),
  }))

  const chartScenarios = results.map((r) => ({
    id: r.id,
    name: r.name,
    color: "#b8945a",
    data: r.outputs,
  }))

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="06 / ROI / Accionistas"
          title="Proyección Financiera"
          description="Análisis de retorno sobre la inversión en tres escenarios de ocupación y tarifa. Basado en investigación de mercado del sector OOH en Guatemala."
        />
        <Disclaimer text={ROI_DISCLAIMER} className="mb-12" />
      </SectionReveal>

      {/* Market context */}
      <SectionReveal delay={0.05}>
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-lg border border-border bg-bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
              Contexto de mercado
            </p>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              {ROI_CONTEXT.marketDescription}
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              {ROI_CONTEXT.revenueModel}
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
              Tarifas de referencia
            </p>
            {[
              ROI_CONTEXT.referenceRates.lowEnd,
              ROI_CONTEXT.referenceRates.midRange,
              ROI_CONTEXT.referenceRates.premium,
            ].map((rate) => (
              <div key={rate.note} className="rounded-md border border-border bg-bg-elevated px-4 py-3">
                <p className="font-mono text-lg font-bold text-text-primary">
                  {formatCurrency(rate.monthly, rate.currency)}<span className="text-xs text-text-muted font-normal">/mes</span>
                </p>
                <p className="text-xs text-text-muted mt-0.5">{rate.note}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* 3 scenarios side by side */}
      <SectionReveal delay={0.08}>
        <div className="mb-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {results.map((r, i) => {
            const isBase = r.id === "base"
            return (
              <div
                key={r.id}
                className={`rounded-lg border p-6 ${isBase ? "border-accent/30 bg-accent-glow" : "border-border bg-bg-card"}`}
              >
                {isBase && (
                  <p className="font-mono text-xs text-accent mb-2">◈ Escenario de referencia</p>
                )}
                <h3 className="font-display text-xl font-bold text-text-primary mb-1">{r.name}</h3>
                <p className="text-xs text-text-muted mb-4">{r.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-xs text-text-secondary">Inversión inicial</span>
                    <span className="font-mono text-sm text-text-primary">
                      {formatCurrency(r.inputs.initialInvestment)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-xs text-text-secondary">Ingreso mensual efectivo</span>
                    <span className="font-mono text-sm text-text-primary">
                      {formatCurrency(Math.round(r.inputs.monthlyRevenue * r.inputs.occupancyRate))}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-xs text-text-secondary">EBITDA mensual</span>
                    <span className="font-mono text-sm text-success-text">
                      {formatCurrency(Math.round(r.outputs.monthlyEBITDA))}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-xs text-text-secondary">Ocupación</span>
                    <span className="font-mono text-sm text-text-primary">
                      {Math.round(r.inputs.occupancyRate * 100)}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-xs text-text-secondary">Recuperación estimada</span>
                    <span className="font-mono text-sm text-accent font-medium">
                      {r.outputs.paybackMonths === Infinity
                        ? "N/A"
                        : `${r.outputs.paybackMonths} meses`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-xs text-text-secondary">ROI a 24 meses</span>
                    <span className={`font-mono text-sm ${r.outputs.roi24months > 0 ? "text-success-text" : "text-error-text"}`}>
                      {fmt(r.outputs.roi24months)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-xs text-text-secondary">ROI a 60 meses</span>
                    <span className={`font-mono text-sm font-medium ${r.outputs.roi60months > 0 ? "text-success-text" : "text-error-text"}`}>
                      {fmt(r.outputs.roi60months)}
                    </span>
                  </div>
                </div>

                <div className="mt-4 space-y-1">
                  <p className="font-mono text-xs text-text-muted mb-2">Supuestos</p>
                  {r.assumptions.map((a) => (
                    <p key={a} className="text-xs text-text-muted leading-relaxed">· {a}</p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </SectionReveal>

      {/* Cashflow chart */}
      <SectionReveal>
        <div className="rounded-lg border border-border bg-bg-card p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent mb-1">
                Flujo acumulado
              </p>
              <h3 className="font-display text-xl font-bold text-text-primary">
                Curva de recuperación — 7 años
              </h3>
            </div>
            <div className="hidden sm:flex gap-4">
              {results.map((r) => (
                <div key={r.id} className="flex items-center gap-1.5">
                  <div
                    className="h-2 w-4 rounded-full"
                    style={{
                      backgroundColor:
                        r.id === "conservative"
                          ? "#4a4850"
                          : r.id === "base"
                            ? "#b8945a"
                            : "#6fcf97",
                    }}
                  />
                  <span className="text-xs text-text-muted">{r.name}</span>
                </div>
              ))}
            </div>
          </div>
          <ROIChart scenarios={chartScenarios} />
          <p className="mt-3 text-xs text-text-muted">
            La línea horizontal en Q 0 representa el punto de equilibrio. Valores positivos
            indican recuperación de la inversión inicial.
          </p>
        </div>
      </SectionReveal>
    </div>
  )
}
