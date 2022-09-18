const LOCALES: Locales = [
  {
    title: "American English",
    value: "en-US",
  },
  {
    title: "British English",
    value: "en-GB",
  },
  {
    title: "French",
    value: "fr-FR",
  },
];
const DISPLAYMODES: DisplayModes =  [
  'browser',
  'fullscreen',
  'minimal-ui',
  'standalone',
]
const OGTYPES = [
  "website",
  "article",
  "blog",
  "video",
  "image",
]

const CONSTANTS = { LOCALES, DISPLAYMODES, OGTYPES };
export { LOCALES, DISPLAYMODES, CONSTANTS, OGTYPES };
export default CONSTANTS;