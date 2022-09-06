export {};
declare global {
  interface Meta {
    title: string;
    description?: string;
    lang?: string;
  }
  export interface Site extends Meta {
    openGraph?: OpenGraph;
    manifest?: Webmanifest;
  }
  export interface ObjectSchema {
    name: string;
    title: string;
    type?: string;
    options?: {};
  }
  export interface Field extends ObjectSchema {
    fieldset?: string;
  }
  export interface Webmanifest extends ObjectSchema {
    type: string;
    fieldsets?: ObjectSchema[];
    fields: Field[];
  }
  export interface OpenGraph {
    basic: {
      title: string;
      type: string;
      image: URL["href"];
      url: URL["href"];
    };
    optional?: {
      site_name?: string;
      description?: string;
      audio?: string;
      determiner?: string;
      locale?: string;
      localeAlternate?: Array<string>;
      siteName?: string;
      video?: string;
    };
  }
  interface Locale {
    title: string;
    value: string;
  }
  type DisplayMode = "browser" | "fullscreen" | "minimal-ui" | "standalone";
  export interface Locales extends Array<Locale> {}
  export interface DisplayModes extends Array<DisplayMode> {}
}