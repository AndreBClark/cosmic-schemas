import {defineType} from 'sanity'

import basic from './basic'
import optional from './optional'

const openGraph = defineType({
  name: 'openGraph',
  type: 'object',
  title: 'Social Share Details',
  fields: [...basic.fields, ...optional.fields],
})

export default openGraph
