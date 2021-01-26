module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'cctv5',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'cctv5' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:"stylesheet",href:"//at.alicdn.com/t/font_2216947_iiywzarmdbk.css"}
    ],
    script:[  
    { src:"https://www.jq22.com/jquery/jquery-1.10.2.js" },
    
    ],
  },
  plugins: [
    { src:"~static/js/jquery-3.5.1.min.js",ssr:false },
    {src: "~static/js/ycl2.js",ssr:false},
    {src: "~static/js/ycl.js",ssr:false},
    {src: "~static/js/toPage.js",ssr:false},
    {src:  "~static/js/Pages.js",ssr:false},
    {src: '~plugins/ElementUI',ssr: true }
],
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/main.css'
  ],
  router: {
    routes: [
      { 
        name: 'shouye',
        path: '/',
        component: 'pages/shouye.vue'
      },
      {
        name: 'shouye6',
        path: '/jmb',
        component: 'pages/shouye6.vue'
      },
      {
        name: 'shouye5',
        path: '/sy5',
        component: 'pages/shouye5.vue'
      },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

