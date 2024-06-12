import googleAnalytics from './googleAnalytics'
import locale from './locale'
import manifest from './manifest'
import meta from './meta'
import openGraph from './opengraph/index'
import siteSettings from './siteSettings'

const Objects = {
  openGraph,
  manifest,
  meta,
  siteSettings,
  googleAnalytics,
}

export const Fields = {
  locale,
}

export {googleAnalytics, locale, manifest, meta, openGraph, siteSettings}
export default Objects
