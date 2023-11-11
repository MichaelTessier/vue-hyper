<template>
  <div
    class="global-layout min-h-screen grid grid-cols-4"
    :class="[`layout-${theme.settings.layout}`]"
  >
    <header class="global-layout-header bg-primary">
      <slot name="header"></slot>
    </header>

    <aside class="global-layout-aside bg-secondary">
      <slot name="aside"></slot>
    </aside>

    <section class="global-layout-content bg-info">
      <slot name="content"></slot>
    </section>
  </div>
</template>

<script setup lang="ts">
  const theme = useTheme()
</script>

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
