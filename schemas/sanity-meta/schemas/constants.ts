export const LOCALES: Locales = [
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
export const DISPLAYMODES: DisplayModes =  [
  'browser',
  'fullscreen',
  'minimal-ui',
  'standalone',
]

interface Locale {
  title: string;
  value: string;
}
type DisplayMode = string;


// plural types
interface Locales extends Array<Locale> {};
interface DisplayModes extends Array<DisplayMode> {};