"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/proyecto", label: "Proyecto" },
  { href: "/ingenieria", label: "Ingeniería" },
  { href: "/roi", label: "ROI" },
  { href: "/investigacion", label: "Investigación" },
  { href: "/timeline", label: "Timeline" },
]

const ALL_SECTIONS = [
  { href: "/proyecto", label: "Proyecto", eyebrow: "01" },
  { href: "/ingenieria", label: "Ingeniería", eyebrow: "02" },
  { href: "/terreno", label: "Terreno", eyebrow: "03" },
  { href: "/materiales", label: "Materiales", eyebrow: "04" },
  { href: "/presupuesto", label: "Presupuesto", eyebrow: "05" },
  { href: "/roi", label: "ROI / Accionistas", eyebrow: "06" },
  { href: "/investigacion", label: "Investigación", eyebrow: "07" },
  { href: "/timeline", label: "Timeline", eyebrow: "08" },
  { href: "/futuro", label: "Visión LED-Ready", eyebrow: "09" },
  { href: "/galeria", label: "Galería", eyebrow: "10" },
  { href: "/proveedores", label: "Proveedores", eyebrow: "11" },
]

export function PublicNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close on route change
  useEffect(() => { setOpen(false) }, [pathname])

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-bg-base/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-6 w-6 rounded-sm bg-accent" />
            <span className="font-display text-sm font-bold tracking-wide text-text-primary group-hover:text-accent transition-colors">
              VALLA GT
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "bg-bg-subtle text-text-primary"
                      : "text-text-secondary hover:text-text-primary hover:bg-bg-subtle"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop status indicator */}
          <div className="hidden items-center gap-2 md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-success-text animate-pulse" />
            <span className="font-mono text-xs text-text-muted">SISTEMA ACTIVO</span>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col items-center justify-center gap-1.5 p-2 md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            <span
              className={`block h-px w-5 bg-text-secondary transition-transform duration-200 ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-text-secondary transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-text-secondary transition-transform duration-200 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden" aria-modal="true">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-bg-base/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          {/* Panel */}
          <div className="absolute top-16 left-0 right-0 border-b border-border bg-bg-base">
            <nav className="mx-auto max-w-7xl px-6 py-4">
              <Link
                href="/"
                className={`flex items-center gap-3 rounded-md px-3 py-3 text-sm transition-colors mb-2 ${
                  pathname === "/" ? "text-accent" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                <span className="font-mono text-xs text-text-muted">00</span>
                Inicio
              </Link>
              <div className="h-px bg-border mb-2" />
              {ALL_SECTIONS.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors ${
                    pathname.startsWith(s.href) ? "text-accent" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  <span className="font-mono text-xs text-text-muted w-5">{s.eyebrow}</span>
                  {s.label}
                </Link>
              ))}
              <div className="mt-4 flex items-center gap-2 px-3 pb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-success-text animate-pulse" />
                <span className="font-mono text-xs text-text-muted">SISTEMA ACTIVO</span>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
