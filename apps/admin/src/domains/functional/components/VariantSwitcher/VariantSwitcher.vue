<script setup lang="ts">
  import { useTheme } from 'vue-hyper-components'
  const theme = useTheme()

  const selectedVariantTheme = theme.variantTheme
</script>

<template>
  <label for="variant-switcher">
    <select
      data-test="variant-switcher"
      v-model="selectedVariantTheme"
      id="variant-switcher"
      @change="theme.setVariantTheme(selectedVariantTheme)"
    >
      <option
        :value="variantTheme"
        v-for="(variantTheme, index) in theme.availableVariantTheme"
        :key="index"
      >
        {{ variantTheme }}
      </option>
    </select>
  </label>
</template>
