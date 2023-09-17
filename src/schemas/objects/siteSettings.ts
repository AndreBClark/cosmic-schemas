import {defineType} from 'sanity'

const SiteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'object',
  fields: [
    {
      type: 'boolean',
      name: 'isPwa',
      title: 'should this site be installable like an app?',
      initialValue: false,
      group: ['meta', 'manifest'],
      options: {
        layout: 'checkbox',
      },
    },
    {
      type: 'boolean',
      name: 'isGoogleAnalyticsEnabled',
      title: 'Enable Google Analytics?',
      group: ['google', 'meta'],
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    },
  ],
})

export default SiteSettings
