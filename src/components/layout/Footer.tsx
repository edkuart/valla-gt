import Link from "next/link"
import { PrintButton } from "./PrintButton"

const FOOTER_LINKS = [
  { href: "/proyecto", label: "Proyecto" },
  { href: "/ingenieria", label: "Ingeniería" },
  { href: "/terreno", label: "Terreno" },
  { href: "/materiales", label: "Materiales" },
  { href: "/presupuesto", label: "Presupuesto" },
  { href: "/roi", label: "ROI" },
  { href: "/investigacion", label: "Investigación" },
  { href: "/proveedores", label: "Proveedores" },
  { href: "/timeline", label: "Timeline" },
  { href: "/futuro", label: "Visión Futura" },
  { href: "/galeria", label: "Galería" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated mt-24 print:hidden">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-5 w-5 rounded-sm bg-accent" />
              <span className="font-display text-sm font-bold text-text-primary">VALLA GT</span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed max-w-xs">
              Proyecto de infraestructura publicitaria metálica premium. Planificación técnica y
              financiera — Guatemala, 2026.
            </p>
            <div className="mt-5">
              <PrintButton />
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
              Secciones
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-xs text-text-muted">
            VALLA GT — DOCUMENTO CONFIDENCIAL
          </span>
          <span className="font-mono text-xs text-text-muted">
            Estimados preliminares. No constituyen garantía de resultados.
          </span>
        </div>
      </div>
    </footer>
  )
}
