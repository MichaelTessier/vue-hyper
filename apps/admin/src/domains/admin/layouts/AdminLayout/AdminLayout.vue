<script setup lang="ts">
  const { settings, isModernLayout, isCompactLayout } = useLayout()
</script>

<template>
  <div
    class="admin-layout min-h-screen grid grid-cols-4"
    :class="[`layout-${settings.layout}`]"
  >
    <div class="admin-layout-header">
      <slot name="header"></slot>
    </div>

    <div
      class="admin-layout-aside"
      :class="{
        'm-5': isModernLayout,
      }"
    >
      <slot name="aside"></slot>
    </div>

    <section class="admin-layout-content flex items-center justify-center">
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
  .admin-layout,
  .admin-layout.layout-classic {
    grid:
      'aside header header' auto
      'aside content content' 1fr
      'aside content content' auto
      / auto 1fr auto;
  }

  .admin-layout.layout-compact {
    grid:
      'header header header' auto
      'aside aside aside' auto
      'content content content' 1fr
      / auto 1fr auto;
  }

  .admin-layout.layout-modern {
    grid:
      'header header header' auto
      'aside content content' auto
      'aside content content' 1fr
      / auto 1fr auto;
  }

  .admin-layout-header {
    grid-area: header;
  }

  .admin-layout-aside {
    grid-area: aside;
  }

  .admin-layout-content {
    grid-area: content;
  }
</style>
