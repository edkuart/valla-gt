import { SectionHeader } from "@/components/ui/SectionHeader"
import { Disclaimer } from "@/components/ui/Disclaimer"
import { SectionReveal } from "@/components/primitives/SectionReveal"
import { StatusBadge } from "@/components/primitives/StatusBadge"
import { SUPPLIERS, SUPPLIERS_DISCLAIMER } from "@/data/suppliers"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Proveedores" }

const STATUS_MAP = {
  identified: "pending",
  contacted: "in_progress",
  quoted: "in_progress",
  selected: "approved",
} as const

export default function ProveedoresPage() {
  const bySpecialty = SUPPLIERS.reduce<Record<string, typeof SUPPLIERS>>(
    (acc, s) => {
      if (!acc[s.specialty]) acc[s.specialty] = []
      acc[s.specialty].push(s)
      return acc
    },
    {}
  )

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

      {Object.entries(bySpecialty).map(([specialty, suppliers], i) => (
        <SectionReveal key={specialty} delay={i * 0.05}>
          <div className="mb-10">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
              {specialty}
            </p>
            <div className="space-y-3">
              {suppliers.map((s) => (
                <div
                  key={s.id}
                  className="flex flex-col gap-2 rounded-lg border border-border bg-bg-card px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-medium text-text-primary">{s.name}</p>
                    <p className="text-xs text-text-muted">{s.location}</p>
                    {s.notes && (
                      <p className="mt-1 text-xs text-text-secondary leading-relaxed max-w-lg">
                        {s.notes}
                      </p>
                    )}
                  </div>
                  <div className="shrink-0">
                    <StatusBadge status={STATUS_MAP[s.status]} />
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
