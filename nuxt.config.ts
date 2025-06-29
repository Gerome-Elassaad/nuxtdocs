import { extendViteConfig } from '@nuxt/kit'

// Flag enabled when developing docs theme
const dev = !!process.env.NUXT_DOCS_DEV

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/robots',
    'nuxt-og-image',
    'nuxt-llms',
    () => {
      // Update @nuxt/content optimizeDeps options
      extendViteConfig((config) => {
        config.optimizeDeps ||= {}
        config.optimizeDeps.include ||= []
        config.optimizeDeps.include.push('@nuxt/content > slugify')
        config.optimizeDeps.include = config.optimizeDeps.include
          .map(id => id.replace(/^@nuxt\/content > /, 'docus > @nuxt/content > '))
      })
    }
  ],
  devtools: {
    enabled: dev
  },
  css: ['../app/assets/css/main.css'],

  site: {
    url: 'https://docs.codinit.dev'
  },
  future: {
    compatibilityVersion: 4
  },
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
      failOnError: false,
      autoSubfolderIndex: false,
      ignore: ['/_ipx/**']
    }
  },
  icon: {
    provider: 'iconify'
  },
  llms: {
    domain: 'https://docs.codinit.dev',
    title: 'CodinIT',
    description: 'Learn how to build, deploy, and edit full-stack applications with CodinIT.dev. Open-source AI app builder powered by e2b.dev sandboxes.',
    full: {
      title: 'CodinIT',
      description: 'Learn how to build, deploy, and edit full-stack applications with CodinIT.dev. Open-source AI app builder powered by e2b.dev sandboxes.'
    }
  }
})
