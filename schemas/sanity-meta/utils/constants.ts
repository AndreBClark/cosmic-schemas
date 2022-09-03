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

const CONSTANTS = { LOCALES, DISPLAYMODES };
export { LOCALES, DISPLAYMODES }
export default CONSTANTS;