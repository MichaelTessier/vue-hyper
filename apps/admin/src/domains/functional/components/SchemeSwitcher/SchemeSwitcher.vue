<script setup lang="ts">
  import { useTheme } from 'vue-hyper-components'
  const theme = useTheme()

  const selectedColorScheme = theme.colorScheme
</script>

<template>
  <label for="scheme-switcher">
    <select
      data-test="scheme-switcher"
      v-model="selectedColorScheme"
      id="scheme-switcher"
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
