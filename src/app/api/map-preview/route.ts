import { TERRAIN_MAP } from "@/data/terrain-map"

export const runtime = "nodejs"

const MAP_SIZE = "640x360"
const MAP_SCALE = "2"

function getMapsApiKey() {
  return process.env.GOOGLE_MAPS_API_KEY ?? process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
}

function fallbackSvg(message = "Preview de mapa pendiente") {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#151515"/>
      <stop offset="1" stop-color="#23201a"/>
    </linearGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1280" height="720" fill="url(#bg)"/>
  <rect width="1280" height="720" fill="url(#grid)"/>
  <circle cx="640" cy="332" r="10" fill="#b8945a"/>
  <circle cx="640" cy="332" r="32" fill="none" stroke="#b8945a" stroke-opacity="0.5" stroke-width="2"/>
  <text x="640" y="392" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" font-weight="700" fill="#f7f2ea">${message}</text>
  <text x="640" y="434" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" fill="#b9b2a8">${TERRAIN_MAP.coordinatesLabel}</text>
  <text x="640" y="466" text-anchor="middle" font-family="Arial, sans-serif" font-size="17" fill="#8f877d">${TERRAIN_MAP.route} · ${TERRAIN_MAP.municipality}</text>
</svg>`
}

export async function GET(request: Request) {
  const apiKey = getMapsApiKey()

  if (!apiKey) {
    return new Response(fallbackSvg(), {
      headers: {
        "Cache-Control": "public, max-age=300",
        "Content-Type": "image/svg+xml; charset=utf-8",
      },
    })
  }

  const { searchParams } = new URL(request.url)
  const mapType = searchParams.get("type") === "roadmap" ? "roadmap" : "satellite"
  const center = `${TERRAIN_MAP.latitude},${TERRAIN_MAP.longitude}`
  const params = new URLSearchParams({
    center,
    zoom: String(TERRAIN_MAP.zoom),
    size: MAP_SIZE,
    scale: MAP_SCALE,
    maptype: mapType,
    markers: `color:red|label:V|${center}`,
    key: apiKey,
  })

  const response = await fetch(`https://maps.googleapis.com/maps/api/staticmap?${params.toString()}`, {
    next: { revalidate: 60 * 60 * 24 },
  })

  if (!response.ok) {
    return new Response(fallbackSvg("No se pudo cargar Google Maps"), {
      status: 200,
      headers: {
        "Cache-Control": "public, max-age=300",
        "Content-Type": "image/svg+xml; charset=utf-8",
      },
    })
  }

  const body = await response.arrayBuffer()
  return new Response(body, {
    headers: {
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
      "Content-Type": response.headers.get("Content-Type") ?? "image/png",
    },
  })
}
