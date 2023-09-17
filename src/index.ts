import { definePlugin } from 'sanity';

import metaSchemaTypes from './schemas';

interface siteMetaConfig {
  /* nothing here yet */
}

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {siteMeta} from 'sanity-plugin-sitemeta'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [siteMeta()],
 * })
 * ```
 */
export const SiteMeta = definePlugin<siteMetaConfig | void>((config = {}) => {
  // eslint-disable-next-line no-console
  return {
    name: 'sanity-plugin-sitemeta',
    schema: {
      types: metaSchemaTypes,
    },
  }
})
