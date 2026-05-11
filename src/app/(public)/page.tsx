import { MetricCard } from "@/components/primitives/MetricCard"
import { SectionReveal } from "@/components/primitives/SectionReveal"
import { StatusBadge } from "@/components/primitives/StatusBadge"
import { PROJECT } from "@/data/project"
import { formatRange } from "@/lib/utils"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Valla GT — Infraestructura Publicitaria Premium, Guatemala",
}

const SECTION_LINKS = [
  { href: "/proyecto", label: "Proyecto", description: "Descripción completa, visión y estrategia", eyebrow: "01" },
  { href: "/ingenieria", label: "Ingeniería", description: "Cimentación, estructura y sistema eléctrico", eyebrow: "02" },
  { href: "/terreno", label: "Terreno", description: "Análisis de ubicación y condiciones físicas", eyebrow: "03" },
  { href: "/materiales", label: "Materiales", description: "Catálogo completo de materiales y specs", eyebrow: "04" },
  { href: "/presupuesto", label: "Presupuesto", description: "Estimados preliminares por categoría", eyebrow: "05" },
  { href: "/roi", label: "ROI / Accionistas", description: "Proyecciones financieras — 3 escenarios", eyebrow: "06" },
  { href: "/investigacion", label: "Investigación", description: "Estudios técnicos y análisis de mercado", eyebrow: "07" },
  { href: "/timeline", label: "Timeline", description: "Cronograma de fases del proyecto", eyebrow: "08" },
  { href: "/futuro", label: "Visión LED-Ready", description: "Plan de escalabilidad y conversión futura", eyebrow: "09" },
  { href: "/galeria", label: "Galería", description: "Renders, diagramas y fotos del terreno", eyebrow: "10" },
  { href: "/proveedores", label: "Proveedores", description: "Directorio de empresas identificadas", eyebrow: "11" },
]

export default function HomePage() {
  const { keyMetrics } = PROJECT

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[94vh] flex-col justify-end border-b border-border px-6 pb-20 pt-32 overflow-hidden">
        {/* Background grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border-dim) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-dim) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Ambient glow — top left */}
        <div
          className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
        />

        {/* Ambient glow — bottom right */}
        <div
          className="pointer-events-none absolute -bottom-20 right-0 h-[400px] w-[500px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
        />

        <div className="relative mx-auto w-full max-w-7xl">
          {/* Status */}
          <div className="mb-10 flex items-center gap-3">
            <StatusBadge status="in_progress" />
            <span className="font-mono text-xs text-text-muted">·</span>
            <span className="font-mono text-xs text-text-muted">Guatemala — {PROJECT.startDate}</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display font-bold leading-[0.92] text-text-primary"
            style={{ fontSize: "clamp(3.5rem, 10vw, 7.5rem)" }}>
            Infraestructura
            <br />
            <span className="relative inline-block text-accent">
              Publicitaria
              {/* Subtle glow behind accent word */}
              <span
                className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-20"
                style={{ background: "var(--accent)" }}
                aria-hidden="true"
              />
            </span>
            <br />
            Premium
          </h1>

          {/* Separator */}
          <div className="mt-10 h-px w-16 bg-accent/40" />

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-lg text-text-secondary leading-relaxed text-[15px]">
              {PROJECT.summary}
            </p>
            <div className="shrink-0 sm:text-right">
              <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-1.5">
                Inversión estimada
              </p>
              <p className="font-display text-3xl font-bold text-text-primary">
                {formatRange(keyMetrics.investmentMin, keyMetrics.investmentMax, keyMetrics.currency)}
              </p>
              <p className="font-mono text-xs text-text-muted mt-1">Quetzales guatemaltecos</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Metrics Band ─────────────────────────────────────────────────── */}
      <SectionReveal>
        <section className="border-b border-border px-6 py-10">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-6">
              Parámetros clave del proyecto
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              <MetricCard
                label="Altura de estructura"
                value={keyMetrics.heightMeters}
                unit="m"
                description="Desde nivel de terreno"
              />
              <MetricCard
                label="Área de cartelera"
                value={keyMetrics.faceAreaM2}
                unit="m²"
                description="9 × 6 metros"
              />
              <MetricCard
                label="Pendiente del terreno"
                value={`~${keyMetrics.slopeAngleDeg}`}
                unit="°"
                description="Ventaja estructural"
              />
              <MetricCard
                label="Retorno mensual est."
                value="Q 12,000"
                unit=""
                description="Escenario base"
                accent
              />
              <MetricCard
                label="Recuperación estimada"
                value={`${keyMetrics.estimatedPaybackMonths}`}
                unit="meses"
                description="Escenario base"
                accent
              />
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ─── Project Snapshot ─────────────────────────────────────────────── */}
      <SectionReveal delay={0.1}>
        <section className="border-b border-border px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
                  Estrategia
                </p>
                <h2 className="font-display text-3xl font-bold text-text-primary mb-4">
                  Construir sólido hoy.<br />Escalar inteligente mañana.
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">{PROJECT.vision}</p>
                <Link
                  href="/proyecto"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent hover:text-text-primary transition-colors"
                >
                  Ver descripción completa →
                </Link>
              </div>
              <div className="space-y-3">
                {PROJECT.highlights.map((h) => (
                  <div key={h} className="flex gap-3 rounded-md border border-border bg-bg-card px-4 py-3">
                    <span className="text-accent text-xs mt-0.5 shrink-0">◈</span>
                    <p className="text-sm text-text-secondary">{h}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ─── Section Links Grid ────────────────────────────────────────────── */}
      <SectionReveal delay={0.05}>
        <section className="px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-8">
              Explorar el proyecto
            </p>
            <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 rounded-lg overflow-hidden">
              {SECTION_LINKS.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  className="group flex flex-col gap-3 bg-bg-card px-5 py-5 hover:bg-bg-subtle transition-colors"
                >
                  <span className="font-mono text-xs text-text-muted">{section.eyebrow}</span>
                  <div>
                    <p className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                      {section.label}
                    </p>
                    <p className="mt-1 text-xs text-text-muted leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>
    </>
  )
}
