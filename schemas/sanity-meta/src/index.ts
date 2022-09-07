import metaSchemaTypes from "./schemas/index";
import Documents from "./schemas/documents/index";
import Objects from "./schemas/objects/index";
import Queries from "./queries/index";

export const { siteMeta } = Documents;
export const { openGraph, manifest, locale } = Objects;
export const { getSiteMeta } = Queries;

export default metaSchemaTypes;