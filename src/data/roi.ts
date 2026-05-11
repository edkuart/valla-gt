import type { ROIInputs } from "@/lib/roi-calculator"

export interface ROIScenario {
  id: string
  name: string
  description: string
  inputs: ROIInputs
  assumptions: string[]
}

export const ROI_DISCLAIMER =
  "Proyecciones financieras basadas en investigación del mercado OOH (Out-of-Home) en Guatemala y tarifas de referencia de operadores locales. No garantizan resultados futuros. Ingresos reales dependen de negociación con anunciantes, ocupación real y condiciones de mercado."

export const ROI_CONTEXT = {
  marketDescription:
    "El mercado de vallas publicitarias en Guatemala (OOH) muestra crecimiento sostenido del 8–12% anual. Las vallas en corredores de alto tráfico con exposición > 20,000 vehículos/día mantienen tasas de ocupación históricas del 70–90%.",
  revenueModel:
    "El modelo de negocio consiste en arrendar el espacio publicitario a anunciantes locales o nacionales por períodos de 1–3 meses. La tarifa incluye iluminación nocturna y cambio de vinilo.",
  referenceRates: {
    description: "Tarifas referenciales de mercado (corredores similares en Guatemala)",
    lowEnd: { monthly: 8_000, currency: "GTQ" as const, note: "Corredor de tráfico medio, sin diferenciación" },
    midRange: { monthly: 12_000, currency: "GTQ" as const, note: "Corredor alto tráfico, iluminada, ubicación visible" },
    premium: { monthly: 18_000, currency: "GTQ" as const, note: "Corredor premium, alta demanda, exclusividad" },
  },
}

export const ROI_SCENARIOS: ROIScenario[] = [
  {
    id: "conservative",
    name: "Conservador",
    description: "Ocupación baja, tarifa mínima de mercado. Escenario pesimista para validar viabilidad base.",
    inputs: {
      initialInvestment: 234_000,
      monthlyRevenue: 8_000,
      monthlyCosts: 2_200,
      occupancyRate: 0.65,
      discountRate: 0.14,
      years: 7,
    },
    assumptions: [
      "Inversión total al límite superior del presupuesto",
      "Tarifa de Q8,000/mes (extremo bajo del mercado)",
      "Ocupación del 65% — 2.3 meses vacíos al año",
      "Costos operativos: electricidad Q800, mantenimiento Q900, otros Q500",
      "Tasa de descuento 14% anual (costo de capital conservador)",
    ],
  },
  {
    id: "base",
    name: "Base",
    description: "Tarifa y ocupación en línea con el mercado actual para ubicaciones similares.",
    inputs: {
      initialInvestment: 205_000,
      monthlyRevenue: 12_000,
      monthlyCosts: 1_800,
      occupancyRate: 0.80,
      discountRate: 0.12,
      years: 7,
    },
    assumptions: [
      "Inversión total en punto medio del presupuesto",
      "Tarifa de Q12,000/mes (mercado medio para corredor alto tráfico)",
      "Ocupación del 80% — 2.4 meses vacíos al año",
      "Costos operativos: electricidad Q800, mantenimiento Q600, otros Q400",
      "Tasa de descuento 12% anual",
    ],
  },
  {
    id: "optimistic",
    name: "Optimista",
    description: "Alta ocupación con tarifa premium. Aplica si la ubicación es considerada premium por el mercado.",
    inputs: {
      initialInvestment: 185_000,
      monthlyRevenue: 16_000,
      monthlyCosts: 1_500,
      occupancyRate: 0.92,
      discountRate: 0.10,
      years: 7,
    },
    assumptions: [
      "Inversión total con eficiencias en construcción",
      "Tarifa de Q16,000/mes (segmento premium del mercado local)",
      "Ocupación del 92% — prácticamente sin períodos vacíos",
      "Costos operativos mínimos con contratos a largo plazo",
      "Tasa de descuento 10% anual",
    ],
  },
]
