export default defineAppConfig({
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'zinc'
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
  }
})
