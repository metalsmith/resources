# Metalsmith bare starter

This bare Metalsmith starter provides a basic HTML/CSS/JS setup for a metalsmith web project, with [nunjucks](https://mozilla.github.io/nunjucks/) for templating.
It shows templating basics including baseuri handling and how to access and use `metalsmith.metadata()` and file data.

To get started run:

```sh
npm install
npm start # dev-server with live-reload at localhost:3000
```

All the commands:

- `npm start` will build a NODE_ENV=development build & start browser-sync with live-reload
- `npm run dev` will build a NODE_ENV=development build
- `npm run build` will build a NODE_ENV=production build
- `npm run serve` will serve the build at `./build`
- `npm run watch` will rebuild without triggering browser live-reload

You can store:

- layouts and partials at `src/layouts`
- structured data at `src/data`
- scripts, styles, fonts and media at `src/assets`
- your local metalsmith plugins at `lib/metalsmith`

5 essential plugins are included:

- [@metalsmith/default-values](https://github.com/metalsmith/default-values) to augment files on-the-fly at build time
- [@metalsmith/markdown](https://github.com/metalsmith/markdown) to render markdown
- [@metalsmith/layouts](https://github.com/metalsmith/layouts) to wrap contents in templates
- [@metalsmith/permalinks](https://github.com/metalsmith/permalinks) to assign a permalink to each file and move them around where desired
- [@metalsmith/js-bundle](https://github.com/metalsmith/js-bundle) to compile client-side JS with ESbuild and access to build-time environment variables

The starter demonstrates:

- optimal structure of a metalsmith build file
- front-matter usage and excerpts
- using metadata in layouts
- baseuri & permalink handling, markdown & navigation rendering
- creating your own local plugin
- accessing the metalsmith environment in JS

[License](https://github.com/metalsmith/starters)
