import locale from "./locale";
import openGraph from "./opengraph/index";
import manifest from "./manifest";
import ogBasic from "./opengraph/basic";
import ogOptional from "./opengraph/optional";

const Objects = {
  openGraph,
  locale,
  manifest,
  ogBasic,
  ogOptional
};
export { openGraph, locale, manifest}
export default Objects;