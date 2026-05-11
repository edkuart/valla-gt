import { SectionReveal } from "@/components/primitives/SectionReveal"
import { RESEARCH_ARTICLES } from "@/data/research"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return RESEARCH_ARTICLES.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = RESEARCH_ARTICLES.find((a) => a.slug === slug)
  return { title: article?.title ?? "Investigación" }
}

const ARTICLE_CONTENT: Record<string, string> = {
  "mercado-ooh-guatemala": `
El mercado de publicidad Out-of-Home (OOH) en Guatemala ha experimentado un crecimiento sostenido en los últimos años, impulsado por la expansión urbana, el aumento del tráfico vehicular y la preferencia de marcas nacionales e internacionales por medios de alto impacto visual.

**Tarifas de referencia por segmento (2025–2026)**

Las tarifas de arrendamiento de espacio publicitario en vallas convencionales iluminadas en Guatemala varían significativamente según:

- Ubicación y corredor (periférico, carretera CA-1, zonas 9-10 de Ciudad de Guatemala)
- Tráfico vehicular diario (aforos)
- Visibilidad (ángulo de exposición, obstáculos)
- Iluminación y calidad de la estructura

Rangos referenciales observados en el mercado:
- Corredores de tráfico medio-bajo: Q 5,000 – 8,000 / mes
- Corredores de alto tráfico: Q 9,000 – 15,000 / mes
- Ubicaciones premium (periférico, carreteras principales): Q 15,000 – 25,000 / mes

**Tasas de ocupación históricas**

Operadores establecidos reportan tasas de ocupación del 70% al 90% en corredores de alto tráfico, con períodos de baja ocupación típicamente en enero y los meses de menor actividad comercial.

**Tendencias 2025–2026**

El mercado guatemalteco de OOH muestra una transición gradual hacia formatos digitales (pantallas LED), especialmente en zonas urbanas premium. Sin embargo, las vallas convencionales iluminadas mantienen alta demanda por su costo de arrendamiento más accesible para anunciantes medianos y locales.

La demanda de anunciantes locales (comercios, servicios, eventos) es consistente y menos sensible a ciclos económicos que los presupuestos de grandes marcas nacionales.
`,
  "viento-norma-agies": `
**AGIES NSE 2-10: Norma de Seguridad Estructural para Cargas de Viento**

Guatemala cuenta con la norma AGIES (Asociación Guatemalteca de Ingeniería Estructural y Sísmica) que regula el diseño estructural de edificaciones y estructuras especiales, incluyendo estructuras de publicidad exterior.

**Zonas de viento en Guatemala**

La norma AGIES NSE 2-10 divide el territorio guatemalteco en zonas de viento según la velocidad básica de diseño:

- Zona 1 (interior montañoso): V = 90 km/h
- Zona 2 (valles y altiplano): V = 110 km/h
- Zona 3 (costa Pacífico): V = 130 km/h
- Zona 4 (litoral Atlántico): V = 140 km/h

Para el corredor de Guatemala en zona 2, se recomienda utilizar **V = 120 km/h** como velocidad de diseño conservadora.

**Metodología de cálculo para estructuras tipo cartelera**

Las estructuras de publicidad exterior se clasifican como estructuras de categoría II según AGIES, con factor de importancia Ie = 1.0.

Presión de diseño sobre la superficie de la cartelera:
- qz = 0.613 × Kz × Kzt × Kd × V²
- Para cartelera de 54 m² a 12 m de altura, la presión de diseño estimada es 0.75 – 0.95 kPa

**Referencia ASCE 7-16**

La norma ASCE 7-16 (utilizada como referencia complementaria) define procedimientos específicos para "Other Structures" incluyendo señales y carteleras (Section 29.4). Los coeficientes de presión para carteleras sólidas son Cf = 1.3 a 1.8 dependiendo de la relación altura/ancho.
`,
  "cimentacion-terreno-inclinado": `
**Cimentaciones en terreno inclinado: Consideraciones para estructuras de publicidad exterior**

El terreno inclinado presenta desafíos específicos para cimentaciones de estructuras verticales como vallas publicitarias, pero también ofrece ventajas estratégicas cuando se diseña correctamente.

**Principales opciones de cimentación**

1. **Losa de cimentación (recomendada para este proyecto)**
   - Distribuye la carga en mayor área
   - Reduce el riesgo de asentamiento diferencial
   - Permite diseño para cargas futuras sin rediseño completo
   - Costo mayor pero mayor seguridad

2. **Zapatas aisladas con grade beam**
   - Menor costo de concreto
   - Requiere mayor precisión en la excavación
   - Adecuado cuando el suelo es competente y homogéneo

3. **Pilotes de concreto**
   - Para suelos con baja capacidad portante superficial
   - Alto costo de ejecución
   - No necesario para capacidades portantes > 8 ton/m²

**Consideraciones especiales para terreno inclinado**

- El corte de talud debe estabilizarse con muro de retención antes de la cimentación
- El nivel de desplante debe ser uniforme (plataforma nivelada)
- La presión lateral del suelo sobre la cimentación debe considerarse en el diseño
- Drenar aguas subterráneas con geotextil y tubería de drenaje perimetral

**Sobredimensionamiento para conversión LED**

Para preparar la cimentación para futura carga LED, se recomienda diseñarla para el 250% de la carga estructural actual. Una pantalla LED de 54 m² puede pesar 3,500 – 5,000 kg adicionales, más las cargas de viento que son significativamente mayores en superficies cerradas vs. carteleras con luz perimetral.
`,
  "led-vs-convencional": `
**Valla Convencional Iluminada vs. Pantalla LED: Análisis para el Mercado Guatemalteco**

La decisión entre construir una valla convencional o una pantalla LED desde el inicio es una de las más importantes del proyecto. Este análisis compara ambas opciones en el contexto específico del mercado guatemalteco.

**Inversión inicial comparativa**

| Concepto | Valla Convencional | Pantalla LED |
|---|---|---|
| Cimentación y estructura | Q 150K – 200K | Q 200K – 280K |
| Sistema publicitario | Q 15K – 25K | Q 300K – 450K |
| Instalación eléctrica | Q 20K – 30K | Q 40K – 70K |
| **Total estimado** | **Q 185K – 255K** | **Q 540K – 800K** |

**Ingresos potenciales comparativos**

Una pantalla LED permite múltiples anunciantes en rotación programada, lo que incrementa significativamente el ingreso potencial:
- Valla convencional: Q 8K – 16K / mes (1 anunciante)
- Pantalla LED (4 anunciantes rotación): Q 30K – 60K / mes

**¿Por qué la estrategia híbrida es óptima?**

La estrategia de construir primero la valla convencional y preparar para conversión futura tiene varias ventajas:

1. **Menor riesgo inicial**: La inversión es 3× menor, lo que reduce el riesgo si la demanda de mercado no alcanza los niveles proyectados.

2. **Flujo de caja positivo más rápido**: Con menor inversión, el punto de equilibrio se alcanza entre 18 y 36 meses vs. 24-48 meses para LED.

3. **Validación de mercado**: Los primeros 2-3 años con valla convencional permiten validar la demanda real de anunciantes en la ubicación específica antes de comprometer una inversión mayor.

4. **Tecnología LED en evolución**: Los precios de módulos LED siguen descendiendo. Esperar 2-3 años puede significar un costo de conversión 20-30% menor.

**Conclusión**

Para el perfil de riesgo y etapa de este proyecto, la estrategia óptima es construir una valla convencional premium (con preparación estructural para LED) y evaluar la conversión en el año 3, cuando ya existe historial de ocupación real y los costos de tecnología LED hayan continuado su tendencia descendente.
`,
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = RESEARCH_ARTICLES.find((a) => a.slug === slug)

  if (!article) notFound()

  const content = ARTICLE_CONTENT[slug] ?? "Contenido en preparación."
  const paragraphs = content.trim().split("\n\n")

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <SectionReveal>
        <div className="mb-10">
          <Link
            href="/investigacion"
            className="font-mono text-xs text-text-muted hover:text-text-secondary transition-colors"
          >
            ← Investigación
          </Link>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs text-accent">{article.category}</span>
            <span className="font-mono text-xs text-text-muted">·</span>
            <span className="font-mono text-xs text-text-muted">{article.relevance} relevancia</span>
            <span className="font-mono text-xs text-text-muted">·</span>
            <span className="font-mono text-xs text-text-muted">{article.readingMinutes} min lectura</span>
          </div>
          <h1 className="font-display text-3xl font-bold text-text-primary leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-text-secondary leading-relaxed">{article.summary}</p>
          {article.source && (
            <p className="mt-3 font-mono text-xs text-text-muted">Fuente: {article.source}</p>
          )}
        </div>
      </SectionReveal>

      <SectionReveal delay={0.06}>
        <div className="space-y-4">
          {paragraphs.map((para, i) => {
            // H2 — entire paragraph is **bold**
            if (para.startsWith("**") && para.endsWith("**")) {
              return (
                <h2 key={i} className="font-display text-xl font-bold text-text-primary mt-8 mb-2">
                  {para.replace(/\*\*/g, "")}
                </h2>
              )
            }

            // Table — contains separator row |---|
            if (para.includes("|---|")) {
              return (
                <div key={i} className="overflow-x-auto rounded-lg border border-border my-4">
                  <table className="w-full text-sm">
                    <tbody>
                      {para.split("\n").filter(r => !r.includes("|---|")).map((row, ri) => (
                        <tr key={ri} className={`border-b border-border ${ri === 0 ? "bg-bg-elevated font-medium" : ri % 2 === 0 ? "bg-bg-card" : "bg-bg-elevated"}`}>
                          {row.split("|").filter(Boolean).map((cell, ci) => (
                            <td key={ci} className="px-4 py-2 text-text-secondary">{cell.trim()}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            }

            // List — paragraph has lines starting with "- "
            const lines = para.split("\n")
            const isListBlock = lines.some(l => l.trimStart().startsWith("- "))
            if (isListBlock) {
              // Split into pre-list text, list items, and post-list text
              const listItems: string[] = []
              const preLines: string[] = []
              let inList = false
              for (const line of lines) {
                if (line.trimStart().startsWith("- ")) {
                  inList = true
                  listItems.push(line.replace(/^\s*- /, ""))
                } else if (!inList) {
                  preLines.push(line)
                }
              }
              return (
                <div key={i} className="space-y-2">
                  {preLines.length > 0 && (
                    <p className="text-text-secondary leading-relaxed"
                      // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled static content
                      dangerouslySetInnerHTML={{
                        __html: preLines.join(" ").replace(/\*\*(.*?)\*\*/g, "<strong class='text-text-primary'>$1</strong>"),
                      }}
                    />
                  )}
                  <ul className="space-y-1.5 pl-1">
                    {listItems.map((item, li) => (
                      <li key={li} className="flex gap-2.5 text-sm text-text-secondary leading-relaxed">
                        <span className="text-accent shrink-0 mt-0.5">·</span>
                        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: controlled static content */}
                        <span dangerouslySetInnerHTML={{
                          __html: item.replace(/\*\*(.*?)\*\*/g, "<strong class='text-text-primary'>$1</strong>"),
                        }} />
                      </li>
                    ))}
                  </ul>
                </div>
              )
            }

            // Numbered list — lines starting with "1. ", "2. ", etc.
            const isNumberedList = lines.some(l => /^\d+\.\s/.test(l.trimStart()))
            if (isNumberedList) {
              const numberedItems = lines.filter(l => /^\d+\.\s/.test(l.trimStart()))
              return (
                <ol key={i} className="space-y-2 pl-1 counter-reset-item">
                  {numberedItems.map((item, li) => (
                    <li key={li} className="flex gap-2.5 text-sm text-text-secondary leading-relaxed">
                      <span className="font-mono text-xs text-accent shrink-0 mt-0.5 w-4">{li + 1}.</span>
                      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: controlled static content */}
                      <span dangerouslySetInnerHTML={{
                        __html: item.replace(/^\d+\.\s/, "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-text-primary'>$1</strong>"),
                      }} />
                    </li>
                  ))}
                </ol>
              )
            }

            // Default paragraph
            return (
              <p key={i} className="text-text-secondary leading-relaxed"
                // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled static content
                dangerouslySetInnerHTML={{
                  __html: para.replace(/\*\*(.*?)\*\*/g, "<strong class='text-text-primary'>$1</strong>"),
                }}
              />
            )
          })}
        </div>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <div className="mt-12 border-t border-border pt-8">
          <p className="font-mono text-xs text-text-muted mb-2">{article.date}</p>
          {article.source && (
            <p className="text-xs text-text-muted">Referencia: {article.source}</p>
          )}
        </div>
      </SectionReveal>
    </div>
  )
}
