import { openGraph } from "../objects";

export default {
  type: "document",
  name: "siteMeta",
  title: "Site Configuration",
  fieldsets: [
    { name: "google", title: "Google Analytics" },
  ],
  groups: [
    {
      name: "meta",
      title: "Site Info",
      default: true
    },
    {
      name: "og",
      title: "Social Share Info",
    },
    {
      name: "manifest",
      title: "Web App Settings",
      hidden: ({ document }: {  document: {
        [key: string]: never;
      }}): boolean => !(document.isPwa)
    },
    {
      name: "google",
      title: "Google Config",
      hidden: ({ document }: {  document: {
        [key: string]: never;
      }}): boolean => !(document.isGoogleAnalyticsEnabled)
    },
  ],
  fields: [
    ...openGraph.fields,
    {
      type: "text",
      name: "description",
      title: "Describe This Site",
      group: ["meta", "og"]
    },
    {
      type: "boolean",
      name: "isPwa",
      title: "should this site be installable like an app?",
      group: [
        "meta", "manifest"
      ],
      initialValue: false,
      options: {
        layout: "checkbox"
      }
    },
    {
      type: "boolean",
      name: "isGoogleAnalyticsEnabled",
      title: "Enable Google Analytics?",
      group: ["meta", "google"],
      initialValue: false,
      options: {
        layout: "checkbox"
      }
    },
    {
      type: "string",
      name: "googleanalyticsId",
      title: "Google Analytics ID",
      fieldset: "google",
      group: ["meta", "google"],
    },
    {
      type: "string",
      name: "googleSiteVerificationId",
      title: "Google site Verification ID",
      fieldset: "google",
      group: ["meta", "google"],
    },
    {
      type: "manifest",
      title: "Web App Features",
      name: "manifest",
      group: "manifest"
    }
  ],
  initialValue: {
    isPwa: false,
    isGoogleAnalyticsEnabled: false,
  }
};