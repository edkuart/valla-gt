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
        <Disclaimer text={ENGINEERING_DISCLAIMER} className="mb-12" />
      </SectionReveal>

      {ENGINEERING.map((category, i) => (
        <SectionReveal key={category.id} delay={i * 0.06}>
          <div className="mb-12">
            <div className="mb-6">
              <p className="font-mono text-xs uppercase tracking-widest text-accent mb-1">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="font-display text-2xl font-bold text-text-primary">
                {category.name}
              </h2>
              <p className="mt-2 text-sm text-text-secondary max-w-2xl">{category.description}</p>
            </div>

            {/* Hero specs as metric cards for first 3 items */}
            {category.specs.length >= 3 && (
              <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
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

            {/* If less than 3 specs, show all as table */}
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
        </SectionReveal>
      ))}
    </div>
  )
}
