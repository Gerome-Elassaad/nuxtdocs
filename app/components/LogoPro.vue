<template>
  <NuxtImg
    :key="mounted ? $colorMode.value : 'initial'"
    :src="logoSrcToRender"
    alt="Logo"
  />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const { $colorMode } = useNuxtApp()
const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})

const logoSrcToRender = computed(() => {
  if (!mounted.value) {
    return '/logo.png'
  }
  return $colorMode.value === 'dark' ? '/logo.png' : '/logo-dark.png'
})
</script>
