import { Disclaimer } from "@/components/ui/Disclaimer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { SectionReveal } from "@/components/primitives/SectionReveal"
import {
  BUDGET,
  BUDGET_META,
  DOUBLE_FACE_SCENARIOS,
  OPERATING_PROTECTION_ITEMS,
  SOLAR_POWER_SCENARIOS,
} from "@/data/budget"
import { formatRange, formatCurrency } from "@/lib/utils"
import Link from "next/link"
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

      {/* Double-face scenario */}
      <SectionReveal delay={0.08}>
        <div className="mb-12 grid grid-cols-1 gap-5 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-lg border border-border bg-bg-card p-6">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
                  Escenario ampliado
                </p>
                <h2 className="font-display text-2xl font-bold text-text-primary">
                  Valla doble cara
                </h2>
              </div>
              <Link
                href="/investigacion/doble-cara-costos-operacion"
                className="font-mono text-xs uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors"
              >
                Ver análisis →
              </Link>
            </div>

            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <tbody>
                  {DOUBLE_FACE_SCENARIOS.map((scenario, i) => (
                    <tr
                      key={scenario.name}
                      className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-bg-elevated" : "bg-bg-card"}`}
                    >
                      <td className="px-4 py-3">
                        <p className="font-medium text-text-primary">{scenario.name}</p>
                        <p className="text-xs text-text-muted mt-0.5">
                          {scenario.size} · {scenario.sellableArea} vendibles
                        </p>
                      </td>
                      <td className="px-4 py-3 text-right whitespace-nowrap">
                        <span className="font-mono text-text-primary">
                          {formatRange(scenario.min, scenario.max, "GTQ")}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-bg-card p-6">
            <div className="mb-5 flex items-end justify-between gap-3">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2">
                  Protección y autonomía
                </p>
                <h2 className="font-display text-xl font-bold text-text-primary">
                  Add-ons operativos
                </h2>
              </div>
              <Link
                href="/investigacion/seguros-camaras-autonomia"
                className="font-mono text-xs text-text-secondary hover:text-text-primary transition-colors"
              >
                Detalle →
              </Link>
            </div>

            <div className="space-y-3">
              {OPERATING_PROTECTION_ITEMS.map((item) => (
                <div key={item.name} className="rounded-md border border-border bg-bg-elevated p-4">
                  <div className="mb-1 flex items-center justify-between gap-3">
                    <p className="text-sm text-text-primary">{item.name}</p>
                    <span className="font-mono text-xs text-text-muted">{item.cadence}</span>
                  </div>
                  <p className="font-mono text-sm text-accent">
                    {formatRange(item.min, item.max, "GTQ")}
                  </p>
                  <p className="mt-2 text-xs text-text-muted leading-relaxed">{item.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <div className="mb-12 rounded-lg border border-border bg-bg-card p-6">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-warning-text mb-2">
                Energía solar
              </p>
              <h2 className="font-display text-2xl font-bold text-text-primary">
                Autonomía por niveles
              </h2>
            </div>
            <Link
              href="/investigacion/energia-solar-valla-autonoma"
              className="font-mono text-xs uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors"
            >
              Ver investigación →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
            {SOLAR_POWER_SCENARIOS.map((scenario) => (
              <div key={scenario.name} className="rounded-md border border-border bg-bg-elevated p-4">
                <p className="font-medium text-text-primary">{scenario.name}</p>
                <p className="mt-1 text-xs text-text-muted">{scenario.load}</p>
                <p className="mt-3 font-mono text-sm text-accent">
                  {formatRange(scenario.min, scenario.max, "GTQ")}
                </p>
                <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                  {scenario.recommendation}
                </p>
              </div>
            ))}
          </div>
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
