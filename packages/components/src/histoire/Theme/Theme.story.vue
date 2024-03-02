<script lang="ts" setup>
  import { toggleDark } from 'histoire/client'
  import type { ColorScheme } from '@/lib/composables/useTheme/useTheme'
  import { useTheme } from '@/lib/composables/useTheme/useTheme'

  const {
    availableColorScheme,
    setColorScheme,
    availableVariantTheme,
    setVariantTheme,
    settings,
    isDark,
  } = useTheme()

  const colorSchemeOptions = availableColorScheme.map((key) => ({
    label: key,
    value: key,
  }))

  function updateColorScheme(value: ColorScheme) {
    setColorScheme(value)
    toggleDark(isDark.value)
  }

  const variantOptions = availableVariantTheme.map((key) => ({
    label: key,
    value: key,
  }))

  const state = reactive({
    colorScheme: settings.scheme,
    variant: settings.variant,
  })
</script>

<template>
  <Story
    title="Theme"
    group="settings"
  >
    <Variant title="Settings">
      <HstRadio
        title="Color Scheme"
        v-model="state.colorScheme"
        :options="colorSchemeOptions"
        @update:model-value="updateColorScheme"
      />

      <HstRadio
        title="Variant Theme"
        v-model="state.variant"
        :options="variantOptions"
        @update:model-value="setVariantTheme(state.variant)"
      />
    </Variant>
  </Story>
</template>
