import {defineField, defineType} from 'sanity'

import locale from '../locale'

export default defineType({
  name: 'optional',
  type: 'object',
  title: 'Optional Social Share Info',
  fields: [
    {
      type: 'string',
      name: 'siteName',
      title: 'Site Name',
      group: ['og', 'meta'],
    },
    {
      type: 'text',
      name: 'ogDescription',
      title: 'Social Share Description',
      group: ['og', 'meta'],
    },
    defineField(locale),
  ],
})
