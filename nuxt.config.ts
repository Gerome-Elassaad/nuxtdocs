// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // App

  // Modules
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms',
    '@nuxtjs/seo',
    '@nuxtjs/sitemap'
  ],

  // Devtools
  devtools: {
    enabled: true
  },
  app: {},

  // CSS
  css: ['~/assets/css/main.css'],

  // Site
  site: {
    url: 'https://docs.codinit.dev',
    name: 'Codinit.dev Documentation',
    description: 'The complete documentation for CodinIT, covering all features and functionalities.',
    defaultLocale: 'en'
  },

  // Content
  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    }
  },

  // Future
  future: {
    compatibilityVersion: 4
  },

  // Compatibility
  compatibilityDate: '2024-07-11',

  // Nitro
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  },

  // Vite
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules')) {
              return 'vendor'
            }
          }
        }
      }
    }
  },

  // ESLint
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  // Icon
  icon: {
    provider: 'iconify'
  },

  // LLMS
  llms: {
    domain: 'https://docs.codinit.dev/',
    title: 'Docs',
    description: 'Find out how to use CodinIT with our comprehensive documentation and guides for developers & users.',
    full: {
      title: 'Codinit.dev Documentation',
      description: 'The complete documentation for CodinIT, covering all features and functionalities.'
    },
    sections: [
      {
        title: 'Getting Started',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/getting-started%' }
        ]
      },
      {
        title: 'Integrations',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '%' }
        ]
      },
      {
        title: 'Models',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '%' }
        ]
      },
      {
        title: 'Providers',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '%' }
        ]
      }
    ]
  },

  // Sitemap
  sitemap: {
    sources: [
      '/api/sitemap'
    ]
  }
})
