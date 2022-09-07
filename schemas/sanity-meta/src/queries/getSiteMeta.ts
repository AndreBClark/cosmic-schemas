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
    "basic": {
      title,
      url,
      "image": image.asset->url
    },
    "optional": {
      locale,
      site_name,
      description
    }
  }
}
`


export default async function getSiteMeta(
  client: SanityClientLike,
  query: string = querySiteMeta,
  mutation = "fetch"
):Promise<Site> {
  const site: Site = await client[mutation](query)
  return site
}

interface Meta {
  title: string
  description?: string
  lang?: string
}
interface Site extends Meta {
  openGraph?: OpenGraph
  manifest?: Webmanifest
}
interface SanityClientLike {
  [key: string]: (arg0: string) => Promise<Site>;
  fetch: (arg0: string) => Promise<Site>
}
export interface OpenGraph {
  basic: {
    title: string;
    type: string;
    image: string;
    url: URL["href"];
  },
  optional?: {
    audio?: URL["href"];
    description?: string;
    determiner?: string;
    locale?: string;
    localeAlternate?: Array<string>;
    siteName?: string;
    video?: URL["href"];
  }
}
interface ObjectSchema {
  name: string
  title: string
  type?: string
  options?: {}
}
interface Field extends ObjectSchema {
  fieldset?: string
}

interface Webmanifest extends ObjectSchema {
  type: string
  fieldsets?: ObjectSchema[]
  fields: Field[]
}