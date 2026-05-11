export const TERRAIN = {
  disclaimer:
    "Datos basados en observación visual del sitio y referencia cartográfica. Estudio geotécnico formal requerido previo a construcción.",

  overview: {
    description:
      "El terreno presenta una inclinación natural de aproximadamente 35°, condición que inicialmente parece un desafío pero que, correctamente aprovechada, ofrece ventajas estratégicas significativas: mayor altura efectiva de la cartelera sin necesidad de columna más alta, y visibilidad desde ambos sentidos de la vía principal.",
    advantage:
      "La pendiente natural permite elevar la base de la cartelera sin aumentar la altura de la columna, reduciendo carga estructural y costo de acero.",
  },

  physical: [
    { label: "Pendiente del terreno", value: "~35", unit: "°", notes: "Medición visual aproximada" },
    { label: "Área disponible para construcción", value: "~80", unit: "m²", notes: "Superficie plana proyectada tras corte y compactación" },
    { label: "Tipo de suelo probable", value: "Arcilla limosa / Limo arcilloso", notes: "A confirmar con estudio de suelos" },
    { label: "Nivel freático estimado", value: "> 3.0", unit: "m de profundidad", notes: "Baja probabilidad de interferencia con cimentación" },
    { label: "Riesgo de deslizamiento", value: "Moderado sin intervención", notes: "Control mediante muro de retención perimetral" },
    { label: "Vegetación existente", value: "Escasa, principalmente arbustos", notes: "Remoción sencilla sin necesidad de maquinaria pesada" },
  ],

  access: [
    { label: "Acceso vehicular", value: "Sí, vía secundaria de tierra", notes: "Suficiente para camión pluma y transporte de materiales" },
    { label: "Distancia a acometida eléctrica", value: "~40", unit: "m", notes: "Poste de distribución existente en vía principal" },
    { label: "Distancia a vía principal", value: "~15", unit: "m", notes: "Retiro desde borde de carretera — verificar regulación municipal" },
  ],

  visibility: [
    { label: "Visibilidad desde dirección norte", value: "≥ 300", unit: "m", notes: "Sin obstrucciones identificadas" },
    { label: "Visibilidad desde dirección sur", value: "≥ 200", unit: "m", notes: "Ligera curva en la vía reduce distancia efectiva" },
    { label: "Ángulo de visibilidad horizontal", value: "~140", unit: "°", notes: "Cobertura amplia para ambas direcciones de tráfico" },
    { label: "Altura efectiva de cartelera", value: "~14", unit: "m sobre nivel de vía", notes: "Beneficio de la pendiente natural del terreno" },
  ],

  interventions: [
    {
      type: "Muro de retención",
      description: "Muro de concreto armado tipo gravedad o en L, para estabilizar el corte de terreno y crear la plataforma de trabajo.",
      estimatedCost: { min: 18_000, max: 28_000, currency: "GTQ" as const },
    },
    {
      type: "Corte y relleno",
      description: "Movimiento de tierra para crear nivel de trabajo plano de aproximadamente 20 m².",
      estimatedCost: { min: 8_000, max: 14_000, currency: "GTQ" as const },
    },
    {
      type: "Compactación",
      description: "Compactación al 95% Proctor Estándar de la superficie de desplante.",
      estimatedCost: { min: 3_000, max: 6_000, currency: "GTQ" as const },
    },
  ],
}
