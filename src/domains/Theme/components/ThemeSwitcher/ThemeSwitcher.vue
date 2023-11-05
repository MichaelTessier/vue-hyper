<template>
  <div>
    <label for="color-scheme">
      <select
        data-test="color-scheme"
        v-model="selectedColorScheme"
        name="color-scheme"
        id="color-scheme"
        @change="theme.setColorScheme(selectedColorScheme)"
      >
        <option
          :value="colorScheme"
          v-for="(colorScheme, index) in theme.availableColorScheme"
          :key="index"
        >
          {{ colorScheme }}
        </option>
      </select>
    </label>

    <label for="variant-theme">
      <select
        data-test="variant-theme"
        v-model="selectedVariantTheme"
        name="variant-theme"
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
  </div>
</template>

<script setup lang="ts">
  const theme = useTheme()

  const selectedColorScheme = theme.colorScheme
  const selectedVariantTheme = theme.variantTheme
</script>
