export interface OgData {
  url: string;
  domain: string;
  title: string | null;
  siteName: string | null;
  description: string | null;
  image: string | null;
  width: number | null;
  height: number | null;
  small: boolean;
  color: string;
  icon: string;
}

export async function getOg(url: string): Promise<OgData> {
  const uri = new URL(url);
  const domain = uri.hostname.replace(/^www\./, "");
  const icon = `https://www.google.com/s2/favicons?domain=${uri.hostname}&sz=128`;
  const fallback = "#4e5058";

  const empty: OgData = {
    url,
    domain,
    title: domain,
    siteName: domain,
    description: null,
    image: null,
    width: null,
    height: null,
    small: false,
    color: fallback,
    icon,
  };

  try {
    const res = await fetch(url, {
      next: { revalidate: 86400 },
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)",
      },
    });

    if (!res.ok) return empty;

    const html = await res.text();

    const tag = (keys: string[]) => {
      for (const k of keys) {
        const m = html.match(
          new RegExp(
            `<meta[^>]+(?:name|property)=["']${k}["'][^>]+content=["']([^"']+)["']|<meta[^>]+content=["']([^"']+)["'][^>]+(?:name|property)=["']${k}["']`,
            "i",
          ),
        );
        if (m) return m[1] || m[2] || null;
      }
      return null;
    };

    const docTitle =
      html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1]?.trim() || null;
    const title = tag(["og:title", "twitter:title"]) || docTitle || domain;
    const description = tag([
      "og:description",
      "twitter:description",
      "description",
    ]);
    const siteName = tag(["og:site_name", "application-name"]) || domain;
    const color = tag(["theme-color", "msapplication-TileColor"]) || fallback;

    const card = tag(["twitter:card"]);
    const w = parseInt(
      tag(["og:image:width", "twitter:image:width"]) || "",
      10,
    );
    const h = parseInt(
      tag(["og:image:height", "twitter:image:height"]) || "",
      10,
    );
    const width = Number.isNaN(w) ? null : w;
    const height = Number.isNaN(h) ? null : h;

    const small =
      card === "summary" ||
      Boolean(width && height && (width < 250 || height < 150));

    let img = tag(["og:image", "twitter:image", "twitter:image:src"]);
    if (img && !img.startsWith("http")) {
      img = new URL(img, uri.origin).toString();
    }

    return {
      url,
      domain,
      title,
      siteName,
      description,
      image: img,
      width,
      height,
      small,
      color,
      icon,
    };
  } catch {
    return empty;
  }
}
