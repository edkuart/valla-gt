import { Disclaimer } from "@/components/ui/Disclaimer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { DataTable } from "@/components/ui/DataTable"
import { MetricCard } from "@/components/primitives/MetricCard"
import { SectionReveal } from "@/components/primitives/SectionReveal"
import { TERRAIN } from "@/data/terrain"
import { formatRange } from "@/lib/utils"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Terreno" }

export default function TerrenoPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="03 / Terreno"
          title="Análisis de Ubicación y Terreno"
          description={TERRAIN.overview.description}
        />
        <Disclaimer text={TERRAIN.disclaimer} className="mb-12" />
      </SectionReveal>

      {/* Location strip */}
      <SectionReveal delay={0.04}>
        <div
          className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {[
            { label: "Ruta", value: "RN-1 Carretera Interamericana" },
            { label: "Kilómetro", value: "Km. 194" },
            { label: "Municipio", value: "Salcajá, Quetzaltenango" },
            { label: "Coordenadas GPS", value: "14.861560°N, 91.470278°O" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.07)",
                background: "var(--bg-card)",
                padding: "14px 16px",
              }}
            >
              <p
                className="font-mono uppercase"
                style={{ fontSize: 9.5, letterSpacing: "0.16em", color: "var(--text-muted)", marginBottom: 6 }}
              >
                {item.label}
              </p>
              <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.3 }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* Advantage callout */}
      <SectionReveal delay={0.05}>
        <div className="mb-12 rounded-lg border border-accent/20 bg-accent-glow px-6 py-5">
          <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2">
            Ventaja estratégica
          </p>
          <p className="text-text-primary leading-relaxed">{TERRAIN.overview.advantage}</p>
        </div>
      </SectionReveal>

      {/* Physical specs — first 3 as metric cards */}
      <SectionReveal delay={0.08}>
        <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {TERRAIN.physical.slice(0, 3).map((spec) => (
            <MetricCard key={spec.label} label={spec.label} value={spec.value} unit={spec.unit} description={spec.notes} />
          ))}
        </div>
        <DataTable
          rows={TERRAIN.physical.slice(3).map((s) => ({ label: s.label, value: s.value, unit: s.unit, notes: s.notes }))}
          className="mb-12"
        />
      </SectionReveal>

      {/* Visibility */}
      <SectionReveal>
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
            Análisis de visibilidad
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-4">
            {TERRAIN.visibility.map((v) => (
              <MetricCard key={v.label} label={v.label} value={v.value} unit={v.unit} description={v.notes} />
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* Surroundings */}
      <SectionReveal>
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
            Entorno comercial inmediato — radio 500 m
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {TERRAIN.surroundings.map((s) => (
              <div
                key={s.name}
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
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)", margin: 0, marginBottom: 2 }}>
                    {s.name}
                  </p>
                  <p className="font-mono" style={{ fontSize: 10, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: s.notes ? 4 : 0 }}>
                    {s.type}
                  </p>
                  {s.notes && (
                    <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>
                      {s.notes}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 10, lineHeight: 1.5 }}>
            Corredor de servicios automotrices, salud y alimentación — perfil de tráfico mixto: vehículos interurbanos + clientes locales. Exactamente el entorno que buscan anunciantes regionales.
          </p>
        </div>
      </SectionReveal>

      {/* Access */}
      <SectionReveal>
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
            Acceso y servicios
          </p>
          <DataTable
            rows={TERRAIN.access.map((a) => ({ label: a.label, value: a.value, unit: a.unit, notes: a.notes }))}
          />
        </div>
      </SectionReveal>

      {/* Interventions */}
      <SectionReveal>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
            Intervenciones requeridas
          </p>
          <div className="space-y-4">
            {TERRAIN.interventions.map((item) => (
              <div key={item.type} className="rounded-lg border border-border bg-bg-card p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-semibold text-text-primary">{item.type}</h3>
                  <span className="font-mono text-sm text-text-secondary shrink-0">
                    {formatRange(item.estimatedCost.min, item.estimatedCost.max, item.estimatedCost.currency)}
                  </span>
                </div>
                <p className="text-sm text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </div>
  )
}
