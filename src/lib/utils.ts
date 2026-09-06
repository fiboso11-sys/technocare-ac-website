export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return fromEnv || "https://www.technocareac.com";
}

export function absoluteUrl(path = "/") {
  const site = getSiteUrl();
  if (!path || path === "/") return site;
  return `${site}${path.startsWith("/") ? path : `/${path}`}`;
}

export function externalRel(href: string) {
  try {
    const url = new URL(href);
    if (url.origin === getSiteUrl()) return undefined;
    return "noopener noreferrer";
  } catch {
    return undefined;
  }
}
