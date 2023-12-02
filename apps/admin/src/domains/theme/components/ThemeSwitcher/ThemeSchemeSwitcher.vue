<script setup lang="ts">
  const theme = useTheme()

  const selectedColorScheme = theme.colorScheme
</script>

<template>
  <label for="color-scheme">
    <select
      data-test="color-scheme"
      v-model="selectedColorScheme"
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
</template>
