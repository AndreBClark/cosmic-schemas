import { LOCALES } from "../../utils/constants";

export default<Schema.Field> {
  type: "string",
  name: "locale",
  title: "Language",
  description:
    "used for informing the browser the site's language. Should be a valid bcp47 language code like en, 'en-US', 'no' or 'nb-NO'",
  options: {
    list: LOCALES
  },
  initialValue: LOCALES[0].value,
  group: ['meta', 'og'],
}