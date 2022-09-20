import type { PicoSanity } from "picosanity";
import type { SanityClient } from "@sanity/client";
import type { Rule } from "@sanity/types";

declare global {
  interface Webmanifest extends Schema.Object {}

  interface UnknownObject extends Object {
    [x: string]: any
  }
  interface Context {
    document: UnknownObject
    parent?: UnknownObject
    value: any
    currentUser: currentUser
  }
  interface currentUser {
    id: string
    email: string
    name: string
    profileImage?: string
    role?: string
    roles?: Schema.Base[]
  }

  export namespace Query {
    type Mutation = "fetch" | "config" | string
    interface Client<T> {
      [key: string]: (arg0: Request) => Promise<T>
    }
    type SanityClientLike<T> = (SanityClient | PicoSanity) & Client<T>
    interface Meta {
      title: string
      description?: string
      canonical: URL
      lang?: string
    }
    interface Site extends Meta {
      openGraph?: OpenGraph.API
      manifest?: Webmanifest
    }
    export interface Request extends String {}
  }
  namespace OpenGraph {
    interface Basic {
      title: string
      type: string
      image: URL["href"]
      url: URL["href"]
    }
    interface Optional {
      audio?: URL["href"]
      description?: string
      determiner?: string
      locale?: Locale["value"]
      localeAlternate?: Locales["values"]
      siteName?: string
      video?: URL["href"]
    }
    interface Image {
      url: URL["href"]
      alt: string
      height?: number
      width?: number
    }
    interface API {
      basic: Basic
      optional?: Optional
      image?: Image
    }
    interface Flat extends Basic, Optional, Image {}
  }
  export namespace Schema {
    interface Base {
      name: string
      title: string
      description?: string
    }
    interface WithConditionals {
      hidden?(context: Context): boolean
      readonly?(context: Context): boolean
    }
    export interface Field extends Base, WithConditionals {
      type: string
      options?: {}
      fieldset?: Fieldset["name"]|Fieldset["name"][]
      group?: string[] | string | undefined
      validation?(Rule: Rule, context?: Context): boolean
      initialValue?: unknown
    }


    export interface Object extends Base, WithConditionals {
      type: string;
      fields: Field[]
      groups?: Fieldset[]
      fieldsets?: Fieldset[]
      initialValues?: unknown
      // [key: string]: any
    }
    export interface Document extends Object {}
    interface Fieldset extends Base, WithConditionals {
      default?: boolean
    }

    export interface FieldSelector {
      sourceObject: Schema.Object
      searchElements?: string[] | string
      property?: string
    }
    export interface Types<T> {
      [x: string]: T;
    }
  }
  interface Meta {
    title: string
    description?: string
    lang?: string
  }
  export interface Site extends Meta {
    openGraph?: OpenGraph.API
    manifest?: Webmanifest
  }
  interface Locale {
    title: string
    value: string | AngloFrench
  }

  type AngloFrench = "en-us" | "en-gb" | "fr"
  type DisplayMode = "browser" | "fullscreen" | "minimal-ui" | "standalone"
  export interface Locales extends Array<Locale> {}
  export interface DisplayModes extends Array<DisplayMode> {}
}
