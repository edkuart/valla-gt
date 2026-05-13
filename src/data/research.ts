export type ResearchCategory =
  | "Estructural"
  | "Normativo"
  | "Mercado"
  | "Tecnología LED"
  | "Financiero"

export type ResearchRelevance = "Alta" | "Media" | "Informativa"

export interface ResearchArticle {
  slug: string
  title: string
  summary: string
  category: ResearchCategory
  relevance: ResearchRelevance
  source?: string
  date: string
  readingMinutes: number
}

export const RESEARCH_ARTICLES: ResearchArticle[] = [
  {
    slug: "mercado-ooh-guatemala",
    title: "Mercado OOH en Guatemala: Tendencias y Tarifas 2025–2026",
    summary:
      "Análisis del mercado de publicidad exterior (Out-of-Home) en Guatemala, con foco en corredores de alto tráfico, tarifas referenciales por zona y tendencias de ocupación.",
    category: "Mercado",
    relevance: "Alta",
    source: "Investigación de mercado propia + referencias IAB Guatemala",
    date: "Mayo 2026",
    readingMinutes: 6,
  },
  {
    slug: "viento-norma-agies",
    title: "Cargas de Viento según AGIES NSE 2-10 para Estructuras Publicitarias",
    summary:
      "Resumen de la norma guatemalteca AGIES NSE 2-10 aplicable a estructuras tipo cartelera. Velocidades de diseño por zona, coeficientes de exposición y metodología de cálculo.",
    category: "Estructural",
    relevance: "Alta",
    source: "AGIES NSE 2-10 / ASCE 7-16 referencia",
    date: "Mayo 2026",
    readingMinutes: 8,
  },
  {
    slug: "cimentacion-terreno-inclinado",
    title: "Cimentaciones Especiales en Terreno Inclinado: Consideraciones para Estructuras de Publicidad Exterior",
    summary:
      "Análisis de opciones de cimentación para terrenos con pendiente pronunciada (>25°), con énfasis en losas de cimentación y zapatas aisladas para estructuras de valla publicitaria.",
    category: "Estructural",
    relevance: "Alta",
    source: "Referencias ACI 318 + AGIES",
    date: "Mayo 2026",
    readingMinutes: 7,
  },
  {
    slug: "normativa-legal-guatemala",
    title: "Marco Legal y Normativo — Valla Publicitaria en Salcajá, Quetzaltenango",
    summary:
      "Análisis completo del marco regulatorio aplicable al proyecto: Constitución de Guatemala, Decreto 34-2003 (Ley de Anuncios), requisitos del CIG, DGAC, y estado actual de la normativa municipal de Salcajá. Incluye mapa de trámites y vacíos identificados.",
    category: "Normativo",
    relevance: "Alta",
    source: "Congreso de Guatemala / CIG / Municipalidad de Salcajá / DGAC — Investigación directa Mayo 2026",
    date: "Mayo 2026",
    readingMinutes: 10,
  },
  {
    slug: "led-vs-convencional",
    title: "Pantalla LED vs Valla Convencional: Análisis Financiero Comparativo para el Mercado Guatemalteco",
    summary:
      "Comparativa de inversión inicial, costos operativos, potencial de ingresos y estrategia de transición entre valla convencional iluminada y pantalla LED en el contexto del mercado guatemalteco actual.",
    category: "Tecnología LED",
    relevance: "Alta",
    source: "Análisis propio + referencias de mercado OOH latinoamericano",
    date: "Mayo 2026",
    readingMinutes: 9,
  },
]
