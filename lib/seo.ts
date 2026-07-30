import { site } from "@/data/site";

/** Canonical absolute URL for a path (e.g. `/projects`). */
export function canonicalUrl(path = "/"): string {
  const base = site.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${base}${withSlash === "//" ? "/" : withSlash}`;
}
