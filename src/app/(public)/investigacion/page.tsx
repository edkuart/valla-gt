import { SectionHeader } from "@/components/ui/SectionHeader"
import { SectionReveal, StaggeredList } from "@/components/primitives/SectionReveal"
import { RESEARCH_ARTICLES } from "@/data/research"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Investigación Técnica" }

const RELEVANCE_COLOR = {
  Alta: "text-success-text",
  Media: "text-warning-text",
  Informativa: "text-text-muted",
}

const CATEGORY_COLOR: Record<string, string> = {
  Estructural: "text-info-text",
  Normativo: "text-warning-text",
  Mercado: "text-text-muted",
  "Tecnología LED": "text-success-text",
  Financiero: "text-text-secondary",
}

export default function InvestigacionPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionReveal>
        <SectionHeader
          eyebrow="07 / Investigación"
          title="Investigación Técnica"
          description="Estudios, análisis y referencias técnicas recopiladas durante la planificación del proyecto. Ordenados por relevancia para la toma de decisiones."
        />
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {RESEARCH_ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/investigacion/${article.slug}`}
              className="group flex flex-col rounded-lg border border-border bg-bg-card p-6 hover:border-border-dim hover:bg-bg-subtle transition-colors"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className={`font-mono text-xs ${CATEGORY_COLOR[article.category] ?? "text-text-muted"}`}>
                  {article.category}
                </span>
                <div className="flex items-center gap-2">
                  <span className={`font-mono text-xs ${RELEVANCE_COLOR[article.relevance]}`}>
                    ● {article.relevance}
                  </span>
                  <span className="font-mono text-xs text-text-muted">{article.readingMinutes} min</span>
                </div>
              </div>

              <h3 className="font-display text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed flex-1">{article.summary}</p>

              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-xs text-text-muted">{article.date}</span>
                <span className="font-mono text-xs text-text-muted group-hover:text-text-secondary transition-colors">
                  Leer →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </SectionReveal>
    </div>
  )
}
