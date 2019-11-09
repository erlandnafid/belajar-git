const colors = require('vuetify/es5/util/colors').default

module.exports = {
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-151893571-1'
    }]
  ],
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: 'BeliMobilOnline : Beli Mobil Online Mudah dan Proses Cepat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'BeliMobilOnline',
        name: 'BeliMobilOnline',
        content: 'BeliMobilOnline erlandnafidfriskiawan15101994'
      },
      { name: 'description', content: 'Diskon terbaik untuk mobil baru kamu hanya di BeliMobilOnline erlandnafidfriskiawan15101994' },
      { name: 'keyword', content: 'erlandnafidfriskiawan15101994, beli honda brio online, beli honda brio, beli brio online, beli honda brio jakarta' },
      { name: 'og:title', content: 'BeliMobilOnline : Beli Mobil Online Mudah dan Proses Cepat' },
      { name: 'og:type', content: 'Website' },
      { name: 'og:url', content: 'https://belimobilonline.netlify.com/' },
      { name: 'og:site_name', content: 'BeliMobilOnline' },
      // { name: 'Og:image', content: 'https://BeliMobilOnline.com/motor-baru/favicon.ico' },
      { name: 'Twitter:card', content: 'Summary' },
      { name: 'Twitter:title', content: 'BeliMobilOnline : Beli Mobil Online Mudah dan Proses Cepat' },
      { name: 'Twitter:site', content: '@BeliMobilOnline' },
      { name: 'Twitter:creator', content: '@BeliMobilOnline' },
      { name: 'Twitter:description', content: 'BeliMobilOnline : Beli Mobil Online Mudah dan Proses Cepat' },
      // { name: 'Twitter:image', content: 'https://BeliMobilOnline.com/motor-baru/favicon.ico' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    // theme: {
    //   dark: true,
    //   themes: {
    //     dark: {
    //       primary: colors.blue.darken2,
    //       accent: colors.grey.darken3,
    //       secondary: colors.amber.darken3,
    //       info: colors.teal.lighten1,
    //       warning: colors.amber.base,
    //       error: colors.deepOrange.accent4,
    //       success: colors.green.accent3
    //     }
    //   }
    // }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
