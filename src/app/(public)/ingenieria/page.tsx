import { Disclaimer } from "@/components/ui/Disclaimer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { DataTable } from "@/components/ui/DataTable"
import { MetricCard } from "@/components/primitives/MetricCard"
import { SectionReveal } from "@/components/primitives/SectionReveal"
import { ENGINEERING, ENGINEERING_DISCLAIMER } from "@/data/engineering"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Ingeniería" }

export default function IngenieriaPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="02 / Ingeniería"
          title="Especificaciones Técnicas"
          description="Parámetros de diseño estructural, cimentación, sistema eléctrico y acceso técnico. Diseñados con criterio de sobredimensionamiento para garantizar conversión futura a LED sin destruir la infraestructura base."
        />
        <Disclaimer text={ENGINEERING_DISCLAIMER} className="mb-16" />
      </SectionReveal>

      {/* Subsystem sections — sticky sidebar layout */}
      <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {ENGINEERING.map((category, i) => (
          <SectionReveal key={category.id} delay={i * 0.06}>
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.07)",
                paddingTop: 48,
                paddingBottom: 48,
              }}
            >
              {/* 2-col: sticky left sidebar + scrollable right */}
              <div
                className="grid grid-cols-1 lg:grid-cols-[260px_1fr]"
                style={{ gap: 64 }}
              >
                {/* Left: sticky category label */}
                <div className="lg:sticky" style={{ top: 88, alignSelf: "start" }}>
                  <p
                    className="font-mono uppercase"
                    style={{ fontSize: 10.5, letterSpacing: "0.22em", color: "var(--text-muted)", marginBottom: 12 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2
                    className="font-display font-bold"
                    style={{ fontSize: 22, letterSpacing: "-0.015em", lineHeight: 1.2, color: "var(--text-primary)", marginBottom: 12 }}
                  >
                    {category.name}
                  </h2>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                    {category.description}
                  </p>
                </div>

                {/* Right: specs */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {/* Hero metric cards for first 3 specs */}
                  {category.specs.length >= 3 && (
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3" style={{ marginBottom: 4 }}>
                      {category.specs.slice(0, 3).map((spec) => (
                        <MetricCard
                          key={spec.label}
                          label={spec.label}
                          value={spec.value}
                          unit={spec.unit}
                          description={spec.notes}
                        />
                      ))}
                    </div>
                  )}

                  {/* Remaining specs as table */}
                  {category.specs.length > 3 && (
                    <DataTable
                      rows={category.specs.slice(3).map((s) => ({
                        label: s.label,
                        value: s.value,
                        unit: s.unit,
                        notes: s.notes,
                      }))}
                    />
                  )}

                  {/* If fewer than 3 specs, show all as table */}
                  {category.specs.length < 3 && (
                    <DataTable
                      rows={category.specs.map((s) => ({
                        label: s.label,
                        value: s.value,
                        unit: s.unit,
                        notes: s.notes,
                      }))}
                    />
                  )}
                </div>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>

      {/* ─── Featured callout card ─────────────────────────────────────────── */}
      <SectionReveal delay={0.1}>
        <div
          style={{
            marginTop: 64,
            borderRadius: 12,
            border: "1px solid rgba(184,148,90,0.28)",
            background: "rgba(184,148,90,0.06)",
            padding: "36px 32px",
          }}
        >
          <p
            className="font-mono uppercase"
            style={{ fontSize: 10.5, letterSpacing: "0.22em", color: "var(--accent)", marginBottom: 20 }}
          >
            Capacidades clave de diseño
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { label: "Factor sismico", value: "1.5×", note: "Sobre carga calculada, zona Guatemala" },
              { label: "Sobredimensionamiento LED", value: "2.5×", note: "Capacidad reservada para conversión futura" },
              { label: "Vida útil estimada", value: "> 20 años", note: "Con tratamiento epóxico + galvanizado" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  paddingLeft: 20,
                  borderLeft: i === 0
                    ? "2px solid rgba(184,148,90,0.24)"
                    : "2px solid rgba(184,148,90,0.24)",
                }}
              >
                <p
                  className="font-display font-bold"
                  style={{ fontSize: 28, letterSpacing: "-0.02em", color: "var(--accent)", margin: 0, lineHeight: 1.1 }}
                >
                  {stat.value}
                </p>
                <p
                  className="font-mono uppercase"
                  style={{ fontSize: 10, letterSpacing: "0.14em", color: "var(--text-muted)", marginTop: 6, marginBottom: 4 }}
                >
                  {stat.label}
                </p>
                <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>
                  {stat.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </div>
  )
}
