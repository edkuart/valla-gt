import { Disclaimer } from "@/components/ui/Disclaimer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { SectionReveal } from "@/components/primitives/SectionReveal"
import { BUDGET, BUDGET_META } from "@/data/budget"
import { formatRange, formatCurrency } from "@/lib/utils"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Presupuesto Preliminar" }

function getCategoryTotal(items: { unitMin: number; unitMax: number }[]) {
  return {
    min: items.reduce((s, i) => s + i.unitMin, 0),
    max: items.reduce((s, i) => s + i.unitMax, 0),
  }
}

export default function PresupuestoPage() {
  const contingencyMin = Math.round(BUDGET_META.totalMin * BUDGET_META.contingencyPct)
  const contingencyMax = Math.round(BUDGET_META.totalMax * BUDGET_META.contingencyPct)

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="05 / Presupuesto"
          title="Estimado Preliminar de Inversión"
          description={`Versión ${BUDGET_META.version} — ${BUDGET_META.date}`}
        />
        <Disclaimer text={BUDGET_META.disclaimer} className="mb-12" />
      </SectionReveal>

      {/* Total hero */}
      <SectionReveal delay={0.05}>
        <div className="mb-12 rounded-lg border border-accent/20 bg-accent-glow p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-3">
            Inversión total estimada (sin contingencia)
          </p>
          <p className="font-display text-5xl font-bold text-text-primary">
            {formatRange(BUDGET_META.totalMin, BUDGET_META.totalMax, BUDGET_META.currency)}
          </p>
          <p className="mt-3 text-sm text-text-secondary">
            + contingencia recomendada 10%:{" "}
            <span className="font-mono text-text-primary">
              {formatRange(contingencyMin, contingencyMax, BUDGET_META.currency)}
            </span>
          </p>
          <p className="mt-1 text-sm text-text-secondary">
            Inversión total con contingencia:{" "}
            <span className="font-mono font-medium text-text-primary">
              {formatRange(
                BUDGET_META.totalMin + contingencyMin,
                BUDGET_META.totalMax + contingencyMax,
                BUDGET_META.currency
              )}
            </span>
          </p>
        </div>
      </SectionReveal>

      {/* Category breakdown */}
      {BUDGET.map((category, i) => {
        const total = getCategoryTotal(category.items)
        return (
          <SectionReveal key={category.id} delay={i * 0.05}>
            <div className="mb-10">
              <div className="mb-3 flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
                  {category.name}
                </p>
                <span className="font-mono text-sm text-text-secondary">
                  {formatRange(total.min, total.max, "GTQ")}
                </span>
              </div>
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm">
                  <tbody>
                    {category.items.map((item, j) => (
                      <tr
                        key={item.description}
                        className={`border-b border-border last:border-0 ${j % 2 === 0 ? "bg-bg-card" : "bg-bg-elevated"}`}
                      >
                        <td className="px-4 py-3">
                          <p className="text-text-primary">{item.description}</p>
                          {item.notes && (
                            <p className="text-xs text-text-muted mt-0.5">{item.notes}</p>
                          )}
                        </td>
                        <td className="px-4 py-3 text-right whitespace-nowrap">
                          <span className="font-mono text-text-primary">
                            {formatRange(item.unitMin, item.unitMax, item.currency)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </SectionReveal>
        )
      })}

      {/* Summary table */}
      <SectionReveal>
        <div className="mt-4 overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-bg-subtle">
                <th className="px-4 py-3 text-left font-mono text-xs text-text-muted">Resumen</th>
                <th className="px-4 py-3 text-right font-mono text-xs text-text-muted">Mínimo</th>
                <th className="px-4 py-3 text-right font-mono text-xs text-text-muted">Máximo</th>
              </tr>
            </thead>
            <tbody>
              {BUDGET.map((cat) => {
                const t = getCategoryTotal(cat.items)
                return (
                  <tr key={cat.id} className="border-b border-border bg-bg-card">
                    <td className="px-4 py-2.5 text-text-secondary">{cat.name}</td>
                    <td className="px-4 py-2.5 text-right font-mono text-text-primary">{formatCurrency(t.min)}</td>
                    <td className="px-4 py-2.5 text-right font-mono text-text-primary">{formatCurrency(t.max)}</td>
                  </tr>
                )
              })}
              <tr className="border-b border-border bg-bg-elevated">
                <td className="px-4 py-2.5 text-text-secondary italic">Contingencia (10%)</td>
                <td className="px-4 py-2.5 text-right font-mono text-text-secondary">{formatCurrency(contingencyMin)}</td>
                <td className="px-4 py-2.5 text-right font-mono text-text-secondary">{formatCurrency(contingencyMax)}</td>
              </tr>
              <tr className="bg-bg-subtle">
                <td className="px-4 py-3 font-semibold text-text-primary">Total con contingencia</td>
                <td className="px-4 py-3 text-right font-mono font-bold text-accent">{formatCurrency(BUDGET_META.totalMin + contingencyMin)}</td>
                <td className="px-4 py-3 text-right font-mono font-bold text-accent">{formatCurrency(BUDGET_META.totalMax + contingencyMax)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionReveal>
    </div>
  )
}
