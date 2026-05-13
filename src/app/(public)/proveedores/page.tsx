import { SectionHeader } from "@/components/ui/SectionHeader"
import { Disclaimer } from "@/components/ui/Disclaimer"
import { SectionReveal } from "@/components/primitives/SectionReveal"
import { StatusBadge } from "@/components/primitives/StatusBadge"
import { SUPPLIERS, SUPPLIERS_DISCLAIMER } from "@/data/suppliers"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Proveedores" }

const STATUS_MAP = {
  identified: "pending",
  contacted: "in_progress",
  quoted: "in_progress",
  selected: "approved",
} as const

const SPECIALTY_ORDER = [
  "Estructura Metálica",
  "Obra Civil",
  "Ingeniería Estructural",
  "Sistema Eléctrico",
  "Impresión de Vinilo",
  "Permisos y Trámites",
]

export default function ProveedoresPage() {
  const bySpecialty = SUPPLIERS.reduce<Record<string, typeof SUPPLIERS>>(
    (acc, s) => {
      if (!acc[s.specialty]) acc[s.specialty] = []
      acc[s.specialty].push(s)
      return acc
    },
    {}
  )

  const orderedEntries = SPECIALTY_ORDER
    .filter((sp) => bySpecialty[sp])
    .map((sp) => [sp, bySpecialty[sp]] as [string, typeof SUPPLIERS])

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="11 / Proveedores"
          title="Directorio de Proveedores"
          description="Empresas y profesionales identificados para cada especialidad del proyecto. El proceso de cotización formal comenzará en la Fase de Ingeniería."
        />
        <Disclaimer text={SUPPLIERS_DISCLAIMER} className="mb-12" />
      </SectionReveal>

      {/* Summary count */}
      <SectionReveal delay={0.04}>
        <div
          className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
        >
          {orderedEntries.map(([specialty, suppliers]) => (
            <div
              key={specialty}
              style={{
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.07)",
                background: "var(--bg-card)",
                padding: "14px 16px",
              }}
            >
              <p
                className="font-display font-bold"
                style={{ fontSize: 28, letterSpacing: "-0.02em", color: "var(--text-primary)", lineHeight: 1, marginBottom: 6 }}
              >
                {suppliers.length}
              </p>
              <p
                className="font-mono"
                style={{ fontSize: 10, color: "var(--text-muted)", lineHeight: 1.4, textTransform: "uppercase", letterSpacing: "0.1em" }}
              >
                {specialty}
              </p>
            </div>
          ))}
        </div>
      </SectionReveal>

      {orderedEntries.map(([specialty, suppliers], i) => (
        <SectionReveal key={specialty} delay={i * 0.05}>
          <div className="mb-12">
            <p
              className="font-mono uppercase"
              style={{ fontSize: 10.5, letterSpacing: "0.22em", color: "var(--text-muted)", marginBottom: 16 }}
            >
              {specialty}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {suppliers.map((s) => (
                <div
                  key={s.id}
                  style={{
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.07)",
                    background: "var(--bg-card)",
                    padding: "18px 20px",
                  }}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div style={{ flex: 1 }}>
                      {/* Name + website */}
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <p style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>
                          {s.name}
                        </p>
                        {s.website && (
                          <Link
                            href={s.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono"
                            style={{
                              fontSize: 10,
                              letterSpacing: "0.08em",
                              color: "var(--accent)",
                              textDecoration: "none",
                              borderBottom: "1px solid rgba(184,148,90,0.3)",
                              paddingBottom: 1,
                              transition: "opacity 150ms",
                            }}
                          >
                            {s.website.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
                          </Link>
                        )}
                      </div>

                      {/* Location */}
                      <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: s.notes || s.contact ? 8 : 0 }}>
                        {s.location}
                      </p>

                      {/* Contact */}
                      {s.contact && (
                        <p
                          className="font-mono"
                          style={{ fontSize: 11, color: "var(--text-secondary)", marginBottom: s.notes ? 6 : 0 }}
                        >
                          {s.contact}
                        </p>
                      )}

                      {/* Notes */}
                      {s.notes && (
                        <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0, maxWidth: 680 }}>
                          {s.notes}
                        </p>
                      )}
                    </div>

                    <div className="shrink-0 sm:pt-0.5">
                      <StatusBadge status={STATUS_MAP[s.status]} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      ))}
    </div>
  )
}
