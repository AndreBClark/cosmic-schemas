import type { StructureBuilder } from "sanity/desk"
function addSiteMeta(S: StructureBuilder) {
  return S
    .listItem().title('Settings')
      .child(
        S.document()
          .schemaType('siteMeta')
      )
}
export default { addSiteMeta };