import { SectionHeader } from "@/components/ui/SectionHeader"
import { DataTable } from "@/components/ui/DataTable"
import { MetricCard } from "@/components/primitives/MetricCard"
import { SectionReveal } from "@/components/primitives/SectionReveal"
import { PROJECT } from "@/data/project"
import { formatRange } from "@/lib/utils"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Visión Futura LED-Ready" }

const COMPARISON = [
  { aspect: "Inversión inicial", current: "Q 185K – 245K", future: "Q 207K – 324K adicionales (solo módulos LED + instalación)" },
  { aspect: "Tipo de publicidad", current: "Impresión en vinilo estático", future: "Contenido digital dinámico (video, animación, programación horaria)" },
  { aspect: "Cambio de arte", current: "Manual, 48–72h producción + instalación", future: "Remoto, instantáneo desde software de gestión" },
  { aspect: "Tarifa mensual estimada", current: "Q 8K – 16K / mes (1 anunciante)", future: "Q 30K – 60K / mes (4–8 anunciantes en rotación)" },
  { aspect: "Anunciantes simultáneos", current: "1 anunciante exclusivo", future: "4–8 anunciantes en rotación de 15 seg / spot" },
  { aspect: "Costo de módulos LED (54 m²)", current: "No aplica", future: "USD 15,000 – 23,000 (P10 exterior, precio de fábrica 2025)" },
  { aspect: "Consumo eléctrico", current: "~1.2 – 1.8 kW (iluminación LED)", future: "~15 – 25 kW (pantalla LED completa)" },
  { aspect: "Costo eléctrico mensual", current: "~Q 600 – 900 / mes", future: "~Q 3,500 – 5,500 / mes" },
  { aspect: "Mantenimiento anual", current: "Q 2,000 – 4,000 / año", future: "Q 8,000 – 15,000 / año (módulos + controladores)" },
  { aspect: "Vida útil", current: "> 20 años (estructura)", future: "8 – 12 años (módulos LED, estructura reutilizable)" },
  { aspect: "Payback estimado", current: "18 – 36 meses", future: "36 – 54 meses desde conversión (con ocupación alta)" },
]

const LED_PREP_STATUS = [
  { component: "Cimentación", status: "prepared", detail: "Diseñada para 1.5× la carga de pantalla LED de 54 m². Costo incremental < 20% de la zapata." },
  { component: "Marco estructural posterior", status: "prepared", detail: "Puntos de anclaje para gabinetes LED integrados en diseño original sin soldadura adicional." },
  { component: "Acometida eléctrica trifásica", status: "prepared", detail: "30 kVA instalados. Una pantalla LED P10 de 54 m² consume ~15–18 kW. Sin cambio de acometida." },
  { component: "Canalización conduit 2\"", status: "prepared", detail: "Rutas pre-instaladas para cableado de alta potencia. Sin abrir muros al convertir." },
  { component: "Tablero 100A trifásico", status: "prepared", detail: "12 circuitos GFCI con espacio de expansión para circuitos LED adicionales." },
  { component: "Área de equipamiento técnico", status: "prepared", detail: "Gabinete 1.2 × 0.8 m reservado para controladores LED, fuentes y conectividad." },
  { component: "Módulos LED P10 exteriores", status: "future", detail: "54 m² × USD 280–420/m² = USD 15,120–22,680. Proveedores locales: Corpotek GT, LEDEC Group." },
  { component: "Controladora de contenido", status: "future", detail: "Sistema de gestión de contenido y programación de spots por anunciante." },
  { component: "Conectividad (fiber/LTE)", status: "future", detail: "Para control remoto de contenido y monitoreo en tiempo real." },
]

export default function FuturoPage() {
  const { ledRoadmap } = PROJECT

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="09 / Visión Futura"
          title="Plan LED-Ready"
          description="La infraestructura actual incorpora previsiones específicas para facilitar la conversión futura a pantalla LED, sin necesidad de demoler ni reconstruir la base estructural."
        />
      </SectionReveal>

      {/* Philosophy */}
      <SectionReveal delay={0.05}>
        <div className="mb-12 rounded-lg border border-accent/20 bg-accent-glow p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-3">Filosofía</p>
          <p className="text-text-primary leading-relaxed text-lg">{ledRoadmap.summary}</p>
        </div>
      </SectionReveal>

      {/* Current vs Future phases */}
      <SectionReveal delay={0.06}>
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-bg-card p-6">
            <p className="font-mono text-xs text-text-muted mb-3">Fase actual</p>
            <h3 className="font-display text-xl font-bold text-text-primary mb-2">
              {ledRoadmap.currentPhase}
            </h3>
            <p className="text-sm text-text-secondary">
              Inversión:{" "}
              <span className="font-mono text-text-primary">Q 180,000 – 230,000</span>
            </p>
          </div>
          <div className="rounded-lg border border-accent/30 bg-accent-glow p-6">
            <p className="font-mono text-xs text-text-muted mb-3">Fase futura (año 3+)</p>
            <h3 className="font-display text-xl font-bold text-text-primary mb-2">
              {ledRoadmap.futurePhase}
            </h3>
            <p className="text-sm text-text-secondary">
              Costo de conversión estimado:{" "}
              <span className="font-mono text-text-primary">
                {formatRange(
                  ledRoadmap.estimatedConversionCost.min,
                  ledRoadmap.estimatedConversionCost.max,
                  ledRoadmap.estimatedConversionCost.currency
                )}
              </span>
            </p>
          </div>
        </div>
      </SectionReveal>

      {/* Component status */}
      <SectionReveal>
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-6">
            Estado de preparación por componente
          </p>
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-bg-elevated">
                  <th className="px-4 py-3 text-left font-mono text-xs text-text-muted">Componente</th>
                  <th className="px-4 py-3 text-left font-mono text-xs text-text-muted">Estado</th>
                  <th className="px-4 py-3 text-left font-mono text-xs text-text-muted hidden md:table-cell">Detalle</th>
                </tr>
              </thead>
              <tbody>
                {LED_PREP_STATUS.map((item, i) => (
                  <tr
                    key={item.component}
                    className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-bg-card" : "bg-bg-elevated"}`}
                  >
                    <td className="px-4 py-3 font-medium text-text-primary">{item.component}</td>
                    <td className="px-4 py-3">
                      {item.status === "prepared" ? (
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-success-text">
                          ● Preparado
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted">
                          ○ Fase futura
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-xs text-text-secondary hidden md:table-cell">
                      {item.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionReveal>

      {/* Comparison table */}
      <SectionReveal>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-6">
            Comparativa: Valla convencional vs Pantalla LED
          </p>
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-bg-elevated">
                  <th className="px-4 py-3 text-left font-mono text-xs text-text-muted w-1/4">Aspecto</th>
                  <th className="px-4 py-3 text-left font-mono text-xs text-text-muted w-[37.5%]">Fase actual</th>
                  <th className="px-4 py-3 text-left font-mono text-xs text-text-muted w-[37.5%]">Fase LED</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr
                    key={row.aspect}
                    className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-bg-card" : "bg-bg-elevated"}`}
                  >
                    <td className="px-4 py-3 text-text-secondary text-xs">{row.aspect}</td>
                    <td className="px-4 py-3 text-text-secondary text-xs">{row.current}</td>
                    <td className="px-4 py-3 text-text-primary text-xs">{row.future}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionReveal>
    </div>
  )
}
