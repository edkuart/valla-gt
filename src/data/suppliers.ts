export type SupplierStatus = "identified" | "contacted" | "quoted" | "selected"
export type SupplierSpecialty =
  | "Estructura Metálica"
  | "Obra Civil"
  | "Ingeniería Estructural"
  | "Sistema Eléctrico"
  | "Iluminación LED"
  | "Impresión de Vinilo"
  | "Permisos y Trámites"

export interface Supplier {
  id: string
  name: string
  specialty: SupplierSpecialty
  location: string
  status: SupplierStatus
  notes?: string
  contact?: string
}

export const SUPPLIERS_DISCLAIMER =
  "Directorio de referencia para contacto y cotización. No implica selección definitiva. La decisión final dependerá de cotizaciones formales, referencias y capacidad técnica verificada."

export const SUPPLIERS: Supplier[] = [
  {
    id: "s1",
    name: "Por definir — Taller metalmecánico",
    specialty: "Estructura Metálica",
    location: "Guatemala, zona industrial",
    status: "identified",
    notes: "Se busca taller con experiencia en estructuras de vallas y publicidad exterior. Mínimo 5 proyectos similares ejecutados.",
  },
  {
    id: "s2",
    name: "Por definir — Contratista de obra civil",
    specialty: "Obra Civil",
    location: "Guatemala",
    status: "identified",
    notes: "Debe tener experiencia en cimentaciones especiales y muros de retención. Se solicitarán 3 cotizaciones comparativas.",
  },
  {
    id: "s3",
    name: "Por definir — Ingeniero estructural",
    specialty: "Ingeniería Estructural",
    location: "Guatemala",
    status: "identified",
    notes: "Profesional colegiado activo en el Colegio de Ingenieros de Guatemala. Con experiencia en estructuras de anuncio exterior.",
  },
  {
    id: "s4",
    name: "Por definir — Instalador eléctrico certificado",
    specialty: "Sistema Eléctrico",
    location: "Guatemala",
    status: "identified",
    notes: "Debe estar registrado ante EEGSA o distribuidora local para gestionar acometida. Experiencia en instalaciones industriales.",
  },
  {
    id: "s5",
    name: "Por definir — Proveedor iluminación LED",
    specialty: "Iluminación LED",
    location: "Guatemala / importado",
    status: "identified",
    notes: "Se evalúan marcas Philips, Osram y equivalentes. Garantía mínima 3 años, IP65, temperatura 5000K.",
  },
  {
    id: "s6",
    name: "Por definir — Imprenta gran formato",
    specialty: "Impresión de Vinilo",
    location: "Guatemala",
    status: "identified",
    notes: "Impresión UV sobre vinilo 440g/m². Capacidad de entrega en 48–72 horas para cambio rápido de arte.",
  },
  {
    id: "s7",
    name: "Por definir — Gestor de permisos",
    specialty: "Permisos y Trámites",
    location: "Municipio correspondiente",
    status: "identified",
    notes: "Gestor con experiencia en licencias de anuncio exterior en el municipio. Conocimiento de reglamento local de publicidad.",
  },
]
