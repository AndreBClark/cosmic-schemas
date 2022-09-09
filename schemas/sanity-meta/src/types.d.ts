import type { PicoSanity } from "picosanity";
import type { SanityClient } from "@sanity/client";
declare global {
    export namespace Query {
        type Mutation = "fetch" | "config" | string;
        interface Client<T> {
            [key: string]: (arg0: Request) => Promise<T>;
        }
        type SanityClientLike<T> = (SanityClient | PicoSanity) & Client<T>;
        interface Meta {
            title: string;
            description?: string;
            canonical: URL;
            lang?: string;
        }
        interface Site extends Meta {
            openGraph?: OpenGraph.API;
            manifest?: Webmanifest;
        }
        type Request = String;
        interface Field extends Schema.Object {
            fieldset?: string;
        }
        interface Webmanifest extends Schema.Object {
            type: string;
            fieldsets?: Schema.Object[];
            fields: Field[];
        }
    }
    namespace OpenGraph {
        interface Basic {
            title: string;
            type: string;
            image: URL["href"];
            url: URL["href"];
        }
        interface Optional {
            audio?: URL["href"];
            description?: string;
            determiner?: string;
            locale?: Locale["value"];
            localeAlternate?: Locales["values"];
            siteName?: string;
            video?: URL["href"];
        }
        interface Image {
            url: URL["href"];
            alt: string;
            height?: number;
            width?: number;
        }
        interface API {
            basic: Basic;
            optional?: Optional;
            image?: Image;
        }
        interface Flat extends Basic, Optional, Image {
        }
    }
    export namespace Schema {
        interface Object {
            name: string;
            title: string;
            type?: string;
            options?: {};
        }
        interface Field extends Object {
            fieldset?: string;
        }
        interface Webmanifest extends Object {
            type: string;
            fieldsets?: Object[];
            fields: Field[];
        }
    }
    interface Meta {
        title: string;
        description?: string;
        lang?: string;
    }
    export interface Site extends Meta {
        openGraph?: OpenGraph.API;
        manifest?: Schema.Webmanifest;
    }
    interface Locale {
        title: string;
        value: string | AngloFrench;
    }
    type AngloFrench = "en-us" | "en-gb" | "fr";
    type DisplayMode = "browser" | "fullscreen" | "minimal-ui" | "standalone";
    export interface Locales extends Array<Locale> {
    }
    export interface DisplayModes extends Array<DisplayMode> {
    }
}
