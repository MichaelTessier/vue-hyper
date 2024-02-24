<script setup lang="ts">
  const { layout, setLayout, availableLayout } = useLayout()

  const selectedLayoutTheme = layout
</script>

<template>
  <label for="layout-theme">
    <select
      data-test="layout-theme"
      v-model="selectedLayoutTheme"
      id="layout-theme"
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
