import groq from "groq"
const querySiteMeta:Query.Request = groq`
*[_type=="siteMeta"][0] {
  "name": siteName,
  "title": title+" | "+siteName+" | "+description,
  description,
  "canonical": url,
  isGoogleAnalyticsEnabled,
  isPwa,
  manifest {
    display,
    short_name,
    "background_color": background_color.hex,
    "theme_color": theme_color.hex,
    "start_url": coalesce(start_url, "/")
  },
  "openGraph": {
    "basic": {
      "title": ogTitle,
      url,
      "image": image.asset->url,
      "type": coalesce(ogType, "website")
    },
    "optional": {
      "locale": coalesce(locale,"en-us"),
      "site_name": siteName,
      "description":ogDescription
    },
    "image": image.asset-> {
      "alt": altText,
      url,
      "height": metadata.dimensions.height,
      "width": metadata.dimensions.width,
      "type": coalesce(mimeType, "image/jpeg"),
    }
  }
}
`
export default async function getSiteMeta(
  client: Query.SanityClientLike<Query.Site>,
  query: Query.Request = querySiteMeta,
  mutation: Query.Mutation = "fetch"
):Promise<Query.Site> {
  const site = await client[mutation](query)
  return site
}