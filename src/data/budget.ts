export interface BudgetItem {
  description: string
  unitMin: number
  unitMax: number
  currency: "GTQ"
  notes?: string
}

export interface BudgetCategory {
  id: string
  name: string
  items: BudgetItem[]
}

export const BUDGET_META = {
  version: "0.1",
  date: "Mayo 2026",
  currency: "GTQ" as const,
  disclaimer:
    "Estimados preliminares basados en investigación de mercado y consultas informales a contratistas y distribuidores de materiales en Guatemala. No representan cotizaciones formales ni compromiso de precio. Los valores finales dependerán de cotizaciones reales, estudio de suelos, diseño estructural certificado y condiciones del mercado al momento de contratación.",
  totalMin: 178_000,
  totalMax: 234_000,
  contingencyPct: 0.1,
}

export const BUDGET: BudgetCategory[] = [
  {
    id: "civil",
    name: "Obra Civil y Cimentación",
    items: [
      {
        description: "Estudio de suelos y topografía",
        unitMin: 5_500,
        unitMax: 8_000,
        currency: "GTQ",
        notes: "Requerido antes de diseño estructural definitivo",
      },
      {
        description: "Movimiento de tierra, corte y compactación",
        unitMin: 8_000,
        unitMax: 14_000,
        currency: "GTQ",
        notes: "Preparación de plataforma de trabajo en terreno inclinado",
      },
      {
        description: "Muro de retención perimetral",
        unitMin: 18_000,
        unitMax: 28_000,
        currency: "GTQ",
        notes: "Concreto armado, necesario para estabilizar corte de terreno",
      },
      {
        description: "Cimentación (losa + zapatas aisladas)",
        unitMin: 32_000,
        unitMax: 48_000,
        currency: "GTQ",
        notes: "Sobredimensionada para futura carga LED",
      },
    ],
  },
  {
    id: "structure",
    name: "Estructura Metálica",
    items: [
      {
        description: "Fabricación de estructura (material + mano de obra)",
        unitMin: 55_000,
        unitMax: 72_000,
        currency: "GTQ",
        notes: "Perfiles A-36, corte, soldadura y ensamble en taller",
      },
      {
        description: "Tratamiento anticorrosivo y pintura",
        unitMin: 8_000,
        unitMax: 12_000,
        currency: "GTQ",
        notes: "Galvanizado + primer + epóxico. Garantía de vida útil > 20 años.",
      },
      {
        description: "Montaje e instalación",
        unitMin: 12_000,
        unitMax: 18_000,
        currency: "GTQ",
        notes: "Incluye flete, grúa/camión pluma y mano de obra de montaje",
      },
    ],
  },
  {
    id: "cartelera",
    name: "Cartelera y Acabados",
    items: [
      {
        description: "Marco y estructura de cartelera",
        unitMin: 8_000,
        unitMax: 12_000,
        currency: "GTQ",
        notes: "Marco perimetral de aluminio o acero con tensores para vinilo",
      },
      {
        description: "Primera impresión de vinilo publicitario",
        unitMin: 3_500,
        unitMax: 5_500,
        currency: "GTQ",
        notes: "Costo de la primera ararte. Reemplazos futuros: Q2,500–4,000",
      },
    ],
  },
  {
    id: "electrical",
    name: "Sistema Eléctrico e Iluminación",
    items: [
      {
        description: "Acometida eléctrica y tablero",
        unitMin: 8_000,
        unitMax: 13_000,
        currency: "GTQ",
        notes: "Conexión a red + tablero 100A trifásico con breakers",
      },
      {
        description: "Sistema de iluminación LED",
        unitMin: 12_000,
        unitMax: 18_000,
        currency: "GTQ",
        notes: "6 proyectores LED 150W + canalización + cableado + control horario",
      },
    ],
  },
  {
    id: "professional",
    name: "Honorarios Profesionales",
    items: [
      {
        description: "Diseño estructural y memorias de cálculo",
        unitMin: 8_000,
        unitMax: 14_000,
        currency: "GTQ",
        notes: "Ingeniero civil certificado, incluye firma y sello",
      },
      {
        description: "Diseño arquitectónico / gráfico de cartelera",
        unitMin: 2_500,
        unitMax: 4_500,
        currency: "GTQ",
        notes: "Opcional — si se subcontrata diseño de la arte publicitaria",
      },
      {
        description: "Supervisión de obra",
        unitMin: 4_000,
        unitMax: 7_000,
        currency: "GTQ",
        notes: "Visitas de supervisión durante construcción",
      },
    ],
  },
  {
    id: "permits",
    name: "Permisos y Trámites",
    items: [
      {
        description: "Permiso municipal de construcción",
        unitMin: 2_000,
        unitMax: 5_000,
        currency: "GTQ",
        notes: "Varía según municipio. Incluye licencia de anuncio.",
      },
      {
        description: "Permisos de vía (si aplica)",
        unitMin: 1_500,
        unitMax: 4_000,
        currency: "GTQ",
        notes: "Depende de propiedad del derecho de vía y municipio",
      },
    ],
  },
]
