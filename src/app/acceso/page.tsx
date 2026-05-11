import { verifyPin } from "./actions"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Acceso — Valla GT",
  robots: { index: false, follow: false },
}

interface Props {
  searchParams: Promise<{ error?: string; next?: string }>
}

export default async function AccesoPage({ searchParams }: Props) {
  const { error, next } = await searchParams
  const hasError = error === "1"

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg-base px-6">
      {/* Background grid */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border-dim) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-dim) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative w-full max-w-sm">
        {/* Brand */}
        <div className="mb-10 flex items-center gap-3">
          <div className="h-6 w-6 rounded-sm bg-accent" />
          <span className="font-display text-sm font-bold tracking-wide text-text-primary">
            VALLA GT
          </span>
        </div>

        {/* Card */}
        <div className="rounded-lg border border-border bg-bg-card p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-1">
            Acceso restringido
          </p>
          <h1 className="font-display text-2xl font-bold text-text-primary mb-2">
            Dossier de Inversión
          </h1>
          <p className="text-sm text-text-secondary mb-8 leading-relaxed">
            Documento confidencial. Ingresa el PIN de acceso para continuar.
          </p>

          <form action={verifyPin} className="space-y-5">
            <input type="hidden" name="next" value={next ?? "/"} />

            <div>
              <label
                htmlFor="pin"
                className="block font-mono text-xs uppercase tracking-widest text-text-muted mb-2"
              >
                PIN de acceso
              </label>
              <input
                id="pin"
                name="pin"
                type="password"
                inputMode="numeric"
                autoComplete="current-password"
                autoFocus
                required
                className={`w-full rounded-md border px-4 py-3 bg-bg-elevated text-text-primary font-mono text-lg tracking-[0.5em] placeholder:text-text-muted placeholder:tracking-normal transition-colors focus:outline-none focus:border-accent ${
                  hasError ? "border-error-text" : "border-border"
                }`}
                placeholder="····"
              />
              {hasError && (
                <p className="mt-2 font-mono text-xs text-error-text">
                  PIN incorrecto. Intenta nuevamente.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-accent px-4 py-3 font-mono text-xs uppercase tracking-widest text-bg-base font-bold transition-opacity hover:opacity-90 active:opacity-80"
            >
              Acceder
            </button>
          </form>
        </div>

        <p className="mt-6 text-center font-mono text-xs text-text-muted">
          DOCUMENTO CONFIDENCIAL — USO EXCLUSIVO PARA INVERSORES
        </p>
      </div>
    </div>
  )
}
