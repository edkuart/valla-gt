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

function renderInline(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g,
      "<a href='$2' target='_blank' rel='noopener noreferrer' style='color:var(--accent);border-bottom:1px solid rgba(184,148,90,0.3);text-decoration:none;'>$1</a>")
    .replace(/\*\*(.*?)\*\*/g, "<strong style='color:var(--text-primary)'>$1</strong>")
}

const ARTICLE_CONTENT: Record<string, string> = {
  "mercado-ooh-guatemala": `
El mercado de publicidad Out-of-Home (OOH) en Guatemala es uno de los más activos de Centroamérica, con una infraestructura consolidada de más de dos décadas y una transición activa hacia formatos digitales. Este análisis documenta el estado del mercado en 2025–2026 con datos de operadores locales e internacionales presentes en el país.

**Operadores principales en Guatemala**

Guatemala cuenta con operadores de alcance nacional e internacional:

- **[ABG Medios](https://abgmedios.com/)** — el operador de mayor escala en Guatemala, con más de 1,000 ubicaciones en todo el territorio nacional. Introdujo el primer formato vertical de 9×12 m en el país en 2003. Sus clientes incluyen Unilever, BAC Credomatic y Centro Médico. Opera en circuitos de rotación catorcenal y ofrece el formato "InMotion" (valla + pantalla HD combinadas).
- **[JCDecaux Latam](https://www.jcdecauxlatam.com/guatemala/)** — operador multinacional con presencia en Quetzaltenango y el corredor suroccidental, incluyendo el corredor CA-1 en el que se ubica nuestro proyecto.
- **[Vallas de Guatemala](https://www.vallasdeguatemala.com/)** — más de 240 vallas premium y 4,000 puntos de alto impacto; clientes como Levi's, Tommy Hilfiger y G&T Continental. Ofrece formatos convencionales, unipolares, pantallas digitales y pasarelas.
- **[Satélite Publicidad](https://satelitepublicidad.jimdofree.com/)** — operador regional con cobertura en suroccidente; los únicos con tarifas publicadas en el mercado.
- **[DO IT Publicidad](https://doitpublicidad.com/)** — cobertura en toda Guatemala con MUPIs digitales, pantallas, vallas estáticas y pasarelas.

**Tarifas de referencia por segmento (2025–2026)**

El único operador con tarifas publicadas en el mercado es Satélite Publicidad para vallas 6×3 m en suroccidente de Guatemala:

| Duración del contrato | Tarifa mensual |
|---|---|
| 1 – 2 meses | Q 1,500 / mes |
| 3 – 4 meses | Q 1,150 / mes |
| 5 – 6 meses | Q 950 / mes |
| 7 – 12 meses | Q 800 / mes |

Estas tarifas corresponden a formatos de 18 m² (6×3). Normalizadas a m²: Q 44 – 83 por m²/mes. Para una cartelera de 54 m² como la de nuestro proyecto, el rango referencial equivalente sería **Q 2,400 – 4,500 / mes** en corredor de tipo suroccidental.

Los corredores de mayor tráfico (periférico Ciudad de Guatemala, CA-1 hacia Occidente, carretera a Puerto Quetzal) no tienen tarifas publicadas — se negocian directamente con los operadores.

Rangos estimados para corredores de alto tráfico vehicular (≥25,000 vehículos/día), formatos 9×6 m:
- Corredor regional tipo CA-1 fuera de zona metropolitana: **Q 6,000 – 12,000 / mes**
- Zona metropolitana expandida (radial hasta 30 km): **Q 10,000 – 18,000 / mes**
- Premium urbano (periférico, zonas 9-10 GC): **Q 18,000 – 35,000 / mes**

**Contexto regional y global**

El mercado DOOH (Digital Out-of-Home) en Latinoamérica alcanzó **USD 1,000 millones en 2025** y se proyecta en USD 1,330 millones para 2030. A nivel global, el mercado OOH se valúa en USD 34.88 billones en 2026, con crecimiento anual proyectado del 4.9% hacia USD 53.67 billones para 2035.

Guatemala, con su alta tasa de urbanización en ciudades intermedias como Quetzaltenango, Cobán y Escuintla, representa un mercado subatendido fuera de la capital — la concentración de operadores en Ciudad de Guatemala deja ventanas de oportunidad en corredores regionales.

**Perfil del anunciante en el corredor Quetzaltenango**

Los anunciantes típicos en corredores regionales como CA-1 tramo Salcajá–Quetzaltenango incluyen:

- Instituciones financieras y cooperativas (bancos regionales, Banrural, cooperativas del altiplano)
- Comercios de consumo masivo (telecomunicaciones, bebidas, alimentos)
- Inmobiliarias y constructoras activas en el altiplano
- Servicios de salud y educación (universidades, clínicas)
- Comercio local de temporada (ferias, eventos regionales)

**Tasas de ocupación estimadas**

No hay datos públicos de ocupación para el mercado guatemalteco. Con base en la estructura del mercado y la demanda regional:

- Corredores de alto tráfico en GC: ocupación estimada 75% – 90%
- Corredores regionales tipo CA-1: ocupación estimada 55% – 75%
- Meses de mayor demanda: septiembre–diciembre (fin de año), mayo–julio (eventos y comercio)
- Meses de menor demanda: enero–febrero (menor actividad comercial post-temporada)

Para el escenario base del proyecto se utiliza 60% de ocupación — conservador para un corredor regional de primer orden.

**Implicación para el proyecto**

La ubicación en el corredor CA-1, a la entrada de Salcajá desde Ciudad de Guatemala, reúne características de corredor regional de primer orden: alto tráfico diario, entrada al área metropolitana de Quetzaltenango (segunda ciudad del país), y ausencia de competencia directa documentada en ese tramo exacto. La tarifa base de Q 12,000/mes utilizada en el modelo financiero es conservadora respecto al rango referencial del segmento.
`,
  "viento-norma-agies": `
Las cargas de viento son el factor de diseño dominante en estructuras de publicidad exterior. A diferencia de un edificio, una valla actúa como una gran vela plana expuesta directamente al viento, lo que genera fuerzas horizontales y de volteo que gobiernan el diseño de la columna y la cimentación. Este documento resume la normativa aplicable para el proyecto en Salcajá, Quetzaltenango.

**Marco normativo aplicable**

Guatemala utiliza las [Normas de Seguridad Estructural AGIES](https://www.agies.org), emitidas por la Asociación Guatemalteca de Ingeniería Estructural y Sísmica. La norma vigente para cargas de viento es la **NSE 2** — actualmente en su edición 2024 (BETA publicada en agosto 2024 por AGIES y disponible también en [CONRED](https://conred.gob.gt/wp-content/uploads/2026/02/NSE-2-2024-Demandas-estructurales-y-condiciones-de-carga-.pdf)).

La edición anterior NSE 2-10 (2010, revisada 2019) sigue siendo válida para proyectos en trámite. La norma AGIES se complementa con la norma americana **ASCE 7-22** (antes ASCE 7-16) como referencia metodológica, especialmente para estructuras especiales como vallas publicitarias.

**Velocidad básica de viento para Salcajá, Quetzaltenango**

La norma AGIES NSE 2 incluye una tabla de velocidades básicas de viento (Vb) por municipio. Los datos confirmados para el departamento de Quetzaltenango son:

| Municipio | Velocidad básica Vb |
|---|---|
| Salcajá | **100 km/h** |
| San Carlos Sija | 100 km/h |
| Quetzaltenango (ciudad) | 100 km/h |
| Municipios de costa (referencia) | 130 – 150 km/h |

**Salcajá utiliza Vb = 100 km/h** como velocidad de diseño base. Esta es la velocidad de ráfaga de 3 segundos con período de retorno de 50 años, medida a 10 m de altura sobre terreno abierto plano (Exposición C).

**Categorías de exposición al viento**

La norma AGIES (igual que ASCE 7) define categorías de exposición según la rugosidad del terreno en el sector barlovento:

- **Exposición B** — terreno urbano o suburbano con obstrucciones densas ≥ 9 m de altura (interior de ciudad)
- **Exposición C** — terreno abierto con pocas obstrucciones < 9 m (campo abierto, carretera) ← **aplicable al proyecto**
- **Exposición D** — frente costero con ≥ 1,500 m de extensión de agua

El corredor CA-1 en las afueras de Salcajá cae en **Exposición C** — la más crítica para estructuras rurales/de carretera.

**Metodología de cálculo para estructuras tipo cartelera**

Las vallas publicitarias se clasifican como "estructuras especiales" en la AGIES NSE 2. El procedimiento simplificado para estructuras de baja complejidad aplica la presión de diseño de viento: **qz = Ce × Cq × qs**

donde qs es la presión de estancamiento a la velocidad de diseño. Para Vb = 100 km/h y Exposición C a 12 m de altura:

- Presión de estancamiento qs ≈ 0.48 kPa
- Coeficiente de exposición Ce ≈ 1.20 (altura 9–15 m, Exposición C)
- Coeficiente de presión Cq ≈ 1.30 – 1.40 (superficie sólida tipo cartelera)
- **Presión de diseño estimada: 0.75 – 0.80 kPa**

Para una cartelera de 54 m² (9 × 6 m):

- Fuerza horizontal de viento en la cartelera: **40.5 – 43.2 kN** (~4.1 – 4.4 toneladas-fuerza)
- Momento de volteo sobre la base de la columna (h = 12 m): **486 – 518 kN·m**

Estos momentos son los que dimensionan el diámetro de la columna (típico: HSS 250×10 o similar) y el tamaño de la cimentación (zapata o losa de cimentación).

**Referencia ASCE 7 — Sección para carteleras**

La ASCE 7-22 (equivalente americano) trata las carteleras en su Capítulo 29 "Other Structures". La fuerza de diseño sobre la cartelera se calcula como: **F = qz × G × Cf × As**

- G = factor de ráfaga = 0.85 (estructuras rígidas)
- Cf = coeficiente de fuerza neta para carteleras con rasante libre = **1.3 a 1.8** dependiendo de la relación B/s (ancho/separación sobre terreno)
- As = área sólida de la cartelera

Para nuestro proyecto: B = 9 m, s ≈ 7 m (espacio libre bajo cartelera), B/s ≈ 1.3 → Cf ≈ 1.50.

**Aspectos críticos para el diseño en ladera**

El terreno inclinado (~35°) introduce condicionantes especiales para el cálculo de viento:

1. **Aceleración del viento por topografía**: la pendiente pronunciada puede generar aceleración del flujo de viento (efecto Kzt en ASCE 7, factor de topografía). Para laderas con pendiente ≥ 2H:1V, Kzt puede ser hasta 1.3 × el valor base — lo que incrementa la presión de diseño hasta un 30%.
2. **Dirección crítica del viento**: en el corredor de Salcajá, el viento predominante del norte/noreste (temporada seca, noviembre–abril) puede incidir perpendicular a la cartelera. El ingeniero debe analizar como mínimo dos direcciones de viento perpendiculares.
3. **Sujeción a la fundación**: el momento de volteo de ~500 kN·m exige una cimentación con capacidad de anclaje suficiente. Para terreno inclinado con riesgo de deslizamiento, el diseño geotécnico (capacidad portante, estabilidad del talud) es el factor limitante — no la estructura metálica.

**Proceso recomendado**

1. Contratar ingeniero estructural con experiencia en estructuras especiales ([directorio CIG](https://www.cig.org.gt))
2. Solicitar estudio geotécnico del terreno (capacidad portante, clasificación del suelo)
3. Aplicar AGIES NSE 2 edición 2024 con Vb = 100 km/h, Exposición C, verificar factor Kzt por topografía
4. Diseñar columna y cimentación para el momento de volteo resultante
5. Planos firmados y sellados — requisito obligatorio para la licencia municipal
`,
  "cimentacion-terreno-inclinado": `
La cimentación es el componente más crítico del proyecto y el que presenta mayor incertidumbre en terreno inclinado. Un error en el diseño de la fundación puede resultar en pérdida total de la estructura. Este documento resume las opciones disponibles, los condicionantes técnicos para el terreno específico del proyecto y las referencias normativas aplicables en Guatemala.

**Condiciones del terreno del proyecto**

El sitio en Salcajá, Quetzaltenango, presenta:

- Pendiente aproximada de **35° – 40°** (ladera pronunciada)
- Suelo volcánico típico del altiplano guatemalteco (limos volcánicos, cenizas, posible roca madre a profundidad variable)
- Riesgo de deslizamiento en terrenos sin estabilización previa
- Acceso limitado para maquinaria pesada

Estas condiciones exigen un **estudio geotécnico previo al diseño** — no es opcional. El estudio debe determinar la capacidad portante del suelo, el nivel de aguas freáticas y la clasificación sísmica del sitio según AGIES NSE 2.1 ([Estudios Geotécnicos](https://www.agies.org/wp-content/uploads/2024/08/NSE-2_1-2024-BETA-Estudios-geotecnicos-1.pdf)).

**Opción 1 — Zapata aislada con plataforma escalonada (recomendada principal)**

La solución más común y económica para terrenos inclinados moderados. Las zapatas siempre deben ser horizontales — en terreno inclinado se logra mediante excavación escalonada:

- Se excava una plataforma horizontal en la ladera
- La zapata se construye sobre terreno natural competente a un nivel fijo
- Un muro de retención contiene el relleno aguas arriba y el corte aguas abajo
- Dimensiones típicas para este proyecto: zapata cuadrada 2.50 × 2.50 m, espesor 0.60 m, con pedestal de 0.80 × 0.80 m para la conexión al fuste de la columna metálica

**Condición crítica**: la zapata debe estar a profundidad suficiente en terreno **no perturbado** — no sobre relleno. En ladera, esto puede requerir excavaciones de 2–4 m de profundidad según la geología local.

**Opción 2 — Losa de cimentación (mayor seguridad, mayor costo)**

Recomendada cuando el suelo es heterogéneo o la capacidad portante es irregular:

- Distribuye la carga sobre una superficie mayor
- Reduce el riesgo de asentamiento diferencial
- Permite diseño para sobrecargas futuras (conversión LED) sin rediseño de la cimentación
- Costo estimado adicional vs. zapata: +30% a +50%
- Dimensiones típicas: 3.50 × 3.50 m, espesor 0.40 – 0.50 m

**Opción 3 — Micropilotes (para condiciones adversas de suelo)**

Si el estudio geotécnico revela suelos blandos, rellenos o alta presencia de agua freática, los micropilotes son la solución más robusta para ladera:

- **Qué son**: pilotes de diámetro reducido (100–300 mm) perforados e inyectados con lechada de cemento de alta resistencia
- **Ventaja en ladera**: se instalan con maquinaria de acceso reducido, en ángulos variables según las necesidades del talud — ideal para terrenos de acceso difícil
- **Profundidad típica**: 8–15 m hasta suelo firme o roca madre
- **Número de micropilotes**: 4–6 para una valla de este tipo
- **Proveedor local especializado**: [Grupo ITSA / PILOTECMAR](https://www.grupoitsa.org) — división especializada en fundaciones profundas y estabilización de taludes con más de 40 años de experiencia en Guatemala

**Referencia normativa — ACI 318 aplicado en Guatemala**

El diseño estructural de la cimentación en Guatemala utiliza **ACI 318** como referencia principal, complementada con las normas AGIES para las cargas sísmicas y de viento. La [Universidad de San Carlos de Guatemala](http://ingenieria.cunoc.usac.edu.gt/portal/) — a través del Centro Universitario de Occidente (CUNOC) en Quetzaltenango — forma ingenieros con aplicación directa de ACI 318 al contexto guatemalteco.

Las fases de diseño según ACI 318-19:

1. **Fase geotécnica**: determinar capacidad portante admisible (qa), verificar estabilidad ante volteo, deslizamiento y extracción
2. **Fase estructural**: diseñar el refuerzo de la zapata por punzonamiento, corte en una y dos direcciones, y flexión

Para este proyecto, la carga de diseño sobre la cimentación está dominada por el **momento de volteo por viento** (~500 kN·m), no por la carga gravitacional de la estructura metálica (~25 kN). Esto significa que la zapata trabaja principalmente en tracción en un extremo y compresión en el otro — un diseño que exige revisión cuidadosa de la capacidad de anclaje en suelo.

**Estabilización del talud — trabajo previo obligatorio**

Antes de cualquier cimentación, el talud debe estabilizarse. Las acciones recomendadas:

- **Muro de contención**: puede ser de mampostería de block, concreto ciclópeo o gaviones, dependiendo de la altura de corte necesaria
- **Drenaje superficial**: cunetas para desviar aguas de lluvia del área de cimentación (crítico en altiplano con temporada lluviosa intensa)
- **Drenaje interno**: geotextil + tubería perforada a los lados de la zapata para evacuar agua freática y evitar presiones hidrostáticas
- **Tiempo de espera**: en suelos cohesivos es recomendable dejar estabilizar el corte 2–4 semanas antes de fundir la cimentación

**Sobredimensionamiento estratégico para conversión LED**

Diseñar la cimentación desde el inicio para soportar una futura pantalla LED tiene costo marginal bajo pero impacto estratégico alto:

- Una pantalla LED P10 de 54 m² pesa aproximadamente **3,500 – 4,500 kg** (vs. vinilo + frame convencional ≈ 500 kg)
- Las cargas de viento en superficie sólida (LED) son **1.3 – 1.6×** mayores que en cartelera tradicional (con permeabilidad al viento)
- **Recomendación**: diseñar la cimentación para 1.5 × las cargas de diseño LED. El costo incremental de concreto y acero de refuerzo es menor al 20% del costo total de la zapata, y evita demoler y reconstruir cuando llegue la conversión.
`,
  "ubicacion-km194-rn1-salcaja": `
Este documento consolida el análisis de la ubicación exacta del terreno basado en coordenadas GPS verificadas (14.861560°N, 91.470278°O) y búsqueda de información pública. La ubicación es el factor primario que determina el potencial de ingresos del proyecto y condiciona decisiones de diseño, normativa y operación.

**Identificación exacta del punto**

El terreno se encuentra en el **Km. 194 de la Ruta Nacional RN-1** (Carretera Interamericana), municipio de Salcajá, departamento de Quetzaltenango. Este kilómetro es un punto de referencia vial oficial: [PROVIAL](https://www.facebook.com/ProvialOficial/videos/libre-circulaci%C3%B3n-vehicular-sobre-km-194-de-ruta-rn-1-salcaj%C3%A1-quetzaltenangoresp/1022080006300614/) ha publicado actualizaciones de tránsito específicas para este punto, lo que confirma su importancia como corredor de primer orden.

La RN-1 es el eje vial principal del occidente de Guatemala, conectando Ciudad de Guatemala con Quetzaltenango (segunda ciudad del país). Todo el tráfico entre el altiplano occidental y la capital transita por este corredor.

**Entorno comercial inmediato (radio 500 m)**

El Km. 194 concentra un corredor comercial de servicios automotrices, salud y comercio de paso:

- **CEMIC Quetzaltenango** — hospital especializado, ubicado exactamente en Km. 194 entre Salcajá y Quinta Olga. Generador de tráfico constante de pacientes y personal
- **FERROALTOS S.A.** — ferretería industrial sobre la vía principal
- **Auto Ventas Ryd** — concesionario de automóviles con fachada sobre la RN-1
- **Autotronic Solutions (Electromecánica)** — taller especializado sobre la carretera
- **Magic Car Wash** — carwash de paso
- **Taller de Silenciadores J & W** — taller automotriz
- **Pollo Crispys** — restaurante de comida rápida
- **MAYCONCI** — comercio sobre la vía
- **Wrk trabajo** — centro comercial

Este perfil de negocios — servicios automotrices, salud, alimentación, comercio — indica un **corredor de tráfico mixto**: vehículos de paso interurbano + clientes locales + trabajadores del área. Es exactamente el tipo de corredor que los anunciantes regionales buscan para cobertura amplia.

**Hidrografía: Río Samalá**

Al costado este del terreno corre el **Río Samalá**, visible en la imagen satelital. Este elemento define la topografía del sitio: la ladera desciende hacia el río, lo que genera la pendiente pronunciada (~35°) que da al proyecto su característica estructural diferencial — la elevación natural sobre la carretera maximiza la visibilidad de la cartelera sin necesidad de una columna más alta.

**Municipio de Salcajá — Perfil demográfico y económico**

| Indicador | Dato |
|---|---|
| Población | ~20,000 habitantes (est. 2025) |
| Área municipal | 12 km² (6 km² urbano / 6 km² rural) |
| Densidad | ~1,667 hab/km² — alta para municipio de su tamaño |
| Actividades principales | Textiles, comercio, remesas, agricultura |
| Instituciones financieras | 7 (Banrural, G&T Continental, Banco Industrial + 3 cooperativas) |
| Permisos de construcción | ~250/año — alta actividad constructiva |
| Servicio eléctrico | DEOCSA (cobertura casi total) |
| Posición estratégica | Miembro de la [Mancomunidad Metrópoli de los Altos](https://www.metropolidelosaltos.org/salcaja/) |

Salcajá ha sido reconocido como el primer municipio de Guatemala en implementar el modelo de **"ciudad de 15 minutos"** — una planificación urbana que prioriza la mixticidad de usos y la movilidad sostenible. Esto implica alta densidad comercial concentrada en pocos kilómetros, con fuerte actividad económica local independiente del tráfico de paso.

**Distancia al Aeropuerto Los Altos (MGQZ) — Hallazgo crítico**

El aeropuerto más cercano es el **Aeropuerto de Quetzaltenango — Los Altos (MGQZ / AAZ)**, ubicado en Zona 6 de Quetzaltenango, junto a la Autopista Los Altos. Coordenadas oficiales: 14.8656°N, 91.5022°O.

| | Proyecto | Aeropuerto MGQZ |
|---|---|---|
| Latitud | 14.861560°N | 14.865556°N |
| Longitud | 91.470278°O | 91.501944°O |
| **Distancia en línea recta** | — | **~3.4 km** |

El aeropuerto opera únicamente en horario diurno y está restringido a aeronaves ligeras STOL y turbohélice regionales (la altitud de 2,375 m msnm limita el rendimiento de las aeronaves). La pista tiene orientación **05/23** (aproximadamente SW–NE), y el proyecto se encuentra al **ESTE** del aeropuerto — fuera del eje de aproximación directo, pero dentro de la zona de control típica.

A 3.4 km de un aeródromo con categoría internacional, la consulta a la [DGAC Guatemala](https://www.dgac.gob.gt) es **obligatoria antes de definir la altura final de la estructura**. Ver artículo de normativa para el procedimiento de trámite completo.

**Por qué esta ubicación es estratégicamente superior para OOH**

1. **Puerta de entrada a la metrópoli occidental**: todo conductor que entra a Quetzaltenango desde la capital pasa por Km. 194. La valla captura la audiencia antes de que llegue al destino — el momento de mayor receptividad al mensaje publicitario.
2. **Corredor sin saturación documentada**: a diferencia del periférico capitalino con alta densidad de vallas, el tramo Salcajá–Quetzaltenango carece de un inventario público denso de estructuras. Primera estructura premium en ese punto es una ventaja de posicionamiento.
3. **Elevación natural sobre la carretera**: la pendiente del terreno hacia el Río Samalá ubica la base de la estructura por encima del nivel de la calzada, incrementando la visibilidad sin costo adicional de altura en columna.
4. **Audiencia mixta de alta calidad**: el tráfico RN-1 mezcla transporte de carga interurbano, transporte de pasajeros (buses extraurbanos), vehículos privados de viaje y residentes locales. Esta diversidad atrae a un espectro amplio de anunciantes.
5. **Entorno comercial activo**: los negocios vecinos (hospital, concesionario, talleres, restaurante) generan tráfico local independiente que refuerza los aforos del paso interurbano — el corredor tiene tráfico en ambas dimensiones.

**Pendiente de verificación presencial**

- Aforo vehicular diario exacto en Km. 194: contactar PROVIAL o Dirección General de Caminos para datos oficiales de TPD
- Visibilidad real desde la carretera: verificar ángulo de exposición desde ambos carriles (norte y sur) y la distancia de avistamiento
- Competencia directa: recorrido del tramo Km. 185–205 para inventariar vallas existentes de operadores como ABG, JCDecaux o independientes
`,
  "normativa-legal-guatemala": `
Este documento consolida la investigación legal realizada en mayo 2026 sobre el marco regulatorio aplicable a la instalación de una valla publicitaria metálica de 12 metros en el municipio de Salcajá, Quetzaltenango. La información fue obtenida directamente de fuentes oficiales del Estado guatemalteco, el Colegio de Ingenieros y la municipalidad correspondiente.

**Base Constitucional**

La potestad para regular la publicidad exterior en Guatemala se sustenta en tres artículos de la [Constitución Política de la República de Guatemala](https://www.idpp.gob.gt/images/Biblioteca-virtual/Leyes_y_Reglamentos/Constitucin_Poltica_de_la_Repblica_de_Guatemala.pdf):

- **Artículo 253 — Autonomía Municipal**: "Los municipios son instituciones autónomas. Les corresponde: c) Atender los servicios públicos locales, el ordenamiento territorial de su jurisdicción y el cumplimiento de sus fines propios. Para los efectos correspondientes emitirán las ordenanzas y reglamentos respectivos." — Este artículo es el fundamento por el cual la **Municipalidad de Salcajá tiene potestad directa** para otorgar o denegar la licencia de anuncio.
- **Artículo 254 — Gobierno Municipal**: El concejo municipal (alcalde, síndicos y concejales) es la autoridad que emite los reglamentos locales de publicidad exterior.
- **Artículo 255 — Recursos económicos del municipio**: Las municipalidades recaudan tributos sobre los anuncios instalados en su jurisdicción, lo cual sustenta el cobro de Q30/m² establecido en el Decreto 34-2003.

**Decreto 34-2003 — Ley de Anuncios en Vías Urbanas y Extraurbanas**

Es la **ley nacional de referencia** que aplica a toda la República. Emitida por el Congreso de Guatemala el 16 de junio de 2003. Texto oficial disponible en [congreso.gob.gt](https://www.congreso.gob.gt/assets/uploads/info_legislativo/decretos/34-03.pdf).

| Aspecto | Contenido de la Ley |
|---|---|
| Objeto | Regular anuncios o rótulos en vías urbanas y extraurbanas que promuevan comercialización de bienes o servicios |
| Definición de anuncio | Todo rótulo, estructura, valla, manta o similar con objeto lucrativo o de aviso |
| Autoridad competente | Las municipalidades en su jurisdicción. Excepción: carreteras CA y RN → Dirección General de Caminos |
| Permiso previo obligatorio | (1) Permiso escrito del propietario del terreno + (2) Autorización municipal. Plazo máximo de respuesta: 15 días |
| Tributo anual | Q 30.00 por metro cuadrado de anuncio. Para el proyecto (54m²): Q 1,620/año |
| Anuncios importados | Pagan 50% adicional sobre el tributo base |
| Distancia mínima a carretera | 12 metros desde el borde de la vía (según Dirección General de Caminos) |
| Destino del tributo | Ornato y limpieza vial del municipio |

⚠️ **Nota sobre los artículos técnicos**: los artículos específicos sobre dimensiones máximas, alturas y separación mínima entre vallas existen en el decreto pero los PDFs oficiales están encriptados. Se recomienda solicitar copia impresa en la Municipalidad de Salcajá o en la Dirección General de Caminos región occidente.

**Colegio de Ingenieros de Guatemala (CIG)**

Todo proyecto de valla publicitaria requiere planos estructurales firmados por un profesional colegiado activo. Requisitos documentados por el [CIG](https://www.cig.org.gt):

- Planos en papel bond a escala legible
- Firma, sello y timbre del ingeniero civil responsable
- Constancia de colegiación activa adjunta (emitida por el CIG, vigente)
- Aplica a toda obra mayor de 30 m²

El profesional asume responsabilidad civil y penal por el cálculo estructural. Para el proyecto, se requiere un ingeniero con experiencia específica en estructuras de anuncio exterior y cimentaciones en ladera.

**DGAC — Dirección General de Aeronáutica Civil**

**Hallazgo crítico para Salcajá**: el terreno en Km. 194 RN-1 se encuentra a **~3.4 km en línea recta** del [Aeropuerto Los Altos de Quetzaltenango (MGQZ / AAZ)](https://www.dgac.gob.gt), ubicado en Zona 6 de Quetzaltenango junto a la Autopista Los Altos. A esta distancia, el terreno se encuentra dentro de la zona de control típica de un aeródromo. Se requiere un permiso adicional de la DGAC **antes de definir la altura final de la estructura**.

Documentos requeridos por la DGAC para vallas publicitarias:

1. Coordenadas geográficas exactas del sitio (GPS decimal)
2. Altura máxima de la estructura sobre el nivel del suelo
3. Declaración de si se usará grúa durante la instalación
4. Planos firmados y sellados por profesional colegiado activo
5. Pago de tasa de evaluación

**Acción inmediata recomendada**: verificar con las coordenadas exactas (14.861560°N, 91.470278°O) ante la DGAC si existe restricción de altura. El terreno está a ~3.4 km del Aeropuerto Los Altos (MGQZ) — a esa distancia la consulta es obligatoria. Una estructura de 12 m podría ser aprobada si no interfiere con los procedimientos de aproximación de la pista 05/23, pero debe confirmarse antes de definir la altura final.

**Municipio de Salcajá — Estado Normativo Actual**

| Aspecto | Hallazgo |
|---|---|
| POT vigente | Aprobado en Acta No. 79-2015 del Concejo Municipal (noviembre 2015) |
| Estado del Reglamento POT | ⚠️ En revisión por técnicos y autoridades — no está finalizado |
| Categorías de suelo definidas | Forestal, Protección Especial, Rural, Urbano, Expansión Urbana |
| Reglamento propio de anuncios | No encontrado en internet — sin publicación digital oficial |
| Trámites en línea | No disponibles — todo presencial en OMOT |
| Sitio oficial | [salcaja.gob.gt](https://www.salcaja.gob.gt) |
| Dirección municipalidad | 1ª Calle 2-28 Zona 1, Salcajá, Quetzaltenango |
| Teléfonos | 7768-8750 / 7768-9507 |

**Interpretación**: la ausencia de un reglamento municipal propio de anuncios publicado digitalmente puede significar que Salcajá aplica directamente el Decreto 34-2003 nacional, sin restricciones adicionales locales. Esto es favorable para el proyecto, pero debe confirmarse presencialmente ante la OMOT (Oficina Municipal de Ordenamiento Territorial).

**Mapa de Trámites Requeridos (en orden cronológico)**

1. **Verificar zona en el POT de Salcajá** — acudir a OMOT Municipalidad de Salcajá (7768-8750) y confirmar que el terreno está clasificado como zona urbana o comercial con uso permitido para publicidad exterior
2. **Verificar cono de aproximación DGAC** — el terreno está a ~3.4 km del Aeropuerto Los Altos (MGQZ). Consultar en [dgac.gob.gt](https://www.dgac.gob.gt) con coordenadas GPS exactas (14.861560°N, 91.470278°O) antes de definir la altura final
3. **Contratar ingeniero civil colegiado CIG** — buscar profesional con experiencia en estructuras de anuncio exterior y cimentaciones en ladera. Directorio en [cig.org.gt](https://www.cig.org.gt) y [aquienguate.com](https://www.aquienguate.com/directorio/servicios-profesionales/ingenieros-estructurales/guatemala/guatemala)
4. **Elaborar planos estructurales** — con firma, sello y timbre del ingeniero colegiado + estudio de suelos del terreno específico
5. **Solicitar autorización municipal** — presentar en Municipalidad de Salcajá: planos firmados, permiso del propietario del terreno, DPI del solicitante. Plazo legal de respuesta: 15 días
6. **Trámite DGAC si aplica** — si el terreno está en zona de restricción aérea, gestionar el permiso antes de iniciar construcción
7. **Pago de tributo anual** — Q 1,620/año (54m² × Q30) a partir del inicio de operación

**Vacíos Identificados que Requieren Gestión Presencial**

- Artículos técnicos exactos del Decreto 34-2003 (dimensiones máximas entre vallas, separación mínima)
- Si la Municipalidad de Salcajá tiene reglamento de anuncios propio no publicado digitalmente
- Tasas municipales locales adicionales al tributo nacional de Q30/m²
- Confirmación de zona exacta del terreno en el POT y usos permitidos
- Verificación de cono de aproximación DGAC con coordenadas GPS del terreno
`,
  "led-vs-convencional": `
Este análisis compara la inversión inicial, los costos operativos, el potencial de ingresos y el perfil de riesgo entre una valla convencional iluminada y una pantalla LED para el proyecto específico en Salcajá, Quetzaltenango. Los precios de módulos LED se basan en cotizaciones de mercado 2025 de fabricantes internacionales; los rangos de ingreso en análisis del mercado OOH guatemalteco.

**Proveedores de pantallas LED con presencia en Guatemala**

El mercado guatemalteco cuenta con proveedores locales e internacionales:

- **[Corpotek Guatemala](https://pantallasledguatemala.com.gt/)** — única fábrica de tecnología LED en Centroamérica, con más de 420 proyectos instalados en Guatemala, El Salvador, Honduras y EE. UU. Teléfono: +502 2237-2121. Ofrecen fabricación, instalación, mantenimiento y repuestos.
- **[LEDEC Group](https://www.ledecgroup.com/en/guatemala)** — distribuidor con presencia en Guatemala para pantallas LED de publicidad exterior.
- **[Pantallas Audio LED Guatemala](https://pantallasaudioledguatemala.com/)** — venta y alquiler de pantallas LED para exteriores.

**Precios de módulos LED exteriores (2025)**

Los precios del mercado global para pantallas LED de exteriores en 2025, según [LED Screen Factory](https://ledscreenfactory.com/outdoor-led-display-price/) y fabricantes como [IAM LED Wall](https://iamledwall.com/how-much-does-an-outdoor-led-screen-cost/):

| Especificación | Precio por m² (USD) | Aplicación |
|---|---|---|
| P10 exterior | USD 280 – 420 | Vistas a >20 m, carreteras |
| P8 exterior | USD 350 – 520 | Vista a 15-25 m, ciudad |
| P6 exterior | USD 500 – 750 | Vista a 10-18 m, urbano premium |

Para una pantalla de 54 m² con pitch P10 (recomendado para corredor de carretera a velocidad >60 km/h):

- Módulos LED P10: USD 15,120 – 22,680 (Q118K – Q177K al tipo de cambio aproximado Q7.8/USD)
- Estructura soporte reforzada (+LED): USD 4,000 – 7,000 (Q31K – Q55K)
- Controladora, cableado, gabinete de energía: USD 3,000 – 5,000 (Q23K – Q39K)
- Instalación profesional (+20% del costo de equipos): USD 4,400 – 6,900 (Q34K – Q54K)
- **Subtotal pantalla LED instalada: USD 26,520 – 41,580 → Q207K – Q324K**

A esto se suman la cimentación reforzada y el sistema eléctrico con transformador de mayor capacidad.

**Inversión inicial comparativa completa**

| Componente | Valla Convencional | Pantalla LED P10 |
|---|---|---|
| Cimentación y estructura metálica | Q 150K – 200K | Q 200K – 280K |
| Sistema publicitario (vinilo / módulos LED) | Q 15K – 25K | Q 207K – 324K |
| Sistema eléctrico | Q 20K – 30K | Q 50K – 90K |
| **Total estimado** | **Q 185K – 255K** | **Q 457K – 694K** |

La pantalla LED representa una inversión **2.5× a 3×** mayor que la valla convencional.

**Ingresos potenciales — comparativa**

La valla convencional alberga **1 anunciante** a tiempo completo. La pantalla LED permite programación dinámica con múltiples anunciantes en rotación:

| Escenario | Valla Convencional | Pantalla LED (rotación) |
|---|---|---|
| Pesimista (40% ocupación) | Q 4,800/mes | Q 20,000/mes |
| Base (60% ocupación) | Q 7,200/mes | Q 36,000/mes |
| Optimista (85% ocupación) | Q 10,200/mes | Q 60,000/mes |

Para LED se asume rotación de 8 spots × 15 segundos = ciclo de 2 minutos. Precio estimado por spot: Q 3,500 – 6,000 / mes en corredor regional. La programación dinámica permite también tarifas premium para horarios pico (6–9h y 17–20h).

**Costos operativos diferenciales**

| Costo | Valla Convencional | Pantalla LED |
|---|---|---|
| Energía eléctrica | Q 600 – 900/mes (iluminación) | Q 3,500 – 5,500/mes (pantalla) |
| Cambio de arte | Q 400 – 800/impresión | Q 0 (cambio remoto) |
| Mantenimiento anual | Q 2,000 – 4,000/año | Q 8,000 – 15,000/año |
| Vida útil estimada | 15 – 20 años | 8 – 12 años (módulos LED) |

**Por qué la estrategia secuencial es la decisión correcta para este proyecto**

La pregunta no es "LED vs. convencional" sino "¿cuándo LED?". Para el perfil de riesgo actual:

1. **Validación de mercado primero**: no existe historial documentado de ocupación en ese tramo exacto de la CA-1 en Salcajá. La inversión LED de Q500K+ sobre una ocupación proyectada (no probada) es un riesgo innecesario.
2. **Punto de equilibrio más rápido**: con valla convencional, el proyecto recupera la inversión en 18–36 meses (escenario base). Con LED el payback es 36–60 meses, retrasando la liquidez disponible para reinversión.
3. **Los módulos LED bajan de precio**: el costo por m² de P10 ha descendido sostenidamente (~15% anual en los últimos 5 años). Esperar 2–3 años puede significar ahorrar USD 3,000–6,000 solo en módulos.
4. **La cimentación soporta ambos**: diseñando la fundación desde el inicio para la carga LED (con un costo incremental menor al 20% de la cimentación), la conversión futura no requiere demolición — solo retirar el frame de vinilo y montar los gabinetes LED.

**Hoja de ruta de conversión**

- **Año 0 – 3**: operar valla convencional, construir relaciones con anunciantes locales, acumular historial de ocupación
- **Año 3**: evaluar ocupación real promedio. Si ≥ 70%, iniciar proceso de cotización para conversión LED
- **Año 4 – 5**: conversión a pantalla LED P10 con los proveedores locales cotizados — la estructura metálica y la cimentación ya están listas
- **Año 5+**: operar como pantalla digital con múltiples anunciantes y tarifas premium
`,
  "doble-cara-costos-operacion": `
El alcance actualizado deja de tratar la valla como una cartelera de una sola cara. La operación doble cara cambia tres cosas a la vez: aumenta la superficie vendible, mejora el potencial de ingresos por ubicación y exige mayor disciplina estructural porque la carga de viento y el momento de volteo dejan menos margen de error.

**Lectura de los formatos anotados**

Las pizarras muestran tres tamaños de referencia: 8×8, 8×12 y 12×20. La lectura más útil para el proyecto es separar área por cara y área comercial total:

| Formato | Área por cara | Área doble cara | Lectura operativa |
|---|---|---|---|
| 8×8 m | 64 m² | 128 m² | Formato compacto, inversión controlada, buen piloto |
| 8×12 m | 96 m² | 192 m² | Mejor equilibrio entre visibilidad e inversión |
| 12×20 m | 240 m² | 480 m² | Escala premium, exige ingeniería y capital mucho mayores |

El proyecto base actual documentado en la app trabaja con 54 m² por cara. Si se mantiene ese tamaño pero se construye doble cara, la superficie vendible sube a **108 m²** sin duplicar por completo la cimentación, columna, acometida y varios costos profesionales.

**Qué costos sí se duplican o suben fuerte**

- Superficie publicitaria: vinilo, lona, malla mesh, tensores, bastidores secundarios y cambios de arte por ambas caras.
- Iluminación: proyectores por dos lados, canalización, circuitos y consumo eléctrico nocturno.
- Mantenimiento visual: limpieza, revisión de tensado, inspección de esquinas y reposición de piezas expuestas.
- Seguro: la suma asegurada sube porque hay más activos instalados y mayor exposición ante terceros.

**Qué costos se comparten parcialmente**

- Estudio geotécnico, topografía, permisos principales y diseño estructural.
- Cimentación, si se diseña desde el inicio para el momento de volteo de doble cara.
- Columna principal, plataforma de trabajo, gabinete técnico y sistema de tierra física.
- Acometida eléctrica, siempre que se dimensione con reserva desde el diseño.

**Rangos de inversión preliminar**

Estos rangos son útiles para conversación con socios, no sustituyen cotización formal. Consideran fabricación metálica, superficie de ambas caras, iluminación, montaje, permisos, imprevistos y refuerzo por viento:

| Escenario | Tamaño | Inversión probable |
|---|---|---|
| Base doble cara | 54 m² por cara | Q240,000 – Q390,000 |
| 8×8 doble cara | 64 m² por cara | Q280,000 – Q460,000 |
| 8×12 doble cara | 96 m² por cara | Q380,000 – Q650,000 |
| 12×20 doble cara | 240 m² por cara | Q900,000 – Q1,800,000+ |

El dato de monoposte de 14 m por Q140,000 anotado en pizarra encaja como referencia parcial de estructura, pero no debe leerse como costo total del proyecto. En una valla doble cara, ese monto no incluye necesariamente cimentación, permisos, seguro, iluminación, superficie publicitaria, cámaras, limpieza, impuestos ni contingencias.

**Paneles y superficie publicitaria**

Para una valla convencional, hay tres rutas:

- **Lona frontlit**: económica, buena para campañas cambiantes. Degrafik publica referencias de Q8 – Q15/m² para impresión simple sin estructura.
- **Malla mesh**: más recomendable en altura o viento porque reduce el efecto vela. Referencia local: Q15 – Q25/m².
- **Lámina galvanizada + vinilo**: más rígida y durable, pero agrega peso y requiere revisar corrosión, fijaciones y drenaje.

Para el proyecto, la recomendación es usar malla o lona de alta resistencia en la fase inicial y dejar la estructura preparada para LED. La lámina galvanizada puede usarse como respaldo o cerramiento, no necesariamente como superficie principal si el cambio de campañas será frecuente.

**Limpieza y autonomía**

La limpieza totalmente automática con hidrolavadora fija no es la primera recomendación. Tiene riesgo de dañar lona/vinilo, gasta más agua, exige bomba más robusta y puede fallar en altura. La solución más sensata es un sistema semiautomático:

- Tanque pequeño o conexión a agua disponible.
- Bomba de baja a media presión, filtro y válvula antirretorno.
- Tubería PVC/PEX protegida contra sol.
- Boquillas de abanico en el borde superior de cada cara.
- Timer para ciclos cortos en madrugada o mañana.
- Drenaje para que el agua no erosione la cimentación ni el talud.

Presupuesto preliminar: **Q5,000 – Q20,000** según altura, acceso a agua, bomba y número de boquillas. Si se usa hidrolavadora, debe quedar como equipo manual de mantenimiento programado, no como sistema fijo permanente.

**Implicación financiera**

La doble cara solo tiene sentido si ambas caras tienen lectura comercial real. Antes de construir, se debe fotografiar y medir: sentido Ciudad de Guatemala → Quetzaltenango, sentido Quetzaltenango → Ciudad de Guatemala, distancia de lectura, velocidad vehicular, obstáculos, cableado, árboles, curvas y retorno visual.

La decisión final no es solo "doble cara porque vende más"; es **doble cara si las dos caras se pueden rentar con calidad similar**. Si una cara queda débil, conviene monetizarla con tarifa secundaria o usarla para marca propia mientras se valida demanda.

**Fuentes consultadas**

- [Degrafik: mantas publicitarias en Guatemala](https://degrafik.com/mantas-publicitarias-guatemala/)
- [El Arenal: lámina lisa galvanizada 4×8 calibre 26](https://elarenal.com.gt/products/lamina-lisa-galvanizada-4-x-8-c-26)
- [SENABED: estructura de valla doble cara en arrendamiento](https://sites.google.com/senabed.gob.gt/arrendamientos/arrendamientos/otros/b-estructura-para-valla-publicitaria)
- [Satélite Publicidad: tarifas publicadas de valla panorámica](https://satelitepublicidad.jimdofree.com/contrataci%C3%B3n-de-medios/vallas-y-mupys/)
`,
  "seguros-camaras-autonomia": `
Una valla remota no se protege solamente con una cámara. Se protege con una combinación de seguro, diseño físico, monitoreo, mantenimiento y contratos claros. La amenaza principal no es una sola: puede ser viento, caída de piezas, robo de cableado, vandalismo, incendio, cortocircuito, daño a terceros o deterioro por falta de mantenimiento.

**Seguro recomendado**

Para este proyecto conviene cotizar un paquete tipo multiriesgo empresarial con tres capas:

| Cobertura | Por qué importa |
|---|---|
| Daños materiales | Protege estructura, iluminación, gabinete, cableado y equipos ante incendio, robo, impacto o eventos cubiertos |
| Responsabilidad civil | Cubre daños a terceros si una pieza cae, se desprende o causa perjuicio |
| Equipo electrónico | Protege cámaras, DVR/NVR, controladores, router 4G, fuentes y futura pantalla LED |

BAM publica una referencia útil para Pyme Protegido: rangos de suma asegurada entre Q200,000 y Q500,000 con tarifa de 1.50%, de Q500,001 a Q1,000,000 con tarifa de 1.10%, y rangos superiores cercanos a 1.00%, más emisión e IVA. Para una suma asegurada de Q500,000, una prima base aproximada sería **Q7,500/año + gastos e IVA**.

**Estimación para el proyecto**

| Suma asegurada | Tarifa referencial | Prima base anual estimada |
|---|---|---|
| Q300,000 | 1.50% | Q4,500 |
| Q500,000 | 1.50% | Q7,500 |
| Q750,000 | 1.10% | Q8,250 |
| Q1,200,000 | 1.00% | Q12,000 |

El número anotado de 7.8 en pizarra parece compatible con una prima anual cercana a Q7,800 para un activo alrededor de Q500,000, antes de confirmar emisión, deducibles, exclusiones y responsabilidad civil real.

**Cámaras de seguridad**

Para una valla en carretera, la opción más limpia es combinar cámaras solares/4G con grabación local:

- 2 cámaras solares 4G/PTZ: una mirando la estructura y otra el acceso.
- 1 cámara fija cableada si existe energía estable.
- Tarjeta microSD o NVR pequeño dentro de gabinete.
- Router 4G con SIM de datos para monitoreo remoto.
- Señal visible de videovigilancia para disuasión.

Referencias actuales en Guatemala: Kemik publica kits desde Q620 hasta Q6,299 según cámaras y grabador. Solant muestra cámara EZVIZ con panel solar alrededor de Q1,406. iSolar muestra cámara solar 4G alrededor de Q1,699.

**Presupuesto recomendado de seguridad**

| Nivel | Componentes | Rango |
|---|---|---|
| Básico | 2 cámaras solares, microSD, señalización | Q3,000 – Q5,500 |
| Operativo | 2 solares + 1 fija, router 4G, gabinete | Q6,000 – Q10,000 |
| Robusto | 4 cámaras, NVR, respaldo eléctrico, sensores | Q12,000 – Q22,000 |

El nivel operativo es el mejor punto de partida: suficiente evidencia visual, monitoreo remoto y costo proporcional al proyecto.

**Protección física**

La cámara ayuda después del evento; la protección física reduce que ocurra:

- Gabinete metálico IP65 con candado y bisagras internas.
- Cableado dentro de conduit metálico, no expuesto.
- Tornillería antirrobo o soldadura en piezas críticas.
- Altura mínima para equipos sensibles.
- Puerta de acceso técnico con registro de mantenimiento.
- Puesta a tierra y protección contra sobretensiones.
- Separación clara entre sistema eléctrico, datos y agua de limpieza.

**Limpieza y mantenimiento**

La autonomía real se logra con rutinas simples, no con mecanismos delicados en altura. La propuesta:

| Frecuencia | Actividad |
|---|---|
| Semanal remoto | Revisar cámaras, estado de energía y evidencia de vandalismo |
| Mensual | Inspección visual, tensión de lona, fijaciones, gabinete y drenajes |
| Trimestral | Limpieza manual o semiautomática, revisión eléctrica y pintura dañada |
| Anual | Auditoría estructural ligera, seguro, permisos y fotografías para expediente |

Para limpieza, una hidrolavadora de 2000 PSI se consigue alrededor de Q1,300, pero debe usarse con criterio. En lona o vinilo conviene baja presión, distancia prudente y boquillas abiertas para no cortar el material.

**Riesgos que debe cubrir el contrato con anunciantes**

El contrato de renta publicitaria debe aclarar qué pasa si hay suspensión por viento, mantenimiento, falla eléctrica, daño de terceros, fuerza mayor o retiro ordenado por autoridad. También debe definir quién paga impresión, instalación del arte, reposición por vandalismo, cambios extra y tiempos mínimos de campaña.

**Fuentes consultadas**

- [BAM: Seguro Pyme Protegido](https://www.bam.com.gt/personas/seguros/seguro-pyme-protegido/)
- [Kemik: kits de cámaras de seguridad](https://www.kemik.gt/kit-de-camaras-de-seguridad)
- [Solant: cámara exterior EZVIZ con panel solar](https://solant.com.gt/producto/ezviz-camara-para-exteriores-modelo-eb8-4g-2k-con-panel-solar/)
- [iSolar: cámara solar 4G](https://isolar.gt/products/camara-solar-con-chip-4g-de-4-megapixeles)
- [Seir Guatemala: hidrolavadora 2000 PSI](https://seir.com.gt/producto/hidrolavadora-electrica-2000-psi-truper/)
`,
  "sociedad-anonima-inversionistas": `
La pregunta de fondo no es solamente cómo crear una sociedad, sino cómo juntar capital sin que la relación entre socios se vuelva frágil. Para una valla publicitaria con inversión compartida, activos físicos, permisos, contratos de renta y riesgo de responsabilidad civil, la figura legal debe ordenar propiedad, administración y salida de inversionistas.

**Conclusión ejecutiva**

La **Sociedad Anónima** sí es una buena opción si el proyecto tendrá varios inversionistas, aportes diferenciados y posibilidad de entrada o salida mediante acciones. Pero no debe ser el primer gasto si todavía no se ha validado permiso, terreno, diseño estructural y viabilidad de ambas caras.

La ruta recomendada:

1. Preacuerdo entre socios y validación del terreno.
2. Consulta municipal, DGAC y Caminos si aplica.
3. Cotización estructural preliminar y presupuesto doble cara.
4. Pacto de socios.
5. Constitución de S.A. cuando el proyecto ya tenga viabilidad técnica y legal.

**Opciones legales comparadas**

| Figura | Cuándo conviene | Riesgo principal |
|---|---|---|
| Comerciante individual | Una sola persona prueba una operación pequeña | Responsabilidad personal ilimitada |
| Contrato de participación | Piloto rápido donde una persona gestiona y otros aportan | Menos institucional para bancos, proveedores y salida de socios |
| S.R.L. | Pocos socios con control cerrado de entrada y salida | Menos flexible para rondas o muchos inversionistas |
| S.A. | Proyecto con varios inversionistas, acciones y operación formal | Más costos contables, legales y administrativos |

Para este caso, la S.A. gana cuando el proyecto se formaliza como activo de inversión: la valla pertenece a la sociedad, los socios tienen acciones, los ingresos entran a la sociedad y los gastos salen con trazabilidad.

**Qué aporta una S.A.**

- Responsabilidad de accionistas limitada al pago de sus acciones.
- Acciones para distribuir participación: 50/50, 70/30, 90/10 o cualquier estructura acordada.
- Representante legal para firmar contratos de terreno, anunciantes, seguros y proveedores.
- Patrimonio separado del patrimonio personal de los socios.
- Mayor claridad si se quiere vender una parte del proyecto o incorporar nuevos socios.

**Qué no resuelve por sí sola**

La S.A. no sustituye el pacto de socios. Sin pacto, pueden quedar vacíos peligrosos:

- Quién decide contratar deuda o reinvertir utilidades.
- Qué pasa si un socio no aporta su parte.
- Quién administra la cuenta bancaria.
- Cuándo se reparten dividendos.
- Cómo se valoran acciones si alguien quiere salir.
- Qué pasa si se pierde el permiso o hay daño estructural.

**Contenido mínimo del pacto de socios**

| Tema | Regla recomendada |
|---|---|
| Aportes | Monto, fecha, forma de pago y consecuencia por incumplimiento |
| Administración | Representante legal, firma bancaria y límites de gasto |
| Reserva | Separar mensualidad para mantenimiento, seguro, impuestos y emergencias |
| Dividendos | Repartir solo después de cubrir reserva y obligaciones |
| Salida | Derecho de tanteo para que socios compren antes que terceros |
| Dilución | Qué pasa si se necesita más capital y un socio no aporta |
| Conflictos | Mediación/arbitraje o jurisdicción acordada |

**Costos y trámites**

Fuentes legales y guías de inscripción indican que la S.A. requiere escritura pública, Registro Mercantil, representante legal, NIT/SAT, dirección fiscal, facturación electrónica y contador. Living in Guatemala estima una S.A. en Q365+ sin honorarios notariales, con honorarios variables de Q2,000 a Q10,000. En la práctica, para arrancar ordenado conviene presupuestar **Q4,000 – Q10,000** entre constitución, notario, trámites y arranque contable.

El Código de Comercio define la S.A. como sociedad con capital dividido en acciones y responsabilidad limitada al pago de las acciones suscritas. La versión consultada todavía muestra capital pagado mínimo de Q5,000 en el texto base, pero guías recientes del Registro Mercantil y trámites 2026 refieren reformas con mínimo de Q200. Antes de firmar, el notario debe confirmar el criterio vigente aplicable.

**Obligaciones operativas**

- Contabilidad mensual y declaraciones ante SAT.
- Emisión de facturas FEL por renta publicitaria.
- Cuenta bancaria a nombre de la sociedad.
- Actas societarias para decisiones relevantes.
- Renovación o pago de permisos/tributos de anuncios.
- Seguro a nombre correcto: sociedad propietaria u operadora del activo.

**Recomendación para el proyecto**

Crear la S.A. es lo más ordenado si ya hay intención seria de sumar inversionistas. Pero primero prepararía un expediente de inversión con estas piezas:

1. Ubicación y fotos por ambos sentidos.
2. Presupuesto doble cara.
3. Seguro estimado.
4. Plan de cámaras y mantenimiento.
5. Borrador de pacto de socios.
6. Cronograma de permisos.
7. Escenario de ingresos por cara.

Con ese expediente, la S.A. deja de ser un trámite abstracto y se vuelve el vehículo legal de un proyecto ya defendible.

**Fuentes consultadas**

- [Código de Comercio de Guatemala, Decreto 2-70](https://www.wipo.int/wipolex/en/legislation/details/2018)
- [Registro Mercantil: inscripción de sociedades](https://www.mineco.gob.gt/images/viceministerio_asuntos_registrales/registro_mercantil/manuales/inscripcion_de_sociedades.pdf)
- [Living in Guatemala: inscribir empresa en Guatemala 2026](https://livinginguatemala.com/es/tramites/inscribir-empresa/)
`,
  "energia-solar-valla-autonoma": `
La energía solar sí puede aportar mucho al proyecto, pero debe dimensionarse con cuidado. Para una valla, hay tres niveles muy distintos: alimentar cámaras y router, respaldar gabinete técnico e iluminar dos caras completas durante la noche. Los dos primeros son relativamente baratos; el tercero exige paneles, baterías, estructura y mantenimiento más serios.

**Potencial solar en Guatemala**

Guatemala tiene buen recurso solar. El Ministerio de Energía y Minas reporta un promedio anual nacional de radiación global de **5.3 kWh/m²/día**. Para cálculo conservador en Salcajá/Quetzaltenango conviene usar 4.5 a 5.0 horas solares pico por día, especialmente por nubosidad, lluvia, polvo, orientación real y pérdidas del sistema.

Regla práctica: un panel de 645 W puede producir alrededor de 2.3 a 3.0 kWh/día en condiciones reales, dependiendo de ubicación, inclinación, sombras y eficiencia del inversor/controlador.

**Tres escenarios solares para la valla**

| Escenario | Qué alimenta | Inversión probable | Recomendación |
|---|---|---|---|
| Solar mínimo | 2 cámaras solares 4G autónomas | Q3,000 – Q6,000 | Sí, desde el inicio |
| Solar operativo | Cámaras, router 4G, sensores, gabinete técnico | Q9,000 – Q18,000 | Recomendado |
| Solar iluminación | Proyectores LED para 1–2 caras varias horas | Q35,000 – Q90,000+ | Solo si no hay red o si se busca independencia parcial |

La mejor decisión para el proyecto actual es **sistema híbrido**: red eléctrica para iluminación principal y solar con batería para cámaras, router, sensores y respaldo. Esto mantiene vigilancia aunque haya corte eléctrico o sabotaje de acometida.

**Consumo estimado**

| Equipo | Consumo típico | Horas | Energía diaria |
|---|---|---|---|
| Cámara solar/4G individual | 5 – 10 W promedio | 24 h | 0.12 – 0.24 kWh |
| Router 4G | 8 – 15 W | 24 h | 0.19 – 0.36 kWh |
| NVR pequeño | 10 – 25 W | 24 h | 0.24 – 0.60 kWh |
| Proyector LED 150 W | 150 W | 10 h | 1.50 kWh |
| 6 proyectores LED | 900 W | 10 h | 9.00 kWh |
| 12 proyectores LED doble cara | 1,800 W | 10 h | 18.00 kWh |

Esto muestra el punto crítico: cámaras y comunicaciones pueden funcionar con un sistema pequeño. Iluminación de doble cara toda la noche requiere un sistema mucho más grande, sobre todo por baterías.

**Dimensionamiento recomendado**

Para seguridad y monitoreo:

- 2 paneles solares de 450–645 W.
- Batería LiFePO4 de 1.2–2.5 kWh.
- Controlador MPPT.
- Router 4G.
- Gabinete IP65 con ventilación y candado.
- Protección contra sobretensión y tierra física.

Rango probable: **Q9,000 – Q18,000** instalado, según batería, estructura y calidad de equipo.

Para iluminación parcial:

- 4 a 6 paneles de 550–645 W.
- Batería LiFePO4 de 5.12 kWh o más.
- Inversor/controlador híbrido.
- Fotocelda o timer astronómico.
- Limitación de horario: 6:00 p.m. a 11:00 p.m. o ciclos de menor consumo.

Rango probable: **Q35,000 – Q60,000** si se ilumina moderadamente. Si se pretende alimentar 12 proyectores toda la noche, el banco de baterías debe crecer bastante y puede superar **Q90,000**.

**Por qué no conviene solar total desde el inicio**

Una valla doble cara iluminada puede consumir 9 a 18 kWh por noche si se usan varios reflectores. Para cubrir eso con solar fuera de red se necesitan paneles, baterías para noche, reserva para días nublados, inversor robusto y espacio físico seguro. La batería sola puede ser uno de los rubros más caros.

Ejemplo: Chipcom publica una batería LiFePO4 de 5.12 kWh en Q20,095.65. Esa batería no alcanza para iluminar 12 proyectores de 150 W durante 10 horas; para eso se requerirían varias unidades o reducir horario/intensidad.

**Uso inteligente de solar**

La energía solar debe usarse donde más valor da:

- Mantener cámaras y router activos aunque fallen red eléctrica o breaker.
- Evitar visitas por baterías descargadas en cámaras.
- Alimentar sensores de apertura/vibración.
- Dar respaldo al gabinete técnico.
- Preparar futura telemetría: consumo, estado de batería, temperatura y señal 4G.

Para iluminación comercial fuerte, la red eléctrica sigue siendo más simple y confiable. Si el sitio no tiene acometida viable, entonces sí se debe presupuestar solar off-grid como sistema formal, no como accesorio.

**Criterios de instalación**

- Orientar paneles hacia el sur o suroeste con inclinación aproximada de 14°–20°, ajustada por estructura y sombras.
- Evitar que la propia valla proyecte sombra sobre paneles en la tarde.
- Instalar paneles en estructura antirrobo, idealmente alta y con tornillería especial.
- Separar físicamente agua de limpieza, cables DC, inversor y baterías.
- Usar gabinete ventilado, protegido de lluvia directa y sin exposición solar extrema sobre baterías.
- Incluir fusibles, breakers DC/AC, supresor de sobretensión y puesta a tierra.

**Costos de mercado útiles**

Pointer Solar publica sistemas instalados 2026 con paneles de 645 W: 2.5 kW por Q21,800, 6.25 kW por Q50,500 y 10 kW por Q76,850. Su rango justo indicado es Q8.00 – Q9.50 por watt instalado, con microinversores y trámites incluidos. Para el proyecto, esos rangos sirven si se busca interconexión a red; para sistema con baterías el costo sube.

Yupi Solar publica un kit de 180 W con batería 100 Ah en Q2,399. Este tipo de kit sirve para cargas pequeñas, no para iluminación principal de valla.

**Recomendación final**

Implementar energía solar en dos fases:

1. **Fase 1 — seguridad autónoma**: cámaras solares + respaldo para router/gabinete. Presupuesto Q9,000 – Q18,000.
2. **Fase 2 — iluminación solar parcial**: solo si el costo de energía o la falta de acometida lo justifica. Presupuesto Q35,000 – Q90,000+.

Así el proyecto gana autonomía y seguridad sin sobredimensionar desde el día uno. La inversión grande debe reservarse para estructura, permisos, seguro y validación comercial de ambas caras.

**Fuentes consultadas**

- [Ministerio de Energía y Minas: energías renovables y radiación solar](https://mem.gob.gt/impulsemos-el-cuidado-de-nuestro-planeta-con-el-uso-de-energias-renovables/)
- [Pointer Solar: precios de paneles solares en Guatemala 2026](https://www.pointer.solar/blog/precio-paneles-solares-guatemala-2026)
- [Yupi Solar: kit solar 180 W con batería 100 Ah](https://yupisolar.com/products/kit-solar-300-watts)
- [Chipcom: batería LiFePO4 5.12 kWh](https://chipcom.com.gt/producto/V5BATTERY-PYTES-230485)
- [Solargis: mapas solares de Guatemala](https://solargis.com/cn/resources/free-maps-and-gis-data?locality=guatemala)
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
            <span className="font-mono text-xs text-text-muted">{article.category}</span>
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
                        __html: renderInline(preLines.join(" ")),
                      }}
                    />
                  )}
                  <ul className="space-y-1.5 pl-1">
                    {listItems.map((item, li) => (
                      <li key={li} className="flex gap-2.5 text-sm text-text-secondary leading-relaxed">
                        <span className="text-text-muted shrink-0 mt-0.5">·</span>
                        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: controlled static content */}
                        <span dangerouslySetInnerHTML={{
                          __html: renderInline(item),
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
                      <span className="font-mono text-xs text-text-muted shrink-0 mt-0.5 w-4">{li + 1}.</span>
                      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: controlled static content */}
                      <span dangerouslySetInnerHTML={{
                        __html: renderInline(item.replace(/^\d+\.\s/, "")),
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
                  __html: renderInline(para),
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
