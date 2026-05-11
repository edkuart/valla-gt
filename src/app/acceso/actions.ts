"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function verifyPin(formData: FormData) {
  const pin = String(formData.get("pin") ?? "").trim()
  const next = String(formData.get("next") ?? "/")
  const validPin = process.env.VALLA_ACCESS_PIN

  if (validPin && pin === validPin) {
    const jar = await cookies()
    jar.set("valla_access", pin, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    })
    redirect(next)
  }

  const errorUrl = `/acceso?error=1${next !== "/" ? `&next=${encodeURIComponent(next)}` : ""}`
  redirect(errorUrl)
}
