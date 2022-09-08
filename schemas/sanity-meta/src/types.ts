import type { PicoSanity } from "picosanity";
import type { SanityClient } from "@sanity/client";
declare global {
    export namespace Query {
        interface Client<T> {
            [key: string]: (arg0: Query) => Promise<T>;
        }
        type SanityClientLike<T> = (SanityClient | PicoSanity) & Client<T>;
        interface Meta {
            title: string;
            description?: string;
            lang?: string;
        }
        interface Site extends Meta {
            openGraph?: OpenGraph;
            manifest?: Webmanifest;
        }
        interface Query extends String {
        }
        interface OpenGraph {
            basic: {
                title: string;
                type: string;
                image: string;
                url: URL["href"];
            };
            optional?: {
                audio?: URL["href"];
                description?: string;
                determiner?: string;
                locale?: string;
                localeAlternate?: Array<string>;
                siteName?: string;
                video?: URL["href"];
            };
        }
        interface ObjectSchema {
            name: string;
            title: string;
            type?: string;
            options?: {};
        }
        interface Field extends ObjectSchema {
            fieldset?: string;
        }
        interface Webmanifest extends ObjectSchema {
            type: string;
            fieldsets?: ObjectSchema[];
            fields: Field[];
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
        openGraph?: OpenGraph;
        manifest?: Schema.Webmanifest;
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
    export interface Locales extends Array<Locale> {
    }
    export interface DisplayModes extends Array<DisplayMode> {
    }
}
