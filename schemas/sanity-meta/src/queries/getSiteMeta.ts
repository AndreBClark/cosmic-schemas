const querySiteMeta = `
*[_type=="siteMeta"][0] {
  title,
  description,
  "canonical": url,
  isGoogleAnalyticsEnabled,
  isPwa,
  manifest {
    ...,
    "background_color": background_color.hex,
    "theme_color": theme_color.hex
  },
  "openGraph": {
    "basic": {
      "title": ogTitle,
      url,
      "image": image.asset->url
    },
    "optional": {
      locale,
      site_name,
      ogDescription
    },
    "image": image.asset-> {
      url,
      "height": metadata.dimensions.height,
      "width": metadata.dimensions.width,
      "type": mimeType,
    }
  }
}
`
export default async function getSiteMeta(
  client: Query.SanityClientLike<Site>,
  query: Query.Query = querySiteMeta,
  mutation: string = "fetch"
):Promise<Query.Site> {
  const site: Site = await client[Symbol(mutation)](query)
  return site
}