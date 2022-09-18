import metaSchemaTypes from "./schemas/index";
import Documents from "./schemas/documents/index";
import Objects, { Fields } from "./schemas/objects/index";
import Queries from "./queries/index";

export const { siteMeta } = Documents;
export const { openGraph, manifest, googleAnalytics, meta, siteSettings } = Objects;
export const { locale } = Fields;
export const { getSiteMeta } = Queries;

export default metaSchemaTypes;