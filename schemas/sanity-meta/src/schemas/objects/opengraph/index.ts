import basic from "./basic";
import optional from "./optional";

export default {
  name: "openGraph",
  type: "object",
  title: "Social Share Details",
  fields: [
    ...basic.fields,
    ...optional.fields
  ]
}
