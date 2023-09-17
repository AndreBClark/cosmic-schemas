import {defineType} from 'sanity'

import {LOCALES} from '../../utils'

const Locales = defineType({
  name: 'locale',
  type: 'string',
  title: 'Language',
  description:
    "used for informing the browser the site's language. Should be a valid bcp47 language code like en, 'en-US', 'no' or 'nb-NO'",
  options: {
    list: LOCALES,
  },
  initialValue: LOCALES[0].value,
})
export default Locales
