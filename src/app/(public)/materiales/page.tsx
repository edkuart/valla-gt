import { Disclaimer } from "@/components/ui/Disclaimer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { SectionReveal } from "@/components/primitives/SectionReveal"
import { MATERIALS, MATERIALS_DISCLAIMER } from "@/data/materials"
import { formatRange } from "@/lib/utils"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Materiales" }

export default function MaterialesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="04 / Materiales"
          title="Catálogo de Materiales"
          description="Especificaciones técnicas y rangos de precio referenciales de los materiales principales del proyecto. Organizados por categoría de trabajo."
        />
        <Disclaimer text={MATERIALS_DISCLAIMER} className="mb-12" />
      </SectionReveal>

      {MATERIALS.map((category, i) => (
        <SectionReveal key={category.id} delay={i * 0.05}>
          <div className="mb-14">
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
              {category.name}
            </p>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-bg-elevated">
                    <th className="px-4 py-3 text-left font-mono text-xs text-text-muted">Material</th>
                    <th className="px-4 py-3 text-left font-mono text-xs text-text-muted hidden md:table-cell">Especificación</th>
                    <th className="px-4 py-3 text-right font-mono text-xs text-text-muted">Cantidad</th>
                    <th className="px-4 py-3 text-right font-mono text-xs text-text-muted">Precio ref.</th>
                  </tr>
                </thead>
                <tbody>
                  {category.materials.map((mat, j) => (
                    <tr
                      key={mat.name}
                      className={`border-b border-border last:border-0 ${j % 2 === 0 ? "bg-bg-card" : "bg-bg-elevated"}`}
                    >
                      <td className="px-4 py-3">
                        <p className="font-medium text-text-primary">{mat.name}</p>
                        {mat.notes && <p className="text-xs text-text-muted mt-0.5">{mat.notes}</p>}
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <p className="text-xs text-text-secondary font-mono">{mat.specification}</p>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span className="font-mono text-xs text-text-secondary">
                          {mat.quantity} {mat.unit}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span className="font-mono text-xs text-text-primary whitespace-nowrap">
                          {formatRange(mat.unitCostMin, mat.unitCostMax, mat.currency)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </SectionReveal>
      ))}
    </div>
  )
}
