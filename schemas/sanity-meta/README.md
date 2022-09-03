<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<!-- <br />
<div align="center">
  <a href="https://github.com/AndreBClark/cosmic-schemas">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
-->

<h3 align="center">Meta Sanity Schema Types</h3>
  <p align="center">
    Sanity Schema Types for managing HTML meta tags on  your website
    <br />
    <a href="https://github.com/AndreBClark/cosmic-schemas"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/AndreBClark/cosmic-schemas">View Demo</a>
    ·
    <a href="https://github.com/AndreBClark/cosmic-schemas/issues">Report Bug</a>
    ·
    <a href="https://github.com/AndreBClark/cosmic-schemas/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol></ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

<!-- Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `AndreBClark`, `cosmic-schemas`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `Sanity Schema Types for managing HTML meta tags on  your website` -->
schemas for websites using a sanity studio

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With
* [Sanity](https://www.sanity.io/docs/overview-introduction) Headless Content Management Platform (CMS);
* [TypeScript](https://www.typescriptlang.org/) JavaScript with syntax for types.
<!-- * [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]
* [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url] -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
start a Sanity Project and set up your initial schema and frontend. follow guides on [Sanity Docs](https://www.sanity.io/docs/overview-introduction). You can use any frontend framework you want. I use [AstroJS](https://docs.astro.build/en/getting-started/)

### Prerequisites

you need to have [NodeJS](https://nodejs.org/en/download/), and the JS package manager of your choice like [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), [pnpm](https://pnpm.io/installation) or [yarn](https://classic.yarnpkg.com/lang/en/docs/install/) installed.

* @sanity or sanity@dev-preview
* sanity/client to query the site document;

### Installation

1. navigate to your repository and folder where your Sanity Studio is setup

1. install the package using your package manager of choice

```bash
npm i --save-dev sanity-meta
```

```bash
pnpm add -D sanity-meta
```

```bash
yarn add sanity-meta
```

1. import the schemaTypes into your Sanity schemas array `./schemas/index` see <a href="#usage">Usage</a> for specific steps

1. create a document with type `siteMeta`,


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

Add the document type import it into your schematypes array

```ts
// ./studio/schemas/index.ts
import Documents from "./documents";
import Objects from "./objects";
import metaSchemaTypes from "sanity-meta;

export const schemaTypes = [
  ...Object.values(Documents),
  ...Object.values(Objects),
  ...metaSchemaTypes // spread the array here
]
```

Or you can add individual objects into the fields array to your Sanity documents and objects

```ts
// ./studio/schemas/documents/seo.ts
import { openGraph } from "sanity-meta";

export default {
  type: "document",
  name: "SEO",
  fields: [
    ...openGraph.fields, // include all openGraph fields
    ...locale, // locale is a single field
    {
      type: "string",
      name: "title"
    }
  ]
}

```

after Creating your siteMeta Document you can then query the document with the Sanity client if you have your client configured for your frontend

```tsx
import React from "react";
import client from "./client"
import { getSiteMeta } from "sanity-meta"

const SITE = await getSiteMeta(client);

export default SiteTitle = () => {
  return (
    <h1>
      {site.title}
    </h1>
  )
}

```

<!-- _For more examples, please refer to the [Documentation](https://example.com)_ -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

* [ ] individual page and article meta/opengraph schema
<!-- - [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature -->

See the [open issues](https://github.com/AndreBClark/cosmic-schemas/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the ISC License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Andre Clark - andre@cosmicdivision.dev

Project Link: [https://github.com/AndreBClark/cosmic-schemas](https://github.com/AndreBClark/cosmic-schemas)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Astro SEO](https://github.com/jonasmerlin/astro-seo#open-graph) documented a helpful typescript interface for opengraph data
<!-- * []()
* []() -->

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- [contributors-shield]: https://img.shields.io/github/contributors/AndreBClark/cosmic-schemas.svg?style=for-the-badge
[contributors-url]: https://github.com/AndreBClark/cosmic-schemas/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AndreBClark/cosmic-schemas.svg?style=for-the-badge
[forks-url]: https://github.com/AndreBClark/cosmic-schemas/network/members
[stars-shield]: https://img.shields.io/github/stars/AndreBClark/cosmic-schemas.svg?style=for-the-badge
[stars-url]: https://github.com/AndreBClark/cosmic-schemas/stargazers
[issues-shield]: https://img.shields.io/github/issues/AndreBClark/cosmic-schemas.svg?style=for-the-badge
[issues-url]: https://github.com/AndreBClark/cosmic-schemas/issues
[license-shield]: https://img.shields.io/github/license/AndreBClark/cosmic-schemas.svg?style=for-the-badge
[license-url]: https://github.com/AndreBClark/cosmic-schemas/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com -->
