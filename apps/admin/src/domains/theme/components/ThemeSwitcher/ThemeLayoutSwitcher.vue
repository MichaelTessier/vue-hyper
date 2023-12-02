<script setup lang="ts">
  const theme = useTheme()

  const selectedLayoutTheme = theme.layoutTheme
</script>

<template>
  <label for="layout-theme">
    <select
      data-test="layout-theme"
      v-model="selectedLayoutTheme"
      id="layout-theme"
      @change="theme.setLayoutTheme(selectedLayoutTheme)"
    >
      <option
        :value="layoutTheme"
        v-for="(layoutTheme, index) in theme.availableLayoutTheme"
        :key="index"
      >
        {{ layoutTheme }}
      </option>
    </select>
  </label>
</template>
