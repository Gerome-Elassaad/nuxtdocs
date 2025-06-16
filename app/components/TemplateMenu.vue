<template>
  <UDropdownMenu
    v-slot="{ open }"
    :modal="false"
    :items="[{
      label: 'Home',
      to: 'https://codinit.dev'
    }, {
      label: 'Dashboard',
      to: 'https://codingit.vercel.app/'
    }, {
      label: 'Docs',
      to: 'https://docs.codinit.dev/',
      color: 'primary',
      checked: true,
      type: 'checkbox'
    }]"
    :ui="{ content: 'w-(--reka-dropdown-menu-trigger-width) min-w-0' }"
    size="xs"
  >
    <UButton
      label="Docs"
      variant="subtle"
      trailing-icon="i-lucide-chevron-down"
      size="xs"
      class="-mb-[6px] font-semibold rounded-full truncate"
      :class="[open && 'bg-primary/15']"
      :ui="{
        trailingIcon: ['transition-transform duration-200', open ? 'rotate-180' : undefined].filter(Boolean).join(' ')
      }"
    />
  </UDropdownMenu>
</template>
