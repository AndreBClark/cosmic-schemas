const querySiteMeta = `
*[_type=="siteMeta"][0] {
  title,
  description,
  "canonical": openGraph.basic.url,
  isGoogleAnalyticsEnabled,
  isPwa,
  manifest {
    ...,
    "background_color": background_color.hex,
    "theme_color": theme_color.hex
  },
  openGraph {
    basic {
      title,
      url,
      "image": image.asset->url
    },
    optional {
      locale,
      site_name,
      description
    }
    image {
      "url": openGraph.basic.image.asset->url,
      "alt": openGraph.basic.image.asset->alt
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