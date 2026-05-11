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
      <section
        className="relative flex min-h-[94vh] flex-col justify-end overflow-hidden px-6 pb-20 pt-32"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        {/* Grain texture */}
        <div className="grain pointer-events-none absolute inset-0" />

        {/* Background grid texture */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.035,
          }}
        />

        {/* Ambient glow — top left */}
        <div
          className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)", opacity: 0.07 }}
        />

        <div className="relative mx-auto w-full max-w-7xl">
          {/* Status */}
          <div className="mb-10 flex items-center gap-3">
            <StatusBadge status="in_progress" />
            <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>·</span>
            <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
              Guatemala — {PROJECT.startDate}
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="font-display font-bold text-text-primary"
            style={{ fontSize: 124, letterSpacing: "-0.04em", lineHeight: 0.92 }}
          >
            Infraestructura
            <br />
            Publicitaria
            <br />
            Premium
          </h1>

          {/* Separator */}
          <div
            style={{
              marginTop: 48,
              height: 1,
              width: 72,
              background: "rgba(184,148,90,0.35)",
            }}
          />

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-lg leading-relaxed" style={{ fontSize: 15, color: "var(--text-secondary)" }}>
              {PROJECT.summary}
            </p>
            <div className="shrink-0 sm:text-right">
              <p
                className="font-mono uppercase"
                style={{ fontSize: 10, letterSpacing: "0.14em", color: "var(--text-muted)", marginBottom: 6 }}
              >
                Inversión estimada
              </p>
              <p
                className="font-display font-bold"
                style={{ fontSize: 36, letterSpacing: "-0.02em", color: "var(--text-primary)", lineHeight: 1 }}
              >
                {formatRange(keyMetrics.investmentMin, keyMetrics.investmentMax, keyMetrics.currency)}
              </p>
              <p className="font-mono" style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 4 }}>
                Quetzales guatemaltecos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Metrics Band ─────────────────────────────────────────────────── */}
      <SectionReveal>
        <section
          className="px-6"
          style={{ padding: "56px 24px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="mx-auto max-w-7xl">
            <p
              className="font-mono uppercase"
              style={{ fontSize: 10.5, letterSpacing: "0.22em", color: "var(--text-muted)", marginBottom: 24 }}
            >
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
        <section
          className="px-6"
          style={{ padding: "96px 24px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <p
                  className="font-mono uppercase"
                  style={{ fontSize: 10.5, letterSpacing: "0.22em", color: "var(--text-muted)", marginBottom: 14 }}
                >
                  Estrategia
                </p>
                <h2
                  className="font-display font-bold"
                  style={{ fontSize: 32, letterSpacing: "-0.02em", lineHeight: 1.15, color: "var(--text-primary)", marginBottom: 16 }}
                >
                  Construir sólido hoy.
                  <br />
                  Escalar inteligente mañana.
                </h2>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.65, fontSize: 15, marginBottom: 24 }}>
                  {PROJECT.vision}
                </p>
                <Link
                  href="/proyecto"
                  className="font-mono uppercase inline-flex items-center"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    color: "var(--text-secondary)",
                    borderBottom: "1px solid rgba(255,255,255,0.14)",
                    paddingBottom: 3,
                    transition: "color 150ms ease-in-out",
                  }}
                >
                  Ver descripción completa →
                </Link>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {PROJECT.highlights.map((h, i) => (
                  <div
                    key={h}
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
                    <span
                      className="font-mono"
                      style={{ fontSize: 10.5, color: "var(--text-muted)", flexShrink: 0, marginTop: 2, minWidth: 20 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.55, margin: 0 }}>
                      {h}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ─── Section Links Grid ────────────────────────────────────────────── */}
      <SectionReveal delay={0.05}>
        <section style={{ padding: "80px 24px" }}>
          <div className="mx-auto max-w-7xl">
            <p
              className="font-mono uppercase"
              style={{ fontSize: 10.5, letterSpacing: "0.22em", color: "var(--text-muted)", marginBottom: 32 }}
            >
              Explorar el proyecto
            </p>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              style={{ gap: 16 }}
            >
              {SECTION_LINKS.map((section) => (
                <SectionLinkCard key={section.href} {...section} />
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>
    </>
  )
}

function SectionLinkCard({
  href,
  label,
  description,
  eyebrow,
}: {
  href: string
  label: string
  description: string
  eyebrow: string
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col"
      style={{
        minHeight: 132,
        padding: 24,
        borderRadius: 10,
        border: "1px solid rgba(255,255,255,0.07)",
        background: "var(--bg-card)",
        transition: "border-color 150ms ease-in-out, background 150ms ease-in-out",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.border = "1px solid rgba(255,255,255,0.14)"
        el.style.background = "var(--bg-subtle)"
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.border = "1px solid rgba(255,255,255,0.07)"
        el.style.background = "var(--bg-card)"
      }}
    >
      <p
        className="font-mono uppercase"
        style={{ fontSize: 10.5, letterSpacing: "0.18em", color: "var(--text-muted)", marginBottom: 12 }}
      >
        {eyebrow}
      </p>
      <p style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", marginBottom: 6, lineHeight: 1.3 }}>
        {label}
      </p>
      <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.55, margin: 0 }}>
        {description}
      </p>
      <span
        style={{
          position: "absolute",
          right: 20,
          bottom: 20,
          fontSize: 14,
          color: "var(--text-muted)",
          transition: "color 150ms ease-in-out",
        }}
      >
        →
      </span>
    </Link>
  )
}
