import {DISPLAYMODES} from './../constants'

export default {
  name: 'manifest',
  type: 'object',
  title: 'Progressive Web App Configuration',
  fields: [
    {
      type: 'string',
      name: 'short_name',
      title: 'Short Name',

    },
    {
      type: 'string',
      name: 'start_url',
      title: 'App Start URL',
      initialValue: "/"
    },

    {
      type: 'color',
      name: 'theme_color',
      title: 'Theme Color',

    },
    {type: 'color', name: 'background_color', title: 'Background Color'},

    {
      name: 'display',
      type: 'string',
      title: 'display',
      options: {
        list: DISPLAYMODES,
      },
    },
  ],
  initialValue: {
    display: DISPLAYMODES[0],
    start_url: '/',
  },
}

interface ObjectSchema {
  name: string
  title: string
  type?: string
  options?: {}
}
interface Field extends ObjectSchema {
  fieldset?: string
}

interface Manifest extends ObjectSchema {
  type: string
  fieldsets?: ObjectSchema[]
  fields: Field[]
}
