<script setup lang="ts">
  const { settings, isModernLayout, isCompactLayout } = useTheme()
</script>

<template>
  <div
    class="global-layout min-h-screen grid grid-cols-4"
    :class="[`layout-${settings.layout}`]"
  >
    <div class="global-layout-header">
      <slot name="header"></slot>
    </div>

    <div
      class="global-layout-aside"
      :class="{
        'm-5': isModernLayout,
      }"
    >
      <slot name="aside"></slot>
    </div>

    <section class="global-layout-content flex items-center justify-center">
      <div
        :class="{
          container: isCompactLayout,
        }"
      >
        <slot name="content"></slot>
      </div>
    </section>
  </div>
</template>

<style>
  .global-layout,
  .global-layout.layout-classic {
    grid:
      'aside header header' auto
      'aside content content' 1fr
      'aside content content' auto
      / auto 1fr auto;
  }

  .global-layout.layout-compact {
    grid:
      'header header header' auto
      'aside aside aside' auto
      'content content content' 1fr
      / auto 1fr auto;
  }

  .global-layout.layout-modern {
    grid:
      'header header header' auto
      'aside content content' auto
      'aside content content' 1fr
      / auto 1fr auto;
  }

  .global-layout-header {
    grid-area: header;
  }

  .global-layout-aside {
    grid-area: aside;
  }

  .global-layout-content {
    grid-area: content;
  }
</style>
