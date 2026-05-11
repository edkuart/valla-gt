export type PhaseStatus = "completed" | "in_progress" | "pending"

export interface TimelinePhase {
  id: string
  order: number
  name: string
  description: string
  status: PhaseStatus
  period: string
  milestones: string[]
}

export const TIMELINE: TimelinePhase[] = [
  {
    id: "research",
    order: 1,
    name: "Investigación y Planificación",
    description:
      "Análisis de mercado, investigación técnica, definición del modelo de negocio y estructura financiera preliminar.",
    status: "in_progress",
    period: "Abril – Mayo 2026",
    milestones: [
      "Análisis de mercado OOH en Guatemala completado",
      "Investigación de normativas municipales iniciada",
      "Estimados de costo preliminares establecidos",
      "Plataforma de presentación en desarrollo",
      "Identificación de terreno potencial",
    ],
  },
  {
    id: "legal",
    order: 2,
    name: "Estructura Legal y Financiera",
    description:
      "Constitución de la entidad legal del proyecto, acuerdo entre socios, estructura de aportaciones y primeras gestiones de financiamiento.",
    status: "pending",
    period: "Junio 2026",
    milestones: [
      "Acuerdo de socios firmado",
      "Entidad legal constituida (si aplica)",
      "Capital inicial comprometido por socios",
      "Cuenta bancaria del proyecto abierta",
    ],
  },
  {
    id: "engineering",
    order: 3,
    name: "Diseño e Ingeniería",
    description:
      "Contratación de ingeniero civil, estudio de suelos, diseño estructural certificado y memorias de cálculo.",
    status: "pending",
    period: "Julio 2026",
    milestones: [
      "Ingeniero civil contratado",
      "Estudio de suelos ejecutado",
      "Diseño estructural aprobado y firmado",
      "Planos constructivos completados",
      "Cotizaciones formales obtenidas",
    ],
  },
  {
    id: "permits",
    order: 4,
    name: "Permisos y Trámites",
    description:
      "Gestión de licencia de construcción y licencia de anuncio ante municipalidad correspondiente.",
    status: "pending",
    period: "Agosto 2026",
    milestones: [
      "Expediente de permiso de construcción presentado",
      "Licencia de anuncio solicitada",
      "Permisos de vía gestionados (si aplica)",
      "Aprobaciones obtenidas",
    ],
  },
  {
    id: "construction",
    order: 5,
    name: "Construcción",
    description:
      "Ejecución de obra civil, montaje de estructura metálica e instalación del sistema eléctrico y de iluminación.",
    status: "pending",
    period: "Septiembre – Octubre 2026",
    milestones: [
      "Preparación de terreno y muro de retención",
      "Cimentación ejecutada y curada (28 días)",
      "Estructura metálica fabricada y tratada",
      "Montaje de estructura completado",
      "Sistema eléctrico instalado y certificado",
      "Primera arte publicitaria instalada",
    ],
  },
  {
    id: "operation",
    order: 6,
    name: "Operación Comercial",
    description:
      "Inicio de comercialización del espacio publicitario y operación del activo.",
    status: "pending",
    period: "Noviembre 2026 en adelante",
    milestones: [
      "Primer anunciante contratado",
      "Primer mes de ingresos generado",
      "Protocolo de mantenimiento establecido",
      "Seguimiento de KPIs de ocupación mensual",
    ],
  },
]
