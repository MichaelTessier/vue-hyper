<script setup lang="ts">
  const { layout, setLayout, availableLayout } = useLayout()

  const selectedLayoutTheme = layout
</script>

<template>
  <label for="layout-switcher">
    <select
      data-test="layout-switcher"
      v-model="selectedLayoutTheme"
      id="layout-switcher"
      @change="setLayout(selectedLayoutTheme)"
    >
      <option
        :value="layoutTheme"
        v-for="(layoutTheme, index) in availableLayout"
        :key="index"
      >
        {{ layoutTheme }}
      </option>
    </select>
  </label>
</template>
