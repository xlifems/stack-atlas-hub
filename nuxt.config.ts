export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  app: {
    head: {
      title: 'DevAtlas — Curated Developer Resources',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'DevAtlas is a curated directory of free developer tools, services, and resources organized by category and technology.',
        },
        { property: 'og:title', content: 'DevAtlas — Curated Developer Resources' },
        {
          property: 'og:description',
          content: 'Discover the best free developer tools and services, curated and organized for you.',
        },
        { name: 'theme-color', content: '#EEF2FF' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@300;400;500;600;700;800&display=swap',
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  typescript: {
    strict: true,
  },

  compatibilityDate: '2024-09-19',
})
