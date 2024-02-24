<script setup lang="ts">
  const { isCompactLayout, isModernLayout, isClassicLayout } = useLayout()
</script>

<template>
  <header
    :class="{
      'p-4 bg-white': isCompactLayout,
      'p-6 bg-white': isClassicLayout,
      'p-5 bg-dark': isModernLayout,
    }"
  >
    <div
      class="flex justify-between items-center"
      :class="{
        container: isCompactLayout,
      }"
    >
      <div>
        <Logo
          v-if="isCompactLayout || isModernLayout"
          :dark="isCompactLayout"
        />
      </div>
      <div>
        <ThemeSchemeSwitcher />
        <ThemeVariantSwitcher />
        <ThemeLayoutSwitcher />
        <LocaleSwitcher />
        <Logout />
      </div>
    </div>
  </header>
</template>
