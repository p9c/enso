const modifyHtml = (html) => {
  // Add amp-custom tag to added CSS
  html = html.replace(/<style data-vue-ssr/g, '<style amp-custom data-vue-ssr')
  // Remove every script tag from generated HTML
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  // Add AMP script before </head>
  const ampScript = '<script async src="https://cdn.ampproject.org/v0.js"></script>'

const ampsw = `<script async custom-element="amp-install-serviceworker" src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js"></script>`
const amplivelist = `<script async custom-element="amp-live-list" src="https://cdn.ampproject.org/v0/amp-live-list-0.1.js"></script>`
const amplist = `<script async custom-element="amp-list" src="https://cdn.ampproject.org/v0/amp-list-0.1.js"></script>`
const ampmustache = `<script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"></script>`
const ampform = `<script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>`
const ampsidebar = `<script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>`
const ampbind = `<script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"></script>`
const amplightbox = `<script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>`
const ampselector = `<script async custom-element="amp-selector" src="https://cdn.ampproject.org/v0/amp-selector-0.1.js"></script>`
const ampfittext = `<script async custom-element="amp-fit-text" src="https://cdn.ampproject.org/v0/amp-fit-text-0.1.js"></script>`
const ampiframe = `<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>`
const ampaccordion = `<script async custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"></script>`

html = html.replace('</head>', ampScript + amplivelist+ amplist +ampmustache + ampform +ampsidebar +ampbind +amplightbox +ampselector +ampfittext +ampiframe +ampaccordion +'</head>')
  return html
}



export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,minimum-scale=1' }
    ],
    link: [
      { rel: 'canonical', href: '/' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Ubuntu' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Abel' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Vollkorn' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Vollkorn+SC' }
    ]
  },
  env: {
    HOST_URL: process.env.HOST_URL || 'http://com-http.us/'
  },
  //css: ['~/assets/main.css'],
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    //'bulma',
    // CSS file in the project
    '@/assets/css/main.css',
    //'@/assets/css/grid.css',
    //'@/assets/css/typo.css',
    //'@/assets/css/btn.css',
    //'@/assets/css/explorer.css',
    // SCSS file in the project
    //'@/assets/main.scss'
  ],
  loading: false, // Disable loading bar since AMP will not generate a dynamic page
  render: {
    // Disable resourceHints since we don't load any scripts for AMP
    resourceHints: false
  },
  hooks: {
    // This hook is called before generatic static html files for SPA mode
    'generate:page': (page) => {
      page.html = modifyHtml(page.html)
    },
    // This hook is called before rendering the html to the browser
    'render:route': (url, page, { req, res }) => {
      page.html = modifyHtml(page.html)
    }
  }
}
