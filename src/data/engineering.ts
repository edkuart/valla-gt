export interface EngineeringSpec {
  label: string
  value: string
  unit?: string
  notes?: string
}

export interface EngineeringCategory {
  id: string
  name: string
  description: string
  specs: EngineeringSpec[]
}

export const ENGINEERING_DISCLAIMER =
  "Especificaciones preliminares basadas en análisis de terreno visual y referencia a proyectos similares en Guatemala. Requieren validación por ingeniero civil certificado antes de construcción."

export const ENGINEERING: EngineeringCategory[] = [
  {
    id: "foundation",
    name: "Cimentación",
    description:
      "Diseñada para terreno inclinado con sobredimensionamiento deliberado para futura carga LED.",
    specs: [
      { label: "Tipo de cimentación", value: "Losa de cimentación + zapatas aisladas", notes: "Solución óptima para terreno inclinado sin excavación excesiva" },
      { label: "Profundidad de desplante", value: "1.5 – 2.0", unit: "m", notes: "Ajustable según estudio de suelos" },
      { label: "Resistencia del concreto", value: "f'c = 280", unit: "kg/cm²", notes: "Mínimo recomendado para exposición a intemperie" },
      { label: "Acero de refuerzo", value: "Grado 60 (fy = 4200 kg/cm²)", notes: "Según ACI 318 / AGIES" },
      { label: "Factor de seguridad sísmico", value: "1.5 ×", notes: "Sobre carga estructural calculada, zona sísmica Guatemala" },
      { label: "Factor sobredimensionamiento LED", value: "2.5 ×", unit: "carga actual", notes: "Capacidad reservada para futura pantalla LED" },
      { label: "Capacidad portante mínima del suelo", value: "≥ 10", unit: "ton/m²", notes: "A confirmar con estudio de suelos" },
    ],
  },
  {
    id: "structure",
    name: "Estructura Metálica",
    description: "Perfiles de acero A-36 con tratamiento anticorrosivo para clima tropical húmedo.",
    specs: [
      { label: "Tipo de acero", value: "ASTM A-36", notes: "Estándar para estructuras de acero en Guatemala" },
      { label: "Perfil columna principal", value: "HSS 8×8×1/2\" o equivalente", notes: "Sección hueca cuadrada de alta resistencia torsional" },
      { label: "Perfil viga horizontal", value: "W8×31 o equivalente", notes: "Perfil en W para el marco de la cartelera" },
      { label: "Tornillería", value: "Grado A325 (alta resistencia)", notes: "Conexiones bridadas tipo momento" },
      { label: "Tratamiento superficial", value: "Galvanizado por inmersión + epóxico", notes: "Garantiza vida útil > 20 años en intemperie" },
      { label: "Altura total de estructura", value: "12", unit: "m", notes: "Desde nivel de terreno hasta borde superior de cartelera" },
      { label: "Área de cartelera", value: "54", unit: "m²", notes: "9m × 6m, orientación y dimensión definitiva a confirmar según regulación municipal" },
      { label: "Peso estimado de estructura", value: "3,200 – 4,500", unit: "kg", notes: "Excluyendo cimentación" },
    ],
  },
  {
    id: "wind",
    name: "Carga de Viento",
    description:
      "Diseño basado en velocidades de viento del corredor guatemalteco según AGIES NSE 2-10.",
    specs: [
      { label: "Velocidad de diseño", value: "120", unit: "km/h", notes: "Zona 2 de viento, Guatemala. Conservadora respecto a historial local." },
      { label: "Norma aplicada", value: "AGIES NSE 2-10 + ASCE 7-16", notes: "Combinación de norma nacional e internacional" },
      { label: "Presión de diseño sobre cartelera", value: "0.85", unit: "kPa", notes: "Coeficiente de exposición categoría C (área abierta)" },
      { label: "Carga de viento total estimada", value: "4.5 – 5.2", unit: "ton", notes: "Sobre superficie de cartelera completa" },
      { label: "Factor de ráfaga", value: "Gf = 0.85", notes: "Para estructura flexible tipo cartelera" },
    ],
  },
  {
    id: "electrical",
    name: "Sistema Eléctrico",
    description:
      "Instalación preparada desde construcción para iluminación actual y futura expansión LED.",
    specs: [
      { label: "Acometida", value: "Trifásica 220V / 60Hz", notes: "Capacidad para futura pantalla LED (requiere 3Φ)" },
      { label: "Capacidad instalada", value: "30", unit: "kVA", notes: "Sobredimensionada vs demanda actual de ~8 kVA" },
      { label: "Sistema de iluminación actual", value: "LED perimetral alta eficiencia", notes: "Luminarias orientadas hacia cartelera, temperatura de color 5000K" },
      { label: "Consumo estimado iluminación", value: "1.2 – 1.8", unit: "kW", notes: "Operación nocturna 12h/día" },
      { label: "Canalización", value: "Conduit metálico 2\" principal + 1\" secundario", notes: "Rutas pre-instaladas para futuro cableado LED" },
      { label: "Tablero de distribución", value: "12 circuitos, breakers GFCI", notes: "Con espacio para expansión sin rehacer la instalación" },
      { label: "Sistema de tierra física", value: "≤ 5 Ω de resistencia", notes: "Requerido por NEC y AGIES para estructuras metálicas expuestas" },
    ],
  },
  {
    id: "access",
    name: "Acceso Técnico",
    description: "Diseño incorpora acceso seguro para mantenimiento rutinario y futuras intervenciones.",
    specs: [
      { label: "Escalera de acceso posterior", value: "Empotrada en estructura, acero galvanizado", notes: "Con peldaños antideslizantes y guarda-cuerpo lateral" },
      { label: "Plataforma de mantenimiento", value: "Nivel superior de cartelera", unit: "", notes: "Ancho mínimo 60cm, con rodapié y barandal" },
      { label: "Área de equipamiento técnico", value: "1.2 × 0.8", unit: "m", notes: "Gabinete posterior inferior para controladores y equipos" },
      { label: "Carga viva plataforma", value: "250", unit: "kg/m²", notes: "Dimensionada para 2 técnicos + herramienta" },
    ],
  },
]
