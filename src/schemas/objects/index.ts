import locale from './locale'
import openGraph from './opengraph/index'
import manifest from './manifest'
import meta from './meta'
import siteSettings from './siteSettings'
import googleAnalytics from './googleAnalytics'

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

export {openGraph, manifest, meta, siteSettings, locale, googleAnalytics}
export default Objects
