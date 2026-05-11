import { SectionHeader } from "@/components/ui/SectionHeader"
import { SectionReveal } from "@/components/primitives/SectionReveal"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Galería" }

const GALLERY_CATEGORIES = [
  {
    id: "renders",
    label: "Renders 3D",
    eyebrow: "01",
    description: "Visualizaciones conceptuales de la estructura final",
    items: [
      { title: "Vista frontal — día", aspect: "aspect-video" },
      { title: "Vista frontal — noche (iluminada)", aspect: "aspect-video" },
      { title: "Vista lateral — perspectiva carretera", aspect: "aspect-video" },
      { title: "Detalle estructural — base metálica", aspect: "aspect-square" },
    ],
  },
  {
    id: "terreno",
    label: "Fotografías del terreno",
    eyebrow: "02",
    description: "Estado actual del sitio y condiciones topográficas",
    items: [
      { title: "Panorámica del terreno — pendiente sur", aspect: "aspect-video" },
      { title: "Vista desde carretera principal", aspect: "aspect-video" },
      { title: "Detalle de pendiente — ángulo de 35°", aspect: "aspect-square" },
      { title: "Acceso vehicular y área de trabajo", aspect: "aspect-video" },
    ],
  },
  {
    id: "planos",
    label: "Planos estructurales",
    eyebrow: "03",
    description: "Documentos técnicos de ingeniería",
    items: [
      { title: "Planta de cimentación — escala 1:50", aspect: "aspect-[4/3]" },
      { title: "Elevación frontal — corte A-A", aspect: "aspect-[4/3]" },
      { title: "Detalle de anclaje y zapata", aspect: "aspect-square" },
      { title: "Diagrama eléctrico — tablero principal", aspect: "aspect-square" },
    ],
  },
  {
    id: "diagramas",
    label: "Diagramas técnicos",
    eyebrow: "04",
    description: "Análisis de visibilidad, viento y cargas",
    items: [
      { title: "Diagrama de visibilidad — radio 800m", aspect: "aspect-video" },
      { title: "Mapa de flujo vehicular — corredor", aspect: "aspect-video" },
    ],
  },
]

function PlaceholderCard({ title, aspect }: { title: string; aspect: string }) {
  return (
    <div
      className={`${aspect} group relative overflow-hidden rounded-lg border border-border bg-bg-elevated flex flex-col items-center justify-center gap-3 transition-colors hover:border-border-dim hover:bg-bg-subtle`}
    >
      {/* Grid micro-texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border-dim) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-dim) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        <div className="h-8 w-8 rounded-sm border border-border-dim flex items-center justify-center">
          <span className="text-text-muted text-xs">▣</span>
        </div>
        <p className="font-mono text-[10px] text-text-muted leading-snug max-w-[180px]">{title}</p>
        <span className="font-mono text-[9px] uppercase tracking-widest text-border-dim">
          Próximamente
        </span>
      </div>
    </div>
  )
}

export default function GaleriaPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="10 / Galería"
          title="Galería Visual"
          description="Renders conceptuales, fotografías del terreno y documentos técnicos del proyecto. El contenido se publicará conforme avancen las fases de ingeniería y construcción."
        />
      </SectionReveal>

      {/* Status notice */}
      <SectionReveal delay={0.04}>
        <div className="mb-14 flex items-center gap-3 rounded-lg border border-border bg-bg-card px-5 py-4">
          <span className="h-1.5 w-1.5 rounded-full bg-warning-text shrink-0" />
          <p className="font-mono text-xs text-text-muted">
            Galería en preparación — el contenido visual se irá publicando conforme avancen las fases de planificación y construcción.
          </p>
        </div>
      </SectionReveal>

      {GALLERY_CATEGORIES.map((cat, i) => (
        <SectionReveal key={cat.id} delay={i * 0.06}>
          <div className="mb-14">
            <div className="mb-5 flex items-baseline gap-3">
              <span className="font-mono text-xs text-text-muted">{cat.eyebrow}</span>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
                  {cat.label}
                </p>
                <p className="text-xs text-text-muted mt-0.5">{cat.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {cat.items.map((item) => (
                <PlaceholderCard key={item.title} title={item.title} aspect={item.aspect} />
              ))}
            </div>
          </div>
        </SectionReveal>
      ))}
    </div>
  )
}
