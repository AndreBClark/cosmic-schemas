import {defineType} from 'sanity'

const GoogleAnalytics = defineType({
  name: 'google',
  title: 'Google Analytics Configuration',
  type: 'object',
  fields: [
    {
      type: 'string',
      name: 'analyticsId',
      title: 'Google Analytics ID',
      fieldset: 'google',
      group: ['meta', 'google'],
    },
    {
      type: 'string',
      name: 'SiteVerificationId',
      title: 'Google site Verification ID',
      fieldset: 'google',
      group: ['meta', 'google'],
    },
  ],
})
export default GoogleAnalytics
