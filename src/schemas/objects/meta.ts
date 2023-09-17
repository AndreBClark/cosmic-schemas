import {defineType} from 'sanity'

const Meta = defineType({
  type: 'object',
  name: 'meta',
  title: 'Meta',
  fields: [
    {
      type: 'string',
      title: 'Title',
      name: 'title',
      group: ['meta'],
    },
    {
      type: 'text',
      name: 'description',
      title: 'Describe This',
      group: ['meta'],
    },
  ],
})
export default Meta
