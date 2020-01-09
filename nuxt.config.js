import colors from 'vuetify/es5/util/colors'

export default {
  router: {
    middleware: "auth.guard",

    extendRoutes(routes, resolve) {

      routes.push({
        path: "/aluno/curso/:slug",
        component: resolve(__dirname, 'pages/student/course.vue')
      })

      routes.push({
        path: "*",
        component: resolve(__dirname, 'pages/public/404.vue')
      })

      routes.push({
        path: "", redirect: "/login"
      })
    },
  },

  env: {
    baseUrl: process.env.VUE_APP_BASE_URL || 'https://newschoolbrapi-dev.herokuapp.com/',
    credentials: {
      name: process.env.VUE_APP_CLIENT_CREDENTIAL_NAME || 'NEWSCHOOL@FRONT',
      secret: process.env.VUE_APP_CLIENT_CREDENTIAL_SECRET || 'NEWSCHOOL@FRONTSECRET',
      external:
      {
        name: process.env.VUE_APP_CLIENT_EXTERNAL_CREDENTIAL_NAME || 'NEWSCHOOL@EXTERNAL',
        secret: process.env.VUE_APP_CLIENT_EXTERNAL_CREDENTIAL_SECRET || 'NEWSCHOOL@EXTERNALSECRET',
      }
    },
    endpoints: {
      USER_ME: "api/v1/user/me",
      LOGIN: "oauth/token",
      SIGN_UP: "api/v1/user/student"
    },
    GATOKEN: process.env.GA_TOKEN
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + 'New School',
    title: 'New School',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Projeto New School' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,600,900&display=swap' }
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
    '~/css/main.scss',
    '~/css/animation.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/admin-components.js',
    { src: '~/plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/router-extras',

    ['@nuxtjs/router-extras', { /* module options */ }]

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true,
  },
  proxy: {
    '/api': 'http://localhost:3001'
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#6600cc',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: '#6600cc',
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
