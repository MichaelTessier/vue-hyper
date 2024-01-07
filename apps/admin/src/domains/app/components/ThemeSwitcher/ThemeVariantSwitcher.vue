<script setup lang="ts">
  const theme = useTheme()

  const selectedVariantTheme = theme.variantTheme
</script>

<template>
  <label for="variant-theme">
    <select
      data-test="variant-theme"
      v-model="selectedVariantTheme"
      id="variant-theme"
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
