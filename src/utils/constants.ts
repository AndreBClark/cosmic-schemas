const LOCALES = [
  {
    title: 'American English',
    value: 'en-US',
  },
  {
    title: 'British English',
    value: 'en-GB',
  },
  {
    title: 'French',
    value: 'fr-FR',
  },
]
const DISPLAYMODES = ['browser', 'fullscreen', 'minimal-ui', 'standalone']
const OGTYPES = ['website', 'article', 'blog', 'video', 'image']

const CONSTANTS = {LOCALES, DISPLAYMODES, OGTYPES}
export default CONSTANTS

export {CONSTANTS, DISPLAYMODES, LOCALES, OGTYPES}
