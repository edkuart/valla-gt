export type ProjectStatus =
  | "planning"
  | "permitting"
  | "construction"
  | "operational"
  | "suspended"

export const PROJECT = {
  name: "Valla GT",
  tagline: "Infraestructura publicitaria metálica premium",
  fullName: "Proyecto de Valla Publicitaria Metálica Premium — Guatemala",
  location: "Guatemala, corredor comercial de alto tráfico",
  locationDetail: "Zona comercial con alta densidad vehicular, visibilidad garantizada en dos vías principales",
  status: "planning" as ProjectStatus,
  statusLabel: "Planificación",
  startDate: "Q2 2026",
  constructionTarget: "Q3–Q4 2026",
  operationalTarget: "Q4 2026",

  summary:
    "Desarrollo de estructura publicitaria metálica de alta resistencia en terreno inclinado, diseñada con sobredimensionamiento inteligente para garantizar viabilidad futura de conversión a pantalla LED, sin necesidad de demoler ni reconstruir la infraestructura base.",

  vision:
    "El proyecto no busca construir la pantalla LED más avanzada del mercado hoy. Busca construir la infraestructura más sólida y estratégicamente preparada, que permita crecer hacia esa tecnología cuando el contexto económico y el retorno lo justifiquen.",

  keyMetrics: {
    heightMeters: 12,
    faceAreaM2: 54,
    slopeAngleDeg: 35,
    investmentMin: 180_000,
    investmentMax: 230_000,
    currency: "GTQ" as const,
    projectedMonthlyRevenue: 12_000,
    estimatedPaybackMonths: 24,
  },

  highlights: [
    "Cimentación sobredimensionada: diseñada para soportar carga futura de módulos LED",
    "Estructura en acero A-36 con perfiles de alta resistencia, galvanizados y con recubrimiento epóxico",
    "Sistema de iluminación de alta eficiencia LED perimetral integrado desde la construcción",
    "Acceso técnico posterior incorporado en el diseño estructural para mantenimiento",
    "Ubicación estratégica con visibilidad en dos sentidos de tráfico vehicular",
    "Diseño validado contra cargas de viento según norma guatemalteca y ASCE 7",
  ],

  ledRoadmap: {
    summary:
      "La transición a pantalla LED no es el objetivo inmediato, pero está planificada como posibilidad futura. La infraestructura actual incorpora previsiones específicas para facilitar esa conversión.",
    currentPhase: "Valla convencional iluminada, estructura metálica premium",
    futurePhase: "Pantalla LED modular de alta resolución (posible a partir del año 3)",
    estimatedConversionCost: { min: 280_000, max: 420_000, currency: "GTQ" as const },
    preparedComponents: [
      "Cimentación dimensionada para 2.5× la carga estructural actual",
      "Canalización eléctrica trifásica de alta capacidad instalada",
      "Marco estructural posterior con puntos de anclaje para módulos LED",
      "Área de equipamiento técnico (controladores, fuentes, conectividad)",
    ],
  },
} as const
