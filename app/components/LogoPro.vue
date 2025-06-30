<script setup lang="ts">
const colorMode = useColorMode()

const logo = computed(() => {
  if (colorMode.value === 'dark') {
    return '/landing/light/logo.png'
  }
  return '/landing/dark/logo-dark.png'
})
</script>

<template>
  <ClientOnly>
    <NuxtImg
      :src="logo"
      alt="Logo"
    />
  </ClientOnly>
</template>
