import basic from "./basic";
import optional from "./optional";

export default<Schema.Object> {
  name: "openGraph",
  type: "object",
  title: "Social Share Details",
  fields: [
    ...basic.fields,
    ...optional.fields
  ]
}
