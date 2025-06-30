export default defineAppConfig({
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'zinc'
    },

    icons: {
      search: 'i-material-symbols-feature-search-outline-sharp',
      dark: 'Theme',
      light: 'i-material-symbols-sunny-outline',
      external: 'i-material-symbols-add-link-rounded',
      chevron: 'i-material-symbols-chevron-right-rounded',
      hash: 'i-material-symbols-anchor'
    }
  },

  socials: {
    x: 'https://x.com/codinit_dev',
    discord: 'https://discord.com/'
  },

  uiPro: {
    contentNavigation: {
      slots: {
        linkLeadingIcon: 'size-4 mr-1',
        listWithChildren: 'border-(--ui-bg-elevated)',
        linkTrailing: 'hidden'
      },
      variants: {
        active: {
          false: {
            link: 'text-toned hover:after:bg-accented'
          }
        }
      }
    },
    pageLinks: {
      slots: {
        linkLeadingIcon: 'size-4',
        linkLabelExternalIcon: 'size-2.5'
      }
    },
    pageHero: {
      slots: {
        title: 'font-semibold sm:text-6xl',
        container: '!pb-0'
      }
    },
    pageCard: {
      slots: {
        container: 'lg:flex min-w-0',
        wrapper: 'flex-none'
      }
    }
  },

  toc: {
    title: 'On this page',
    bottom: {
      title: 'Community',
      links: [{
        icon: 'i-lucide-book-open',
        label: 'Read our blog',
        to: 'https://codinit.dev/blog',
        target: '_blank'
      },
      {
        icon: 'i-lucide-credit-card',
        label: 'Go Pro',
        to: 'https://codinit.dev/#pricing',
        target: '_blank'
      }]
    }
  },

  header: {
    logo: {
      light: '/landing/light/logo.png',
      dark: '/landing/dark/logo-dark.pn',
      alt: 'Logo-Codinit'
    },

    title: '/landing/light/logo.png'
  },

  github: {
    url: 'https://github.com/Gerome-Elassaad/docs'
  },

  seo: {
    title: 'Docs',
    description: 'Learn how to build, deploy, and edit full-stack applications with CodinIT.dev. Open-source AI app builder powered by e2b.dev sandboxes.'
  }
})