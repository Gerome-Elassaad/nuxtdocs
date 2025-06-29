import { stringify } from 'minimark/stringify'
import { withLeadingSlash } from 'ufo'

export default eventHandler(async (event) => {
  const slug = getRouterParams(event)['slug.md']
  if (!slug?.endsWith('.md')) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
  }

  const path = withLeadingSlash(slug.replace('.md', '')) as `/${string}`
  const page = await queryContent(path).findOne()
  if (!page) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
  }

  // Add title and description to the top of the page if missing
  if (page.body.value[0]?.[0] !== 'h1') {
    page.body.value.unshift(['blockquote', {}, page.description])
    page.body.value.unshift(['h1', {}, page.title])
  }

  setHeader(event, 'Content-Type', 'text/markdown; charset=utf-8')
  return stringify({ ...page.body, type: 'minimark' }, { format: 'markdown/html' })
})

interface Page {
  title?: string
  description?: string
  body?: {
    children?: [string, Record<string, unknown>, ...unknown[]][]
  }
}

function queryContent(path: string) {
  return {
    async findOne() {
      try {
        const content = await $fetch(`/api/_content/query`, {
          method: 'POST',
          body: {
            where: { _path: path },
            limit: 1
          }
        }) as Page[]

        if (!content || content.length === 0) {
          return null
        }

        const page = content[0]
        if (!page) {
          return null
        }

        return {
          title: page.title || 'Untitled',
          description: page.description || '',
          body: {
            value: page.body?.children || [],
            type: 'minimark'
          }
        }
      } catch {
        return null
      }
    }
  }
}
