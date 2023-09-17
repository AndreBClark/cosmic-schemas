import { defineType } from 'sanity';

import {
  googleAnalytics,
  meta,
  openGraph,
  siteSettings,
} from '../objects/index';

const SiteMeta = defineType({
  type: "document",
  name: "siteMeta",
  title: "Site Configuration",
  fieldsets: [
    {
      name: "google",
      title: "Google Analytics",
      hidden: ({document}) => !document?.isGoogleAnalyticsEnabled,
    },
  ],
  groups: [
    {
      name: "meta",
      title: "Site Info",
      default: true,
    },
    {
      name: "og",
      title: "Social Share Info",
    },
    {
      name: "manifest",
      title: "Web App Settings",
      hidden: ({document})=> !document?.isPwa,
    },
    {
      name: "google",
      title: "Google Config",
      hidden: ({document}) => !document?.isGoogleAnalyticsEnabled,
    },
  ],
  fields: [
    ...meta.fields,
    ...siteSettings.fields,
    ...openGraph.fields,
    ...googleAnalytics.fields,
    {
      type: "manifest",
      title: "Web App Features",
      name: "manifest",
      group: "manifest",
    },
  ],
});

export default SiteMeta;
