import locale from '../locale';
export default {
  name: "optional",
  fields: [
    {
      type: 'string',
      name: 'siteName',
      title: 'Site Name',
      group: ['og', 'meta'],
    },
    {
      type: "text",
      name: "description",
      title: "Social Share Description",
      group: ['og', 'meta']
    },
  locale
  ]
}