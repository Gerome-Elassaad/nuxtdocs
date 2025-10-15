<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('landing').path('/').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: 'https://github.com/Gerome-Elassaad/codinit-app/blob/main/readme_assets/readme.png',
  twitterImage: 'https://codinit.dev/hero-image.webp'
})
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
    :prose="false"
  />
</template>
