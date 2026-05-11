import { Disclaimer } from "@/components/ui/Disclaimer"
import { SectionHeader } from "@/components/ui/SectionHeader"
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
          <div
            className="lg:col-span-2"
            style={{
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.07)",
              background: "var(--bg-card)",
              padding: 24,
            }}
          >
            <p
              className="font-mono uppercase"
              style={{ fontSize: 10.5, letterSpacing: "0.22em", color: "var(--text-muted)", marginBottom: 12 }}
            >
              Contexto de mercado
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.65, marginBottom: 12 }}>
              {ROI_CONTEXT.marketDescription}
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.65, margin: 0 }}>
              {ROI_CONTEXT.revenueModel}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <p
              className="font-mono uppercase"
              style={{ fontSize: 10.5, letterSpacing: "0.22em", color: "var(--text-muted)" }}
            >
              Tarifas de referencia
            </p>
            {[
              ROI_CONTEXT.referenceRates.lowEnd,
              ROI_CONTEXT.referenceRates.midRange,
              ROI_CONTEXT.referenceRates.premium,
            ].map((rate) => (
              <div
                key={rate.note}
                style={{
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "var(--bg-elevated)",
                  padding: "12px 16px",
                }}
              >
                <p className="font-mono" style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
                  {formatCurrency(rate.monthly, rate.currency)}
                  <span style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 400 }}>/mes</span>
                </p>
                <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2, marginBottom: 0 }}>{rate.note}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* 3 scenario cards */}
      <SectionReveal delay={0.08}>
        <div className="mb-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {results.map((r) => {
            const isFeatured = r.id === "base"
            const dividerColor = isFeatured
              ? "rgba(184,148,90,0.18)"
              : "rgba(255,255,255,0.04)"

            return (
              <div
                key={r.id}
                style={{
                  borderRadius: 10,
                  border: isFeatured
                    ? "1px solid rgba(184,148,90,0.30)"
                    : "1px solid rgba(255,255,255,0.07)",
                  background: isFeatured ? "rgba(184,148,90,0.06)" : "var(--bg-card)",
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                {/* Featured ribbon */}
                {isFeatured && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      borderRadius: 999,
                      border: "1px solid rgba(184,148,90,0.30)",
                      background: "rgba(184,148,90,0.16)",
                      padding: "3px 10px",
                      marginBottom: 14,
                      alignSelf: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: 999,
                        background: "var(--accent)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      className="font-mono uppercase"
                      style={{ fontSize: 9.5, letterSpacing: "0.12em", color: "var(--accent)" }}
                    >
                      Recomendado
                    </span>
                  </div>
                )}

                <h3
                  className="font-display font-bold"
                  style={{ fontSize: 20, letterSpacing: "-0.015em", color: "var(--text-primary)", marginBottom: 4 }}
                >
                  {r.name}
                </h3>
                <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 20 }}>{r.description}</p>

                {/* Payback KPI — hero metric */}
                <div style={{ marginBottom: 24 }}>
                  <p
                    className="font-mono uppercase"
                    style={{ fontSize: 10, letterSpacing: "0.14em", color: "var(--text-muted)", marginBottom: 4 }}
                  >
                    Recuperación estimada
                  </p>
                  <p
                    className="font-display font-bold"
                    style={{
                      fontSize: 56,
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      color: isFeatured ? "var(--accent)" : "var(--text-primary)",
                      margin: 0,
                    }}
                  >
                    {r.outputs.paybackMonths === Infinity ? "N/A" : r.outputs.paybackMonths}
                    {r.outputs.paybackMonths !== Infinity && (
                      <span
                        className="font-mono"
                        style={{ fontSize: 16, fontWeight: 400, color: "var(--text-secondary)", marginLeft: 6 }}
                      >
                        meses
                      </span>
                    )}
                  </p>
                </div>

                {/* Data rows */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {[
                    {
                      label: "Inversión inicial",
                      value: formatCurrency(r.inputs.initialInvestment),
                      color: "var(--text-primary)",
                    },
                    {
                      label: "Ingreso mensual efectivo",
                      value: formatCurrency(Math.round(r.inputs.monthlyRevenue * r.inputs.occupancyRate)),
                      color: "var(--text-primary)",
                    },
                    {
                      label: "EBITDA mensual",
                      value: formatCurrency(Math.round(r.outputs.monthlyEBITDA)),
                      color: "var(--success-text, #6fcf97)",
                    },
                    {
                      label: "Ocupación",
                      value: `${Math.round(r.inputs.occupancyRate * 100)}%`,
                      color: "var(--text-primary)",
                    },
                    {
                      label: "ROI a 24 meses",
                      value: fmt(r.outputs.roi24months),
                      color: r.outputs.roi24months > 0 ? "var(--success-text, #6fcf97)" : "var(--error-text, #eb5757)",
                    },
                    {
                      label: "ROI a 60 meses",
                      value: fmt(r.outputs.roi60months),
                      color: r.outputs.roi60months > 0 ? "var(--success-text, #6fcf97)" : "var(--error-text, #eb5757)",
                    },
                  ].map((row, idx, arr) => (
                    <div
                      key={row.label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px 0",
                        borderBottom: idx < arr.length - 1 ? `1px solid ${dividerColor}` : "none",
                      }}
                    >
                      <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{row.label}</span>
                      <span className="font-mono" style={{ fontSize: 13, color: row.color, fontWeight: 500 }}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Assumptions */}
                <div style={{ marginTop: 16 }}>
                  <p
                    className="font-mono uppercase"
                    style={{ fontSize: 10, letterSpacing: "0.12em", color: "var(--text-muted)", marginBottom: 8 }}
                  >
                    Supuestos
                  </p>
                  {r.assumptions.map((a) => (
                    <p key={a} style={{ fontSize: 11.5, color: "var(--text-muted)", lineHeight: 1.55, marginBottom: 4 }}>
                      · {a}
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </SectionReveal>

      {/* Cashflow chart */}
      <SectionReveal>
        <div
          style={{
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.07)",
            background: "var(--bg-card)",
            padding: 24,
          }}
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p
                className="font-mono uppercase"
                style={{ fontSize: 10.5, letterSpacing: "0.22em", color: "var(--text-muted)", marginBottom: 8 }}
              >
                Flujo acumulado
              </p>
              <h3
                className="font-display font-bold"
                style={{ fontSize: 20, letterSpacing: "-0.015em", color: "var(--text-primary)" }}
              >
                Curva de recuperación — 7 años
              </h3>
            </div>
            <div className="hidden sm:flex" style={{ gap: 16 }}>
              {results.map((r) => (
                <div key={r.id} className="flex items-center" style={{ gap: 6 }}>
                  <div
                    style={{
                      height: 8,
                      width: 16,
                      borderRadius: 999,
                      backgroundColor:
                        r.id === "conservative"
                          ? "#4a4850"
                          : r.id === "base"
                            ? "#b8945a"
                            : "#6fcf97",
                    }}
                  />
                  <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{r.name}</span>
                </div>
              ))}
            </div>
          </div>
          <ROIChart scenarios={chartScenarios} />
          <p style={{ marginTop: 12, fontSize: 11, color: "var(--text-muted)" }}>
            La línea horizontal en Q 0 representa el punto de equilibrio. Valores positivos
            indican recuperación de la inversión inicial.
          </p>
        </div>
      </SectionReveal>
    </div>
  )
}
