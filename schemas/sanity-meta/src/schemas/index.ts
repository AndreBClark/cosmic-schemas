import Documents from "./documents";
import Objects from "./objects";
const metaSchemaTypes = [
  ...Object.values(Documents),
  ...Object.values(Objects)
]

export default metaSchemaTypes